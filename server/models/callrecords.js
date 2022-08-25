const mongoose = require("mongoose");

const CallRecordsSchema = mongoose.Schema({
    "uid": {},
    "img": {},
    "name": {},
    "status": {},
});

module.exports = mongoose.model("CallRecords", CallRecordsSchema);