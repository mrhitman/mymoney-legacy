import Currency from '../models/currency';
import Goal from '../models/goal';
import Transfer from '../models/transfer';
import User from '../models/user';
import Wallet from '../models/wallet';
import { Sequelize } from 'sequelize-typescript';

const db = new Sequelize({
  dialect: "postgres",
  database: "mymoney", // process.env.DB_NAME,
  username: "postgres", //process.env.DB_USER,
  host: "localhost", // process.env.DB_HOST,
  password: process.env.DB_PASSWORD || "1",
  port: Number(process.env.DB_PORT) || 5432,
  pool: {
    max: 12,
    min: 0
  }
});

db.addModels([__dirname + "..\\models"]);
db.addModels([User, Wallet, Transfer, Currency, Goal]);

export default db;
