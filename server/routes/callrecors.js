const express = require("express");
const router = express.Router();
const callController = require("../controllers/callrecords");


router.get("/getCalls/", callController.getCalls);
router.post("/postCalls/", callController.postCalls);

module.exports = router;