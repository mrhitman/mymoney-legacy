import { Table, Column, Model } from "sequelize-typescript";

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
}

export default User;
