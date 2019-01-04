import * as rp from "request-promise";
import * as moment from "moment";
import * as _ from "lodash";
import * as currency from "currency.js";

export interface IExchangeRate {
  baseCurrency: string;
  currency?: string;
  saleRateNB: number;
  purchaseRateNB: number;
}
export interface IRate {
  date: string;
  bank: string;
  baseCurrency: number;
  baseCurrencyLit: string;
  exchangeRate: IExchangeRate[];
}
export interface IRates {
  [date: string]: IRate;
}
const rates: IRates = {};
export const getCurrencyExchange = async (
  forDate: string = ""
): Promise<IRate> => {
  const date = forDate || moment().format("DD.MM.YYYY");
  if (rates[date]) {
    return rates[date];
  }
  const uri = `https://api.privatbank.ua/p24api/exchange_rates?json&date=${date}`;
  const response = JSON.parse(await rp(uri));
  rates[date] = response;
  return response;
};

export const convert = async (amount: number, from: string, to: string) => {
  const rates = await getCurrencyExchange();
  let result = {
    sale: currency(amount, { precision: 8 }),
    purchase: currency(amount, { precision: 8 })
  };
  const rate = _.find(rates.exchangeRate, r =>
    _.isEqual([r.baseCurrency, r.currency], [from, to])
  );

  if (!rate) {
    return "no result";
  }

  result.sale =
    rate.baseCurrency === from
      ? result.sale.divide(rate.saleRateNB)
      : result.sale.multiply(rate.saleRateNB);
  result.purchase = result.purchase.divide(rate.purchaseRateNB);
  return result;
};
