import { Context } from 'koa';
import Category from '../../models/category';
import { validate, joi } from '../../utils/validate';

export default async (ctx: Context) => {
  validate(ctx, {
    type: joi.string(),
    name: joi().string(),
    description: joi().string(),
    parent_id: joi().number(),
  });
  const category = await Category.query().findById(ctx.body.id);

  if (!category) {
    ctx.throw(404);
  }
  if (category.user_id && category.user_id !== ctx.state.user.id) {
    ctx.throw(403);
  }
  ctx.body = category;
};
