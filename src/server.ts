import * as bodyparser from 'koa-bodyparser';
import * as cors from 'koa-cors';
import * as dotenv from 'dotenv';
import * as helmet from 'koa-helmet';
import * as Koa from 'koa';
import * as logger from 'koa-morgan';
import errorHandler from './middlewares/error-handler';
import userRouter from './routers/user';

const createApp = () => {
  const app = new Koa();
  app.use(helmet());
  app.use(cors());
  app.use(bodyparser());
  app.use(logger("tiny"));
  app.use(errorHandler);
  app.use(userRouter.routes());
  return app;
};

if (!module.parent) {
  dotenv.config();
  const app = createApp();
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Server up on port:${port}`));
}
