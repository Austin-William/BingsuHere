import { Component, Input, OnInit } from '@angular/core';

import { LabelComponent } from '../label/label.component';

import { CardOptionType, CardLabelsType } from '../../types/types';

@Component({
  selector: 'app-card',
  imports: [LabelComponent],
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
  classType: string = '';

  setDefaultChooseOption() {
    this.selectedOptionId = this.options[0].id;
    this.selectedOptionValue = this.options[0].value;
    this.displayedPrice = this.options[0].price;
  }

  handleSelectedOption(id: number, value: string, price: number) {
    this.selectedOptionId = id;
    this.selectedOptionValue = value;
    this.displayedPrice = price;
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

  ngOnInit() {
    this.setClassType();
    if (this.options && this.options.length > 0) {
      this.setDefaultChooseOption();
    }
  }
}