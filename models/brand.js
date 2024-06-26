"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {
        foreignKey: "BrandId",
      });
    }
  }
  Brand.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Brand name must be unique",
        },
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Brand",
    }
  );
  return Brand;
};
