import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LabelComponent } from '../label/label.component';

import { CardOptionType, CardLabelsType } from '../../types/types';

@Component({
  selector: 'app-card',
  imports: [LabelComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class CardComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() type: string = '';
  @Input() imagePath: string = '';
  @Input() featured: boolean = false;
  @Input() available: boolean = false;
  @Input() labels: CardLabelsType[] = [];
  @Input() options: CardOptionType[] = [];
  @Input() discount: number = 0;
  @Input() kcal: number = 0;

  selectedOptionId: number = 0;
  selectedOptionValue: string = '';
  displayedPrice: number = 0;
  priceBeforeDiscount: number = 0;
  classType: string = '';
  isDiscount: boolean = false;

  setDefaultChooseOption(): void {
    if (this.options && this.options.length > 0) {
      this.selectedOptionId = this.options[0].id;
      this.selectedOptionValue = this.options[0].value;
      this.setDiscountPrice(this.options[0].price, this.discount);
    }
  }

  handleSelectedOption(id: number, value: string, price: number): void {
    this.selectedOptionId = id;
    this.selectedOptionValue = value;
    this.setDiscountPrice(price, this.discount);
  }

  setClassType() {
    switch (this.type) {
      case 'carousel':
        this.classType = 'card-carousel';
        break;
      default:
        this.classType = '';
        break;
    }
  }

  setDiscountPrice(basePrice: number, discountPrice: number): void {
    if (discountPrice > 0) {
      this.isDiscount = true;
      this.priceBeforeDiscount = basePrice;
    }
    this.displayedPrice = basePrice - discountPrice;
  }

  ngOnInit() {
    this.setClassType();
    this.setDefaultChooseOption();
  }
}