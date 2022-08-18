require("../db/db");
const matchroom = require("../models/matchroom.js");

exports.postmatch = async (req, res) => {
    try {
        const data = new matchroom({
            _id: req.body._id,
            creatorId: req.body.creatorId,
            connectorId: req.body.connectorId,
            channelId: req.body.channelId,
            isAvailable: req.body.isAvailable,
            status: req.body.status
        });
        await data.save().then(() => {
            res.json(data);
        }).catch((e) => {
            console.log(e);
        });
    } catch (error) {
        console.log(error);
    }
}


exports.getmatch = async (req, res) => {
    try {
        const data = await matchroom.find({}).sort({_id:-1});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.getmatchById = async (req, res) => {
    _id = req.query._id;
    try {
        const data = await matchroom.find({_id: _id}).sort({_id:-1});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.match = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await matchroom.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
}

