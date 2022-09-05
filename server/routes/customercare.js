const express = require("express");
const router = express.Router();
const customercareController = require("../controllers/customercare");


router.get("/getcustomerquery/", customercareController.getcustomerquery);
router.post("/postquerys/", customercareController.postQuerys);

module.exports = router;