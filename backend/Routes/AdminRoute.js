
const express = require("express");
const AddUser = require("../controllers/Admin/AddUser");
const AddStore = require("../controllers/Admin/AddStore");
const ShowStores = require("../controllers/Admin/DashBoard/ShowStores");
const ShowUsers = require("../controllers/Admin/DashBoard/ShowUsers");
const TotalUser = require("../controllers/Admin/DashBoard/TotalUser");
const TotalStores = require("../controllers/Admin/DashBoard/TotalStores");
const TotalRatings = require("../controllers/Admin/DashBoard/TotalRatings");
const UpdatePassword = require("../controllers/Admin/DashBoard/UpdatePassword");

const router = express.Router();

router.post("/add-user", AddUser);
router.post("/add-store",AddStore);
router.get("/show-stores",ShowStores);
router.get("/show-users",ShowUsers);
router.get("/total-users",TotalUser);
router.get("/total-stores",TotalStores);
router.get("/total-ratings",TotalRatings);
router.post("/update-password",UpdatePassword);

module.exports = router;