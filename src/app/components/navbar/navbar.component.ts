import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

type ListProduct = { name: string, path: string }[];
type ListButton = { name: string, icon: string, path: string }[];
type ListSocial = { name: string, iconPath: string, url: string }[];
type ListLanguage = { text: string, code: string, iconPath: string }[];

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatToolbarModule, MatSidenavModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class NavbarComponent {  
  isLanguageMenuOpen: boolean = false;

  product_links: ListProduct = [
    { name: $localize`Bingsu`, path: 'bingsu' },
    { name: $localize`Brunch`, path: 'brunch' },
    { name: $localize`Drinks`, path: 'drinks' },
    { name: $localize`Cakes`, path: 'cakes' },
    { name: $localize`Desserts`, path: 'desserts' },
  ];

  buttons_links: ListButton = [
    { name: $localize`Home`, icon: '/assets/icons/home.svg', path: '/' },
    { name: $localize`Stores`, icon: '/assets/icons/shopping_bag.svg', path: 'store' },
    { name: $localize`Help`, icon: '/assets/icons/help.svg', path: 'help' },
  ];

  social_links: ListSocial = [
    { name: "Instagram", iconPath: '/assets/icons/instagram.svg', url: 'https://instagram.com' },
    { name: "X", iconPath: '/assets/icons/x-twitter.svg', url: 'https://x.com' }
  ];

  languages: ListLanguage = [
    { text: $localize`English`, code: 'en', iconPath: "/assets/icons/uk.png" },
    { text: $localize`Français`, code: 'fr', iconPath: "/assets/icons/france.png" },
  ];

  handleLanguageSwitch(option: string): void {
    const url = window.location.href;

    if (option === 'en') {
      window.location.href = url.replace(/\/fr\//, '/en/');
    } else if (option === 'fr') {
      window.location.href = url.replace(/\/en\//, '/fr/');
    }
  }
}
