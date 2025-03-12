import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { LinkComponent } from '../../components/link/link.component';

import { links } from "../../data/links.json"; 

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule, LinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class FooterComponent {
  categories_links = links;
}
