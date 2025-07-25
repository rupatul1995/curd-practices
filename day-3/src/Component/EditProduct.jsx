import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import "./editproduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
  });
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await Api.get(`/product/${id}`);
      if (res.data.success) {
        setProductData(res.data.product);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const { name, price, category, quantity, image } = productData;
    setDisable(!(name && price && category && quantity && image));
  }, [productData]);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.put(`/product/${id}`, { productData });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  return (
  <div className="edit-product-container">
    <form onSubmit={handleSubmit}>
      <h1>Edit Product</h1>
      <label>Name:</label>
      <input type="text" name="name" value={productData.name} onChange={handleChange} />

      <label>Price:</label>
      <input type="number" name="price" value={productData.price} onChange={handleChange} />

      <label>Category:</label>
      <input type="text" name="category" value={productData.category} onChange={handleChange} />

      <label>Quantity:</label>
      <input type="number" name="quantity" value={productData.quantity} onChange={handleChange} />

      <label>Image URL:</label>
      <input type="url" name="image" value={productData.image} onChange={handleChange} />

      <input disabled={disable} type="submit" value="Update Product" />
    </form>
  </div>
);
}

export default EditProduct;
