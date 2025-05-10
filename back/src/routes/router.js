const express = require('express');
const products = require('./products/products.js');
const bingsu = require('./products/bingsu.js');
const signature = require('./products/signature.js');
const drinks = require('./products/drinks.js');
const frozenYogurt = require('./products/frozen-yogurt.js');
const desserts = require('./products/desserts.js');
const shops = require('./shops/shops.js');

const routes = express();

// Products routes
routes.use('/products', products);
routes.use('/products/bingsu', bingsu);
routes.use('/products/signatures', signature);
routes.use('/products/drinks', drinks);
routes.use('/products/frozen-yogurt', frozenYogurt);
routes.use('/products/desserts', desserts);

// Shops routes
routes.use('/shops', shops);

module.exports = routes;