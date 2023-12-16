"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helper/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Product);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Username Cannot Empty",
          },
          notNull: {
            msg: "Username is Required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Email Cannot Empty",
          },
          notNull: {
            msg: "Email is Required",
          },
          isEmail: {
            msg: "Email not Valid",
          },
        },
        unique: {
          msg: "Email Already Exist",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password Cannot Empty",
          },
          notNull: {
            msg: "Password is Required",
          },
          len: {
            args: [5],
            msg: "Password Minimum Character is 5",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name Cannot Empty",
          },
          notNull: {
            msg: "Name is Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((user) => {
    user.password = hashPassword(user.password);
  });

  return User;
};
