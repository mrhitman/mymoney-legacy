import Category from '../../models/category';

export default async ctx => {
  const category = await Category.create({
    ...ctx.request.body,
    user_id: ctx.state.user.id
  });
  if (category.user_id && category.user_id !== ctx.state.user.id) {
    ctx.throw(403);
  }
  ctx.body = category;
};
