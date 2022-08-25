const express = require("express");
const router = express.Router();
const rankingController = require("../controllers/ranking");


router.get("/getrankings/", rankingController.getrankings);
router.get("/getrankingbyid/", rankingController.getrankingsbyid);
router.patch("/updategifts/", rankingController.updateGifts);
router.post("/postrankings/", rankingController.postRankings);

module.exports = router;