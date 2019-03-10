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
      password: '$2a$10$Y3hwgSCiDTmUbPQXOia/w.z5sYSgFzC4EPbajdKe4CSVFQNyzUQzK'
    });
  });

  afterEach(async () => {
    user.$query().delete();
  });

  describe('login', () => {
    it('success', async () => {
      const response = await app.post('/login').send({
        email: 'test@test.com',
        password: '1'
      });

      expect(response.status).eq(200);
      expect(response.body).to.have.property('token');
      expect(response.body).to.have.property('refreshToken');
    });
  });

  describe('profile', () => {
    it('success', async () => {
      const id = user.id;
      const token = issueToken({ id }, { expiresIn: '1h' });
      const response = await app
        .get('/profile')
        .set('Authorization', `Bearer ${token}`);
      expect(response.body.id).eq(id);
      expect(response.status).eq(200);
    });
    it('no autorization', async () => {
      const response = await app.get('/profile');
      expect(response.status).eq(401);
    });
    it('invalid request');
  });

  describe('logout', () => {
    it('success', async () => {
      const id = user.id;
      const token = issueToken({ id }, { expiresIn: '1h' });
      const response = await app
        .post('/logout')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).eq(204);
    });
  });

  describe('refresh', () => {
    it('success', async () => {
      const response1 = await app.post('/login').send({
        email: 'test@test.com',
        password: '1'
      });

      const response2 = await app.post('/refresh').send({
        token: response1.body.refreshToken
      });

      expect(response2.status).eq(200);
      expect(response2.body).to.have.property('token');
      expect(response2.body).to.have.property('refreshToken');
    });
    it('second using token', async () => {
      const response1 = await app.post('/login').send({
        email: 'test@test.com',
        password: '1'
      });

      await app.post('/refresh').send({
        token: response1.body.refreshToken
      });

      const response2 = await app.post('/refresh').send({
        token: response1.body.refreshToken
      });
      expect(response2.status).eq(404);
    });
    it('invalid request');
  });
});
