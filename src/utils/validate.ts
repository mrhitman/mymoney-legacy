import * as base from "joi";
import * as phone from "joi-phone-number";
import { Context } from "koa";

export const joi = base.extend(phone);
export const validate = (ctx: Context, schema: base.SchemaMap) => {
  const { error } = joi.validate(ctx.request.body, joi.object().keys(schema));
  if (error) {
    const messages = error.details.map(e => e.message);
    ctx.throw(400, JSON.stringify(messages));
  }
};
