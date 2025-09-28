
const express = require("express");
const LoginUser = require("../controllers/User/LoginUser");
const AddRating = require("../controllers/User/AddRating");
const ShowStoreByName = require("../controllers/User/ShowStoreByName");
const ShowStoreByAdd = require("../controllers/User/ShowStoreByAdd");
const router = express.Router();

router.post("/login", LoginUser)
router.post("/add-rating",AddRating);
router.post("/store-by-name",ShowStoreByName);
router.post("/store-by-address",ShowStoreByAdd);

module.exports = router;