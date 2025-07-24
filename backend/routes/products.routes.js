import { Router } from "express";
import {
  CreateNewProduct,
  GetAllProducts,
  UpdateProduct,
  DeleteProduct,
  GetProductById
} from "../controller/product.controllers.js";

const router = Router();

router.get("/get-all-product", GetAllProducts);
router.post("/create-new-product", CreateNewProduct);
router.put("/:id", UpdateProduct);
router.delete("/:id", DeleteProduct);
router.get("/:id", GetProductById);   

export default router;
