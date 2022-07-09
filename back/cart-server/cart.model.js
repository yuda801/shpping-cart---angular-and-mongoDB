const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    cartID: String,
    userID: String,
    itemsInCart: [Object]
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', CartSchema);