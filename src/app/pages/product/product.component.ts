import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';

import { Product } from '../../types/types';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() },
  providers: [ProductService]
})

export class ProductComponent implements OnInit  {
  @Input() product: Product | undefined = undefined;

  slug: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setSlugFromUrl();
    this.setProduct();
  }

  setSlugFromUrl(): void {
    this.route.params.subscribe(params => {
      this.slug = params['id'];
    });
  }

  setProduct(): void {
    this.product = this.productService.findProductById(this.slug);
  }
}
