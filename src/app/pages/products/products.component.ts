import { Component, OnInit, signal  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardComponent } from '../../components/card/card.component';

import { ProductService } from '../../services/product.service';

import { Product } from '../../types/types';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() },
  providers: [ProductService]
})

export class ProductsComponent implements OnInit {
  currentParameterRoute: string = '';
  displayedProducts: Product[] = [];
  products = signal<Product[]>([]);
  layout: 'grid' | 'list' = 'grid';
  
  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params?.subscribe(params => {
      this.currentParameterRoute = params['category'];
    });

    this.setDisplayedProducts(this.currentParameterRoute);
  }

  setDisplayedProducts(category: string): void {
    const products = this.productService.getProductsData();
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
