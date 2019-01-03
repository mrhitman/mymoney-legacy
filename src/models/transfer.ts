import { Column, Model, Table } from "sequelize-typescript";

enum TransferType {
  income = "income",
  outcome = "outcome",
  transfer = "transfer"
}

@Table
class Transfer extends Model<Transfer> {
  @Column
  type: TransferType;

  @Column
  category: string;

  @Column
  description: string;

  @Column
  user_id: number;

  @Column
  currency_id: number;

  @Column
  amount: number;

  Column;
  date: Date;
}

export default Transfer;
