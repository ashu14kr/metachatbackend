const mongoose = require("mongoose");

const CustomerCareSchema = mongoose.Schema({
    "name": {},
    "regarding": {},
    "phoneno": {},
    "Query": {}
});

module.exports = mongoose.model("CustomerCare", CustomerCareSchema);