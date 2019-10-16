const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const models = require("./models");
const apiRouter = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Hello World</h1>");
});

app.use("/", apiRouter);

//Initiation Sequlize et listen server
models.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Magic is happend on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));

models.exports = app;
