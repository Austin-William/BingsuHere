const express = require("express");
const router = express.Router();

const { shops } = require("../../data/shops/shops.json");

router.get("/", async (req, res) => {
  try {
    res.status(200).json(shops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;