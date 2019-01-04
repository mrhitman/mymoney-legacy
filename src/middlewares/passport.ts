import * as passport from 'koa-passport';
import User from '../models/user';
import { ExtractJwt, Strategy } from 'passport-jwt';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SALT || "fakefakefakfakfakfakfakfakeeeeee"
};

export default passport.use(
  new Strategy(opts, async (payload, done) => {
    const user = await User.findById(payload.id);
    return user ? done(null, user) : done(null, false);
  })
);
