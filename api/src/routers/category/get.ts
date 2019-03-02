import { Context } from 'koa';
import Category from '../../models/category';

export default async (ctx: Context) => {
  const category = await Category.query().findById(ctx.params.id);
  if (category.user_id && category.user_id !== ctx.state.user.id) {
    ctx.throw(404);
  }
  if (category.user_id && category.user_id !== ctx.state.user.id) {
    ctx.throw(403);
  }
  ctx.body = category;
};
