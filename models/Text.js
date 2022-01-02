const mongoose = require("mongoose");


const TextSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Texts", TextSchema,"text");