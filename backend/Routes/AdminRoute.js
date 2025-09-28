
const express = require("express");
const AddUser = require("../controllers/Admin/AddUser");
const AddStore = require("../controllers/Admin/AddStore");
const ShowStores = require("../controllers/Admin/DashBoard/ShowStores");
const ShowUsers = require("../controllers/Admin/DashBoard/ShowUsers");

const router = express.Router();

router.post("/add-user", AddUser);
router.post("/add-store",AddStore);
router.get("/show-stores",ShowStores);
router.get("/show-users",ShowUsers);

module.exports = router;