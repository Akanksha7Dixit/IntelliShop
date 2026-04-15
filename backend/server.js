import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; 

import productRoutes from "./routes/productRoutes.js";
import recommendRoutes from "./routes/recommendRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/api/products", productRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});