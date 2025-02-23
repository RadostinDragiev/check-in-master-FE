import { Component, Input } from '@angular/core';
import { Room } from '../../../types';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  @Input() room!: Room;
}
