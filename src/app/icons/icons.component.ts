import {Component, OnInit} from '@angular/core';
import { BASIC_ICONS } from '../../assets/basic_icons';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  size8Group = [];
  size16Group = [];
  size24Group = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    for (const [key, value] of Object.entries(BASIC_ICONS)) {
      const iconObject = {
        name: '',
        tag: undefined
      };
      iconObject.name = key;
      iconObject.tag = this.sanitizer.bypassSecurityTrustHtml(value);

      const findWidth = /(?<=width=")\d+/g.exec(value);
      let iconWidth: string;
      if (findWidth !== null) {
        iconWidth = findWidth[0];
      }

      switch (iconWidth) {
        case '8':
          this.size8Group.push(iconObject);
          break;
        case '16':
          this.size16Group.push(iconObject);
          break;
        case '24':
          this.size24Group.push(iconObject);
      }
    }
  }

  onSearch() {

  }

}
