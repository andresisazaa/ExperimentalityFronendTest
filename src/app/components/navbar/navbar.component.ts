import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() searchQuery = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }
  search(query: string) {
    if (!query) return;
    this.searchQuery.emit(query);
  }
}
