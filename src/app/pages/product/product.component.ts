import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class ProductComponent {}
