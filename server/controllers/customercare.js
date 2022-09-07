require("../db/db.js");
const Customercaremodel = require("../models/customercare");

exports.getcustomerquery = async (req, res) => {
    try {
      const data = await Customercaremodel.find({});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.deletequery = async (req, res) => {
    _id = req.query._id;
    try {
      const data = await Customercaremodel.deleteOne({_id: _id});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.postQuerys = async (req, res) => {
    try {
      const data = new Customercaremodel({
        name: req.body.name,
        regarding: req.body.regarding,
        phoneno: req.body.phoneno,
        Query: req.body.Query,
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