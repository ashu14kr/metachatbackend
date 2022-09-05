const mongoose = require("mongoose");

const PolicySchema = mongoose.Schema({
    "privacylink": {},
    "policylink": {}
});

module.exports = mongoose.model("PrivacyPolicy", PolicySchema);