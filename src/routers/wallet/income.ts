import Transfer from "../../models/transfer";
import Wallet from "../../models/wallet";
import db from "../../services/db";
import { validate, joi } from "../../utils/validate";

export default async ctx => {
  validate(ctx, {
    category: joi.string().required(),
    amount: joi.number().required()
  });

  const trx = await db.transaction();
  await Transfer.create(
    {
      ...ctx.request.body,
      type: "income",
      user_id: ctx.state.user.id,
      to_wallet_id: ctx.request.params.id
    },
    { transaction: trx }
  );

  const wallet = await Wallet.update(
    { amount: db.literal(`amount + ${ctx.request.body.amount}`) },
    { where: { id: ctx.params.id }, transaction: trx }
  );
  await trx.commit();

  ctx.body = wallet;
};
