import Category from '../../models/category';

export default async ctx => {
  const category = await Category.destroy({ where: { id: ctx.params.id } });
  if (!category) {
    ctx.throw(404, 'Category not found');
  }
  ctx.status = 202;
};
