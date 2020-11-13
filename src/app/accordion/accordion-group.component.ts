import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BASIC_ICONS } from '../../assets/basic_icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionGroupComponent implements OnInit {
  chevronDown;
  chevronUp;

  @Input() title: string;
  @Input() opened = true;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    for (const [key, value] of Object.entries(BASIC_ICONS)) {
      if (key === 'chevron-down-16') {
        this.chevronDown = this.sanitizer.bypassSecurityTrustHtml(value);
      }
      if (key === 'chevron-up-16') {
        this.chevronUp = this.sanitizer.bypassSecurityTrustHtml(value);
      }
    }
  }



}
