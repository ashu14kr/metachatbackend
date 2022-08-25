const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchroom");

router.post("/create/", matchController.postmatch);
router.patch("/makematch/", matchController.match);
router.get("/checkById/", matchController.getmatchById);
router.get("/check/", matchController.getmatch);
router.delete("/deleteroom", matchController.deleteroom);

module.exports = router;
