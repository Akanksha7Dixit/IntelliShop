import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    embedding: [Number], // vector
    image: String,
});

export default mongoose.model("Product", productSchema);