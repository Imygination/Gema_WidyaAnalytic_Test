const express = require("express");
const controllerUser = require("../controllers/user");
const router = express.Router();

router.post("/register", controllerUser.createUser);
router.post("/login");

module.exports = router;
