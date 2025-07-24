import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import "./addproduct.css";

const AddProduct = () => {
  const router = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
  });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        productData.name &&
        productData.price &&
        productData.category &&
        productData.quantity &&
        productData.image
      ) {
        const response = await Api.post("/product/create-new-product", {
          productData,
          userId: "your_user_id_here", 
        });

        if (response.data.success) {
          setProductData({
            name: "",
            price: "",
            category: "",
            quantity: "",
            image: "",
          });
          router("/allproducts");
          toast.success(response.data.message);
        }
      } else {
        throw new Error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  };

  useEffect(() => {
    const errorsArray = [];
    if (!productData.name) errorsArray.push("Name is required.");
    if (!productData.price) errorsArray.push("Price is required.");
    if (!productData.category) errorsArray.push("Category is required.");
    if (!productData.quantity) errorsArray.push("Quantity is required.");
    if (!productData.image) errorsArray.push("Image is required.");

    setErrors(errorsArray);
    setDisable(errorsArray.length > 0);
  }, [productData]);

  return (
    <div className="add-product-container">
      <form onSubmit={handleSubmit}>
        <h1>Add New Product</h1>

        <label>Name:</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={productData.name}
        />

        <label>Price:</label>
        <input
          type="number"
          onChange={handleChange}
          name="price"
          value={productData.price}
        />

        <label>Category:</label>
        <input
          type="text"
          onChange={handleChange}
          name="category"
          value={productData.category}
        />

        <label>Quantity:</label>
        <input
          type="number"
          onChange={handleChange}
          name="quantity"
          value={productData.quantity}
        />

        <label>Image URL:</label>
        <input
          type="url"
          onChange={handleChange}
          name="image"
          value={productData.image}
        />

        {errors.length > 0 && (
          <div>
            {errors.map((error, i) => (
              <p className="error-message" key={i}>
                {error}
              </p>
            ))}
          </div>
        )}

        <input disabled={disable} type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
