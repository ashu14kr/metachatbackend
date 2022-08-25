const express = require("express");
const router = express.Router();
const levelController = require("../controllers/levelpurchase");


router.get("/getlevel/", levelController.getlevel);
router.delete("/deletelevel/", levelController.deletepurchase);
router.post("/postlevel/", levelController.postPurchase);

module.exports = router;