require("../db/db.js");
const rankingmodel = require("../models/ranking");

exports.getrankings = async (req, res) => {
    try {
      const data = await rankingmodel.find().sort({gifts: -1}).limit(10);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }


  exports.getrankingsbyid = async (req, res) => {
    const _id = req.query._id;
    try {
      const data = await rankingmodel.find({_id: _id});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.updateGifts = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await rankingmodel.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
  }


  exports.postRankings = async (req, res) => {
    try {
      const data = new rankingmodel({
        _id: req.body._id,
        img: req.body.img,
        name: req.body.name,
        gifts: req.body.gifts,
        date: req.body.date,
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