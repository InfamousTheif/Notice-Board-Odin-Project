import { Router } from "express";
import { messages } from "./home.js";
import { getTimeDiff } from "../controllers/date-difference.js";

const msgDetRouter = Router();



msgDetRouter.get("/message", (req, res) => {
  const msgId = req.query.msgId;
  const dateSent = getTimeDiff(messages[msgId].rawAdded); // using the raw new Date() obj in the function to get date sent.
  res.render('messageDetails', { messages, msgId, dateSent });
})

export { msgDetRouter }