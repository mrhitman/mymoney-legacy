import * as Router from "koa-router";

const router = new Router();

router
  .get("/day/:date", async ctx => {})
  .get("/month/:date", async ctx => {})
  .get("/year/:date", async ctx => {});

export default router;
