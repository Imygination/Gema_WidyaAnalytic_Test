const { User } = require("../models");

class controllerUser {
  static async createUser(req, res, next) {
    try {
      const { username, email, password, gender } = req.body;
      console.log(username, email, password, gender);

      const newUser = await User.create({ username, email, password, gender });
      res.status(201).json({
        message: `Succed add ${newUser.username}, with ID ${newUser.id} and email ${newUser.email}`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = controllerUser;
