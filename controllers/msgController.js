import { messages } from "../routes/home.js";
import { body, validationResult, matchedData } from "express-validator";

function renderIndex(req, res) {
  const title = "Inq's Notice Board"
  res.render('index', {title, messages});
}

// Form validation

//Err messages
const nameLengthErr = "must be between 1 to 15 characters long";
const textLengthErr = "must be between 1 to 300 characters long";

const validatePost = [
  body("name").trim()
    .isLength({ min:1, max:15 }).withMessage(`Name ${nameLengthErr}`),

  body("text").trim()
    .optional({ values: "falsy" })
    .isLength({ min:1, max:300 }).withMessage(`Text ${textLengthErr}`)  
]

function formPost(req, res) {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return
  };

  messages.push({text: req.body.text, user: req.body.name, rawAdded: new Date(), added:new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'}), msgId: messages.length });
  res.redirect("/");
}

export { renderIndex, formPost, validatePost }