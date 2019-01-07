import Transfer from "../../models/transfer";
import Wallet from "../../models/wallet";
import db from "../../services/db";
import { validate, joi } from "../../utils/validate";

export default async ctx => {
  validate(ctx, {
    id: joi.number().required(),
    category: joi.string().required(),
    amount: joi.number().required(),
    to_wallet_id: joi.number().required(),
    from_wallet_id: joi.number()
  });

  const trx = await db.transaction();
  await Transfer.create(
    { ...ctx.request.body, type: "income", user_id: ctx.user.id },
    { transaction: trx }
  );

  const wallet = await Wallet.update(
    { amount: db.literal(`amount + ${ctx.request.body.amount}`) },
    { where: { id: ctx.params.id }, transaction: trx }
  );
  await trx.commit();

  ctx.body = wallet;
};
