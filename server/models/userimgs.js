const mongoose = require("mongoose");

const userImgsSchema = mongoose.Schema({
    "uid":{},
    "private":{},
    "img":{},
});

module.exports = mongoose.model("UserImgs", userImgsSchema);