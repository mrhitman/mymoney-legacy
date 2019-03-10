import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa-cors';
import * as helmet from 'koa-helmet';
import * as logger from 'koa-morgan';
import errorHandler from './middlewares/error-handler';
import passport from './middlewares/passport';
import routes from './routers';

export const createApp = (syncDb = false) => {
  const app = new Koa();
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser());
  app.use(logger('tiny'));
  app.use(passport.initialize());
  app.use(routes.routes());
  app.use(errorHandler);
  return app;
};

if (!module.parent) {
  const app = createApp(true);
  const port = process.env.PORT || 3001;
  app.listen(port, () => global.console.log(`Server up on port:${port}`));
}
