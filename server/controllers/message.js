require("../db/db.js");
const messagemodel = require("../models/message");


exports.getmessage = async (req, res) => {
    to = req.query.to;
    from = req.query.from;
    try {
        const data = await messagemodel.find(
            {
                $or: [
                    { to: to, from: from },
                    { to: from, from: to }
                ]
            }
        );
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

//   exports.deletefollowing = async (req, res) => {
//     followersid = req.query.followersid;
//     userid = req.query.userid;
//     try {
//        const data = await followingmodel.deleteOne({userid: userid, followersid: followersid});
//        res.json(data.deletedCount);
//     } catch (error) {
//         console.log(error);
//     }
// }


exports.sendmessage = async (req, res) => {
    try {
        const data = new messagemodel({
            to: req.body.to,
            from: req.body.from,
            message: req.body.message,
            media: req.body.media,
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