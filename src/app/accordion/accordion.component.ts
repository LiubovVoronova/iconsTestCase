import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import {AccordionGroupComponent} from './accordion-group.component';

@Component({
  selector: 'app-accordion',
  template: '<ng-content></ng-content>',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;

  constructor() { }

  ngAfterContentInit() {
    this.groups.toArray().forEach((panel) => {
      panel.toggle.subscribe(() => {
        panel.opened = !panel.opened;
      });
    });
  }



}



