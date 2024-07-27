import { Component } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { Rooms } from '../../types';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private roomService: RoomsService) {}

  ngOnInit() {
    this.roomService.getRooms('http://localhost:8080/api/v1/rooms/getAll', {responseType: 'json'}).subscribe(data => console.log(data))
  }

}
