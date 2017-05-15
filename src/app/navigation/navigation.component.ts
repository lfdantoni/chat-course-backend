import { Component, OnInit } from '@angular/core';
import { ISection } from '../models/ISection'

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

}
