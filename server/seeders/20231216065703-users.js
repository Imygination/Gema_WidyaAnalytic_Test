"use strict";
const users = require("../dataJson/users.json");
const { hashPassword } = require("../helper/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      users.map((user) => {
        user.createdAt = user.updatedAt = new Date();
        user.password = hashPassword(user.password);
        return user;
      })
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
