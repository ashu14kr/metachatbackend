const mongoose = require("mongoose");

const matchroomSchema = mongoose.Schema({
    
    "_id": {},
    "creatorId": {},
    "connectorId": {},
    "channelId": {},
    "isAvailable": {},
    "status": {}

});

module.exports = mongoose.model("Matchrooms", matchroomSchema);