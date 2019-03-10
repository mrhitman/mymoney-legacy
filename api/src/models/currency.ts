import { Model } from 'objection';
import db from '../services/db';

export default class Currency extends Model {
  public id: number;
  public name: string;
  public description: string;
  public symbol: string;

  static get tableName() {
    return 'currencies';
  }
}

Currency.knex(db);
