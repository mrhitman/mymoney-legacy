import { transaction } from 'objection';
import Transfer from '../../models/transfer';
import Wallet from '../../models/wallet';
import db from '../../services/db';
import { joi, validate } from '../../utils/validate';

export default async ctx => {
  validate(ctx, {
    category: joi.string().required(),
    amount: joi.number().required()
  });

  const trx = await transaction.start(db);
  await Transfer.query(trx).insert({
    ...ctx.request.body,
    type: 'income',
    user_id: ctx.state.user.id,
    to_wallet_id: ctx.request.params.id
  });

  const wallet = await Wallet.query(trx)
    .update({ amount: db.raw(`amount + ${ctx.request.body.amount}`) })
    .findById(ctx.params.id);
  await trx.commit();

  ctx.body = wallet;
};
