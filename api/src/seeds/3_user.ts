import * as Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      name: 'TestUser',
      password: '$2a$10$Y3hwgSCiDTmUbPQXOia/w.z5sYSgFzC4EPbajdKe4CSVFQNyzUQzK', // hash for "1"
      email: 'test@test.com'
    }
  ]);
};
