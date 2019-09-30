import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchQuery = new EventEmitter<string>();
  constructor() { }

  search(query: string): void {
    if (!query) return;
    this.searchQuery.emit(query);
  }
}
