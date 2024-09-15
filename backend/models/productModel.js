import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  timestamps: true, // createdAt, updatedAt
});

const Product = mongoose.model("Product", productSchema);

export default Product;
