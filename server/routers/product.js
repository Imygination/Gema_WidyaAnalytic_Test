const express = require("express");
const controllerProduct = require("../controllers/product");
const router = express.Router();

router.get('/', controllerProduct.showProducts)
router.post('/', controllerProduct.createProduct)
router.get('/:id')
router.put('/:id')
router.delete('/:id')

module.exports = router