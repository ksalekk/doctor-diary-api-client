import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/generics/utils';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  public patient: Patient | undefined;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.patientService.getPatientDetails(id)
        .subscribe((patient) => this.patient = patient)
    })
  }

}
