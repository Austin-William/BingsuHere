const express = require("express");
const router = express.Router();

const { products } = require("../../data/products/products.json");

// Get all bingsu products
router.get("/", async (req, res) => {
  try {
    const result = products.bingsu;
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific bingsu product by ID
router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = products.bingsu.find((product) => product.id === productId);
    
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;