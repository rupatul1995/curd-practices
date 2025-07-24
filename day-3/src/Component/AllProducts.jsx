
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../axiosConfig";
import toast from "react-hot-toast";
import "./allproducts.css";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useNavigate();

  useEffect(() => {
    Api.get("/product/get-all-product")
      .then(res => {
        if (res.data.success) setProducts(res.data.products);
      })
      .catch(err => toast.error("Error loading products"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      const res = await Api.delete(`/product/${id}`);
      if (res.data.success) {
        setProducts(products.filter(p => p._id !== id));
        toast.success(res.data.message);
      }
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="all-products-container">
      <h1>All Products</h1>
      {loading ? <p>Loading...</p> : (
        <div className="product-grid">
          {products.map(p => (
            <div key={p._id} className="product-card">
              <img src={p.image} alt={p.name} className="product-image"/>
              <h3>{p.name}</h3>
              <p>₹ {p.price}</p>
              <div className="actions">
                <button onClick={() => router(`/edit/${p._id}`)}>Edit</button>
                <button onClick={() => handleDelete(p._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProducts;
