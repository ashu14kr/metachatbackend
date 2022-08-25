const mongoose = require("mongoose");

const userVideosSchema = mongoose.Schema({
    "uid":{},
    "private":{},
    "video":{},
});

module.exports = mongoose.model("Uservideos", userVideosSchema);