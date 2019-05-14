import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/models/item';
import {GetDataService} from '../shared/services/get-data.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.sass']
})
export class ListItemsComponent implements OnInit {

//  listItems: Item;
  const listItems = {name};
  private objNew: Item;
 // objNew;

  constructor(private dataService: GetDataService) { }

  ngOnInit() {
    this.dataService.getItems().subscribe((listItems: any) => this.listItems = listItems);
   // const {creationDate, name} = this.listItems;
    debugger;
   // if (this.listItems) {
   //  this.objNew = this.listItems;
   //  console.log('NEW ', this.objNew);
   // }

  }

}
