const express = require("express");
const controllerProduct = require("../controllers/product");
const router = express.Router();

router.get("/", controllerProduct.showProducts);
router.post("/", controllerProduct.createProduct);
router.put("/:id", controllerProduct.updateProduct);
router.delete("/:id", controllerProduct.deleteProduct);

module.exports = router;
