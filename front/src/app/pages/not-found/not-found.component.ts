import { Component } from '@angular/core';

import { LinkComponent } from '../../components/link/link.component';

import { NotFoundButtonLinks } from '../../types/types';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class NotFoundComponent {
  list_buttons: NotFoundButtonLinks[] = [
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
