require("../db/db.js");
const levelmodel = require("../models/levelpurchase");

exports.getlevel = async (req, res) => {
    _id = req.query._id;
    try {
      const data = await levelmodel.find({_id: _id});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.deletepurchase = async (req, res) => {
    _id = req.query._id;
    try {
       const data = await levelmodel.deleteOne({_id: _id});
       res.json(data.deletedCount);
    } catch (error) {
        console.log(error);
    }
}


  exports.postPurchase = async (req, res) => {
    try {
      const data = new levelmodel({
        _id: req.body._id,
        duration: req.body.duration,
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