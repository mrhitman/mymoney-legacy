import * as Router from 'koa-router';
import auth from '../middlewares/auth';
import category from './category';
import currency from './currency';
import goal from './goal';
import user from './user';
import wallet from './wallet';

const router = new Router();

router.use(user.routes());
router.use('/currencies', auth, currency.routes());
router.use('/categories', auth, category.routes());
router.use('/wallets', auth, wallet.routes());
router.use('/goals', auth, goal.routes());

export default router;
