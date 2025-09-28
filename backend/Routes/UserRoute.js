
const express = require("express");
const LoginUser = require("../controllers/User/LoginUser");
const router = express.Router();

router.post("/login", LoginUser)

module.exports = router;