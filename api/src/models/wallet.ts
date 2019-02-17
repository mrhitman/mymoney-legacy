import { Model } from 'objection';
import db from '../services/db';

export default class Wallet extends Model {
  public id: number;
  public name: string;
  public user_id: number;
  public currency_id: number;
  public amount: number;

  static get tableName() {
    return 'user';
  }
}

Wallet.knex(db);
