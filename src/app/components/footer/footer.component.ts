import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { links, socials } from "../../data/links.json";
import { shops } from "../../data/shops.json";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class FooterComponent {
  categories_links: any = links;
  socials: any = socials;
  shops: any = shops;
}
