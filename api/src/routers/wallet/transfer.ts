import Transfer from '../../models/transfer';
import Wallet from '../../models/wallet';
import db from '../../services/db';
import { validate, joi } from '../../utils/validate';
import { transaction, raw } from 'objection';

export default async ctx => {
  validate(ctx, {
    id: joi.number().required(),
    category: joi.string().required(),
    amount: joi.number().required(),
    from_wallet_id: joi.number()
  });

  const trx = await transaction.start(db);
  const id = ctx.request.params.id;
  await Transfer.query(db).insert({
    ...ctx.request.body,
    type: 'transfer',
    user_id: ctx.state.user.id,
    to_wallet_id: id
  });

  const walletSrc = await Wallet.query(trx).findById(id);
  const walletDest = await Wallet.query(trx).findById(
    ctx.request.body.to_wallet_id
  );

  const amount = Math.min(ctx.request.body.amount, walletDest.amount);

  await walletSrc.$query(trx).update({ amount: raw(`amount + ${amount}`) });
  await walletDest.$query(trx).update({ amount: raw(`amount - ${amount}`) });
  await trx.commit();

  ctx.body = { walletSrc, walletDest };
};
