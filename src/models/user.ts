import Wallet from "./wallet";
import { Column, HasMany, Model, Table } from "sequelize-typescript";

@Table
class User extends Model<User> {
  @Column
  name: string;

  @Column
  last_name: string;

  @Column
  password: string;

  @Column
  birthday: Date;

  @Column
  email: string;

  @HasMany(() => Wallet)
  wallets: Wallet[];
}

export default User;
