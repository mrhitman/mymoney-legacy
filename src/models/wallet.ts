import { Column, Model, Table, ForeignKey } from "sequelize-typescript";
import User from "./user";
import Currency from "./currency";

@Table
class Wallet extends Model<Wallet> {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => Currency)
  @Column
  currency_id: number;

  @Column
  amount: number;
}

export default Wallet;
