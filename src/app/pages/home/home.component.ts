import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

import { LinkComponent } from '../../components/link/link.component';
import { CardComponent } from '../../components/card/card.component';

import { products } from '../../data/products.json';
import { links } from "../../data/links.json"; 

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule, LinkComponent, CardComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class HomeComponent {
  products_signature = products.signatures;
  categories_links = links;

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
}
