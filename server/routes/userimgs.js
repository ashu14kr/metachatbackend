const express = require("express");
const router = express.Router();
const userimgsController = require("../controllers/userimgscontroller");
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

  router.get("/allusersimgs/", userimgsController.getuserimgsbyid);
  router.delete("/deleteimg/", userimgsController.deleteimg);
  router.patch("/doprivate/", userimgsController.updateimgstatus);
  router.post("/alluserimg/", upload.single("userimgs") ,userimgsController.postuserimgs);
  router.post('/uploadmedia/', upload.single("img"), userimgsController.uploadimg);

  module.exports = router;