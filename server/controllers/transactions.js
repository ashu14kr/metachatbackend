require("../db/db.js");
const transactionmodel = require("../models/transactions");

exports.gettransactions = async (req, res) => {
    try {
      const data = await transactionmodel.find({});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }


  exports.postTransactions = async (req, res) => {
    try {
      const data = new transactionmodel({
        amount: req.body.amount,
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