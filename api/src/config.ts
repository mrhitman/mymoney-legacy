import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

export const development = {
  client: 'postgres',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT, 10),
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    charset: 'utf8'
  },
  migrations: {
    directory: 'migrations'
  },
  seeds: {
    directory: 'seeds'
  }
};
