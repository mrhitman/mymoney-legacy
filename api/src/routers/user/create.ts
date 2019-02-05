import User from "../../models/user";
import * as bcrypt from "bcrypt-nodejs";
import { validate, joi } from "../../utils/validate";

const schema = {
  name: joi.string().required(),
  last_name: joi.string(),
  email: joi
    .string()
    .email()
    .required(),
  birthday: joi.date(),
  password: joi.string().required(),
  "password-confirm": joi
    .any()
    .valid(joi.ref("password"))
    .required()
};

export default async ctx => {
  validate(ctx, schema);
  const { name, email, password } = ctx.request.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  if (await User.findOne({ where: { email } })) {
    ctx.body = "User with such email already exists";
    ctx.status = 409;
    return;
  }
  const user = await User.create({
    name,
    email,
    password: hash
  });
  ctx.body = user;
  ctx.status = 201;
};
