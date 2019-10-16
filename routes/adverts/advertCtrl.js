const models = require("../../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  create: (req, res, next) => {
    console.log("creation advert");
    const {
      title,
      description,
      price,
      CategoryId,
      UserId,
      WilayaId,
      img1,
      img2
    } = req.body;
    console.log("body", req.body);
    models.Advert.create({
      title: title,
      description: description,
      price: price,
      CategoryId: CategoryId,
      UserId: UserId,
      WilayaId: WilayaId,
      img1: img1,
      img2: img2
    })
      .then(newAdvert => {
        if (newAdvert) {
          res.status(201).json(newAdvert);
        } else {
          res.status(500).json({ message: "cannot post message" });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  getAllAdvert: (req, res, next) => {
    console.log("all Advert");
    models.Advert.findAll({})
      .then(allAdvert => {
        if (allAdvert) {
          res.status(200).json(allAdvert);
        } else {
          res.status(404).json({ message: `pas d'annonces` });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "invalid fields" });
      });
  },
  searchAdvert: (req, res, next) => {
    let { WilayaId, CategoryId, title } = req.query;
    let wId = WilayaId;
    models.Advert.findAll({
      where: { title: { [Op.like]: "%" + title + "%" } }
    })
      .then(search => console.log(search))
      .catch(err => console.log(err));
  }
};
