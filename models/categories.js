"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      category: DataTypes.STRING
    },
    {}
  );
  Categories.associate = function(models) {
    // associations can be defined here
    models.Categories.hasMany(models.Advert);
  };
  return Categories;
};
