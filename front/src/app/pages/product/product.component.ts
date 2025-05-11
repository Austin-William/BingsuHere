import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

import { LabelComponent } from '../../components/label/label.component';
import { CardComponent } from '../../components/card/card.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { SkeletonModule } from 'primeng/skeleton';

import { ProductService } from '../../services/product.service';

import { Product } from '../../types/types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [LabelComponent, CardComponent, CarouselModule, SpinnerComponent, SkeletonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss', './product-skeleton.scss'],
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() },
  providers: [ProductService]
})

export class ProductComponent implements OnInit {
  @Input() product: Product | undefined = undefined;

  slug: number = 0;
  category: string = '';
  selectedOptionId: number = 0;
  selectedOptionValue: string = '';
  isDiscount: boolean = false;
  displayedPrice: number = 0;
  priceBeforeDiscount: number = 0;
  randomProducts: Product[] = [];
  loadingCarouselRandomProduct: boolean = false;
  loadingProduct: boolean = false;

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

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadingCarouselRandomProduct = true;
    this.loadingProduct = true;
    this.setSlugFromUrl();
    this.setProduct();
    this.productService.getRandomProducts('bingsu', 8).then(products => {
        this.randomProducts = products;
      }).catch(error => {
        console.error('Error fetching random products:', error);
      }).finally(() => {
        this.loadingCarouselRandomProduct = false;
      });
  }

  setSlugFromUrl(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.slug = params['id'];
    });
  }

  setProduct(): void {
    this.productService.getProductById(this.slug, this.category).then(product => {
      this.product = product;
      this.setDefaultChooseOption(product);
    })
    .catch(error => {
      console.error('Error fetching product:', error);
    })
   .finally(() => {
      this.loadingProduct = false;
    });
  }

  setDefaultChooseOption(product: Product): void {
    if (product && product.options && product.options.length > 0) {
      this.selectedOptionId = product.options[0].id;
      this.selectedOptionValue = product.options[0].value;
      this.setDiscountPrice(product.options[0].price, product.discount);
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
