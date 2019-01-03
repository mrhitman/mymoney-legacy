'use strict';

module.exports = {
  development: {
    dialect: "postgres",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "1",
    database: process.env.DB_NAME || "mymoney",
    host: process.env.DB_HOST || "localhost",
  },
  test: {
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  production: {
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  }
};