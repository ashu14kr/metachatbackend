const express = require("express");
const router = express.Router();
const likeController = require("../controllers/like");


router.get("/getliker/", likeController.getliker);
router.get("/getliked/", likeController.getliked);
router.post("/postliked/", likeController.postlike);

module.exports = router;