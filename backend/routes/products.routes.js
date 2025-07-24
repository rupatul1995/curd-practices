import { Router } from "express";
import {
  CreateNewProduct,
  GetAllProducts,
  UpdateProduct,
  DeleteProduct
} from "../controller/product.controllers.js";

const router = Router();

router.get("/get-all-product", GetAllProducts);
router.post("/create-new-product", CreateNewProduct);
router.put("/:id", UpdateProduct);
router.delete("/:id", DeleteProduct);

export default router;
