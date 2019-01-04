import RefreshToken from '../../models/refresh-token';

export default async ctx => {
  const user = ctx.state.user;
  await RefreshToken.destroy({ where: { user_id: user.id } });
  ctx.status = 204;
};
