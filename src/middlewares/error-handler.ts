import { Context } from 'koa';

export default async (ctx: Context, next) => {
  try {
    next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
};
