import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class LabelComponent {
  @Input() id: number = 0;
  @Input() classname: string = '';
}