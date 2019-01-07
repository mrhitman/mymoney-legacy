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
  await Transfer.create(
    { ...ctx.request.body, type: "outcome", user_id: ctx.state.user.id },
    { transaction: trx }
  );

  const wallet = await Wallet.findById(ctx.params.id);

  let amount = ctx.request.body.amount;
  amount = amount > wallet.amount ? wallet.amount : amount;

  await wallet.update({ amount }, { transaction: trx });
  await trx.commit();

  ctx.body = wallet;
};
