import * as jwt from "jsonwebtoken";

export default (data, options = {}) =>
  jwt.sign(data, process.env.SALT, options);
