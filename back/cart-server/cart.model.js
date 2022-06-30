const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    cartId: Number,
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

module.exports = mongoose.model('Cart', CartSchema);