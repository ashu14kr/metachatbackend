require("../db/db.js");
const usermodel = require("../models/user.js");


exports.getuser = async (req, res) => {
  try {
    const data = await usermodel.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.postuser = async (req, res) => {
  try {
    const data = new usermodel({
      _id: req.body._id,
      profileimg: req.files['photos'][1].path,
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
