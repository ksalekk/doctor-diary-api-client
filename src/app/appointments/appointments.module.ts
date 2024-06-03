import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { GenericsModule } from '../generics/generics.module';



@NgModule({
  declarations: [
    AppointmentsListComponent
  ],
  imports: [
    CommonModule,
    GenericsModule,
  ]
})
export class AppointmentsModule { }
