import { Router } from "express";
import * as msgController from "../controllers/msgController.js";

const homeRouter = Router();

const messages = [
  {
    post: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'}),
    rawAdded: new Date(),
    msgId: 0
  },
  {
    post: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'}),
    rawAdded: new Date(),
    msgId: 1
  }
];

homeRouter.get("/", msgController.renderIndex )

homeRouter.post("/", msgController.validatePost, msgController.formPost );

export { homeRouter, messages }