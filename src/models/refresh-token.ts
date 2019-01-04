import User from "./user";
import { Column, ForeignKey, Model, Table } from "sequelize-typescript";

@Table
class RefreshToken extends Model<RefreshToken> {
  @Column
  token: string;

  @ForeignKey(() => User)
  @Column
  user_id: number;
}

export default RefreshToken;
