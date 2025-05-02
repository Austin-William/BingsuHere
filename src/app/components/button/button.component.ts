import { Component, Input } from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() disabled: boolean = false;
  @Input() class: string = '';
  @Input() id: string = '';
  @Input() onClick: any = () => {};
}