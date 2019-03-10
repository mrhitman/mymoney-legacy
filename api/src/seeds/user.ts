import * as Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('users').del();
  await knex('users').insert([
    {
      name: 'TestUser',
      password: '$2a$10$Y3hwgSCiDTmUbPQXOia/w.z5sYSgFzC4EPbajdKe4CSVFQNyzUQzK',
      email: 'test@test.com'
    }
  ]);
};
