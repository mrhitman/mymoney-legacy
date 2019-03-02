import * as Router from 'koa-router';
import Currency from '../../models/currency';
import { convert } from './../../services/privat24';

const router = new Router();

router
  .get('/', async ctx => {
    ctx.body = await Currency.query().execute();
  })
  .get('/privat24', async ctx => {
    const from = ctx.query.from;
    const to = ctx.query.to;
    const amount = ctx.query.amount;
    ctx.body = await convert(amount, from, to);
  });

export default router;
