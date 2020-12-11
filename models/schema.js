const mongoose = require("mongoose");


const productSchema = 
  mongoose.Schema({
      name:String,
      id:Number,
      duration:Number,
      fee:Number
}); 
const ProductModel = mongoose.model("Product",productSchema);
module.exports = ProductModel; 