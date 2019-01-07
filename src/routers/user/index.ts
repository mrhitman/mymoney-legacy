import * as Router from "koa-router";
import login from "./login";
import logout from "./logout";
import refresh from "./refresh";
import User from "../../models/user";
import auth from "../../middlewares/auth";

const router = new Router();

router
  .get("/profile", auth, async ctx => {
    ctx.body = await User.findOne();
  })
  .post("/login", login)
  .post("/logout", auth, logout)
  .post("/refresh", refresh)
  .post("/restore_password", () => {});

export default router;
