const express = require("express");
const controllerProduct = require("../controllers/product");
const { authorization } = require("../middleware/Authorization");
const router = express.Router();

router.get("/", controllerProduct.showProducts);
router.post("/", controllerProduct.createProduct);
router.put("/:id", authorization, controllerProduct.updateProduct);
router.delete("/:id", authorization, controllerProduct.deleteProduct);

module.exports = router;
