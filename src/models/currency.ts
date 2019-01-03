import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table
class Currency extends Model<Currency> {
  @Column
  name: string;

  @Column
  description: string;

  @Column({ type: DataType.DOUBLE })
  rate: number;

  @Column
  symbol: string;
}

export default Currency;
