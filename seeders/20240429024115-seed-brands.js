"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Brands",
      [
        {
          name: "Apple",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Xiaomi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Huawei",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
