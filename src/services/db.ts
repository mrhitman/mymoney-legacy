import Currency from "../models/currency";
import Goal from "../models/goal";
import Transfer from "../models/transfer";
import User from "../models/user";
import Wallet from "../models/wallet";
import { Sequelize } from "sequelize-typescript";
import RefreshToken from "../models/refresh-token";

const db = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
  logging: false,
  pool: {
    max: 12,
    min: 0
  }
});

db.addModels([__dirname + "../models"]);
db.addModels([User, Wallet, Transfer, Currency, Goal, RefreshToken]);

export default db;
