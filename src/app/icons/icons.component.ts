import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BASIC_ICONS } from '../../assets/basic_icons';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  iconsList = [];
  fullIconList = [];
  uniqueWidthSet;

  @ViewChildren('svg') svgIcons: QueryList<ElementRef>;

  constructor(private sanitizer: DomSanitizer){ }

  ngOnInit(): void {
    for (const [key, value] of Object.entries(BASIC_ICONS)) {
      const iconObject = {
        name: '',
        tag: undefined,
        width: '',
      };
      iconObject.name = key;
      iconObject.tag = this.sanitizer.bypassSecurityTrustHtml(value);

      const findWidth = /(?<=width=")\d+/g.exec(value);
      if (findWidth !== null) {
        iconObject.width = findWidth[0];
      }
      this.fullIconList.push(iconObject);
    }
    this.iconsList = this.fullIconList.slice();
    this.createWidthSet();
  }

  createWidthSet() {
    const widthArr = [];
    for (const item of this.fullIconList) {
      if (item.width !== '') {
        widthArr.push(item.width);
      }
    }
    this.uniqueWidthSet = new Set(widthArr);
  }

  getWidthGroup(iconWidth) {
    return this.iconsList.filter(item => item.width === iconWidth);
  }

  onInput(event: any) {
    const searchInput = event.target.value;

    let filteredList = [];
    if (searchInput === '') {
      filteredList = this.fullIconList;
    } else {
      filteredList = this.fullIconList.filter(item => item.name.includes(searchInput));
    }
    this.iconsList = filteredList;
    this.createWidthSet();
  }

  onColorChange(event) {
    for (const svg of this.svgIcons) {
      const svgElement = svg.nativeElement.querySelector('svg');
      svgElement.style.fill = event.target.value;
      const svgPath = svgElement.querySelector('path')
      if (svgPath != null) {
        svgPath.setAttribute('fill', event.target.value);
      }
    }
  }

}
