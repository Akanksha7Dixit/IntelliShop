import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import productsData from "./data/productsData.js";
import { createEmbedding } from "./utils/embedding.js";

dotenv.config();

const seedDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected!");

        console.log("Deleting old products...");
        await Product.deleteMany();

        console.log("Generating embeddings and inserting new products (this may take a minute for the models to download on first run)...");
        const products = await Promise.all(productsData.map(async (item, index) => {
            console.log(`Processing ${index + 1}/${productsData.length}: ${item.name}`);
            const embedding = await createEmbedding(`${item.name} ${item.description}`);
            return {
                ...item,
                embedding
            };
        }));

        await Product.insertMany(products);

        console.log(`Database seeded successfully with ${products.length} products!`);
        process.exit();
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedDB();
