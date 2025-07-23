import React, { useEffect, useState } from "react";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await Api.get("/product");
    setProducts(res.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await Api.delete(`/product/${id}`);
    toast.success("Product deleted");
    fetchProducts();
  };

  return (
    <div>
      <h1>All Products</h1>
      <button onClick={() => navigate("/add")}>Add New Product</button>
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            <img src={p.image} alt={p.name} width="80" /><br />
            <strong>{p.name}</strong><br />
            ₹{p.price} | {p.category} | Qty: {p.quantity}<br />
            <button onClick={() => navigate(`/edit/${p._id}`)}>Edit</button>
            <button onClick={() => deleteProduct(p._id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;