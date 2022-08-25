const userImgs = require("../models/userimgs");
require("../db/db");


exports.getuserimgsbyid = async (req, res) => {
  uid = req.query.uid; 
  try {
    const data = await userImgs.find({uid: uid});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}


exports.uploadimg = async (req, res) => {
  try {
    res.json(req.file.filename);
  } catch (error) {
    console.log(error);
  }
}


exports.deleteimg = async (req, res) => {
  _id = req.query._id;
  try {
     const data = await userImgs.deleteOne({_id: _id});
     res.json(data.deletedCount);
  } catch (error) {
      console.log(error);
  }
}


exports.updateimgstatus = async (req, res) => {
  const _id = req.query._id;
      try {
          const data = await userImgs.findByIdAndUpdate(_id, req.body, {
              new: true
          });
          res.json(data);
      } catch (error) {
          console.log(error);
      }
}



exports.postuserimgs = async (req, res) => {
    try {
        const data = new userImgs({
            uid: req.body.uid,
            private: req.body.private,
            img: req.file.filename,
        });
        await data.save().then(()=>{
            res.json(data);
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}
