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
  selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
  dropDownOpen: boolean = false;

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
    if ($(event.target).width() > 767 && $('.navbar-toggle').is(':hidden')) {
        $(this.selected).removeClass('slide-active');
    }

    // console.log($('.navbar-toggle'));
    console.log(event.target.innerWidth);
  }

  dropToggle($event){
    $event.preventDefault();
    $event.stopPropagation();
    this.dropDownOpen = !this.dropDownOpen;
  }

  toggleMenu($event){
    $event.stopPropagation();
    $event.preventDefault();

    //stick in the fixed 100% height behind the navbar but don't wrap it
    //$('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';
    var selected = $($event.currentTarget).hasClass('slide-active');

    $('#slidemenu').stop().animate({
        left: selected ? menuneg : '0px'
    });

    $('#navbar-height-col').stop().animate({
        left: selected ? slideneg : '0px'
    });

    $(pagewrapper).stop().animate({
        left: selected ? '0px' : slidewidth
    });

    $(navigationwrapper).stop().animate({
        left: selected ? '0px' : slidewidth
    });


    $($event.currentTarget).toggleClass('slide-active', !selected);
    $('#slidemenu').toggleClass('slide-active');


    $('#page-content, .navbar, body, .navbar-header, .header').toggleClass('slide-active');
  }
}
