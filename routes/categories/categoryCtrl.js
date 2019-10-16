const models = require("../../models");

module.exports = {
  getAllCategories: (req, res, next) => {
    models.Categories.findAll({})
      .then(category => {
        if (category) {
          res.status(200).json(category);
        } else {
          res.status(400).json({ error: "no category found" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
