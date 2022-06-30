const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    cartID: Number,
    userID: Number,
    itemsInCart: [Object]
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', CartSchema);