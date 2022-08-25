const mongoose = require("mongoose");

const matchroomSchema = mongoose.Schema({
    
    "_id": {},
    "creatorId": {},
    "connectorId": {},
    "channelId": {},
    "likes":{},
    "isAvailable": {},
    "status": {}

});

module.exports = mongoose.model("Matchrooms", matchroomSchema);