const mongoose = require("mongoose");

const BalanceSchema = mongoose.Schema({
    "userid": {},
    "followersid": {}
});

module.exports = mongoose.model("Follower", BalanceSchema);