import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterOption } from '../../types/types';

@Component({
  selector: 'app-filters',
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() }
})

export class FiltersComponent {
  @Input() filters: FilterOption[] = [];
  @Input() selectedFilters: FilterOption[] = [];
  @Input() filterChange: (filters: FilterOption[]) => void = () => {};
}