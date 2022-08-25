const express = require("express");
const router = express.Router();
const giftController = require("../controllers/gift");


router.get("/getgift/", giftController.getgift);
router.get("/getgiftbyid/", giftController.getgiftbyid);
router.post("/postgift/", giftController.postgift);

module.exports = router;