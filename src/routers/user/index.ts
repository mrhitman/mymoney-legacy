import * as Router from "koa-router";
import login from "./login";
import logout from "./logout";
import refresh from "./refresh";
import auth from "../../middlewares/auth";

const router = new Router();

router
  .get("/profile", auth, async ctx => {
    console.log(ctx);
    ctx.body = ctx.state.user;
  })
  .post("/login", login)
  .post("/logout", auth, logout)
  .post("/refresh", refresh)
  .post("/restore_password", () => {});

export default router;
