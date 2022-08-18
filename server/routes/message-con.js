const express = require("express");
const router = express.Router();
const connectionController = require("../controllers/message-con-controller");


router.post("/connection/etablish/", connectionController.postConnections);
router.get("/connection/etablished/", connectionController.getConnections);
router.get("/connection/etablished1/", connectionController.getConnectionById);


module.exports = router;
