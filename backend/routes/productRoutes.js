import express from "express";
import Product from "../models/Product.js";
import { createEmbedding } from "../utils/embedding.js";

const router = express.Router();

// Add product(s)
router.post("/add", async (req, res) => {
    try {
        const data = req.body;

        // ✅ If array of products
        if (Array.isArray(data)) {
            const products = [];

            for (const item of data) {
                const { name, description } = item;

                if (!name || !description) continue;

                const embedding = createEmbedding(`${name} ${description}`);

                products.push({
                    name,
                    description,
                    embedding,
                    image
                });
            }

            await Product.insertMany(products);

            return res.json({ message: "Products added successfully" });
        }

        // ✅ Single product
        const { name, description } = data;

        if (!name || !description) {
            return res.status(400).json({
                error: "Name and description required"
            });
        }

        const embedding = createEmbedding(`${name} ${description}`);

        const product = new Product({
            name,
            description,
            embedding,
            image
        });

        await product.save();

        res.json(product);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete all products
router.delete("/clear", async (req, res) => {
    try {
        await Product.deleteMany({});
        res.json({ message: "All products deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;