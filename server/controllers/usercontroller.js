require("../db/db.js");
const usermodel = require("../models/user.js");


exports.getuser = async (req, res) => {
  _id = req.query._id;
  try {
    const data = await usermodel.find({_id: _id});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.postuser = async (req, res) => {
  // console.log(req.files['profileImg'][0].filename);
  // console.log(req.files['images'][0].filename);
  try {
    const data = new usermodel({
      _id: req.body._id,
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      phoneno: req.body.phoneno,
      profileimg: req.files['profileImg'][0].filename,
      location: req.body.location,
      gender: req.body.gender,
      status: req.body.status,
      interests: req.body.interests,
      userimgs: req.files['images'],
      Oath: req.body.Oath,
      dob: req.body.dob,
      height: req.body.height,
      weight: req.body.weight,
      language: req.body.language,
      haircolor: req.body.haircolor,
    });
    await data
      .save()
      .then(() => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
