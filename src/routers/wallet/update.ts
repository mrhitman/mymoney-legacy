import { validate, joi } from "../../utils/validate";
import Wallet from "../../models/wallet";

export default async ctx => {
  validate(ctx, {
    id: joi.number().required(),
    name: joi.string(),
    amount: joi.number()
  });
  ctx.body = await Wallet.update(ctx.request.body, {
    where: { id: ctx.params.id }
  });
};
