import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent {

}
