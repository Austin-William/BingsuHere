import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';

import { LinkComponent } from '../../components/link/link.component';
import { CardComponent } from '../../components/card/card.component';

import { products } from '../../data/products.json';
import { links } from "../../data/links.json"; 
import { shops } from "../../data/shops.json"; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatIconModule, LinkComponent, CardComponent, ImageModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class HomeComponent {
  products_signature: any = products.signatures;
  categories_links: any = links;
  shops: any = shops;

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
