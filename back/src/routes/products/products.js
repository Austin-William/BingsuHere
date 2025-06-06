const express = require("express");
const router = express.Router();

const { products } = require("../../data/products/products.json");

// Get all products
router.get("/", async (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;