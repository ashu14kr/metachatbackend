const mongoose = require("mongoose");

const userVideosSchema = mongoose.Schema({
    "uid":{},
    "video":{},
});

module.exports = mongoose.model("Uservideos", userVideosSchema);