import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-drawer',
  imports: [MatIcon],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class DrawerComponent {
  isOpen: boolean = false;

  ngOnChanges() {
    this.blockScrolling();
  }

  blockScrolling() {
    let html = document.getElementsByTagName('html')[0];

    if (this.isOpen) {
      html.classList.remove('no-scroll');
    } else {
      html.classList.add('no-scroll');
    }
  }

  toggleDrawer() {
    let html = document.getElementsByTagName('html')[0];

    if (this.isOpen) {
      html.classList.remove('no-scroll');
    } else {
      html.classList.add('no-scroll');
    }

    this.isOpen = !this.isOpen;
  }
}
