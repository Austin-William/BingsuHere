import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

type ListProduct = { name: string, path: string }[];
type ListButton = { name: string, icon: string, path: string }[];
type ListSocial = { name: string, iconPath: string, url: string }[];
type ListLanguage = { name: string, code: string }[];

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class NavbarComponent {  
  product_links: ListProduct = [
    { name: $localize`Bingsu`, path: 'bingsu' },
    { name: $localize`Brunch`, path: 'brunch' },
    { name: $localize`Drinks`, path: 'drinks' },
    { name: $localize`Cakes`, path: 'cakes' },
    { name: $localize`Desserts`, path: 'desserts' },
  ];

  buttons_links: ListButton = [
    { name: $localize`Home`, icon: 'home', path: 'home' },
    { name: $localize`Stores`, icon: 'search', path: 'store' },
  ];

  social_links: ListSocial = [
    { name: "Instagram", iconPath: '/assets/icons/instagram.svg', url: 'https://instagram.com' },
    { name: "X", iconPath: '/assets/icons/x-twitter.svg', url: 'https://x.com' }
  ];

  languages: ListLanguage = [
    { name: $localize`English`, code: 'en' },
    { name: $localize`Français`, code: 'fr' },
  ];

  handleLanguageSwitch(option: string): void {
    // Ajouter le code pour changer la langue

    // Angular ne peut pas hot refresh les changements de langue
    // Il faut recharger la page avec le bon /en ou /fr
  }
}
