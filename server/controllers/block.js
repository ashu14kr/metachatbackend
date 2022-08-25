require("../db/db.js");
const blockmodel = require("../models/blockuser");

exports.getblockedUsers = async (req, res) => {
    blockerId = req.query.blockerId;
    try {
      const data = await blockmodel.find({blockerId: blockerId});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }


  exports.checkblockedUsers = async (req, res) => {
    blockerId = req.query.blockerId;
    blockedId = req.query.blockedId;
    try {
      const data = await blockmodel.find({blockerId: blockerId, blockedId: blockedId});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.deleteblock = async (req, res) => {
    blockerId = req.query.blockerId;
    blockedId = req.query.blockedId;
    try {
       const data = await blockmodel.deleteOne({blockerId: blockerId, blockedId: blockedId});
       res.json(data.deletedCount);
    } catch (error) {
        console.log(error);
    }
}


exports.postblock = async (req, res) => {
    try {
      const data = new blockmodel({
        blockerId: req.body.blockerId,
        blockedId: req.body.blockedId,
        blockedName: req.body.blockedName,
        blockedImg: req.body.blockedImg,
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