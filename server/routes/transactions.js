const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactions");


router.get("/gettransactions/", transactionController.gettransactions);
router.post("/posttransactions/", transactionController.postTransactions);

module.exports = router;