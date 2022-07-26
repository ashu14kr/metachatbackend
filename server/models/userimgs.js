const mongoose = require("mongoose");

const userImgsSchema = mongoose.Schema({
    "uid":{},
    "img":{},
});

module.exports = mongoose.model("UserImgs", userImgsSchema);