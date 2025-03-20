import { Injectable } from '@angular/core';

import { Product } from '../types/types';

import { products } from '../data/products.json';

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
}