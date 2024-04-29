const { Brand, Product } = require("../models");

class Controller {
  static async getBrands(req, res, next) {
    try {
      const brands = await Brand.findAll();

      res.status(200).json({ data: brands });
    } catch (err) {
      next(err);
    }
  }
  static async postBrand(req, res, next) {
    try {
      const brand = await Brand.create(req.body);

      res.status(201).json({ data: brand });
    } catch (err) {
      next(err);
    }
  }
  static async getDetailBrand(req, res, next) {
    try {
      const { id } = req.params;
      const brandById = await Brand.findByPk(id, {
        include: [
          {
            model: Product,
          },
        ],
      });

      if (!brandById) {
        throw {
          name: "Brand Not Found",
        };
      }

      res.status(200).json({ data: brandById });
    } catch (err) {
      next(err);
    }
  }
  static async updateBrand(req, res, next) {
    try {
      const { id } = req.params;
      const brandById = await Brand.findByPk(id);

      if (!brandById) {
        throw {
          name: "Brand Not Found",
        };
      }

      await Brand.update(req.body, {
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Brand with name ${brandById.name} has been updated`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteBrand(req, res, next) {
    try {
      const { id } = req.params;
      const brandById = await Brand.findByPk(id);

      if (!brandById) {
        throw {
          name: "Brand Not Found",
        };
      }

      await Brand.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Brand with name ${brandById.name} has been deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
