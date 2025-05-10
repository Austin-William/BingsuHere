const express = require("express");
const router = express.Router();

const { products } = require("../../data/products/products.json");

// Get all frozen-yogurt products
router.get("/", async (req, res) => {
  try {
    const result = products["frozen-yogurt"];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

// Get a specific frozen-yogurt product by ID
router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = products["frozen-yogurt"].find((product) => product.id === productId);
    
    if (!product) {
      return res.status(404).json({ error: "Frozen-yogurt not found" });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;