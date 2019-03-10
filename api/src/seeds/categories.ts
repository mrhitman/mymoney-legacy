import * as Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('categories').del();
  await knex('categories').insert([
    { id: 1, name: 'cash', type: 'wallet' },
    { id: 2, name: 'deposits', type: 'wallet' },
    { id: 3, name: 'credits', type: 'wallet' },
    { id: 4, name: 'other', type: 'wallet' },
    { id: 5, name: 'bank', type: 'wallet' },
    { id: 6, name: 'contragents', type: 'wallet' },
    { id: 7, name: 'property', type: 'wallet' },
    { id: 8, name: 'food', type: 'outcome' },
    { id: 9, name: 'clothes', type: 'outcome' },
    { id: 10, name: 'entertainment', type: 'outcome' },
    { id: 11, name: 'medicine', type: 'outcome' },
    { id: 12, name: 'salary', type: 'income' },
    { id: 13, name: 'dividends', type: 'income' }
  ]);
};
