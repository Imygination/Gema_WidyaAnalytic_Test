const express = require("express");
const router = express.Router();
const routerUser = require("./user");
const routerProduct = require("./product");
const authentification = require("../middleware/Authentification");

router.use("/user", routerUser);

router.use(authentification);
router.use("/product", routerProduct);

module.exports = router;
