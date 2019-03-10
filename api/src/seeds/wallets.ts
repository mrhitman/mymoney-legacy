import * as Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('wallets').del();
  await knex('wallets').insert([
    {
      name: 'Gold card',
      user_id: 1,
      currency_id: 2,
      amount: 500
    },
    {
      name: 'Credit card',
      user_id: 1,
      currency_id: 2,
      amount: 4500
    }
  ]);
};
