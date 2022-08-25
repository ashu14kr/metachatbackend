require("../db/db.js");
const giftmodel = require("../models/gift");

exports.getgift = async (req, res) => {
    userId = req.query.userId;
    giftCode = req.query.giftCode;
    try {
      const data = await giftmodel.find({userId: userId, giftCode: giftCode});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }


  exports.getgiftbyid = async (req, res) => {
    userId = req.query.userId;
    try {
      const data = await giftmodel.find({userId: userId});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }




  exports.postgift = async (req, res) => {
    try {
      const data = new giftmodel({
        userId: req.body.userId,
        giftCode: req.body.giftCode,
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