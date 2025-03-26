import { Injectable } from '@angular/core';

import { Product } from '../types/types';

import { products } from '../data/products.json';

/**
 * Service for managing products data
 */

@Injectable()
export class ProductService {
  /**
   * Retrieves all products data
   * @returns The products data
   */
  getProductsData() {
    return products;
  }

  /**
   * Finds a product by ID efficiently across all product categories
   * @param id The product ID to search for
   * @returns The product with the matching ID or undefined if not found
   */
  findProductById(id: number) {
    const products: any = this.getProductsData();

    for (const category in products) {
      const categoryProducts = products[category];

      // Search within the current category
      const foundProduct = categoryProducts.find((product: Product) => product.id === Number(id));
      if (foundProduct) {
        return foundProduct;
      }
    }
    
    return undefined;
  }

  /**
   * Retrieves a random product from each category
   * @param category The category to retrieve random products from
   * @param limit The maximum number of products to retrieve. If 0 or empty, all products will be retrieved.
   * @returns An array of random products from each category
   */
  getRandomProducts(category: string, limit?: number) {
    const products: any = this.getProductsData();
    const randomProducts: Product[] = [];

    // If category is not found, return an empty array
    if (!products[category]) {
      return randomProducts; 
    }

    // If limit is 0 or empty, set it to the total number of products in the category
    if (limit === 0 || !limit) {
      limit = products[category].length;
    }

    // Iterate through each category and select a random product
    if (limit) {
      for (let i = 0; i < limit; i++) {
        const categoryProducts = products[category];
        const randomIndex = Math.floor(Math.random() * categoryProducts.length);
        randomProducts.push(categoryProducts[randomIndex]);
      }
    }

    return randomProducts;
  }
}