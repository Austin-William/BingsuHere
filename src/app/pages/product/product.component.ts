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
  selectedOptionId: number = 0;
  selectedOptionValue: string = '';
  isDiscount: boolean = false;
  displayedPrice: number = 0;
  priceBeforeDiscount: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setSlugFromUrl();
    this.setProduct();
    this.setDefaultChooseOption();
  }

  setSlugFromUrl(): void {
    this.route.params.subscribe(params => {
      this.slug = params['id'];
    });
  }

  setProduct(): void {
    this.product = this.productService.findProductById(this.slug);
  }

  setDefaultChooseOption(): void {
    if (this.product && this.product.options && this.product.options.length > 0) {
      this.selectedOptionId = this.product.options[0].id;
      this.selectedOptionValue = this.product.options[0].value;
      this.setDiscountPrice(this.product.options[0].price, this.product.discount);
    }
  }

  handleSelectedOption(id: number, value: string, price: number): void {
    this.selectedOptionId = id;
    this.selectedOptionValue = value;
    this.setDiscountPrice(price, this.product?.discount ? this.product.discount : 0);
  }

  setDiscountPrice(basePrice: number, discountPrice: number): void {
    if (discountPrice > 0) {
      this.isDiscount = true;
      this.priceBeforeDiscount = basePrice;
    }
    this.displayedPrice = basePrice - discountPrice;
  }
}
