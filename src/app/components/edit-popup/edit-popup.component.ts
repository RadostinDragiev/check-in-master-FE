import { DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Room } from '../../../types';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})
export class EditPopupComponent {

  constructor(public dialogRef: MatDialogRef<EditPopupComponent>, @Inject(MAT_DIALOG_DATA) public room: Room) {}

  @Input() display: boolean = false;
  @Input() header!: string;

  // @Input() room: Room = {
  //   uuid: '',
  //   number: 0,
  //   roomType: '',
  //   pricePerNight: 0,
  //   capacity: 0,
  //   status: '',
  //   images: []
  // };

  @Output() confirm = new EventEmitter<Room>();

  onConfirm() {
    this.confirm.emit(this.room);
  }

  onCancel() {
    this.display = false;
    this.dialogRef.close;
  }
}
