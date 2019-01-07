import { Column, Model, Table, ForeignKey } from "sequelize-typescript";
import Wallet from "./wallet";

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

  @ForeignKey(() => Wallet)
  @Column
  to_wallet_id: number;

  @ForeignKey(() => Wallet)
  @Column
  from_wallet_id: number;

  Column;
  date: Date;
}

export default Transfer;
