
const express = require("express");
const AddUser = require("../controllers/Admin/AddUser");
const AddStore = require("../controllers/Admin/AddStore");
const ShowStores = require("../controllers/Admin/DashBoard/ShowStores");
const ShowUsers = require("../controllers/Admin/DashBoard/ShowUsers");
const TotalUser = require("../controllers/Admin/DashBoard/TotalUser");
const TotalStores = require("../controllers/Admin/DashBoard/TotalStores");

const router = express.Router();

router.post("/add-user", AddUser);
router.post("/add-store",AddStore);
router.get("/show-stores",ShowStores);
router.get("/show-users",ShowUsers);
router.get("/total-users",TotalUser);
router.get("/total-stores",TotalStores);

module.exports = router;