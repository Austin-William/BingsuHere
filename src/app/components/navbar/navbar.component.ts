import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { DrawerComponent } from '../drawer/drawer.component';

import { NavbarListProduct, NavbarListButton, NavbarListSocial, NavbarListLanguage } from '../../types/types';

import { links, routes, socials} from '../../data/links.json';
import { languages } from '../../data/languages.json';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatToolbarModule, MatSidenavModule, MatMenuModule, DrawerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class NavbarComponent {
  isLanguageMenuOpen: boolean = false;

  product_links: NavbarListProduct = links;
  buttons_links: NavbarListButton = routes;
  social_links: NavbarListSocial = socials;

  languages: NavbarListLanguage = languages;

  handleLanguageSwitch(option: string): void {
    const url = window.location.href;

    if (option === 'en') {
      window.location.href = url.replace(/\/fr\//, '/en/');
    } else if (option === 'fr') {
      window.location.href = url.replace(/\/en\//, '/fr/');
    }
  }
}
