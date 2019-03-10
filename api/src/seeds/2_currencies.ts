import * as Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('currencies').del();
  await knex('currencies').insert([
    { id: 1, name: 'USD', symbol: '$' },
    { id: 2, name: 'UAH', symbol: '₴' },
    { id: 3, name: 'RUB', symbol: '₽' }
  ]);
};
