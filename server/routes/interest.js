const express = require("express");
const router = express.Router();
const interestController = require("../controllers/interest");


router.get("/getinterest/", interestController.getinterest);
router.delete("/deleteinterest/", interestController.deleteInterests);
router.post("/postinterest/", interestController.postInterests);

module.exports = router;