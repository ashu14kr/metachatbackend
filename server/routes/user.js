const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+file.originalname);
  }
})

const upload = multer({storage: storage})


router.get("/allusers/", userController.getuser);
router.post("/alluser/", upload.fields([{name: "profileImg"}, {name: "images", maxCount: 4}]) ,userController.postuser);

module.exports = router;