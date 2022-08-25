const express = require("express");
const router = express.Router();
const balanceController = require("../controllers/balancecontroller");


router.get("/getbalance/", balanceController.getBalance);
router.post("/postbalance/", balanceController.postBalance);
router.patch("/updatebalance/", balanceController.updateBalance);

module.exports = router;