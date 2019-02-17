import { Model } from 'objection';
import db from '../services/db';
import Wallet from './wallet';

export default class User extends Model {
  public id: number;
  public name: string;
  public last_name: string;
  public password: string;
  public birthday: Date;
  public email: string;

  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    return {
      wallets: {
        relation: Model.HasManyRelation,
        modelClass: Wallet,
        join: {
          from: 'user.id',
          to: 'wallet.user_id'
        }
      }
    };
  }
}

User.knex(db);
