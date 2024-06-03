import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent {
  
  constructor(public messageService: MessageService) { }
}
