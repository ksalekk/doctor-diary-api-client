import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from 'src/app/generics/utils';

@Component({
  selector: 'app-new-patient-form',
  templateUrl: './new-patient-form.component.html',
  styleUrls: ['./new-patient-form.component.css']
})
export class NewPatientFormComponent {
  constructor(private patientService: PatientService) {}

  public addPatient(patient: Patient) {
    this.patientService.createPatient(patient)
      .subscribe((resp) => console.log(`Created patient: ${resp}`))
  }
}
