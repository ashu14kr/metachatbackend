const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "_id":{},
    "name":{},
    "email":{},
    "phoneno":{},
    "profileimg":{},
    "location":{},
    "gender":{},
    "status":{},
    "interests":{},
    "userimgs":{}
});

module.exports = mongoose.model("Users", userSchema);