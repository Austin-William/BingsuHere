import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ImageModule, CarouselModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() },
  providers: [ShopService]
})

export class StoreComponent {
  shops: any[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getShops();
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
