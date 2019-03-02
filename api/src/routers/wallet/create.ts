import { Context } from 'koa';
import Wallet from '../../models/wallet';
import { joi, validate } from '../../utils/validate';

export default async (ctx: Context) => {
  validate(ctx, {
    name: joi.string().required(),
    amount: joi.number().default(0),
    currency_id: joi.number().required(),
    add_budget: joi.boolean().required(),
    show_panel: joi.boolean().required(),
    in_balance: joi.boolean().required()
  });
  ctx.body = await Wallet.query().insertAndFetch({
    ...ctx.request.body,
    user_id: ctx.state.user.id
  });
};
