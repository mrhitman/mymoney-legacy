import { sumBy } from 'lodash';
import Wallet from '../../models/wallet';

export default async ctx => {
  const wallets = await Wallet.query().where({ user_id: ctx.state.user.id });

  ctx.body = {
    total: sumBy(wallets, 'amount'),
    wallets
  };
};
