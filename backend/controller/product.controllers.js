import Product from "../model/product.model.js";



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




export const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    return res.json({ error, success: false });
  }
};



export const search = async (req, res) => {
  try {
    const { searchedWord } = req.body;
    const products = await Product.find({
      name: { $regex: searchedWord, $options: "i" },
    });

    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({ error: error, success: false });
  }
};