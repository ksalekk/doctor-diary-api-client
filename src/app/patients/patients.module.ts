import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { GenericsModule } from '../generics/generics.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { NewPatientFormComponent } from './new-patient-form/new-patient-form.component';
import { UpdatePatientFormComponent } from './update-patient-form/update-patient-form.component';



@NgModule({
  declarations: [
    PatientsListComponent,
    PatientDetailsComponent,
    NewPatientFormComponent,
    UpdatePatientFormComponent,
  ],
  imports: [
    CommonModule,
    GenericsModule
  ]
})
export class PatientsModule { }
