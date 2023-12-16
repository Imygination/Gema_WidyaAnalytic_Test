"use strict";
const products = require("../dataJson/products.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      products.map((product) => {
        product.createdAt = product.updatedAt = new Date();
        return product;
      })
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
