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

  static async createProduct(req, res, next) {
    try {
      const { name, description, price, imgUrl, UserId } = req.body;
      const newProduct = await Product.create({
        name,
        description,
        price,
        imgUrl,
        UserId,
      });
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price, imgUrl, UserId } = req.body;

      const product = await Product.findByPk(id);
      if (!product) {
        throw { name: "Product not Found" };
      }

      const updatedProduct = await product.update({
        name,
        description,
        price,
        imgUrl,
        UserId,
      });
      res.status(200).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = controllerProduct;
