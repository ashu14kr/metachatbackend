const mongoose = require("mongoose");

const BalanceSchema = mongoose.Schema({
    "_id": {},
    "balance": {},
});

module.exports = mongoose.model("Balance", BalanceSchema);