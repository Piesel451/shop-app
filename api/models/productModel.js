const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    category: String,
    type: String,
    price: Number
});
  
module.exports =  mongoose.model("products", productSchema);