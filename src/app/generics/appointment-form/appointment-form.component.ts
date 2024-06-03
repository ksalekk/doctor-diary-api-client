import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Appointment, Patient } from '../utils';
import { AppointmentService } from 'src/app/appointments/appointment.service';
import { PatientService } from 'src/app/patients/patient.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;
  visitSummaryForm: FormGroup;

  // patients$: Patient[];
  selectedPatient: Patient;
  
  @Input() appointment: Appointment | null;
  @Output() submitPatient = new EventEmitter<Appointment>();



  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private patientService: PatientService
    ) { }
  
  ngOnInit(): void {
    this.visitSummaryForm = this.formBuilder.group({
        patientDescription: [''],
        examinationDescription: [''],
        treatmentPlan: ['']
    });

    
    this.appointmentForm = this.formBuilder.group({
        date: [''],
        time: [''],
        visitSummary: this.visitSummaryForm
    });

    // this.patientService.getPatients().subscribe(
    //   patients => this.patients$ = patients
    // );
  }

  public onSubmit() {
      const appointment = this.appointmentForm.value;
      appointment.datetime = new Date(appointment.date.year, appointment.date.month-1, appointment.date.day, appointment.time.hour-1, appointment.time.minute, appointment.time.second);
      delete appointment.date;
      delete appointment.time;
      appointment.patient = this.selectedPatient;

      // this.appointmentService.postAppointment(appointment);

      // this.http.post<Appointment>("http://localhost:8080/patients", myObj)
      // .subscribe(patient => console.log(patient));
  }

  public onSelectPatient(patient: Patient) {
    console.log(patient);
    this.selectedPatient = patient;
    // this.closebutton.nativeElement.click();
  }

}
