import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';

import { ShopService } from '../../services/shop.service';
import { ProductService } from '../../services/product.service';

import { LinkComponent } from '../../components/link/link.component';
import { CardComponent } from '../../components/card/card.component';

import { Product } from '../../types/types';

import { links } from "../../data/links.json";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatIconModule, LinkComponent, CardComponent, ImageModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() },
  providers: [ShopService, ProductService]
})

export class HomeComponent {
  products_signature: Product[] = [];
  shops: any[] = [];
  categories_links: any = links;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    },
  ];

  constructor(private shopService: ShopService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getShops();
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    try {
      this.productService.getProductsByCategory('signatures')
        .then((data: any) => {
          this.products_signature = data;
        })
        .catch((error: any) => {
          console.error('Error fetching products:', error);
        });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  async getShops(): Promise<void> {
    try {
      this.shopService.getShopsData()
        .then((data: any) => {
          this.shops = data;
        })
    } catch (error) {
      console.error('Error fetching shops data:', error);
    }
  }
}
