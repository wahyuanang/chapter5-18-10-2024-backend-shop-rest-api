"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Product name is required",
          },
          notEmpty: {
            msg: "Maksud lo apa brok, namain laa",
          },
        },
      },

      images: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        defaultValue: [
          "https://ik.imagekit.io/znozxmysw/Profile-cangkir_jawa-1729008865851_JW2ftRkfs.jpg?updatedAt=1729008867370",
        ],
      },

      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          max: {
            args: 10000,
            msg: "sorry bro, stok maximal 10000",
          },
        },
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Product price is required",
          },
          min: {
            args: 5000,
            msg: "minimal bayar harus 5000 cuyyy",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
