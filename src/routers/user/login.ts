import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import * as uuid from 'uuid';
import RefreshToken from '../../models/refresh-token';
import User from '../../models/user';

export default async ctx => {
  const { email, password } = ctx.request.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    ctx.status = 403;
    return;
  }
  if (!bcrypt.compareSync(String(password), user.password)) {
    return;
  }
  const token = jwt.sign({ id: user.id }, process.env.SALT, {
    expiresIn: "1h"
  });
  const refreshToken = await RefreshToken.create({
    user_id: user.id,
    token: uuid(),
    created_at: moment().unix()
  });
  ctx.body = {
    user,
    token,
    refreshToken: refreshToken.token
  };
};
