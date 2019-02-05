import Category from '../../models/category';

export default async ctx => {
  const category = (await Category.update(ctx.request.body, {
    where: { id: ctx.params.id }
  })) as any;
  if (!category) {
    ctx.throw(404);
  }
  if (category.user_id && category.user_id !== ctx.state.user.id) {
    ctx.throw(403);
  }
  ctx.body = category;
};
