import { Component } from '@angular/core';
import { Appointment, ListItem, ListStructure } from 'src/app/generics/utils';
import { AppointmentService } from '../appointment.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {
  public appointments: ListItem[];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService
      .getAppointments()
      .pipe(
        map((appointments: Appointment[]) => appointments as ListItem[]),
      )
      .subscribe((appointments) => this.appointments = appointments)
  }

  public appointmentListStructure: ListStructure = {
    cols: [
      { property: 'patient_id', name: 'PATIENT ID' },
      { property: 'datetime', name: 'DATETIME' },
    ],

    actions: [
      { handler: (id) => this.readAppointment(id), icon: 'bi bi-eye' },
      { handler: (id) => this.updateAppointment(id), icon: 'bi bi-pencil-fill' },
      { handler: (id) => this.deleteAppointment(id), icon: 'bi bi-trash3' },
    ],
  };

  readAppointment(id: number) {
    console.log(`Read appointment ${id}`);
  }
  updateAppointment(id: number) {
    console.log(`Update appointment ${id}`);
  }
  deleteAppointment(id: number) {
    console.log(`Delete appointment ${id}`);
  }
}
