import User from "./user";
import { Column, ForeignKey, Model, Table } from "sequelize-typescript";

@Table
class Goal extends Model<Goal> {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @Column
  amount: number;

  @Column
  deadline: Date;
}

export default Goal;
