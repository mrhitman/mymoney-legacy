import Currency from "./currency";
import User from "./user";
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";

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

  @BelongsTo(() => Currency)
  currency: Currency;

  @Column
  amount: number;
}

export default Wallet;
