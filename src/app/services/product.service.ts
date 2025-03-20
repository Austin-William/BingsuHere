import { Injectable } from '@angular/core';
import { products } from '../data/products.json';

@Injectable()
export class ProductService {
  getProductsData() {
    return products;
  }

  getProductById(id: number) {
    return Object.values(products).flat().find(product => product.id === id);
  }
}