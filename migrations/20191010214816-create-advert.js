"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Adverts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      categoriesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          id: "id"
        }
      },
      usersId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          id: "id"
        }
      },
      wilayaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Wilayas",
          id: "id"
        }
      },
      img1: {
        type: Sequelize.STRING
      },
      img2: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Adverts");
  }
};
