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



exports.postuservideo = async (req, res) => {
    try {
        const data = new userVideos({
            uid: req.body.uid,
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
