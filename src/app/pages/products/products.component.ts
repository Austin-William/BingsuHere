import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../types/types';

import { products } from '../../data/products.json';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class ProductsComponent implements OnInit {
  private route: ActivatedRoute = new ActivatedRoute();

  currentParameterRoute: string = '';
  displayedProducts: Product[] = [];
  products: Product[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentParameterRoute = params['category'];
    });

    this.setDisplayedProducts(this.currentParameterRoute);
  }

  setDisplayedProducts(category: string): void {
    const categoryMap: Record<string, Product[] | undefined> = {
      'desserts': products.desserts,
      'drinks': products.drinks,
      'bingsu': products.bingsu
    };
    const categoryProducts = categoryMap[category];
    
    if (categoryProducts) {
      this.setDisplayCategoriesProducts(categoryProducts);
    }
  }

  setDisplayCategoriesProducts(data: Product[]): void {
    this.displayedProducts = data;
  }
}
