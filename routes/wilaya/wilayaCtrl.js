const sequelize = require("sequelize");
const models = require("../../models");

module.exports = {
  getWilaya: (req, res, next) => {
    models.Wilaya.findAll({})
      .then(wilaya => {
        if (wilaya) {
          res.status(200).json(wilaya);
        } else {
          res.status(400).json({ error: "no wilaya found" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
