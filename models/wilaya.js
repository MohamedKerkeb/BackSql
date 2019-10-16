"use strict";
module.exports = (sequelize, DataTypes) => {
  const Wilaya = sequelize.define(
    "Wilaya",
    {
      wilaya: DataTypes.STRING,
      code: DataTypes.INTEGER
    },
    {}
  );
  Wilaya.associate = function(models) {
    // associations can be defined here
    models.Wilaya.hasMany(models.Users);
    models.Wilaya.hasMany(models.Categories);
  };
  return Wilaya;
};
