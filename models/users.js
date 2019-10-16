"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      isActif: DataTypes.BOOLEAN,
      adress: DataTypes.STRING,
      phone: DataTypes.STRING,
      codePostal: DataTypes.STRING,
      town: DataTypes.STRING,
      picture: DataTypes.STRING
    },
    {}
  );
  Users.associate = function(models) {
    // associations can be defined here
    models.Users.hasMany(models.Advert);
    models.Users.belongsTo(models.Wilaya, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Users;
};
