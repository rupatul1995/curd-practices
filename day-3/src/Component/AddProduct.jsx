import React, { useState, useEffect } from "react";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
  });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post("/product/create", { productData });
      if (res.data.success) {
        toast.success("Product created!");
        navigate("/allproducts");
      } else {
        toast.error(res.data.error || "Failed to create product.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    const errs = [];
    if (!productData.name) errs.push("Name is required.");
    if (!productData.price) errs.push("Price is required.");
    if (!productData.category) errs.push("Category is required.");
    if (!productData.quantity) errs.push("Quantity is required.");
    if (!productData.image) errs.push("Image URL is required.");
    setErrors(errs);
    setDisable(errs.length > 0);
  }, [productData]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input type="text" name="name" placeholder="Name" value={productData.name} onChange={handleChange} /><br />
      <input type="number" name="price" placeholder="Price" value={productData.price} onChange={handleChange} /><br />
      <input type="text" name="category" placeholder="Category" value={productData.category} onChange={handleChange} /><br />
      <input type="number" name="quantity" placeholder="Quantity" value={productData.quantity} onChange={handleChange} /><br />
      <input type="url" name="image" placeholder="Image URL" value={productData.image} onChange={handleChange} /><br />

      {errors.length > 0 && <div>{errors.map((err, i) => <p key={i}>{err}</p>)}</div>}

      <button disabled={disable} type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
