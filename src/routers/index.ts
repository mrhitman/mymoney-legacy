import * as Router from 'koa-router';
import currency from './currency';
import goal from './goal';
import user from './user';
import wallet from './wallet';

const router = new Router();

router.use(user.routes());
router.use("/currency", currency.routes());
router.use("/wallet", wallet.routes());
router.use("/goal", goal.routes());

export default router;
