const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message");


router.get("/getmessage/", messageController.getmessage);
router.post("/sendmessage/", messageController.sendmessage);

module.exports = router;