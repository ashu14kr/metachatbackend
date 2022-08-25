require("../db/db.js");
const likemodel = require("../models/like");

exports.getliker = async (req, res) => {
    likeruid = req.query.likeruid;
    try {
      const data = await likemodel.find({likeruid: likeruid});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.getliked = async (req, res) => {
    likedto = req.query.likedto;
    try {
      const data = await likemodel.find({likedto: likedto});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.postlike = async (req, res) => {
    try {
      const data = new likemodel({
        likeruid: req.body.likeruid,
        likedto: req.body.likedto,
        name: req.body.name,
        img: req.body.img,
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
  }