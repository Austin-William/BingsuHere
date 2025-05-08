import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterLink],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class LinkComponent {
  @Input() href: string = '';
  @Input() routerLink: string = '';
  @Input() target: string = '_self'; 
  @Input() disabled: boolean = false;
  @Input() classname: string = '';
  @Input() id: string = '';
  @Input() onClick: any = () => {};
}