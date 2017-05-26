webpackJsonp([0,3],{

/***/ 330:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 330;


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__ = __webpack_require__(434);






/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
var platformRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["platformUniversalDynamic"])();
platformRef.bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/client.js.map

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(58);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(441);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/__2.1.1.workaround.js.map

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(607),
            styles: [__webpack_require__(603)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/about.component.js.map

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(433);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';
/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * BrowserModule, HttpModule, and JsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/app.browser.module.js.map

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(608),
            styles: [__webpack_require__(604)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/app.component.js.map

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(609),
            styles: [__webpack_require__(605)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/header.component.js.map

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(435);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=C:/Code/PortfolioUniversal/src/index.js.map

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent() {
        this.sections = [{ name: 'Home', active: true, hashTag: 'home' }, { name: 'Skills', active: false, hashTag: 'skills' }];
        this.selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
        this.dropDownOpen = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.activeSection = this.sections[0];
    };
    NavigationComponent.prototype.changeSection = function (section) {
        this.activeSection.active = false;
        this.activeSection = section;
        this.activeSection.active = true;
    };
    NavigationComponent.prototype.onResize = function (event) {
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__(event.target).width() > 767 && __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar-toggle').is(':hidden')) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(this.selected).removeClass('slide-active');
        }
        // console.log($('.navbar-toggle'));
        console.log(event.target.innerWidth);
    };
    NavigationComponent.prototype.dropToggle = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dropDownOpen = !this.dropDownOpen;
    };
    NavigationComponent.prototype.toggleMenu = function ($event) {
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
        var selected = __WEBPACK_IMPORTED_MODULE_1_jquery__($event.currentTarget).hasClass('slide-active');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__($event.currentTarget).toggleClass('slide-active', !selected);
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#slidemenu').toggleClass('slide-active');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#nav-icon2').toggleClass('open');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#page-content, .navbar, body, .navbar-header, .header').toggleClass('slide-active');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NavigationComponent.prototype, "onResize", null);
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(610),
            styles: [__webpack_require__(606)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/navigation.component.js.map

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/environment.js.map

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/Code/PortfolioUniversal/src/polyfills.js.map

/***/ },

/***/ 603:
/***/ function(module, exports) {

module.exports = ".about{\r\n    background-color: #b3a58b;\r\n    color: white;\r\n}\r\n\r\n.alignleft {\r\n    float: left;\r\n    margin: 5px 20px 10px 0;\r\n}\r\n\r\n.extra-block-1 p {\r\n    margin-bottom: 26px;\r\n}\r\n\r\nh2{\r\n    font: bold 66px/70px Orbitron;\r\n    color: #ffa05c;\r\n}\r\n.extra-block-1 h3 {\r\n    font-family: Open Sans;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0;\r\n}\r\nh3 {\r\n    font: bold 18px/22px Orbitron;\r\n}\r\n.extra-block-1 h3:after {\r\n    content: '';\r\n    display: block;\r\n    max-width: 570px;\r\n    height: 5px;\r\n    margin: 26px auto 54px;\r\n    background-color: black;\r\n}"

/***/ },

/***/ 604:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 605:
/***/ function(module, exports) {

module.exports = ".header {\r\n    background-image: url(../assets/header.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: top center;\r\n    background-attachment: scroll;\r\n    min-height: 500px;\r\n}\r\n\r\n.header .logo_wrap .logo .logo_tagline {\r\n    font-size: 1.5em;\r\n    line-height: 1.6em;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #ffa05c;\r\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);\r\n    letter-spacing: 1px;\r\n    margin: 0;\r\n}\r\n\r\n.header .logo_wrap {\r\n    position: relative;\r\n    text-align: center;\r\n    margin-top: 120px;\r\n    margin-bottom: 90px;\r\n}\r\n\r\n.container {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    position: relative;\r\n}\r\n\r\n.header .logo_wrap .logo {\r\n    float: none !important;\r\n    display: inline-block;\r\n    padding: 0;\r\n}\r\n\r\n.header .logo_wrap .logo .logo_h {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.logo h1{\r\n    font: bold 5em Orbitron;\r\n    color: #ffa05c;\r\n    text-shadow: 0px 0px 18px rgba(0, 0, 0, 1);\r\n}\r\n\r\n/*wrap the entire page content but not nav inside this div if not a fixed top, don't add any top padding */\r\n#page-content {\r\n    position: relative;\r\n    padding-top: 70px;\r\n    left: 0;\r\n}\r\n#page-content.slide-active {\r\n    padding-top: 0\r\n}\r\n\r\n\r\n@media (min-width:768px) { \r\n\t#page-content {\r\n\t    left: 0!important;\r\n\t}\r\n}\r\n\r\n@media (max-width:767px){\r\n    .header{\r\n        overflow-x: hidden;\r\n    }\r\n    .header.slide-active{\r\n        overflow: hidden;\r\n    }\r\n    .logo h1{\r\n        font: bold 4em Orbitron;\r\n    }\r\n}"

/***/ },

/***/ 606:
/***/ function(module, exports) {

module.exports = ".navbar{\r\n    background: #424242;\r\n}\r\n\r\n.nav>li>a {\r\n    text-transform: uppercase;\r\n    border: none;\r\n    margin: 0 17px;\r\n    font: bold 14px/20px Orbitron;\r\n    color: #ffffff;\r\n}\r\n\r\n.nav>li.active>a {\r\n    color: #ffa05c;\r\n    background-color: transparent;\r\n}\r\n\r\n.social{\r\n    float: right;\r\n    color: #ffffff;\r\n}\r\n.social li{\r\n    margin: 0.4em 0.5em; \r\n}\r\n\r\n.social li a{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*first child of #page-content so it doesn't shift around*/\r\n.no-margin-top {\r\n    margin-top: 0px!important\r\n}\r\n\r\n/* put toggle bars on the left :: not using button */\r\n#slide-nav .navbar-toggle {\r\n    cursor: pointer;\r\n    position: relative;\r\n    line-height: 0;\r\n    float: left;\r\n    margin: 0;\r\n    width: 30px;\r\n    height: 40px;\r\n    padding: 10px 0 0 0;\r\n    border: 0;\r\n    background: transparent;\r\n}\r\n/* icon bar prettyup - optional */\r\n#slide-nav .navbar-toggle > .icon-bar {\r\n    width: 100%;\r\n    display: block;\r\n    height: 3px;\r\n    margin: 5px 0 0 0;\r\n}\r\n#slide-nav .navbar-toggle.slide-active .icon-bar {\r\n    background: orange\r\n}\r\n.navbar-header {\r\n    position: relative\r\n}\r\n/* un fix the navbar when active so that all the menu items are accessible */\r\n.navbar.navbar-fixed-top.slide-active {\r\n    position: relative\r\n}\r\n\r\n@media (max-width:767px) { \r\n    .social{\r\n        float: none;\r\n        text-align: center;\r\n    }\r\n    #slidemenu.slide-active{\r\n        height: 500px;\r\n        overflow-y: scroll; \r\n    }\r\n    #slide-nav.navbar-inverse #navbar-height-col {\r\n        background: #333;\r\n        z-index: 1;\r\n        border: 0;\r\n    }\r\n    #slide-nav #navbar-height-col {\r\n        position: fixed;\r\n        top: 0;\r\n        height: 100%;\r\n        width: 80%;\r\n        left: -80%;\r\n        background: #eee;\r\n    }\r\n\r\n\t#slide-nav .container {\r\n\t    margin: 0;\r\n\t    padding: 0!important;\r\n\t}\r\n\t#slide-nav .navbar-header {\r\n\t    margin: 0 auto;\r\n\t    padding: 0 15px;\r\n\t}\r\n\t#slide-nav .navbar.slide-active {\r\n\t    position: absolute;\r\n\t    width: 80%;\r\n\t    top: -1px;\r\n\t    z-index: 1000;\r\n\t}\r\n\t#slide-nav #slidemenu {\r\n\t    background: #f7f7f7;\r\n\t    left: -100%;\r\n\t    width: 80%;\r\n\t    min-width: 0;\r\n\t    position: absolute;\r\n\t    padding-left: 0;\r\n\t    z-index: 2;\r\n\t    top: -8px;\r\n\t    margin: 0;\r\n\t}\r\n\t#slide-nav #slidemenu .navbar-nav {\r\n\t    min-width: 0;\r\n\t    width: 100%;\r\n\t    margin: 20px 0;\r\n\t}\r\n\t#slide-nav #slidemenu .navbar-nav .dropdown-menu li a {\r\n\t    min-width: 0;\r\n\t    width: 80%;\r\n\t    white-space: normal;\r\n\t}\r\n\t#slide-nav {\r\n\t    border-top: 0\r\n\t}\r\n    #slide-nav.slide-active {\r\n\t    position: fixed;\r\n\t}\r\n\t#slide-nav.navbar-inverse #slidemenu {\r\n\t    background: #333\r\n\t}\r\n\t/* this is behind the navigation but the navigation is not inside it so that the navigation is accessible and scrolls*/\r\n\t#slide-nav #navbar-height-col {\r\n\t    position: fixed;\r\n\t    top: 0;\r\n\t    height: 100%;\r\n\t    width: 80%;\r\n\t    left: -80%;\r\n\t    background: #eee;\r\n\t}\r\n\t#slide-nav.navbar-inverse #navbar-height-col {\r\n\t    background: #333;\r\n\t    z-index: 1;\r\n\t    border: 0;\r\n\t}\r\n\t#slide-nav .navbar-form {\r\n\t    width: 100%;\r\n\t    margin: 8px 0;\r\n\t    text-align: center;\r\n\t    overflow: hidden;\r\n\t    /*fast clearfixer*/\r\n\t}\r\n\t#slide-nav .navbar-form .form-control {\r\n\t    text-align: center\r\n\t}\r\n\t#slide-nav .navbar-form .btn {\r\n\t    width: 100%\r\n\t}\r\n\r\n    /*Menu button*/\r\n    #nav-icon2{\r\n        width: 60px;\r\n        /*height: 45px;*/\r\n        position: relative;\r\n        margin: 5px auto;\r\n        float: left;\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n        transition: .5s ease-in-out;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    #nav-icon2 span {\r\n        display: block;\r\n        position: absolute;\r\n        width: 23px;\r\n        height: 5px;\r\n        background: white;\r\n        opacity: 1;\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n        transition: .25s ease-in-out;\r\n    }\r\n\r\n    #nav-icon2.open span {\r\n        background: #d3531a;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(even) {\r\n        left: 35%;\r\n        border-radius: 0 9px 9px 0;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(odd) {\r\n        left:0px;\r\n        border-radius: 9px 0 0 9px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(1), #nav-icon2 span:nth-child(2) {\r\n        top: 0px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(3), #nav-icon2 span:nth-child(4) {\r\n        top: 18px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(5), #nav-icon2 span:nth-child(6) {\r\n        top: 36px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(1),#nav-icon2.open span:nth-child(6) {\r\n        -webkit-transform: rotate(45deg);\r\n        transform: rotate(45deg);\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(2),#nav-icon2.open span:nth-child(5) {\r\n        -webkit-transform: rotate(-45deg);\r\n        transform: rotate(-45deg);\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(1) {\r\n        left: 5px;\r\n        top: 7px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(2) {\r\n        left: calc(50% - 9px); /*50% -5 */\r\n        top: 9px; /* 7*/\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(3) {\r\n        left: -50%;\r\n        opacity: 0;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(4) {\r\n        left: 100%;\r\n        opacity: 0;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(5) {\r\n        left: 5px;\r\n        top: 25px; /*29*/\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(6) {\r\n        left: calc(50% - 7px); /*50% -5 */\r\n        top: 25px; /*29*/\r\n    }\r\n}\r\n@media (min-width:768px) { \r\n\t.navbar.navbar-fixed-top.slide-active {\r\n\t    position: fixed\r\n\t}\r\n\t.navbar-header {\r\n\t    left: 0!important\r\n\t}\r\n}\r\n\r\n"

/***/ },

/***/ 607:
/***/ function(module, exports) {

module.exports = "<div class=\"row about\">\n  <div class=\"col-md-1 col-xs-0\"></div>\n  <div class=\"extra-wrap extra-block-1 col-md-10 col-xs-12\">\n    <h2 style=\"text-align: center;\">About me</h2>\n    <h3 style=\"text-align: center;\">Sam Kromstain – a Web Designer &amp; Web Developer from Los Angeles</h3>\n    <p><img class=\"alignleft  wp-image-2797 extra\" alt=\"about-photo\" src=\"../assets/me.jpg\"></p>\n    <p>Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor.Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissimpulvin ar alorem. Vestibulum sed anonsectetur adipiscing elit.</p>\n    <p>Cras eros nulla, porta ut est in, cursus egestas velit. Cras quis bibendum odio, in condimentum ante. Aliquam gravida mauris sed imperdiet porttitor. Vestibulum feugiat nulla id massa porta varius. Phasellus dui sem, volutpat quis dignissim vitae, auc tor quis nunc. Duis malesuada, elit necfaucibus feugiat, ligula arcu porta erat, quis molestie justo nulla</p>\n    <a href=\"https://livedemo00.template-help.com/wordpress_49158/portfolio/portfolio-3/\" class=\"btn \">view my works</a>\n  </div>\n  <div class=\"col-md-1 col-xs-0\"></div>\n</div>\n"

/***/ },

/***/ 608:
/***/ function(module, exports) {

module.exports = "<app-header>Loading...</app-header>\r\n<app-about></app-about>"

/***/ },

/***/ 609:
/***/ function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <app-navigation>Loading...</app-navigation>\r\n  <div class=\"container\" id=\"page-content\">\r\n    <div class=\"row\">\r\n      <div class=\"span12\">\r\n          <div class=\"hashAncor\" id=\"homePage\"></div>\r\n          <div class=\"logo_wrap\">\r\n            <div class=\"headerCover\">\r\n              <!--<img src=\"https://livedemo00.template-help.com/wordpress_49158/wp-content/themes/theme49158/images/header_extra_image.png\" alt=\"\">-->\r\n            </div>\r\n            <div class=\"logo pull-left\">\r\n              <h1>Leonardo D'Antoni</h1>\r\n              <p class=\"logo_tagline\">Construllendo maravillosas experiencias web</p>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n </div>\r\n</header>"

/***/ },

/***/ 610:
/***/ function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"\" [ngClass]=\"{'active': section.active}\" *ngFor=\"let section of sections\">\r\n        <a href=\"#{{section.hashTag}}\" (click)=\"changeSection(section)\">{{section.name}}</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav social\">\r\n      <li> <a href=\"https://www.linkedin.com/in/leonardo-dantoni-93aba422/\" target=\"_blank\"><span class=\"fa fa-linkedin fa-3x\"></span></a> </li>\r\n      <li><a href=\"https://www.facebook.com/leonardo.dantoni\" target=\"_blank\"><span class=\"fa fa-facebook fa-3x\"></span></a></li>\r\n      <li><a href=\"https://twitter.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-twitter fa-3x\"></span></a></li>\r\n      <li><a href=\"https://github.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-github-alt fa-3x\"></span></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>-->\r\n\r\n\r\n <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" id=\"slide-nav\">\r\n  <div class=\"container\">\r\n   <div class=\"navbar-header\">\r\n    <!--<a class=\"navbar-toggle\"  (click)=\"toggleMenu($event)\"> \r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n     </a>-->\r\n     <div id=\"nav-icon2\" (click)=\"toggleMenu($event)\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <a class=\"navbar-brand\" href=\"#\">LD</a>\r\n   </div>\r\n   <div id=\"slidemenu\">\r\n    <!--<form class=\"navbar-form navbar-right\" role=\"form\">\r\n      <div class=\"form-group\">\r\n        <input type=\"search\" placeholder=\"search\" class=\"form-control\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\r\n    </form>-->\r\n     \r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"\" [ngClass]=\"{'active': section.active}\" *ngFor=\"let section of sections\">\r\n        <a href=\"#{{section.hashTag}}\" (click)=\"changeSection(section)\">{{section.name}}</a>\r\n      </li>\r\n     <!--<li class=\"active\"><a href=\"#\">Home</a></li>\r\n     <li><a href=\"#about\">About</a></li>\r\n     <li><a href=\"#contact\">Contact</a></li>\r\n     <li class=\"dropdown\" [class.open]=\"dropDownOpen\">\r\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"dropToggle($event)\">Dropdown <span class=\"caret\"></span></a>\r\n      <ul class=\"dropdown-menu\">\r\n       <li><a href=\"#\">Action</a></li>\r\n       <li><a href=\"#\">Another action</a></li>\r\n       <li><a href=\"#\">Something else here</a></li>\r\n       <li class=\"divider\"></li>\r\n       <li class=\"dropdown-header\">Nav header</li>\r\n       <li><a href=\"#\">Separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">Action</a></li>\r\n       <li><a href=\"#\">Another action</a></li>\r\n       <li><a href=\"#\">Something else here</a></li>\r\n       <li class=\"divider\"></li>\r\n       <li class=\"dropdown-header\">Nav header</li>\r\n       <li><a href=\"#\">Separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">Action</a></li>\r\n       <li><a href=\"#\">Another action</a></li>\r\n       <li><a href=\"#\">Something else here</a></li>\r\n       <li class=\"divider\"></li>\r\n       <li class=\"dropdown-header\">Nav header</li>\r\n       <li><a href=\"#\">Separated link test long title goes here</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n      </ul>\r\n     </li>-->\r\n    </ul>\r\n    <ul class=\"nav navbar-nav social\">\r\n      <li> <a href=\"https://www.linkedin.com/in/leonardo-dantoni-93aba422/\" target=\"_blank\"><span class=\"fa fa-linkedin fa-3x\"></span></a> </li>\r\n      <li><a href=\"https://www.facebook.com/leonardo.dantoni\" target=\"_blank\"><span class=\"fa fa-facebook fa-3x\"></span></a></li>\r\n      <li><a href=\"https://twitter.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-twitter fa-3x\"></span></a></li>\r\n      <li><a href=\"https://github.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-github-alt fa-3x\"></span></a></li>\r\n    </ul>\r\n          \r\n   </div>\r\n   <div id=\"navbar-height-col\"></div>\r\n  </div>\r\n </div>"

/***/ },

/***/ 626:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(331);


/***/ }

},[627]);
//# sourceMappingURL=client.bundle.map