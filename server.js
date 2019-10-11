const express = require("express");
const logger = require("morgan");
const models = require("./models");

const app = express();
const PORT = process.env.PORT || 8888;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Hello World</h1>");
});

//Initiation Sequlize et listen server
models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Magic is happend on port ${PORT}`);
  });
});

models.exports = app;
