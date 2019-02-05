import * as Router from "koa-router";
import auth from "../../middlewares/auth";
import create from "./create";
import login from "./login";
import logout from "./logout";
import refresh from "./refresh";

const router = new Router();

router
  .get("/profile", auth, async ctx => {
    ctx.body = ctx.state.user;
  })
  .post("/register", create)
  .post("/login", login)
  .post("/logout", auth, logout)
  .post("/refresh", refresh)
  .post("/restore_password", () => {});

export default router;
