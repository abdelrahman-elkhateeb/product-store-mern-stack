import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/productRoute.js";

dotenv.config();

const app = express();

app.use(express.json()); //allow us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
