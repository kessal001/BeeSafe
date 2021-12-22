const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Users", UserSchema,"user");