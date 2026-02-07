import { body, validationResult, matchedData } from "express-validator";
import * as db from "../db/queries.js";
import * as dateHandler from "../controllers/date-difference.js";

async function renderIndex(req, res) {
  const title = "Inq's Notice Board";
  const messages = await db.getPostInfo();
  res.render('index', {title, messages, dateHandler });
}

// Form validation

//Err messages
const nameLengthErr = "must be between 1 to 15 characters long";
const textLengthErr = "must be between 1 to 300 characters long";

const validatePost = [
  body("user").trim()
    .isLength({ min:1, max:15 }).withMessage(`Name ${nameLengthErr}`),

  body("post").trim()
    .isLength({ min:1, max:300 }).withMessage(`Text ${textLengthErr}`)  
]

async function formPost(req, res) {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return
  };

  messages.push({post: req.body.post, user: req.body.user, rawAdded: new Date(), added:new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'}), msgId: messages.length });

  await db.insertPostInfo(req.body);
  res.redirect("/");
}

//message details page

async function renderMsgDetails(req, res) {
  const { msgId } = req.query;
  const messages = await db.getPostInfo();
  const message = messages[(msgId - 1)];
  res.render("messageDetails", {
    message, dateHandler
  })
}

export { renderIndex, formPost, validatePost, renderMsgDetails }