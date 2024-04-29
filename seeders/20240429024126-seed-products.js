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
      "Products",
      [
        {
          name: "Iphone 13",
          description: "Iphone 13 pro max",
          price: 3000000,
          quantity: 5,
          BrandId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iphone 14",
          description: "Iphone 14 pro max",
          price: 5000000,
          quantity: 5,
          BrandId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung S23",
          description: "Samsung S23 pro max",
          price: 3000000,
          quantity: 5,
          BrandId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung S24",
          description: "Samsung S24 pro max",
          price: 5000000,
          quantity: 5,
          BrandId: 2,
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
    await queryInterface.bulkDelete("Products", null, {});
  },
};
