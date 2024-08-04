// back-end/models/product_model.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true } // URL to the image
});

module.exports = mongoose.model('Product', ProductSchema);
