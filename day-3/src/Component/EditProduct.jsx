import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
  });

  useEffect(() => {
    const product = products.find((p) => p.id === id);
    if (product) setForm(product);
  }, [id, products]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((p) =>
      p.id === id ? form : p
    );
    setProducts(updatedProducts);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <input name="name" value={form.name} onChange={handleChange} required /><br />
        <input name="price" type="number" value={form.price} onChange={handleChange} required /><br />
        <input name="category" value={form.category} onChange={handleChange} required /><br />
        <input name="quantity" type="number" value={form.quantity} onChange={handleChange} required /><br />
        <input name="image" value={form.image} onChange={handleChange} required /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
