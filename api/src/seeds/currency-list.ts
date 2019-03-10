import * as Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('currencies').del();
  await knex('currencies').insert([
    {
      name: 'USD',
      symbol: '$'
    },
    {
      name: 'UAH',
      symbol: '₴'
    },
    {
      name: 'RUB',
      symbol: '₽'
    }
  ]);
};
