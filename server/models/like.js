const mongoose = require("mongoose");

const LikeSchema = mongoose.Schema({
    "likeruid": {},
    "likedto": {},
    "name": {},
    "img": {},
});

module.exports = mongoose.model("Like", LikeSchema);