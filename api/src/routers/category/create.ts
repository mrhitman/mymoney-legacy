import Category from '../../models/category';
import { Context } from 'koa';
import { joi, validate } from '../../utils/validate';

export default async (ctx: Context) => {
  validate(ctx, {
    type: joi.string().required(),
    name: joi().string().required(),
    description: joi().string(),
    parent_id: joi().number(),
    user_id: joi().string().required(),
  });
  const category = await Category.query().insertAndFetch({
    ...ctx.request.body,
    user_id: ctx.state.user.id
  });
  if (!category) {
    ctx.throw(400, 'Invalid category');
  }
  if (category.user_id !== ctx.state.user.id) {
    ctx.throw(403);
  }
  ctx.body = category;
};
