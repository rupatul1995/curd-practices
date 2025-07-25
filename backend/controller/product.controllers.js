import Product from "../model/product.model.js";


export const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    return res.json({ error, success: false });
  }
};

export const CreateNewProduct = async (req, res) => {
  try {
    const { name, price, category, quantity, image } = req.body.productData;
    const { userId } = req.body;
    if (!name || !price || !category || !quantity || !image || !userId) {
      return res.json({ success: false, error: "All fields are required." });
    }
    const isProductExist = await Product.findOne({
      name,
      category,
      creatorId: userId,
    });
    if (isProductExist) {
      return res.json({ success: false, error: "Product is already exists." });
    }

    const newProduct = new Product({
      name: name,
      price: price,
      category,
      quantity,
      image,
      creatorId: userId,
    });
    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product successfully created.",
    });
  } catch (error) {
    console.log(error, "error");
    return res.json({ error: error, success: false });
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


export const GetProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    return res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("GetProductById Error:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};