import { Component, Input } from '@angular/core';
import { ListStructure, ListItem } from '../utils';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input() tableStructure: ListStructure;
  @Input() items: ListItem[];
}
