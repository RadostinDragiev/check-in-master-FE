import { Component } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { Room, Rooms } from '../../types';
import { RoomComponent } from '../components/room/room.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RoomComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  rooms: Room[] = []

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

  openDialog(): void {
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '300px',
      data: {
        header: 'Add Room',
        room: {
          number: null,
          pricePerNight: null
        }
      }
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
}
