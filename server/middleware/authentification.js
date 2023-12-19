const { verifyToken } = require("../helper/jwt");
const { User } = require("../models");

async function authentification(req, res, next) {
  try {
    const payload = verifyToken(req.headers.access_token);
    const user = await User.findByPk(payload.id);
    if (!user) {
      throw { name: "Unauthentification" };
    }
    req.user = { id: user.id, email: user.email };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentification;
