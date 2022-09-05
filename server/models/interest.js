const mongoose = require("mongoose");

const InterestSchema = mongoose.Schema({
    "title": {},
});

module.exports = mongoose.model("Interests", InterestSchema);