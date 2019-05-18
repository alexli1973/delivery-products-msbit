import {Component, OnInit, Output} from '@angular/core';
import {Item} from './shared/models/item';
import {GetDataService} from './shared/services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DeliveryProducts';

  listItems: Item[] = [];
  isLoaded = false;
  @Output() clickedEvent: Event;
  //public clickedEvent: Item;

  constructor(private dataService: GetDataService) { }

  ngOnInit() {
    this.dataService.getItems().subscribe((data: any) => this.getItemsList(data));
  }

  getItemsList(arr) {
    for (const i in arr) {
      if (arr[i].hasOwnProperty('creationDate')) {
        this.listItems.push(arr[i]);
      } else {
        Object.values(arr[i]).forEach(val => {
          if (typeof val === 'object') {
            // @ts-ignore
            if (!val.length) {
              // @ts-ignore
              this.listItems.push(val);
            } else {
              // @ts-ignore
              val.forEach(arrval => {
                this.listItems.push(arrval);
              });
            }
          }
        });
      }
    }
    if (this.listItems.length !== 0) {
      this.isLoaded = true;
    }
  }

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }
}
