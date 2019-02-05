import * as Router from "koa-router";
import create from "./create";
import Currency from "../../models/currency";
import destroy from "./destroy";
import income from "./income";
import outcome from "./outcome";
import update from "./update";
import Wallet from "../../models/wallet";
import * as _ from "lodash";
import transfer from "./transfer";

const router = new Router();

router
  .get("/", async ctx => {
    ctx.body = await Wallet.findAll({ include: [Currency] });
  })
  .get("/:id", async ctx => {
    ctx.body = await Wallet.findOne({
      include: [Currency],
      where: { id: ctx.params.id, user_id: ctx.state.user.id }
    });
  })
  .post("/", create)
  .post("/:id/income", income)
  .post("/:id/outcome", outcome)
  .post("/:id/transfer", transfer)
  .put("/:id", update)
  .del("/:id", destroy);

export default router;
