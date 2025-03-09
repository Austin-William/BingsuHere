import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { DrawerComponent } from '../drawer/drawer.component';

type ListProduct = { name: string, path: string }[];
type ListButton = { name: string, icon: string, path: string }[];
type ListSocial = { name: string, iconPath: string, url: string }[];
type ListLanguage = { text: string, code: string, iconPath: string }[];

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatToolbarModule, MatSidenavModule, MatMenuModule, DrawerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class NavbarComponent {  
  isLanguageMenuOpen: boolean = false;

  product_links: ListProduct = [
    { name: 'Bingsu', path: 'bingsu' },
    { name: 'Frozen Yogurt', path: 'frozen-yogurt' },
    { name: 'Drinks', path: 'drinks' },
    { name: 'Cakes', path: 'cakes' },
    { name: 'Desserts', path: 'desserts' },
  ];

  buttons_links: ListButton = [
    { name: 'Home', icon: '/assets/icons/home.svg', path: '/' },
    { name: 'Stores', icon: '/assets/icons/shopping_bag.svg', path: 'store' },
    { name: 'Help', icon: '/assets/icons/help.svg', path: 'help' },
  ];

  social_links: ListSocial = [
    { name: 'Instagram', iconPath: '/assets/icons/instagram.svg', url: 'https://instagram.com' },
    { name: 'X', iconPath: '/assets/icons/x-twitter.svg', url: 'https://x.com' }
  ];

  languages: ListLanguage = [
    { text: 'English', code: 'en', iconPath: '/assets/icons/uk.png' },
    { text: 'Français', code: 'fr', iconPath: '/assets/icons/france.png' },
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
