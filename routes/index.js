const router = require("express").Router();

const productController = require("../controllers/productController");

router.post("/api/v1/products", productController.createProduct);

module.exports = router;