const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    imagePath: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);