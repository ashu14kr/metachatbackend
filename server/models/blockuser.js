const mongoose = require("mongoose");

const BlockSchema = mongoose.Schema({
    "blockerId": {},
    "blockedId": {},
    "blockedName": {},
    "blockedImg": {},
});

module.exports = mongoose.model("Blocks", BlockSchema);