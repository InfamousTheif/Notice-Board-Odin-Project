import { Router } from "express";

const homeRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'}),
    rawAdded: new Date(),
    msgId: 0
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'}),
    rawAdded: new Date(),
    msgId: 1
  }
];

const title = "Inq's Notice Board"

homeRouter.get("/", (req, res) => {
  res.render('index', {title, messages});
})

homeRouter.post("/", (req, res) => {
  messages.push({text: req.body.text, user: req.body.name, rawAdded: new Date(), added:new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'}), msgId: messages.length });
  // console.log(req.body);
  // console.log(messages.length);
  // console.log(messages);
  res.redirect("/");
});

export { homeRouter, messages }