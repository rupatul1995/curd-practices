import Product from "../model/product.model.js";
// import mongoose from "mongoose";
// const Product  = mongoose.model("Product");
export const CreateNewProduct = async (req, res) => {
  try {
    const { name, price, category, quantity, image } = req.body.productData;

    if (!name || !price || !category || !quantity || !image) {
      return res.json({ success: false, error: "All fields are required." });
    }

    const isExist = await Product.findOne({ name, category });
    if (isExist) {
      return res.json({ success: false, error: "Product already exists." });
    }

    const newProduct = new Product({ name, price, category, quantity, image });
    await newProduct.save();

    return res.status(201).json({ success: true, message: "Product created." });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.json({ success: true, products });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const GetSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, error: "Product not found." });
    return res.status(200).json({ success: true, product });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const { name, price, category, quantity, image } = req.body.productData;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, category, quantity, image },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ success: false, error: "Product not found." });
    return res.json({ success: true, message: "Product updated successfully.", updatedProduct });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};



export const DeleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: "Product deleted successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
