import * as Router from 'koa-router';
import Wallet from '../../models/wallet';
import create from './create';
import destroy from './destroy';
import income from './income';
import outcome from './outcome';
import transfer from './transfer';
import update from './update';

const router = new Router();

router
  .get('/', async ctx => {
    ctx.body = await Wallet.query().where({ user_id: ctx.state.user.id });
  })
  .get('/:id', async ctx => {
    ctx.body = await Wallet.query()
      .findById(ctx.params.id)
      .where({ user_id: ctx.state.user.id });
  })
  .post('/', create)
  .post('/:id/income', income)
  .post('/:id/outcome', outcome)
  .post('/:id/transfer', transfer)
  .put('/:id', update)
  .del('/:id', destroy);

export default router;
