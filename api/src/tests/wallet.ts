import { expect } from 'chai';
import * as agent from 'supertest-koa-agent';
import { createApp } from '../server';
import issueToken from './helpers/issue-token';

describe('Wallet', () => {
  let app;

  beforeEach(async () => {
    app = agent(createApp());
  });

  describe('get all', () => {
    it('success', async () => {
      const token = issueToken({ id: 1 }, { expiresIn: '1h' });
      const response = await app
        .get('/wallets')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).eq(200);
      expect(response.body).to.have.property('total');
      expect(response.body).to.have.property('wallets');
    });
  });

  describe('create', () => {
    it('success');
    it('empty request');
    it('invalid request');
  });
  describe('destroy', () => {
    it('success');
    it('empty request');
    it('invalid request');
  });
  describe('income', () => {
    it('success');
    it('empty request');
    it('invalid request');
  });
  describe('outcome', () => {
    it('success');
    it('empty request');
    it('invalid request');
  });
  describe('transfer', () => {
    it('success');
    it('empty request');
    it('invalid request');
  });
  describe('update', () => {
    it('success');
    it('empty request');
    it('invalid request');
  });
});
