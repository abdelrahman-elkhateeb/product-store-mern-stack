import express from "express";

const router = express.Router();

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

router.get("/", getProducts).post("/", createProduct);
router.delete("/:id", deleteProduct).put("/:id", updateProduct);

export default router;
