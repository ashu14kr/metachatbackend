const mongoose = require("mongoose");

const conectionconSchema = mongoose.Schema({
    "connectedId":{},
    "connectedName":{},
    "connectedImg":{},
    "lastMessage":{},
    "ownerId":{},
})

module.exports = mongoose.model("Connections", conectionconSchema);