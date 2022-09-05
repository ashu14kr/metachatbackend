const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
    "amount": {},
    "date": {},
});

module.exports = mongoose.model("Transactions", TransactionSchema);