import * as Router from "koa-router";

const router = new Router();

router
  .get("/", async ctx => {})
  .get("/:id", async ctx => {})
  .post("/", async ctx => {})
  .put("/:id", async ctx => {})
  .del("/:id", async ctx => {});

export default router;
