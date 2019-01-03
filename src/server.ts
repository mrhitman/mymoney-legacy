import * as bodyparser from "koa-bodyparser";
import * as cors from "koa-cors";
import * as dotenv from "dotenv";
import * as helmet from "koa-helmet";
import * as Koa from "koa";
import * as logger from "koa-morgan";
import db from "./services/db";
import errorHandler from "./middlewares/error-handler";
import userRouter from "./routers/user";

const createApp = () => {
  db.sync({ alter: true });
  const app = new Koa();
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser());
  app.use(logger("tiny"));
  app.use(userRouter.routes());
  app.use(errorHandler);
  return app;
};

if (!module.parent) {
  dotenv.config();
  const app = createApp();
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Server up on port:${port}`));
}
