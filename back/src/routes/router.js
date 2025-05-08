const express = require('express');

const products = require('./products/products.js');

const { Router } = express;
const router = new Router();

router.use('/products', products);

module.exports = router;