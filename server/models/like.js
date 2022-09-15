const mongoose = require("mongoose");

const LikeSchema = mongoose.Schema({
    "likeruid": {},
    "likedto": {},
    "name": {},
    "img": {},
    "name1": {},
    "img1": {},
});

module.exports = mongoose.model("Like", LikeSchema);