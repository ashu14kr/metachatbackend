const mongoose = require("mongoose");

const LevelPurchaseSchema = mongoose.Schema({
    "_id": {},
    "duration": {}
});

module.exports = mongoose.model("LevelPurchase", LevelPurchaseSchema);