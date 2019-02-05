import { Column, Model, Table } from 'sequelize-typescript';

@Table
class Category extends Model<Category> {
  @Column
  type: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  parent_id: number;

  @Column
  user_id: number;
}

export default Category;
