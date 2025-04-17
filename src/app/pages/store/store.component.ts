import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

import { shops } from '../../data/shops.json';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ImageModule, CarouselModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class StoreComponent {
  shops = shops;
}
