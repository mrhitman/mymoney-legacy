import { Model } from 'objection';
import db from '../services/db';

class Goal extends Model {
  public id: number;
  public name: string;
  public user_id: number;
  public amount: number;
  public currency_id: number;
  public deadline: Date;

  static get tableName() {
    return 'goals';
  }
}

Goal.knex(db);
