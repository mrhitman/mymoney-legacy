import { validate, joi } from "../../utils/validate";
import Wallet from "../../models/wallet";

export default async ctx => {
  validate(ctx, {
    name: joi.string().required(),
    amount: joi.number().default(0),
    currency_id: joi.number().required()
  });
  ctx.body = await Wallet.create({ ...ctx.request.body, user_id: ctx.user.id });
};
