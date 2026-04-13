import express from "express";
import Product from "../models/Product.js";
import { createEmbedding } from "../utils/embedding.js";
import { cosineSimilarity } from "../utils/similarity.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { query } = req.body;

        const queryEmbedding = await createEmbedding(query);

        const products = await Product.find();

        const scoredProducts = products.map(product => {
            const score = cosineSimilarity(queryEmbedding, product.embedding);
            return { product, score };
        });

        scoredProducts.sort((a, b) => b.score - a.score);

        const topResults = scoredProducts.slice(0, 5);

        res.json(topResults);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;