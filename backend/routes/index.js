import { Router } from "express";
import ProductRoutes from "./products.routes.js";
const router = Router();


router.use("/product", ProductRoutes);

export default router;