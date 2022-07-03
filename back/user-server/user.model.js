const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userID: Number,
    userName: String,//email
    password: Number,
    firstName: String,
    lastName: String,
    ssn: Number,
    buyerCity: String,
    buyerStrret: String,
    roll: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);