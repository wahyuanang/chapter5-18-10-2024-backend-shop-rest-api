const { Product } = require("../models");

const createProduct = async (req, res) => {
  const { name, images, stock, price } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      images,
      stock,
      price,
    });
    res.status(201).json({
      status: "success",
      message: "succes Product created",
      isSuccess: true,
      data: {
        newProduct,
      },
    });
  } catch (error) {
    console.log(error.name);
    if (error.name === "SequelizeValidationError") {
      const errorMessage = error.errors.map((err) => err.message);
      return res.status(400).json({
        status: "failed",
        message: errorMessage[0],
        isSuccess: false,
        data: null,
      });
    }
    res.status(500).json({
      status: "failed",
      message: error.message,
      isSuccess: false,
      data: null,
    });
  }
};

module.exports = { createProduct };
