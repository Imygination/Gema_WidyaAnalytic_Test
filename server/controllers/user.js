const { checkPassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
const { User } = require("../models");

class controllerUser {
  static async createUser(req, res, next) {
    try {
      const { username, email, password, gender } = req.body;
      // console.log(username, email, password, gender);
      const newUser = await User.create({ username, email, password, gender });
      res.status(201).json({
        message: `Succed add ${newUser.username}, with ID ${newUser.id} and email ${newUser.email}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      if (!email || !password) {
        throw { name: "Email and Password cannot empty" };
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "Email or Password wrong" };
      }

      const isPasswordTrue = checkPassword(password, user.password);
      if (!isPasswordTrue) {
        throw { name: "Email or Password wrong" };
      }

      const token = signToken({
        id: user.id,
        username: user.username,
        email: user.email,
        gender: user.gender,
      });

      res.status(200).json({
        access_token: token,
        id: user.id,
        username: user.username,
        email: user.email,
        gender: user.gender,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = controllerUser;
