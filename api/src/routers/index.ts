import * as Router from 'koa-router';
import auth from '../middlewares/auth';
import category from './category';
import currency from './currency';
import goal from './goal';
import user from './user';
import wallet from './wallet';

const router = new Router();

router.use(user.routes());
router.use('/currency', auth, currency.routes());
router.use('/category', auth, category.routes());
router.use('/wallet', auth, wallet.routes());
router.use('/goal', auth, goal.routes());

export default router;
