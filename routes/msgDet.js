import { Router } from "express";
import { messages } from "./home.js";
import { getTimeDiff } from "../controllers/date-difference.js";
import { renderMsgDetails } from "../controllers/msgController.js";

const msgDetRouter = Router();

msgDetRouter.get("/message", renderMsgDetails )

export { msgDetRouter }