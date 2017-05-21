import { Component, OnInit, HostListener } from '@angular/core';
import { ISection } from '../models/ISection'
import * as $ from 'jquery'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  sections: ISection[] = [{name: 'Home', active: true, hashTag: 'home'}, {name: 'Skills', active: false, hashTag: 'skills'}]
  activeSection: ISection;

  constructor() { 

  }

  ngOnInit() {
    this.activeSection = this.sections[0];
  }

  changeSection(section: ISection){
    this.activeSection.active = false;
    this.activeSection = section;
    this.activeSection.active = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
    console.log(event.target.innerWidth);
  }
}
