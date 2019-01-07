import Wallet from "../../models/wallet";

export default async ctx => {
  await Wallet.destroy({
    where: { id: ctx.params.id, user_id: ctx.state.user.id }
  });
  ctx.status = 202;
};
