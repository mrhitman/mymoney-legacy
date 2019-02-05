import Transfer from "../../models/transfer";
import Wallet from "../../models/wallet";
import db from "../../services/db";
import { validate, joi } from "../../utils/validate";

export default async ctx => {
  validate(ctx, {
    id: joi.number().required(),
    category: joi.string().required(),
    amount: joi.number().required(),
    from_wallet_id: joi.number()
  });

  const trx = await db.transaction();
  const id = ctx.request.params.id;
  await Transfer.create(
    {
      ...ctx.request.body,
      type: "transfer",
      user_id: ctx.state.user.id,
      to_wallet_id: id
    },
    { transaction: trx }
  );

  const walletSrc = await Wallet.findById(id);
  const walletDest = await Wallet.findById(ctx.request.body.to_wallet_id);

  const amount = Math.min(ctx.request.body.amount, walletDest.amount);

  await walletSrc.update(
    { amount: db.literal(`amount + ${amount}`) },
    { transaction: trx }
  );

  await walletDest.update(
    { amount: db.literal(`amount - ${amount}`) },
    { transaction: trx }
  );

  await trx.commit();

  ctx.body = { walletSrc, walletDest };
};
