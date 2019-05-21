import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../shared/models/item';

import {PaginationService} from '../shared/services/pagination.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Input() listItems: Item[] = [];
  // @Output() selectedItem = new EventEmitter<Event>();

  @Output() eventClicked = new EventEmitter<Event>();
  searchPlaceholder = 'Search Product';
  sortPlaceholder = 'Sort by';
  term = '';
  selectedValue: any;
  pager: any = {};
  pagedItems: any[];



  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
    this.pager = this.paginationService.getPager(this.listItems.length, page);
    // curr page of items
    this.pagedItems = this.listItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }


  showDetails(id): void {
    this.eventClicked.emit(id);
  }

}
