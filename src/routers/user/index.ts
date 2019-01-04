import * as Router from 'koa-router';
import login from './login';
import logout from './logout';
import refresh from './refresh';
import User from '../../models/user';

const router = new Router();

router
  .get("/profile", async ctx => {
    ctx.body = await User.findOne();
  })
  .post("/login", login)
  .post("/logout", logout)
  .post("/refresh", refresh)
  .post("/restore_password", () => {});

export default router;
