import {Component, Inject, OnInit} from '@angular/core';
import {Item} from '../shared/models/item';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  item: Item;
  constructor(private dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.item = data.item;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close(console.log('closed'));
  }

}
