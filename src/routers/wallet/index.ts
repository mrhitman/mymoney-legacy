import * as Router from "koa-router";
import Wallet from "../../models/wallet";
import operation, { OperationType } from "./operation";

const router = new Router();

router
  .get("/", async ctx => {
    ctx.body = await Wallet.findAll();
  })
  .get("/:id", async ctx => {
    ctx.body = await Wallet.findById(ctx.params.id);
  })
  .post("/", async ctx => {
    ctx.body = await Wallet.create(ctx.request.body);
  })
  .post("/:id/income", operation(OperationType.income))
  .post("/:id/outcome", operation(OperationType.outcome))
  .put("/:id", async ctx => {})
  .del("/:id", async ctx => {});

export default router;
