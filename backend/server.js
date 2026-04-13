import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import recommendRoutes from "./routes/recommendRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/api/products", productRoutes);
app.use("/api/recommend", recommendRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});