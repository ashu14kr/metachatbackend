const express = require("express");
const router = express.Router();
const followingController = require("../controllers/following");


router.get("/getfollowers/", followingController.getfollowing);
router.get("/checkfollowing/", followingController.checkFollowing);
router.delete("/deletefollowing/", followingController.deletefollowing);
router.post("/postfollowers/", followingController.postFollowing);

module.exports = router;