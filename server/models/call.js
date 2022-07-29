const mongoose = require("mongoose");

const callSchema = mongoose.Schema({
    "_id": {},
    "callerId": {},
    "callerName":{},
    "callerPic":{},
    "receiverId":{},
    "receiverName":{},
    "receiverPic":{},
    "channelId":{},
    "hasDialled":{}
});

module.exports = mongoose.model("Calls", callSchema);