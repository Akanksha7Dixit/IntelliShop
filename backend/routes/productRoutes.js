import express from "express";
import Product from "../models/Product.js";
import { createEmbedding } from "../utils/embedding.js";
import { cosineSimilarity } from "../utils/similarity.js";

const router = express.Router();


// ✅ BULK ADD PRODUCTS (array input)
router.post("/add", async (req, res) => {
  try {
    const products = req.body; // expecting array

    // validation
    if (!Array.isArray(products)) {
      return res.status(400).json({
        error: "Please send an array of products",
      });
    }

    const savedProducts = [];

    for (let p of products) {
      // skip invalid entries
      if (!p.title || !p.description) continue;

      const embedding = await createEmbedding(p.description);

      const product = new Product({
        title: p.title,
        description: p.description,
        embedding,
      });

      await product.save();
      savedProducts.push(product);
    }

    res.json(savedProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 🔍 RECOMMEND PRODUCTS
router.post("/recommend", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const queryEmbedding = await createEmbedding(query);

    const products = await Product.find();

    const scored = products.map((p) => ({
      product: p,
      score: cosineSimilarity(queryEmbedding, p.embedding),
    }));

    // sort by similarity
    scored.sort((a, b) => b.score - a.score);

    res.json(scored.slice(0, 5)); // top 5 results
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;