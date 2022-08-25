require("../db/db");
const connectionModel = require("../models/message-con");

exports.postConnections = async (req, res) => {
  try {
    const data = new connectionModel({
      connectedId: req.body.connectedId,
      connectedName: req.body.connectedName,
      connectedImg: req.body.connectedImg,
      isblocked: req.body.isblocked,
      lastMessage: req.body.lastMessage,
      ownerId: req.body.ownerId,
    });
    await data
      .save()
      .then(() => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  } catch (error) {
    console.log(error);
  }
};

exports.getConnections = async (req, res) => {
  connectedId = req.query.connectedId;
  ownerId = req.query.ownerId;
  try {
    const data = await connectionModel.find({
      connectedId: connectedId,
      ownerId: ownerId
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};


exports.getConnectionById = async (req, res) => {
  ownerId = req.query.ownerId;
  try {
    const data = await connectionModel.find({
      ownerId: ownerId,
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}


exports.changeStatus = async (req, res) => {
  const connectedId = req.query.connectedId;
      try {
          const data = await connectionModel.findOneAndUpdate(connectedId , req.body, {
              new: true
          });
          res.json(data);
      } catch (error) {
          console.log(error);
      }
}
