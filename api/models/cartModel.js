const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  products: { // product ?
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  items: [cartItemSchema],
  total_price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("cart", cartSchema);