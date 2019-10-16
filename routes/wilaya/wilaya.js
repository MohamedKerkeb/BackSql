const express = require("express");
const Router = express.Router();

const wilaya = require("./wilayaCtrl");

Router.get("/wilaya", wilaya.getWilaya);

module.exports = Router;
