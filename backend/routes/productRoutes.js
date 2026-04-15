import express from "express";
import Product from "../models/Product.js";
import { createEmbedding } from "../utils/embedding.js";
import productsData from "../data/productsData.js";

const router = express.Router();


// ✅ 1. GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ 2. SEED DATABASE (IMPORTANT: before :id)
router.post("/seed", async (req, res) => {
  try {
    await Product.deleteMany(); // clear old data

    const products = await Promise.all(productsData.map(async (item) => ({
      ...item,
      embedding: await createEmbedding(`${item.name} ${item.description}`)
    })));

    await Product.insertMany(products);

    res.json({
      message: "Database seeded successfully 🚀",
      count: products.length
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ 3. ADD PRODUCTS (single or multiple)
router.post("/add", async (req, res) => {
  try {
    const data = req.body;

    // 🔹 Multiple products
    if (Array.isArray(data)) {
      const products = await Promise.all(data
        .filter(item => item.name && item.description)
        .map(async (item) => ({
          ...item,
          embedding: await createEmbedding(`${item.name} ${item.description}`)
        })));

      await Product.insertMany(products);

      return res.json({
        message: "Products added successfully",
        count: products.length
      });
    }

    // 🔹 Single product
    const { name, description, image } = data;

    if (!name || !description) {
      return res.status(400).json({
        error: "Name and description required"
      });
    }

    const product = new Product({
      name,
      description,
      price: data.price,
      category: data.category,
      stock: data.stock || 10,
      embedding: await createEmbedding(`${name} ${description}`),
      image
    });

    await product.save();

    res.json(product);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ 4. DELETE ALL PRODUCTS
router.delete("/clear", async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: "All products deleted 🗑️" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ 5. GET SINGLE PRODUCT BY ID (ALWAYS LAST)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found ❌" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;