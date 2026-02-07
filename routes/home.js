import { Router } from "express";
import * as msgController from "../controllers/msgController.js";

const homeRouter = Router();

homeRouter.get("/", msgController.renderIndex )

homeRouter.post("/", msgController.validatePost, msgController.formPost );

export { homeRouter }