import { Component, OnInit } from '@angular/core';
// import { GenericsModule } from 'src/app/generics/generics.module';
import { ListItem, ListStructure, Patient, deleteMessage } from 'src/app/generics/utils';
import { PatientService } from '../patient.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/generics/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent implements OnInit {
  public patients: ListItem[];

  constructor(
    private patientService: PatientService,
    private router: Router,
    private modal: NgbModal
  ) {}

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
    const modalRef = this.modal.open(ConfirmationModalComponent);
    (modalRef.componentInstance as ConfirmationModalComponent).title = 'Delete patient';
    (modalRef.componentInstance as ConfirmationModalComponent).message = deleteMessage('patient', id.toString());

    modalRef.result
      .then(() => {
        this.patientService.deletePatient(id).subscribe(
          (patient) => console.log(`Patient ${JSON.stringify(patient, null, 2)} has been deleted`),
          (err) => console.error(err)
        );
      })
      .catch(err => {})
  }
}
