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



exports.postuserimgs = async (req, res) => {
    try {
        const data = new userImgs({
            uid: req.body.uid,
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
