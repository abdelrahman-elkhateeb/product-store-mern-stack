import mongoose from "mongoose";
import dotenv from dotenv;

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch {
    console.error("Error connecting to MongoDB");
    process.exit(1);
  }
};
