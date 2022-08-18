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
router.get("/allusersbygender/", userController.getuserByGender);
router.get("/allusersbystatus/", userController.getuserByStatus);
router.post("/alluser/", upload.single("profileImg") ,userController.postuser);
router.patch("/changestatus/", userController.changeStatus);

module.exports = router;