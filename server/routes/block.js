const express = require("express");
const router = express.Router();
const blockController = require("../controllers/block");


router.get("/getblocks/", blockController.getblockedUsers);
router.get("/checkblocks/", blockController.checkblockedUsers);
router.delete("/deleteblocks/", blockController.deleteblock);
router.post("/postblocks/", blockController.postblock);

module.exports = router;






