import express from "express";
import { homeRouter } from "./routes/home.js";
import { msgDetRouter } from "./routes/msgDet.js";

const app = express()

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


const PORT = 3000;

app.listen(PORT, (error) => {
  if(error){
    throw error;
  };
  console.log(`The website is at http://localhost:3000/`);
});

app.use(express.static('public'));
app.use(express.static('views'))

app.use(homeRouter);
app.use(msgDetRouter)

app.use((req, res) => {
  res.status(404).sendFile("/views/404page.html", { root: import.meta.dirname})
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message || "Internal Server Error");
});