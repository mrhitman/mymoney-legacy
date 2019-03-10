import { Model } from 'objection';
import db from '../services/db';

export default class RefreshToken extends Model {
  public id: number;
  public token: string;
  public user_id: number;
  public created_at: number;

  static get tableName() {
    return 'refresh_tokens';
  }
}

RefreshToken.knex(db);