import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from 'src/app/generics/utils';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-patient-form',
  templateUrl: './update-patient-form.component.html',
  styleUrls: ['./update-patient-form.component.css']
})
export class UpdatePatientFormComponent implements OnInit {
  editedPatient: Patient | undefined;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.patientService.getPatientDetails(id)
        .subscribe((patient) => (this.editedPatient = patient));
    });
  }

  public updatePatient(patient: Patient) {
    this.patientService.updatePatient(patient)
      .subscribe((resp) => console.log(`Created patient: ${resp}`))
  }

}
