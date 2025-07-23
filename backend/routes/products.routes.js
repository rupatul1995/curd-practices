import { Router } from "express";
import {
  CreateNewProduct,
  filter,
  GetAllProducts,
  GetSingleProducts,
  search
} from "../controller/product.controllers.js";

const router = Router();

router.get("/get-all-product", GetAllProducts);
router.post("/get-single-product", GetSingleProducts);
router.post("/create-new-product",  CreateNewProduct);
router.post("/filter", filter);
router.post("/search", search);

export default router;