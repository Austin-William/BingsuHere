import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class ContactComponent {}
