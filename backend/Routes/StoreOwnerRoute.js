
const express = require("express");
const UsersRated = require("../controllers/StoreOwner/UsersRated");
const AverageRating = require("../controllers/StoreOwner/AverageRating");
const router = express.Router();

router.post("/users-rated",UsersRated);
router.post("/avg-rating",AverageRating);

module.exports = router;    