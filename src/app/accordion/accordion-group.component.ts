import {Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionGroupComponent {

  @Input() title: string;
  @Input() opened = true;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }



}
