const express = require("express");
const router = express.Router();
const callController = require("../controllers/callcontroller");

router.post("/activecalls/", callController.postcalls);
router.delete("/deleteactivecalls/", callController.deletecalls);
router.get("/activecalls/", callController.getcalls);

module.exports = router;