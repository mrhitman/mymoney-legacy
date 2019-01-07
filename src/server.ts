import * as bodyparser from "koa-bodyparser";
import * as cors from "koa-cors";
import * as dotenv from "dotenv";
dotenv.config();
import * as helmet from "koa-helmet";
import * as Koa from "koa";
import * as logger from "koa-morgan";
import errorHandler from "./middlewares/error-handler";
import passport from "./middlewares/passport";
import routes from "./routers";
import db from "./services/db";

export const createApp = (syncDb = false) => {
  if (syncDb) {
    db.sync();
  }
  const app = new Koa();
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser());
  app.use(logger("tiny"));
  app.use(passport.initialize());
  app.use(routes.routes());
  app.use(errorHandler);
  return app;
};

if (!module.parent) {
  const app = createApp(process.env.ENV !== "dev");
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Server up on port:${port}`));
}
