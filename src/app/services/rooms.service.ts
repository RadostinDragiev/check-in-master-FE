import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private apiService: ApiService) { }

  getRooms = (url: string, params: any): Observable<any> => {
    return this.apiService.get(url, params);
  }

  addRoom = (url: string, body: any, params: any): Observable<any> => {
    return this.apiService.post(url, body, params);
  }

  editRoom = (url: string, body: any, params: any): Observable<any> => {
    return this.apiService.put(url, body, params);
  }

  deleteRoom = (url: string, params: any): Observable<any> => {
    return this.apiService.delete(url, params);
  }
}
