import * as Knex from 'knex';

export default Knex({
  client: 'postgres',
  debug: false,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT, 10),
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    charset: 'utf8'
  }
});