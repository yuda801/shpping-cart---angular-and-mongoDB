const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userID: Number,
    userName: String,//email
    ssn: Number,
    password: String,
    firstName: String,
    lastName: String,
    buyerCity: String,
    buyerStreet: String,
    roll: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);