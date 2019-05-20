import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../shared/models/item';

import {FilterPipe} from '../shared/pipes/filter.pipe';
import { SortPipe } from '../shared/pipes/sort.pipe';
import {GetDataService} from '../shared/services/get-data.service';
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
    // this.dataService.getItems().subscribe((data: any) => this.apiData = data);
   // this.dataService.getItems().subscribe((data: any) => this.getItemsList(data));
    this.setPage(1);
  }

  setPage(page: number) {
    debugger;
    this.pager = this.paginationService.getPager(this.listItems.length, page);
    // curr page of items
    this.pagedItems = this.listItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  // getItemsList(arr) {
  //   for (const i in arr) {
  //     if (arr[i].hasOwnProperty('creationDate')) {
  //       this.listItems.push(arr[i]);
  //     } else {
  //       Object.values(arr[i]).forEach(val => {
  //         if (typeof val === 'object') {
  //           // @ts-ignore
  //           if (!val.length) {
  //             // @ts-ignore
  //             this.listItems.push(val);
  //           } else {
  //             // @ts-ignore
  //             val.forEach(arrval => {
  //               this.listItems.push(arrval);
  //             });
  //           }
  //         }
  //       });
  //     }
  //   }
  //   if (this.listItems.length !== 0) {
  //     this.isLoaded = true;
  //   }
  // }

  showDetails(id): void {
    this.eventClicked.emit(id);
   // debugger;
   // this.selectedItem = this.listItems.find(item => item.id === id);
  }

}
