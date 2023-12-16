const { User, Product } = require("../models");

class controllerProduct {
  static async showProducts(req, res, next) {
    try {
      const product = await Product.findAll({
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
        ],
      });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = controllerProduct;
