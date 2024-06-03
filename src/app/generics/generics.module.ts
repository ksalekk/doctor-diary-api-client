import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';



@NgModule({
  declarations: [
    ItemsListComponent,
    PatientFormComponent,
    ConfirmationModalComponent,
    InfoBarComponent,
    AppointmentFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ItemsListComponent,
    PatientFormComponent,
    AppointmentFormComponent,
    InfoBarComponent
  ]
})
export class GenericsModule { }
