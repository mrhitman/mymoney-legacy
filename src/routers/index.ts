import * as Router from "koa-router";
import currency from "./currency";
import goal from "./goal";
import user from "./user";
import wallet from "./wallet";
import auth from "../middlewares/auth";

const router = new Router();

router.use(user.routes());
router.use("/currency", auth, currency.routes());
router.use("/wallet", auth, wallet.routes());
router.use("/goal", auth, goal.routes());

export default router;
