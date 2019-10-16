const express = require("express");
const Router = express.Router();

const wilaya = require("./wilaya/wilayaCtrl");
const category = require("./categories/categoryCtrl");
const advert = require("./adverts/advertCtrl");
const user = require("./users/usersCtrl");

/**
 * Route de back
 */

// Wilaya
Router.get("/wilaya", wilaya.getWilaya);
// Categories
Router.get("/categories", category.getAllCategories);
// Advert
Router.post("/create", advert.create);
Router.get("/all", advert.getAllAdvert);
Router.get("/search", advert.searchAdvert);
//Users
Router.post("/register", user.register);

module.exports = Router;
