import * as Router from "koa-router";
import Wallet from "../../models/wallet";
import operation, { OperationType } from "./operation";
import create from "./create";
import update from "./update";
import destroy from "./destroy";

const router = new Router();

router
  .get("/", async ctx => {
    ctx.body = await Wallet.findAll();
  })
  .get("/:id", async ctx => {
    ctx.body = await Wallet.findById(ctx.params.id);
  })
  .post("/", create)
  .post("/:id/income", operation(OperationType.income))
  .post("/:id/outcome", operation(OperationType.outcome))
  .put("/:id", update)
  .del("/:id", destroy);

export default router;
