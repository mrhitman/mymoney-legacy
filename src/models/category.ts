import { Column, Model, Table, HasMany } from 'sequelize-typescript';

@Table
class Category extends Model<Category> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  parent_id: number;

  @HasMany(() => Category)
  sub_categories: Category[];
}

export default Category;
