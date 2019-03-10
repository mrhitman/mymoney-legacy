import * as Knex from 'knex';
import * as moment from 'moment';

export const seed = async (knex: Knex) => {
  await knex('goals').del();
  await knex('goals').insert([
    {
      name: 'MacBook Pro 2016',
      user_id: 1,
      amount: 2000,
      currency_id: 1,
      deadline: moment()
        .add('year')
        .endOf('year')
    }
  ]);
};
