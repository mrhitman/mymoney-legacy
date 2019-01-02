import { Sequelize } from "sequelize-typescript";

const db = new Sequelize({
  database: "test",
  dialect: "pg",
  username: "postgres",
  password: "1",
  storage: ":memory:",
  modelPaths: [`${__dirname}/models`]
});

export default db;