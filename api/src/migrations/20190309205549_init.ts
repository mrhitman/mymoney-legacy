import * as Knex from 'knex';

export const up = async (knex: Knex) => {
  await knex.schema.createTable('users', t => {
    t.increments('id')
      .unsigned()
      .primary();
    t.string('name');
    t.string('last_name');
    t.string('email', 64).notNullable();
    t.string('password', 64).notNullable();
    t.date('birtday');
  });
  await knex.schema.createTable('refresh_tokens', t => {
    t.increments('id')
      .unsigned()
      .primary();
    t.string('token').notNullable();
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .index()
      .references('id')
      .inTable('users');
    t.timestamp('created_at');
  });
  await knex.schema.createTable('currencies', t => {
    t.increments('id')
      .unsigned()
      .primary();
    t.string('name').notNullable();
    t.string('description');
    t.string('symbol', 3);
  });
  await knex.schema.createTable('categories', t => {
    t.increments('id')
      .unsigned()
      .primary();
    t.string('type').notNullable();
    t.string('name').notNullable();
    t.string('description');
    t.integer('parent_id').index();
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .index()
      .references('id')
      .inTable('users');
  });
  await knex.schema.createTable('goals', t => {
    t.increments('id')
      .unsigned()
      .primary();
    t.string('name').notNullable();
    t.integer('currency_id')
      .unsigned()
      .notNullable()
      .index()
      .references('id')
      .inTable('currencies');
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .index()
      .references('id')
      .inTable('users');
  });
  await knex.schema.createTable('wallets', t => {
    t.increments('id')
      .unsigned()
      .primary();
    t.string('name').notNullable();
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .index()
      .references('id')
      .inTable('users');
    t.integer('currency_id')
      .notNullable()
      .index();
  });
  await knex.schema.createTable('transfers', t => {
    t.increments('id')
      .unsigned()
      .primary();
    t.enum('type', ['income', 'outcome', 'transfer']);
    t.string('category');
    t.string('description');
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .index()
      .references('id')
      .inTable('users');
    t.integer('currency_id')
      .unsigned()
      .notNullable()
      .index()
      .references('id')
      .inTable('currencies');
    t.integer('amount')
      .unsigned()
      .notNullable()
      .defaultTo(0);
    t.integer('to_wallet_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('wallets');
    t.integer('from_wallet_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('wallets');
    t.date('date');
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('refresh_tokens');
  await knex.schema.dropTable('currencies');
  await knex.schema.dropTable('categories');
  await knex.schema.dropTable('goals');
  await knex.schema.dropTable('wallets');
  await knex.schema.dropTable('transfers');
};
