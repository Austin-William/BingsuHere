import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  standalone: true,
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class StoreComponent {}
