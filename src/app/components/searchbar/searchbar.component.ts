import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [MatIcon, FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class SearchbarComponent {
  @Input() searchTerm: string = '';
  @Input() placeholder: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<void>();
  
  search(): void {
    this.searchTermChange.emit(this.searchTerm);
    this.searchEvent.emit();
  }
  
  onSearchTermChange(): void {
    this.searchTermChange.emit(this.searchTerm);
  }
}
