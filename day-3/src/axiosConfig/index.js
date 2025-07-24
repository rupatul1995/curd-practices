import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/api/v1/product/get-all-product",
  withCredentials: true,
});

export default Api;