const userVideos = require("../models/uservideos");
require("../db/db");

exports.getuservideo = async (req, res) => {
  try {
    const data = await userVideos.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}

exports.getuservideobyid = async (req, res) => {
  uid = req.query.uid; 
  try {
    const data = await userVideos.find({uid: uid});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}


exports.deletevid = async (req, res) => {
  _id = req.query._id;
  try {
     const data = await userVideos.deleteOne({_id: _id});
     res.json(data.deletedCount);
  } catch (error) {
      console.log(error);
  }
}


exports.updatevidstatus = async (req, res) => {
  const _id = req.query._id;
      try {
          const data = await userVideos.findByIdAndUpdate(_id, req.body, {
              new: true
          });
          res.json(data);
      } catch (error) {
          console.log(error);
      }
}



exports.postuservideo = async (req, res) => {
    try {
        const data = new userVideos({
            uid: req.body.uid,
            private: req.body.private,
            video: req.file.filename,
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
