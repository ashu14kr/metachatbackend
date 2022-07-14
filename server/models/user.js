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
    "userimgs":{},
    "uservideos":{},
    "Oath":{},
    "dob":{},
    "height":{},
    "weight":{},
    "language":{},
    "haircolor":{}
});

module.exports = mongoose.model("Users", userSchema);