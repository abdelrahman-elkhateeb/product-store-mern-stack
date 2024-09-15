import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/productModel.js";

dotenv.config();

const app = express();

app.use(express.json()); //allow us to accept JSON data in the req.body

app.post("/api/products", async (req, res) => {
  const product = req.body; //user will send this data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  const newProduct = new Product(product);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json({ success: true, data: savedProduct });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "error in creating product", err });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
