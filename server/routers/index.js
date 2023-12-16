const express = require("express");
const router = express.Router();
const routerUser = require("./user");
const routerProduct = require("./product");

router.use("/user", routerUser);
router.use("/product", routerProduct);

module.exports = router;
