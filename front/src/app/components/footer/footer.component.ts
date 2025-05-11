import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { links, socials } from "../../data/links.json";
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() },
  providers: [ShopService]
})

export class FooterComponent {
  categories_links: any = links;
  socials: any = socials;
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
