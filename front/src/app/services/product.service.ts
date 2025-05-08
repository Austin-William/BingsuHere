import { Injectable } from '@angular/core';

import { CardLabelsType, Product } from '../types/types';

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

  /**
   * Filters products by alphabetical order
   * @param products The products to filter
   * @returns The filtered products in alphabetical order
   */
  filterProductsByAlphabeticalOrder(products: Product[]): Product[] {
    // Sort products alphabetically
    return products.sort((a, b) => a.title.localeCompare(b.title));
  }

  /**
   * Filters products by reverse alphabetical order
   * @param products The products to filter
   * @returns The filtered products in reverse alphabetical order
   */
  filterProductsByReverseAlphabeticalOrder(products: Product[]): Product[] {
    // Sort products in reverse alphabetical order
    return products.sort((a, b) => b.title.localeCompare(a.title));
  }

  /**
   * Filters products by lowest price
   * @param products The products to filter
   * @returns The filtered products in descending order of price
   */
  filterProductsByLowestPrice(products: Product[]): Product[] {
    // Sort products by price in descending order
    return products.sort((a, b) => (a.options[0].price - a.discount) - (b.options[0].price - b.discount));
  }

  /**
   * Filters products by highest price
   * @param products The products to filter
   * @returns The filtered products in ascending order of price
   */
  filterProductsByHighestPrice(products: Product[]): Product[] {
    // Sort products by price in ascending order
    return products.sort((a, b) => (b.options[0].price - b.discount) - (a.options[0].price - a.discount));
  }

  /**
   * Filters products by featured products
   * @param products The products to filter
   * @returns The filtered products with the 'featured' property set to true
   */
  filterProductsByFeatured(products: Product[]): Product[] {
    // Filter products with the 'featured' property set to true
    return products.filter(product => product.featured);
  }

  /**
   * Filters products if they contains the label
   * @param products The products to filter
   * @param label The label to filter by
   * @returns The filtered products with the contained label
   */
  filterProductsByLabels(products: Product[], label: string): Product[] {
    let filteredProducts: Product[] = [];

    products.filter(product => {
      product.labels.forEach((productLabel: CardLabelsType) => {
        if (productLabel.title.toLowerCase() === label) {
          filteredProducts.push(product);
        }
      });
    });
    return filteredProducts;
  }

  /**
   * Filters products if they  are in discount
   * @param products The products to filter
   * @returns Return the products with discount
   */
  filterProductsByDiscount(products: Product[]): Product[] {
    return products.filter(product => product.discount > 0);
  }

  /**
   * Filters products if they  are available
   * @param products The products to filter
   * @returns Return available products
   */
  filterProductsByAvailability(products: Product[]): Product[] {
    return products.filter(product => product.available);
  }
}