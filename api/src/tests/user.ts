import { expect } from 'chai';
import * as agent from 'supertest-koa-agent';
import { createApp } from '../server';
import User from '../models/user';
import issueToken from './helpers/issue-token';

describe('User', () => {
  let app;
  let user: User;

  beforeEach(async () => {
    app = agent(createApp());
    user = await User.query().insert({
      name: 'test',
      email: 'test@test.com',
      password: '1'
    });
  });

  afterEach(async () => {
    user.$query().delete();
  });

  describe('login', () => {
    it('success', async () => {
      const id = user.dataValues.id;
      const token = issueToken({ id }, { expiresIn: '1h' });
      const response = await app
        .get('/profile')
        .set('Authorization', `Bearer ${token}`);
      expect(response.body.id).eq(id);
      expect(response.status).eq(200);
    });
    it('empty request');
    it('invalid request');
  });

  describe('logout', () => {
    it('success', () => {
      expect(true).eq(true);
    });
    it('empty request');
    it('invalid request');
  });

  describe('refresh', () => {
    it('success', () => {
      expect(true).eq(true);
    });
    it('empty request');
    it('invalid request');
  });
});
