import { Model } from 'objection';
import db from '../services/db';

enum TransferType {
  income = 'income',
  outcome = 'outcome',
  transfer = 'transfer'
}

export default class Transfer extends Model {
  public id: number;
  public type: TransferType;
  public category: string;
  public description: string;
  public user_id: number;
  public currency_id: number;
  public amount: number;
  public to_wallet_id: number;
  public from_wallet_id: number;
  public date: Date;

  static get tableName() {
    return 'transfer';
  }
}

Transfer.knex(db);
