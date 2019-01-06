import Wallet from "../../models/wallet";

export default async ctx => {
  await Wallet.destroy({ where: { id: ctx.params.id } });
  ctx.status = 202;
};
