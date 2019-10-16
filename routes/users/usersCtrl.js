const models = require("../../models");
const bcript = require("bcryptjs");

module.exports = {
  register: (req, res, next) => {
    console.log("create Users");
    let {
      firstname,
      lastname,
      email,
      password,
      password2,
      isAdmin,
      isActif,
      username,
      adress,
      phone,
      codePostal,
      town,
      WilayaId
    } = req.body;

    models.Users.findOne({
      attributes: ["email"],
      where: { email: email }
    })
      .then(userFound => {
        if (!userFound) {
          bcript.hash(password, 5, (err, bcriptPassword) => {
            const newUser = models.Users.create({
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: bcriptPassword,
              username: username,
              adress: adress,
              phone: phone,
              codePostal: codePostal,
              town: town,
              WilayaId: WilayaId,
              isAdmin: isAdmin,
              isActif: isActif
            })
              .then(newUser => {
                console.log(newUser);
              })
              .catch(err => console.log(err));
          });
        }
      })
      .catch(err => console.log(err));
  }
};
