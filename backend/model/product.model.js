import mongoose, { Schema, model } from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  quantity: Number,
  image: String,
});

const Product = model("Product", productSchema);
// you should add mongoos like below
// mongoose.model("Product", productSchema);
// or
// mongoose.Product
export default Product;