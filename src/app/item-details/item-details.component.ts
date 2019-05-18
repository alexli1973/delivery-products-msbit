import {AfterContentChecked, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../shared/models/item';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.sass']
})
export class ItemDetailsComponent implements OnInit, DoCheck, AfterContentChecked {

  // public clickedEvent: Event;
  @Input() id: Event;
  @Input() listItems: Item[] = [];
  @Output() itemEdit = new EventEmitter<Item>();
  selectedItem: Item;
  formEdit: FormGroup;


  constructor() { }

  ngOnInit() {
    this.formEdit = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      price: new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
  }

  ngDoCheck() {
     this.getItemById(this.id);
  }

  ngAfterContentChecked() {
    // this.getItemById(this.id);
  }

  getItemById(id) {
    this.selectedItem = this.listItems.find(item => item.id === id);
  }

  onSubmit() {
    console.log(this.formEdit.value);
  }

}
