import * as Router from "koa-router";
import Wallet from "../../models/wallet";
import create from "./create";
import update from "./update";
import destroy from "./destroy";
import income from "./income";
import outcome from "./outcome";

const router = new Router();

router
  .get("/", async ctx => {
    ctx.body = await Wallet.findAll();
  })
  .get("/:id", async ctx => {
    ctx.body = await Wallet.findOne({
      where: { id: ctx.params.id, user_id: ctx.state.user.id }
    });
  })
  .post("/", create)
  .post("/:id/income", income)
  .post("/:id/outcome", outcome)
  .put("/:id", update)
  .del("/:id", destroy);

export default router;
