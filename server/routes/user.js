const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");


router.get("/allusers/", userController.getuser);
router.post("/alluser/", userController.postuser);

module.exports = router;