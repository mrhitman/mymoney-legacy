import Transfer from "../../models/transfer";
import Wallet from "../../models/wallet";
import db from "../../services/db";
import { validate, joi } from "../../utils/validate";

export enum OperationType {
  income = "income",
  outcome = "outcome"
}

export default (type: OperationType) => {
  return async ctx => {
    validate(ctx, {
      id: joi.number().required(),
      category: joi.string().required(),
      amount: joi.number().required(),
      to_wallet_id: joi.number().required(),
      from_wallet_id: joi.number()
    });
    const trx = await db.transaction();
    await Transfer.create({ ...ctx.request.body, type }, { transaction: trx });

    const i = type === "income" ? "+" : "-";
    const wallet = await Wallet.update(
      { amount: db.literal(`amount ${i} ${ctx.request.body.amount}`) },
      { where: { id: ctx.params.id }, transaction: trx }
    );
    await trx.commit();
    ctx.body = wallet;
  };
};
