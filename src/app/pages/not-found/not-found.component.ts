import { Component } from '@angular/core';

import { LinkComponent } from '../../components/link/link.component';

interface Button {
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-not-found',
  imports: [LinkComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class NotFoundComponent {
  list_buttons: Button[] = [
    {
      'title': 'Home',
      'description': 'Go to home page',
      'url': '/'
    },
    {
      'title': 'See all products',
      'description': 'Go to products page',
      'url': '/products'
    }
  ]
}
