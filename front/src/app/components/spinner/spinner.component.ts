import { Component, Input } from '@angular/core';

import { SpinnerSizeType } from '../../types/types';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class SpinnerComponent {
  @Input() size: SpinnerSizeType = 'sm';
}
