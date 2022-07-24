const express = require("express");
const router = express.Router();
const uservideoController = require("../controllers/uservideoscontroller");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+file.originalname);
    }
  });
  
  const upload = multer({storage: storage})

  router.get("/allusersvideos/", uservideoController.getuservideo);
  router.get("/allusersvide/", uservideoController.getuservideobyid);
  router.post("/alluservideo/", upload.single("video") ,uservideoController.postuservideo);

  module.exports = router;