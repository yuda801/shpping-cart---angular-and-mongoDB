const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    userName: String,
    snn: Number,
    password: Number,
    buyerCity: String,
    buyerStrret: String,
    roll: String,
    id: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);