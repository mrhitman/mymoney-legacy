import { Model } from 'objection';
import db from '../services/db';

export default class RefreshToken extends Model {
  public id: number;
  public token: string;
  public user_id: number;

  static get tableName() {
    return 'refresh_token';
  }
}

RefreshToken.knex(db);