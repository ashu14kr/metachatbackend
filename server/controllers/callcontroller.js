require("../db/db");
const callmodel = require("../models/call");

exports.postcalls = async (req, res) => {
    try {
        const data = new callmodel({
            _id: req.body._id,
            callerId: req.body.callerId,
            callerName: req.body.callerName,
            callerPic: req.body.callerPic,
            receiverId: req.body.receiverId,
            receiverName: req.body.receiverName,
            receiverPic: req.body.receiverPic,
            channelId: req.body.channelId,
            hasDialled: req.body.hasDialled,
        });
        await data.save().then(()=> {
            res.json(data);
        }).catch((e)=>{
            console.log(e);
        });
    } catch (error) {
        console.log(error);
    }
}


exports.getcalls = async (req, res) => {
    _id = req.query._id;
    try {
        const data = await callmodel.find({_id: _id});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.deletecalls = async (req, res) => {
    _id = req.query._id;
    try {
       const data = await callmodel.deleteOne({_id: _id});
       res.json(data.deletedCount);
    } catch (error) {
        console.log(error);
    }
}
