import * as Router from "koa-router";
import User from "../../models/user";

const router = new Router();

router
  .get("/profile", async ctx => {
    ctx.body = await User.findOne();
  })
  .post("/login", async ctx => {})
  .post("/logout", async ctx => {})
  .post("/refresh", async ctx => {})
  .post("/restore_password", () => {});

export default router;
