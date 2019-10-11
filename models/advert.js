"use strict";
module.exports = (sequelize, DataTypes) => {
  const Advert = sequelize.define(
    "Advert",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      categoriesId: DataTypes.INTEGER,
      usersId: DataTypes.INTEGER,
      wilayaId: DataTypes.INTEGER,
      img1: DataTypes.STRING,
      img2: DataTypes.STRING
    },
    {}
  );
  Advert.associate = function(models) {
    // associations can be defined here
    models.Advert.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    models.Advert.belongsTo(models.Categories, {
      foreignKey: {
        allowNull: false
      }
    });
    models.Advert.belongsTo(models.Wilaya, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Advert;
};
