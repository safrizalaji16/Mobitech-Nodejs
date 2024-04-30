const { Op } = require("sequelize");
const { Product, Brand } = require("../models");

class Controller {
  static async getProducts(req, res, next) {
    try {
      const { query } = req.query;
      const options = query
        ? {
            where: {
              [Op.or]: ["name", "description"].map((key) => ({
                [key]: {
                  [Op.iLike]: `%${query}%`,
                },
              })),
            },
          }
        : {};

      const products = await Product.findAll(options);

      if (!products.length) {
        throw {
          name: "Product Not Found",
        };
      }

      res.status(200).json({ data: products });
    } catch (err) {
      next(err);
    }
  }
  static async postProduct(req, res, next) {
    try {
      const product = await Product.create(req.body);

      res.status(201).json({ data: product });
    } catch (err) {
      next(err);
    }
  }
  static async getDetailProduct(req, res, next) {
    try {
      const { id } = req.params;
      const productById = await Product.findByPk(id, {
        include: [
          {
            model: Brand,
          },
        ],
      });

      if (!productById) {
        throw {
          name: "Product Not Found",
        };
      }

      res.status(200).json({ data: productById });
    } catch (err) {
      next(err);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const productById = await Product.findByPk(id);

      if (!productById) {
        throw {
          name: "Product Not Found",
        };
      }

      await Product.update(req.body, {
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Product with name ${productById.name} has been updated`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const productById = await Product.findByPk(id);

      if (!productById) {
        throw {
          name: "Product Not Found",
        };
      }

      await Product.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Product with name ${productById.name} has been deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
