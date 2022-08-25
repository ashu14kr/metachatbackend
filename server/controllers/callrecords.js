require("../db/db.js");
const callmodel = require("../models/callrecords");

  exports.getCalls = async (req, res) => {
    uid = req.query.uid;
    try {
      const data = await callmodel.find({uid: uid});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.postCalls = async (req, res) => {
    try {
      const data = new callmodel({
        uid: req.body.uid,
        img: req.body.img,
        name: req.body.name,
        status: req.body.status,
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