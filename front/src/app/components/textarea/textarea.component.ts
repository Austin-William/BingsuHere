import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class TextAreaComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() rows: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() required: boolean = false;
}