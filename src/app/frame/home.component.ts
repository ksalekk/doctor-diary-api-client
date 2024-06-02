import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container-fluid">
      <h4>Hello World</h4>
      <div class="mt-4">
        <a routerLink="/patients/patient-form">
          <button class="btn btn-primary">
            <i class="bi bi-person-plus-fill"></i>
            Add New Patient
          </button>
        </a>
      </div>
      <div class="mt-4">
        <a routerLink="/appointments/appointment-form">
          <button class="btn btn-primary">
            <i class="bi bi-window-plus"></i>
            Add New Appointment
          </button>
        </a>
      </div>
    </div>
  `
})
export class HomeComponent {}
