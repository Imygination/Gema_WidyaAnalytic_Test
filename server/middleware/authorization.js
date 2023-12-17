const { Product } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      throw { name: "Product not Found" };
    }

    if (req.user.id !== product.UserId) {
      throw { name: "You are not Authorized" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authorization };
