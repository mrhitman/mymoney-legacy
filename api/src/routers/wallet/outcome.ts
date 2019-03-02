import Transfer from '../../models/transfer';
import Wallet from '../../models/wallet';
import db from '../../services/db';
import { validate, joi } from '../../utils/validate';
import { transaction } from 'objection';

export default async ctx => {
  validate(ctx, {
    category: joi.string().required(),
    amount: joi.number().required()
  });

  const trx = await transaction.start(db);
  await Transfer.query(db).insert({
    ...ctx.request.body,
    type: 'outcome',
    user_id: ctx.state.user.id,
    to_wallet_id: ctx.request.params.id
  });

  const wallet = await Wallet.query(trx).findById(ctx.params.id);
  const amount = Math.min(ctx.request.body.amount, wallet.amount);

  await wallet.$query(trx).update({ amount });
  await trx.commit();

  ctx.body = wallet;
};
