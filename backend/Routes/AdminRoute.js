
const express = require("express");
const AddUser = require("../controllers/Admin/AddUser");
const AddStore = require("../controllers/Admin/AddStore");

const router = express.Router();

router.post("/add-user", AddUser);
router.post("/add-store",AddStore);

module.exports = router;