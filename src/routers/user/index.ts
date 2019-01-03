import * as Router from 'koa-router';
import User from '../../models/user';

const router = new Router();
router.get("/user", async ctx => {
  ctx.body = await User.findOne();
});

router.post("/login", () => {});
router.post("/logout", () => {});
router.post("/refresh", () => {});
router.post("/restore_password", () => {});

export default router;
