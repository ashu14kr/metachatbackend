require("../db/db.js");
const followingmodel = require("../models/following");

exports.getfollowing = async (req, res) => {
    followersid = req.query.followersid;
    try {
      const data = await followingmodel.find({followersid: followersid});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }


  exports.checkFollowing = async (req, res) => {
    followersid = req.query.followersid;
    userid = req.query.userid;
    try {
      const data = await followingmodel.find({userid: userid, followersid: followersid});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.deletefollowing = async (req, res) => {
    followersid = req.query.followersid;
    userid = req.query.userid;
    try {
       const data = await followingmodel.deleteOne({userid: userid, followersid: followersid});
       res.json(data.deletedCount);
    } catch (error) {
        console.log(error);
    }
}


  exports.postFollowing = async (req, res) => {
    try {
      const data = new followingmodel({
        userid: req.body.userid,
        followersid: req.body.followersid,
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