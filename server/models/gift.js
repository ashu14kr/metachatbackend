const mongoose = require("mongoose");

const GiftSchema = mongoose.Schema({
    "userId": {},
    "giftCode": {}
});

module.exports = mongoose.model("Gifts", GiftSchema);