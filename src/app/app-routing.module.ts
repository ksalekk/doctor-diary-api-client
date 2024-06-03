import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frame/home.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { GenericsModule } from './generics/generics.module';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { NewPatientFormComponent } from './patients/new-patient-form/new-patient-form.component';
import { UpdatePatientFormComponent } from './patients/update-patient-form/update-patient-form.component';
import { AppointmentFormComponent } from './generics/appointment-form/appointment-form.component';

const routes: Routes = [
  {
    path: '',
    title: "MedManager | Home",
    component: HomeComponent
  },
  {
    path: 'appointments',
    title: 'MedManager | Your Appointments',
    component: AppointmentsListComponent,
  },
  {
    path: 'appointments/appointment-form',
    title: 'MedManager | New Appointment Form',
    component: AppointmentFormComponent,
  },
  {
    path: 'patients',
    component: PatientsListComponent,
    title: 'MedManager | Your Patients',
  },
  {
    path: 'patients/patient-form',
    component: NewPatientFormComponent,
    title: 'MedManager | New Patient Form'
  },
  {
    path: 'patients/:id/details',
    component: PatientDetailsComponent,
    title: 'MedManager | Patient Details'
  },
  {
    path: 'patients/:id/edit',
    component: UpdatePatientFormComponent,
    title: 'MedManager | Patient Edit'
  },
  // { path: '', redirectTo: 'appointments', pathMatch: 'full' },

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
