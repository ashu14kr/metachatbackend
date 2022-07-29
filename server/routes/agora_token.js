const express = require("express");
const router = express.Router();
const agoratoken = require("../controllers/agora_token");

router.get("/access_token", agoratoken.nocache , agoratoken.generateAccessToken);

module.exports = router;