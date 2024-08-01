import { Component } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { Room } from '../../types';
import { RoomComponent } from '../components/room/room.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RoomComponent, EditPopupComponent, MatButtonModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  rooms: Room[] = []

  displayEditPopup: boolean = false;
  displayAddPopup: boolean = false;

  selectedRoom: Room = {
    uuid: '',
    number: 0,
    roomType: '',
    pricePerNight: 0,
    capacity: 0,
    status: 'string',
    images: []
  }

  constructor(private roomService: RoomsService, public dialog: MatDialog) {}

  fetchRooms() {
    this.roomService.getRooms('http://localhost:8080/api/v1/rooms/getAll', { responseType: 'json' })
      .subscribe({
        next: (data) => {
          this.rooms = data;  // Correctly assigning the response to the rooms array
          console.log(data);
        },
        error: (err) => {
          console.error('Error:', err);
        },
        complete: () => {
          console.log('Fetch rooms completed');
        }
      });
  }

  createRoom(room: Room) {
    this.roomService.addRoom('http://localhost:8080/api/v1/rooms', room, {responseType: 'json'})
      .subscribe({
        next: (data) => {
          console.log(data)
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
  }

  // Not implemented at the backend
  editRoom(room: Room, id: number) {
    this.roomService.editRoom('http://localhost:8080/api/v1/rooms', room, {responseType: 'json'})
      .subscribe({
        next: (data) => {
          console.log(data)
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom('http://localhost:8080/api/v1/rooms', {responseTyep: 'json'})
      .subscribe({
        next: (data) => {
          console.log(data)
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
  }

  ngOnInit() {
    this.fetchRooms();
  }

  display = false;

  openDialog(room: Room): void {
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '300px',
      data: room

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the confirmed action
        console.log('Dialog confirmed', result);
      } else {
        // Handle the canceled action
        console.log('Dialog canceled');
      }
    });
  }

  onConfirmEdit(room: Room) {
    this.editRoom(room, this.selectedRoom.number);
    this.displayEditPopup = false;
  }

  onConfirmAdd(room: Room) {
    this.createRoom(room);
    this.displayAddPopup = false;
  }

  toggleEditPopup(room: Room) {
    this.selectedRoom = room;
    this.displayEditPopup = true;
  }

  toggleAddPopup() {
    this.displayAddPopup = true;
  }
}
