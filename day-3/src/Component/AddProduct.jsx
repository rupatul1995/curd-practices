import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ products, setProducts }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...form,
      id: Date.now().toString(),
    };
    setProducts([...products, newProduct]);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} required /><br />
        <input name="category" placeholder="Category" onChange={handleChange} required /><br />
        <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} required /><br />
        <input name="image" placeholder="Image URL" onChange={handleChange} required /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
