import { Router } from "express";
import {
  CreateNewProduct,
  GetAllProducts,
  search
} from "../controller/product.controllers.js";

const router = Router();

router.get("/get-all-product", GetAllProducts);
router.post("/create-new-product",  CreateNewProduct);
router.post("/search", search);

export default router;