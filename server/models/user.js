const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "_id":{},
    "name":{},
    "nickname":{},
    "email":{},
    "phoneno":{},
    "profileimg":{},
    "location":{},
    "gender":{},
    "status":{},
    "interests":{},
    "levels":{},
    "Oath":{},
    "dob":{},
    "height":{},
    "weight":{},
    "language":{},
    "haircolor":{}
});

module.exports = mongoose.model("Users", userSchema);