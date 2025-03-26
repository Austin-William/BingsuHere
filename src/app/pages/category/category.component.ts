import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardComponent } from '../../components/card/card.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

import { ProductService } from '../../services/product.service';

import { Product } from '../../types/types';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CardComponent, SpinnerComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() },
  providers: [ProductService]
})

export class CategoryComponent implements OnInit {
  currentParameterRoute: string = '';
  currentTitle: string = '';
  displayedProducts: Product[] = [];
  isLoading: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setRouteParameter();
  }

  setRouteParameter(): void {
    this.route.params.subscribe(params => {
      this.setCurrentParameterRoute(params['category']);
      this.setDisplayedProducts();
      this.setCurrentTitle();
    });
  }

  setIsLoading(value: boolean): void {
    this.isLoading = value;
  }

  setCurrentTitle(): void {
    const titleMap: Record<string, string | undefined> = {
      'desserts': 'Desserts',
      'drinks': 'Drinks',
      'bingsu': 'Bingsu',
      'frozen-yogurt': 'Frozen Yogurts',
      'cakes': 'Cakes',
    };
    this.currentTitle = titleMap[this.currentParameterRoute] || '';
  }

  setDisplayedProducts(): void {
    const products = this.productService.getProductsData();
    const categoryMap: Record<string, Product[] | undefined> = {
      'desserts': products.desserts,
      'drinks': products.drinks,
      'bingsu': products.bingsu,
      'frozen-yogurt': products['frozen-yogurt'],
      'cakes': products.cakes,
    };
    const categoryProducts = categoryMap[this.currentParameterRoute]

    if (categoryProducts) {
      this.setIsLoading(false);
      this.setDisplayCategoriesProducts(categoryProducts);
    } else {
      this.setIsLoading(true);
    }
  }

  setCurrentParameterRoute(parameter: string): void {
    this.currentParameterRoute = parameter;
  }

  setDisplayCategoriesProducts(data: Product[]): void {
    this.displayedProducts = data;
  }
}
