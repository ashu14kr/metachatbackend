const mongoose = require("mongoose");

const RankingSchema = mongoose.Schema({
    "_id": {},
    "img": {},
    "name": {},
    "gifts": {},
    "date": {},
});

module.exports = mongoose.model("Rankings", RankingSchema);