import { Router } from "express";
import { renderMsgDetails } from "../controllers/msgController.js";

const msgDetRouter = Router();

msgDetRouter.get("/message", renderMsgDetails )

export { msgDetRouter }