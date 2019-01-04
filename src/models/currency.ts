import { Column, Model, Table } from 'sequelize-typescript';

@Table
class Currency extends Model<Currency> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  symbol: string;
}

export default Currency;
