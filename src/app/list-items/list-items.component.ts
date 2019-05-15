import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/models/item';
import {GetDataService} from '../shared/services/get-data.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.sass']
})
export class ListItemsComponent implements OnInit {

  listItems: Item[] = [];
  apiData: any = [];

  constructor(private dataService: GetDataService) { }

  ngOnInit() {
    // this.dataService.getItems().subscribe((data: any) => this.apiData = data);
    this.dataService.getItems().subscribe((data: any) => this.getItemsList(data));
    // if (this.apiData) {
    //   //debugger;
    //   this.getItemsList(this.apiData);
    //   console.log(this.apiData);
    // }
  }

  getItemsList(arr) {
    for (const i in arr) {
      if (arr[i].hasOwnProperty('creationDate')) {
        this.listItems.push(arr[i]);
      } else {
        Object.values(arr[i]).forEach(val => {
          if (typeof val === 'object') {
            if (!val.length) {
              this.listItems.push(val);
            } else {
              val.forEach(val => {
                this.listItems.push(val);
              });
            }
          }
        });
      }
    }
  }

}
