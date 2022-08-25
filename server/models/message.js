const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    "to": {},
    "from": {},
    "message": {},
    "media": {},
});

module.exports = mongoose.model("Message", MessageSchema);