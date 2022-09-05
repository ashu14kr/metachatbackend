require("../db/db.js");
const interestmodel = require("../models/interest");

exports.getinterest = async (req, res) => {
    try {
      const data = await interestmodel.find({});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }


  exports.deleteInterests = async (req, res) => {
    _id = req.query._id;
    try {
       const data = await interestmodel.deleteOne({_id: _id});
       res.json(data.deletedCount);
    } catch (error) {
        console.log(error);
    }
}


  exports.postInterests = async (req, res) => {
    try {
      const data = new interestmodel({
        title: req.body.title,
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