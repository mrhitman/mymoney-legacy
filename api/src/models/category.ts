import { Model } from 'objection';
import db from '../services/db';

export default class Category extends Model {
  public id: number;
  public type: string;
  public name: string;
  public description: string;
  public parent_id: number;
  public user_id: number;

  static get tableName() {
    return 'category';
  }
}

Category.knex(db);
