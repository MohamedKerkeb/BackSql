"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          category: "Téléphones",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Véhicules",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Immobilier",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Electroménager",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Emploi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Informatique",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Mode & Beauté",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Meuble & Décoration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Matériel Professionnel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Loisirs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Services",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Vacances",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category: "Divers",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
