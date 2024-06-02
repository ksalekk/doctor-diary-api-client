import { Component } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {

  navItems = [
    { name: 'Home', routerLink: '/', icon: 'bi bi-house' },
    { name: 'Appointments', routerLink: '/appointments', icon: 'bi bi-calendar4-week' },
    { name: 'Patients', routerLink: '/patients', icon: 'bi bi-people-fill' }
  ]

}
