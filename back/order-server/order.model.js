const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orderID: Number,
    userID: Number,
    cartID: Number,
    finalPrice: Number,
    city: String,
    street: String,
    deliveryDate: String,
    fourDigits: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);