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
    return queryInterface.bulkInsert("Wilayas", [
      {
        wilaya: "Adrar",
        code: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Chlef",
        code: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Lahgouat",
        code: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Oum El Bouaghi",
        code: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Batna",
        code: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Béjaïa",
        code: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Biskra",
        code: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Béchar",
        code: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Blida",
        code: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Bouira",
        code: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Tamanrasset",
        code: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Tébessa",
        code: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Tlemcen",
        code: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Tiaret",
        code: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Tizi Ouzou",
        code: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Alger",
        code: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Djelfa",
        code: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Jijel",
        code: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Sétif",
        code: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Saïda",
        code: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Skikda",
        code: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Sidi Bel Abbès",
        code: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Annaba",
        code: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Guelma",
        code: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Constantine",
        code: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Médéa",
        code: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Mostaganem",
        code: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "M'Sila",
        code: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Mascara",
        code: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Ouargla",
        code: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Oran",
        code: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "El Bayadh",
        code: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Illizi",
        code: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Bordj Bou Arreridj",
        code: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Boumerdès",
        code: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "El Tarf",
        code: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Tindouf",
        code: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Tissemsilt",
        code: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "El Oued",
        code: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Khenchela",
        code: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Souk Ahras",
        code: 41,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Tipaza",
        code: 42,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Mila",
        code: 43,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Aïn Defla",
        code: 44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Naâma",
        code: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Aïn Témouchent",
        code: 46,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Ghardaïa",
        code: 47,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wilaya: "Relizane",
        code: 48,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Wilaya", null, {});
  }
};
