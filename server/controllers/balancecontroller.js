require("../db/db.js");
const balancemodel = require("../models/balance");

exports.getBalance = async (req, res) => {
    _id = req.query._id;
    try {
      const data = await balancemodel.find({_id: _id});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  exports.postBalance = async (req, res) => {
    try {
      const data = new balancemodel({
        _id: req.body._id,
        balance: req.body.balance,
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


  exports.updateBalance = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await balancemodel.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
  }