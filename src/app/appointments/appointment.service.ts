import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../generics/utils';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentsUrl = 'assets/appointments-mock.json';

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointmentsUrl)
  }
}
