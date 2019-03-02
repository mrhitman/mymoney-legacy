import { Context } from 'koa';
import Category from '../../models/category';

export default async (ctx: Context) => {
  ctx.body = await Category.query()
    .where({
      user_id: null
    })
    .orWhere({
      user_id: ctx.user.id
    });
};
