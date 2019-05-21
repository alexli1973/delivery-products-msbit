import {AfterContentChecked, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../shared/models/item';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, DoCheck, AfterContentChecked {

  @Input() id: Event;
  @Input() listItems: Item[] = [];
  @Output() itemEdit = new EventEmitter<Item>();
  selectedItem: Item;
  formEdit: FormGroup;


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.formEdit = new FormGroup({
      name: new FormControl(null, [Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z0-9 ]*')]),
      description: new FormControl(null, [Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z0-9 ]*')]),
      price: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')])
    });
  }

  ngDoCheck() {
     this.getItemById(this.id);
     this.formEdit.get('name').setValue(this.selectedItem.name);
  }

  ngAfterContentChecked() {
    // this.getItemById(this.id);
   // this.formEdit.get('name').setValue(this.selectedItem.name);
  }

  getItemById(id) {
    this.selectedItem = this.listItems.find(item => item.id === id);
  }

  onSubmit() {
   // console.log(this.formEdit.value);
    console.log(this.selectedItem.id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    const item = this.selectedItem;

    dialogConfig.data = {
      title: 'Item Details',
      width: '400px',
      item
    };
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
  }

}
