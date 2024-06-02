import { Component, OnInit } from '@angular/core';
// import { GenericsModule } from 'src/app/generics/generics.module';
import { ListItem, ListStructure, Patient } from 'src/app/generics/utils';
import { PatientService } from '../patient.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent implements OnInit {
  public patients: ListItem[];

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.patientService
      .getPatients()
      .pipe(
        map((patients: Patient[]) => patients as ListItem[]),
      )
      .subscribe((patients) => this.patients = patients)
  }

  public patientListStructure: ListStructure = {
    cols: [
      { property: 'id', name: 'PATIENT ID' },
      { property: 'datetime', name: 'DATETIME' },
    ],

    actions: [
      { handler: (id) => this.readPatient(id), icon: 'bi bi-eye' },
      { handler: (id) => this.updatePatient(id), icon: 'bi bi-pencil-fill' },
      { handler: (id) => this.deletePatient(id), icon: 'bi bi-trash3' },
    ],
  };

  readPatient(id: number) {
    this.router.navigate(['/patients', id, 'details'])
  }
  updatePatient(id: number) {
    this.router.navigate(['/patients', id, 'edit'])
  }
  deletePatient(id: number) {
    console.log(`Delete patient ${id}`);
  }
}
