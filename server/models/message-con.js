const mongoose = require("mongoose");

const conectionconSchema = mongoose.Schema({
    "connectedId":{},
    "connectedName":{},
    "connectedImg":{},
    "isblocked": {},
    "lastMessage":{},
    "ownerId":{},
})

module.exports = mongoose.model("Connections", conectionconSchema);