module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(14);










// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 4200;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_4_compression__());
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_9__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/server.js.map

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(23);
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
var __universal__ = __webpack_require__(26);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/__2.1.1.workaround.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
            template: __webpack_require__(19),
            styles: [__webpack_require__(15)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/about.component.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
            template: __webpack_require__(20),
            styles: [__webpack_require__(16)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/app.component.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
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
                 * NodeModule, NodeHttpModule, NodeJsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/app.node.module.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
            template: __webpack_require__(21),
            styles: [__webpack_require__(17)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/header.component.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=C:/Code/PortfolioUniversal/src/index.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(46);
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
            template: __webpack_require__(22),
            styles: [__webpack_require__(18)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/navigation.component.js.map

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/Code/PortfolioUniversal/src/polyfills.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [];
//# sourceMappingURL=C:/Code/PortfolioUniversal/src/server.routes.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = ".about{\r\n    background-color: #b3a58b;\r\n    color: white;\r\n}\r\n\r\n.alignleft {\r\n    float: left;\r\n    margin: 5px 20px 10px 0;\r\n}\r\n\r\n.extra-block-1 p {\r\n    margin-bottom: 26px;\r\n}\r\n\r\nh2{\r\n    font: bold 66px/70px Orbitron;\r\n    color: #ffa05c;\r\n}\r\n.extra-block-1 h3 {\r\n    font-family: Open Sans;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0;\r\n}\r\nh3 {\r\n    font: bold 18px/22px Orbitron;\r\n}\r\n.extra-block-1 h3:after {\r\n    content: '';\r\n    display: block;\r\n    max-width: 570px;\r\n    height: 5px;\r\n    margin: 26px auto 54px;\r\n    background-color: black;\r\n}"

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = ".header {\r\n    background-image: url(../assets/header.jpg);\r\n    background-repeat: no-repeat;\r\n    background-position: top center;\r\n    background-attachment: scroll;\r\n    min-height: 500px;\r\n}\r\n\r\n.header .logo_wrap .logo .logo_tagline {\r\n    font-size: 1.5em;\r\n    line-height: 1.6em;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #ffa05c;\r\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);\r\n    letter-spacing: 1px;\r\n    margin: 0;\r\n}\r\n\r\n.header .logo_wrap {\r\n    position: relative;\r\n    text-align: center;\r\n    margin-top: 120px;\r\n    margin-bottom: 90px;\r\n}\r\n\r\n.container {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    position: relative;\r\n}\r\n\r\n.header .logo_wrap .logo {\r\n    float: none !important;\r\n    display: inline-block;\r\n    padding: 0;\r\n}\r\n\r\n.header .logo_wrap .logo .logo_h {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.logo h1{\r\n    font: bold 5em Orbitron;\r\n    color: #ffa05c;\r\n    text-shadow: 0px 0px 18px rgba(0, 0, 0, 1);\r\n}\r\n\r\n/*wrap the entire page content but not nav inside this div if not a fixed top, don't add any top padding */\r\n#page-content {\r\n    position: relative;\r\n    padding-top: 70px;\r\n    left: 0;\r\n}\r\n#page-content.slide-active {\r\n    padding-top: 0\r\n}\r\n\r\n\r\n@media (min-width:768px) { \r\n\t#page-content {\r\n\t    left: 0!important;\r\n\t}\r\n}\r\n\r\n@media (max-width:767px){\r\n    .header{\r\n        overflow-x: hidden;\r\n    }\r\n    .header.slide-active{\r\n        overflow: hidden;\r\n    }\r\n    .logo h1{\r\n        font: bold 4em Orbitron;\r\n    }\r\n}"

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = ".navbar{\r\n    background: #424242;\r\n}\r\n\r\n.nav>li>a {\r\n    text-transform: uppercase;\r\n    border: none;\r\n    margin: 0 17px;\r\n    font: bold 14px/20px Orbitron;\r\n    color: #ffffff;\r\n}\r\n\r\n.nav>li.active>a {\r\n    color: #ffa05c;\r\n    background-color: transparent;\r\n}\r\n\r\n.social{\r\n    float: right;\r\n    color: #ffffff;\r\n}\r\n.social li{\r\n    margin: 0.4em 0.5em; \r\n}\r\n\r\n.social li a{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*first child of #page-content so it doesn't shift around*/\r\n.no-margin-top {\r\n    margin-top: 0px!important\r\n}\r\n\r\n/* put toggle bars on the left :: not using button */\r\n#slide-nav .navbar-toggle {\r\n    cursor: pointer;\r\n    position: relative;\r\n    line-height: 0;\r\n    float: left;\r\n    margin: 0;\r\n    width: 30px;\r\n    height: 40px;\r\n    padding: 10px 0 0 0;\r\n    border: 0;\r\n    background: transparent;\r\n}\r\n/* icon bar prettyup - optional */\r\n#slide-nav .navbar-toggle > .icon-bar {\r\n    width: 100%;\r\n    display: block;\r\n    height: 3px;\r\n    margin: 5px 0 0 0;\r\n}\r\n#slide-nav .navbar-toggle.slide-active .icon-bar {\r\n    background: orange\r\n}\r\n.navbar-header {\r\n    position: relative\r\n}\r\n/* un fix the navbar when active so that all the menu items are accessible */\r\n.navbar.navbar-fixed-top.slide-active {\r\n    position: relative\r\n}\r\n\r\n@media (max-width:767px) { \r\n    .social{\r\n        float: none;\r\n        text-align: center;\r\n    }\r\n    #slidemenu.slide-active{\r\n        height: 500px;\r\n        overflow-y: scroll; \r\n    }\r\n    #slide-nav.navbar-inverse #navbar-height-col {\r\n        background: #333;\r\n        z-index: 1;\r\n        border: 0;\r\n    }\r\n    #slide-nav #navbar-height-col {\r\n        position: fixed;\r\n        top: 0;\r\n        height: 100%;\r\n        width: 80%;\r\n        left: -80%;\r\n        background: #eee;\r\n    }\r\n\r\n\t#slide-nav .container {\r\n\t    margin: 0;\r\n\t    padding: 0!important;\r\n\t}\r\n\t#slide-nav .navbar-header {\r\n\t    margin: 0 auto;\r\n\t    padding: 0 15px;\r\n\t}\r\n\t#slide-nav .navbar.slide-active {\r\n\t    position: absolute;\r\n\t    width: 80%;\r\n\t    top: -1px;\r\n\t    z-index: 1000;\r\n\t}\r\n\t#slide-nav #slidemenu {\r\n\t    background: #f7f7f7;\r\n\t    left: -100%;\r\n\t    width: 80%;\r\n\t    min-width: 0;\r\n\t    position: absolute;\r\n\t    padding-left: 0;\r\n\t    z-index: 2;\r\n\t    top: -8px;\r\n\t    margin: 0;\r\n\t}\r\n\t#slide-nav #slidemenu .navbar-nav {\r\n\t    min-width: 0;\r\n\t    width: 100%;\r\n\t    margin: 20px 0;\r\n\t}\r\n\t#slide-nav #slidemenu .navbar-nav .dropdown-menu li a {\r\n\t    min-width: 0;\r\n\t    width: 80%;\r\n\t    white-space: normal;\r\n\t}\r\n\t#slide-nav {\r\n\t    border-top: 0\r\n\t}\r\n    #slide-nav.slide-active {\r\n\t    position: fixed;\r\n\t}\r\n\t#slide-nav.navbar-inverse #slidemenu {\r\n\t    background: #333\r\n\t}\r\n\t/* this is behind the navigation but the navigation is not inside it so that the navigation is accessible and scrolls*/\r\n\t#slide-nav #navbar-height-col {\r\n\t    position: fixed;\r\n\t    top: 0;\r\n\t    height: 100%;\r\n\t    width: 80%;\r\n\t    left: -80%;\r\n\t    background: #eee;\r\n\t}\r\n\t#slide-nav.navbar-inverse #navbar-height-col {\r\n\t    background: #333;\r\n\t    z-index: 1;\r\n\t    border: 0;\r\n\t}\r\n\t#slide-nav .navbar-form {\r\n\t    width: 100%;\r\n\t    margin: 8px 0;\r\n\t    text-align: center;\r\n\t    overflow: hidden;\r\n\t    /*fast clearfixer*/\r\n\t}\r\n\t#slide-nav .navbar-form .form-control {\r\n\t    text-align: center\r\n\t}\r\n\t#slide-nav .navbar-form .btn {\r\n\t    width: 100%\r\n\t}\r\n\r\n    /*Menu button*/\r\n    #nav-icon2{\r\n        width: 60px;\r\n        /*height: 45px;*/\r\n        position: relative;\r\n        margin: 5px auto;\r\n        float: left;\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n        transition: .5s ease-in-out;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    #nav-icon2 span {\r\n        display: block;\r\n        position: absolute;\r\n        width: 23px;\r\n        height: 5px;\r\n        background: white;\r\n        opacity: 1;\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n        transition: .25s ease-in-out;\r\n    }\r\n\r\n    #nav-icon2.open span {\r\n        background: #d3531a;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(even) {\r\n        left: 35%;\r\n        border-radius: 0 9px 9px 0;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(odd) {\r\n        left:0px;\r\n        border-radius: 9px 0 0 9px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(1), #nav-icon2 span:nth-child(2) {\r\n        top: 0px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(3), #nav-icon2 span:nth-child(4) {\r\n        top: 18px;\r\n    }\r\n\r\n    #nav-icon2 span:nth-child(5), #nav-icon2 span:nth-child(6) {\r\n        top: 36px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(1),#nav-icon2.open span:nth-child(6) {\r\n        -webkit-transform: rotate(45deg);\r\n        transform: rotate(45deg);\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(2),#nav-icon2.open span:nth-child(5) {\r\n        -webkit-transform: rotate(-45deg);\r\n        transform: rotate(-45deg);\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(1) {\r\n        left: 5px;\r\n        top: 7px;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(2) {\r\n        left: calc(50% - 9px); /*50% -5 */\r\n        top: 9px; /* 7*/\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(3) {\r\n        left: -50%;\r\n        opacity: 0;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(4) {\r\n        left: 100%;\r\n        opacity: 0;\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(5) {\r\n        left: 5px;\r\n        top: 25px; /*29*/\r\n    }\r\n\r\n    #nav-icon2.open span:nth-child(6) {\r\n        left: calc(50% - 7px); /*50% -5 */\r\n        top: 25px; /*29*/\r\n    }\r\n}\r\n@media (min-width:768px) { \r\n\t.navbar.navbar-fixed-top.slide-active {\r\n\t    position: fixed\r\n\t}\r\n\t.navbar-header {\r\n\t    left: 0!important\r\n\t}\r\n}\r\n\r\n"

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = "<div class=\"row about\">\n  <div class=\"col-md-1 col-xs-0\"></div>\n  <div class=\"extra-wrap extra-block-1 col-md-10 col-xs-12\">\n    <h2 style=\"text-align: center;\">About me</h2>\n    <h3 style=\"text-align: center;\">Sam Kromstain – a Web Designer &amp; Web Developer from Los Angeles</h3>\n    <p><img class=\"alignleft  wp-image-2797 extra\" alt=\"about-photo\" src=\"../assets/me.jpg\"></p>\n    <p>Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor.Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissimpulvin ar alorem. Vestibulum sed anonsectetur adipiscing elit.</p>\n    <p>Cras eros nulla, porta ut est in, cursus egestas velit. Cras quis bibendum odio, in condimentum ante. Aliquam gravida mauris sed imperdiet porttitor. Vestibulum feugiat nulla id massa porta varius. Phasellus dui sem, volutpat quis dignissim vitae, auc tor quis nunc. Duis malesuada, elit necfaucibus feugiat, ligula arcu porta erat, quis molestie justo nulla</p>\n    <a href=\"https://livedemo00.template-help.com/wordpress_49158/portfolio/portfolio-3/\" class=\"btn \">view my works</a>\n  </div>\n  <div class=\"col-md-1 col-xs-0\"></div>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = "<app-header>Loading...</app-header>\r\n<app-about></app-about>"

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <app-navigation>Loading...</app-navigation>\r\n  <div class=\"container\" id=\"page-content\">\r\n    <div class=\"row\">\r\n      <div class=\"span12\">\r\n          <div class=\"hashAncor\" id=\"homePage\"></div>\r\n          <div class=\"logo_wrap\">\r\n            <div class=\"headerCover\">\r\n              <!--<img src=\"https://livedemo00.template-help.com/wordpress_49158/wp-content/themes/theme49158/images/header_extra_image.png\" alt=\"\">-->\r\n            </div>\r\n            <div class=\"logo pull-left\">\r\n              <h1>Leonardo D'Antoni</h1>\r\n              <p class=\"logo_tagline\">Construllendo maravillosas experiencias web</p>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n </div>\r\n</header>"

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"\" [ngClass]=\"{'active': section.active}\" *ngFor=\"let section of sections\">\r\n        <a href=\"#{{section.hashTag}}\" (click)=\"changeSection(section)\">{{section.name}}</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav social\">\r\n      <li> <a href=\"https://www.linkedin.com/in/leonardo-dantoni-93aba422/\" target=\"_blank\"><span class=\"fa fa-linkedin fa-3x\"></span></a> </li>\r\n      <li><a href=\"https://www.facebook.com/leonardo.dantoni\" target=\"_blank\"><span class=\"fa fa-facebook fa-3x\"></span></a></li>\r\n      <li><a href=\"https://twitter.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-twitter fa-3x\"></span></a></li>\r\n      <li><a href=\"https://github.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-github-alt fa-3x\"></span></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>-->\r\n\r\n\r\n <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" id=\"slide-nav\">\r\n  <div class=\"container\">\r\n   <div class=\"navbar-header\">\r\n    <!--<a class=\"navbar-toggle\"  (click)=\"toggleMenu($event)\"> \r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n     </a>-->\r\n     <div id=\"nav-icon2\" (click)=\"toggleMenu($event)\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <a class=\"navbar-brand\" href=\"#\">LD</a>\r\n   </div>\r\n   <div id=\"slidemenu\">\r\n    <!--<form class=\"navbar-form navbar-right\" role=\"form\">\r\n      <div class=\"form-group\">\r\n        <input type=\"search\" placeholder=\"search\" class=\"form-control\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\r\n    </form>-->\r\n     \r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"\" [ngClass]=\"{'active': section.active}\" *ngFor=\"let section of sections\">\r\n        <a href=\"#{{section.hashTag}}\" (click)=\"changeSection(section)\">{{section.name}}</a>\r\n      </li>\r\n     <!--<li class=\"active\"><a href=\"#\">Home</a></li>\r\n     <li><a href=\"#about\">About</a></li>\r\n     <li><a href=\"#contact\">Contact</a></li>\r\n     <li class=\"dropdown\" [class.open]=\"dropDownOpen\">\r\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"dropToggle($event)\">Dropdown <span class=\"caret\"></span></a>\r\n      <ul class=\"dropdown-menu\">\r\n       <li><a href=\"#\">Action</a></li>\r\n       <li><a href=\"#\">Another action</a></li>\r\n       <li><a href=\"#\">Something else here</a></li>\r\n       <li class=\"divider\"></li>\r\n       <li class=\"dropdown-header\">Nav header</li>\r\n       <li><a href=\"#\">Separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">Action</a></li>\r\n       <li><a href=\"#\">Another action</a></li>\r\n       <li><a href=\"#\">Something else here</a></li>\r\n       <li class=\"divider\"></li>\r\n       <li class=\"dropdown-header\">Nav header</li>\r\n       <li><a href=\"#\">Separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">Action</a></li>\r\n       <li><a href=\"#\">Another action</a></li>\r\n       <li><a href=\"#\">Something else here</a></li>\r\n       <li class=\"divider\"></li>\r\n       <li class=\"dropdown-header\">Nav header</li>\r\n       <li><a href=\"#\">Separated link test long title goes here</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n       <li><a href=\"#\">One more separated link</a></li>\r\n      </ul>\r\n     </li>-->\r\n    </ul>\r\n    <ul class=\"nav navbar-nav social\">\r\n      <li> <a href=\"https://www.linkedin.com/in/leonardo-dantoni-93aba422/\" target=\"_blank\"><span class=\"fa fa-linkedin fa-3x\"></span></a> </li>\r\n      <li><a href=\"https://www.facebook.com/leonardo.dantoni\" target=\"_blank\"><span class=\"fa fa-facebook fa-3x\"></span></a></li>\r\n      <li><a href=\"https://twitter.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-twitter fa-3x\"></span></a></li>\r\n      <li><a href=\"https://github.com/lfdantoni\" target=\"_blank\"><span class=\"fa fa-github-alt fa-3x\"></span></a></li>\r\n    </ul>\r\n          \r\n   </div>\r\n   <div id=\"navbar-height-col\"></div>\r\n  </div>\r\n </div>"

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("jquery");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGYzNTY1YTZlY2ZiNDM2MjJhOTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR3VCO0FBQ1M7QUFDSjtBQUNNO0FBQ1E7QUFDWTtBQUNSO0FBQ0c7QUFDTztBQUNoQjtBQUV4QyxNQUFNO0FBRU4sSUFBTSxHQUFHLEdBQUkscUNBQU8sRUFBRSxDQUFDO0FBQ3ZCLElBQU0sSUFBSSxHQUFHLDBDQUFTLENBQUMsNkNBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJ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Yyx5c0Y7Ozs7OztBQ0FwdkUsOEM7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsdUU7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsa0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGYzNTY1YTZlY2ZiNDM2MjJhOTYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiB0aGUgcG9seWZpbGxzIG11c3QgYmUgdGhlIGZpcnN0IHRoaW5nIGltcG9ydGVkXHJcbiAqL1xyXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcclxuaW1wb3J0ICcuL19fMi4xLjEud29ya2Fyb3VuZC50cyc7IC8vIHRlbXBvcmFyeSB1bnRpbCAyLjEuMSB0aGluZ3MgYXJlIHBhdGNoZWQgaW4gQ29yZVxyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm5vZGUubW9kdWxlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XHJcblxyXG4vLyBBcHBcclxuXHJcbmNvbnN0IGFwcCAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MjAwO1xyXG5cclxuLyoqXHJcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXHJcbiAqL1xyXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHByZXNzIFZpZXdcclxuICovXHJcbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XHJcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSk7XHJcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcclxuXHJcbi8qKlxyXG4gKiBFbmFibGUgY29tcHJlc3Npb25cclxuICovXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcblxyXG4vKipcclxuICogc2VydmUgc3RhdGljIGZpbGVzXHJcbiAqL1xyXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZX0pKTtcclxuXHJcbi8qKlxyXG4gKiBwbGFjZSB5b3VyIGFwaSByb3V0ZXMgaGVyZVxyXG4gKi9cclxuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XHJcblxyXG4vKipcclxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcclxuICogQHBhcmFtIHJlcVxyXG4gKiBAcGFyYW0gcmVzXHJcbiAqL1xyXG5mdW5jdGlvbiBuZ0FwcChyZXE6IGFueSwgcmVzOiBhbnkpIHtcclxuICByZXMucmVuZGVyKCdpbmRleCcsIHtcclxuICAgIHJlcSxcclxuICAgIHJlcyxcclxuICAgIG5nTW9kdWxlOiBBcHBNb2R1bGUsXHJcbiAgICBwcmVib290OiBmYWxzZSxcclxuICAgIGJhc2VVcmw6ICcvJyxcclxuICAgIHJlcXVlc3RVcmw6IHJlcS5vcmlnaW5hbFVybCxcclxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1c2UgdW5pdmVyc2FsIGZvciBzcGVjaWZpYyByb3V0ZXNcclxuICovXHJcbmFwcC5nZXQoJy8nLCBuZ0FwcCk7XHJcbnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XHJcbiAgYXBwLmdldChgLyR7cm91dGV9LypgLCBuZ0FwcCk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIGlmIHlvdSB3YW50IHRvIHVzZSB1bml2ZXJzYWwgZm9yIGFsbCByb3V0ZXMsIHlvdSBjYW4gdXNlIHRoZSAnKicgd2lsZGNhcmRcclxuICovXHJcblxyXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgY29uc3QgcG9qbyA9IHtzdGF0dXM6IDQwNCwgbWVzc2FnZTogJ05vIENvbnRlbnQnfTtcclxuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkocG9qbywgbnVsbCwgMik7XHJcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCIvKlxyXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXHJcbiAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgKi9cclxubGV0IF9fY29tcGlsZXJfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcclxuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG52YXIgX19jb3JlX3ByaXZhdGVfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG5sZXQgcGF0Y2g6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbmlmICghX19jb3JlX3ByaXZhdGVfXy5oYXNPd25Qcm9wZXJ0eSgnVmlld1V0aWxzJykpIHtcclxuICAgIHBhdGNoID0gdHJ1ZTtcclxuICAgIF9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xyXG59XHJcblxyXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xyXG4gICAgcGF0Y2ggPSB0cnVlO1xyXG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XHJcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxyXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcclxuICAgIH1cclxufVxyXG5cclxudmFyIF9fdW5pdmVyc2FsX186IGFueSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xyXG5pZiAocGF0Y2gpIHtcclxuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xyXG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxyXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hYm91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm91dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fib3V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIvKipcclxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXHJcbiAqIEJ5IHNwbGl0dGluZyB0aGVzZSwgeW91J3JlIGFibGUgdG8gY3JlYXRlIGxvZ2ljLCBpbXBvcnRzLCBldGMgdGhhdCBhcmUgXCJQbGF0Zm9ybVwiIHNwZWNpZmljLlxyXG4gKiBJZiB5b3Ugd2FudCB5b3VyIGNvZGUgdG8gYmUgY29tcGxldGVseSBVbml2ZXJzYWwgYW5kIGRvbid0IG5lZWQgdGhhdFxyXG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcclxuICogY2xpZW50LnRzIGFuZCBzZXJ2ZXIudHNcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgeyBhcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC9hcHAucm91dGluZyc7XHJcblxyXG4vKipcclxuICogVG9wLWxldmVsIE5nTW9kdWxlIFwiY29udGFpbmVyXCJcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xyXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAvKiogT3VyIENvbXBvbmVudHMgKi9cclxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBOYXZpZ2F0aW9uQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIEFib3V0Q29tcG9uZW50IF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgLyoqXHJcbiAgICAgKiBOT1RFOiBOZWVkcyB0byBiZSB5b3VyIGZpcnN0IGltcG9ydCAoISlcclxuICAgICAqIE5vZGVNb2R1bGUsIE5vZGVIdHRwTW9kdWxlLCBOb2RlSnNvbnBNb2R1bGUgYXJlIGluY2x1ZGVkXHJcbiAgICAgKi9cclxuICAgIFVuaXZlcnNhbE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlXHJcbiAgICAvKipcclxuICAgICAqIHVzaW5nIHJvdXRlc1xyXG4gICAgICovXHJcbiAgICAvLyBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJleHBvcnQgKiBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJU2VjdGlvbiB9IGZyb20gJy4uL21vZGVscy9JU2VjdGlvbidcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1uYXZpZ2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNlY3Rpb25zOiBJU2VjdGlvbltdID0gW3tuYW1lOiAnSG9tZScsIGFjdGl2ZTogdHJ1ZSwgaGFzaFRhZzogJ2hvbWUnfSwge25hbWU6ICdTa2lsbHMnLCBhY3RpdmU6IGZhbHNlLCBoYXNoVGFnOiAnc2tpbGxzJ31dXHJcbiAgYWN0aXZlU2VjdGlvbjogSVNlY3Rpb247XHJcbiAgc2VsZWN0ZWQgPSAnI3NsaWRlbWVudSwgI3BhZ2UtY29udGVudCwgYm9keSwgLm5hdmJhciwgLm5hdmJhci1oZWFkZXInO1xyXG4gIGRyb3BEb3duT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLnNlY3Rpb25zWzBdO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2VjdGlvbihzZWN0aW9uOiBJU2VjdGlvbil7XHJcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gPSBzZWN0aW9uO1xyXG4gICAgdGhpcy5hY3RpdmVTZWN0aW9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcclxuICBvblJlc2l6ZShldmVudCkge1xyXG4gICAgaWYgKCQoZXZlbnQudGFyZ2V0KS53aWR0aCgpID4gNzY3ICYmICQoJy5uYXZiYXItdG9nZ2xlJykuaXMoJzpoaWRkZW4nKSkge1xyXG4gICAgICAgICQodGhpcy5zZWxlY3RlZCkucmVtb3ZlQ2xhc3MoJ3NsaWRlLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCQoJy5uYXZiYXItdG9nZ2xlJykpO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlubmVyV2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgZHJvcFRvZ2dsZSgkZXZlbnQpe1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmRyb3BEb3duT3BlbiA9ICF0aGlzLmRyb3BEb3duT3BlbjtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU1lbnUoJGV2ZW50KXtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vc3RpY2sgaW4gdGhlIGZpeGVkIDEwMCUgaGVpZ2h0IGJlaGluZCB0aGUgbmF2YmFyIGJ1dCBkb24ndCB3cmFwIGl0XHJcbiAgICAvLyQoJyNzbGlkZS1uYXYubmF2YmFyIC5jb250YWluZXInKS5hcHBlbmQoJCgnPGRpdiBpZD1cIm5hdmJhci1oZWlnaHQtY29sXCI+PC9kaXY+JykpO1xyXG5cclxuICAgIC8vIEVudGVyIHlvdXIgaWRzIG9yIGNsYXNzZXNcclxuICAgIHZhciB0b2dnbGVyID0gJy5uYXZiYXItdG9nZ2xlJztcclxuICAgIHZhciBwYWdld3JhcHBlciA9ICcjcGFnZS1jb250ZW50JztcclxuICAgIHZhciBuYXZpZ2F0aW9ud3JhcHBlciA9ICcubmF2YmFyLWhlYWRlcic7XHJcbiAgICB2YXIgbWVudXdpZHRoID0gJzEwMCUnOyAvLyB0aGUgbWVudSBpbnNpZGUgdGhlIHNsaWRlIG1lbnUgaXRzZWxmXHJcbiAgICB2YXIgc2xpZGV3aWR0aCA9ICc4MCUnO1xyXG4gICAgdmFyIG1lbnVuZWcgPSAnLTEwMCUnO1xyXG4gICAgdmFyIHNsaWRlbmVnID0gJy04MCUnO1xyXG4gICAgdmFyIHNlbGVjdGVkID0gJCgkZXZlbnQuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ3NsaWRlLWFjdGl2ZScpO1xyXG5cclxuICAgICQoJyNzbGlkZW1lbnUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgbGVmdDogc2VsZWN0ZWQgPyBtZW51bmVnIDogJzBweCdcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNuYXZiYXItaGVpZ2h0LWNvbCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBsZWZ0OiBzZWxlY3RlZCA/IHNsaWRlbmVnIDogJzBweCdcclxuICAgIH0pO1xyXG5cclxuICAgICQocGFnZXdyYXBwZXIpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBsZWZ0OiBzZWxlY3RlZCA/ICcwcHgnIDogc2xpZGV3aWR0aFxyXG4gICAgfSk7XHJcblxyXG4gICAgJChuYXZpZ2F0aW9ud3JhcHBlcikuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGxlZnQ6IHNlbGVjdGVkID8gJzBweCcgOiBzbGlkZXdpZHRoXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgkZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoJ3NsaWRlLWFjdGl2ZScsICFzZWxlY3RlZCk7XHJcbiAgICAkKCcjc2xpZGVtZW51JykudG9nZ2xlQ2xhc3MoJ3NsaWRlLWFjdGl2ZScpO1xyXG4gICAgJCgnI25hdi1pY29uMicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblxyXG5cclxuICAgICQoJyNwYWdlLWNvbnRlbnQsIC5uYXZiYXIsIGJvZHksIC5uYXZiYXItaGVhZGVyLCAuaGVhZGVyJykudG9nZ2xlQ2xhc3MoJ3NsaWRlLWFjdGl2ZScpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCIvLyBUaGUgZmlsZSBjb250ZW50cyBmb3IgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgd2lsbCBvdmVyd3JpdGUgdGhlc2UgZHVyaW5nIGJ1aWxkLlxyXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXHJcbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXHJcbi8vIFRoZSBsaXN0IG9mIHdoaWNoIGVudiBtYXBzIHRvIHdoaWNoIGZpbGUgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLWNsaS5qc29uYC5cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuICBwcm9kdWN0aW9uOiBmYWxzZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXHJcbi8vIHRoZSBhcHAuIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXHJcblxyXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcclxuXHJcbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2x5ZmlsbHMudHMiLCIvKipcclxuICogU2VydmVyLXNpZGUgcm91dGVzLiBPbmx5IHRoZSBsaXN0ZWQgcm91dGVzIHN1cHBvcnQgaHRtbDVwdXNoc3RhdGUuXHJcbiAqIEhhcyB0byBtYXRjaCBjbGllbnQgc2lkZSByb3V0ZXMuXHJcbiAqXHJcbiAqIEluZGV4ICgvKSByb3V0ZSBkb2VzIG5vdCBoYXZlIHRvIGJlIGxpc3RlZCBoZXJlLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcclxuICogJ2hvbWUnLCAnYWJvdXQnXHJcbiAqIF07XHJcbiAqKi9cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXHJcblxyXG5dO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCIuYWJvdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2E1OGI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsaWdubGVmdCB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW46IDVweCAyMHB4IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dHJhLWJsb2NrLTEgcCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XFxyXFxufVxcclxcblxcclxcbmgye1xcclxcbiAgICBmb250OiBib2xkIDY2cHgvNzBweCBPcmJpdHJvbjtcXHJcXG4gICAgY29sb3I6ICNmZmEwNWM7XFxyXFxufVxcclxcbi5leHRyYS1ibG9jay0xIGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuaDMge1xcclxcbiAgICBmb250OiBib2xkIDE4cHgvMjJweCBPcmJpdHJvbjtcXHJcXG59XFxyXFxuLmV4dHJhLWJsb2NrLTEgaDM6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogNTcwcHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBtYXJnaW46IDI2cHggYXV0byA1NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaGVhZGVyLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nb193cmFwIC5sb2dvIC5sb2dvX3RhZ2xpbmUge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjZmZhMDVjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5sb2dvX3dyYXAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ29fd3JhcCAubG9nbyB7XFxyXFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nb193cmFwIC5sb2dvIC5sb2dvX2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBoMXtcXHJcXG4gICAgZm9udDogYm9sZCA1ZW0gT3JiaXRyb247XFxyXFxuICAgIGNvbG9yOiAjZmZhMDVjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxOHB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbi8qd3JhcCB0aGUgZW50aXJlIHBhZ2UgY29udGVudCBidXQgbm90IG5hdiBpbnNpZGUgdGhpcyBkaXYgaWYgbm90IGEgZml4ZWQgdG9wLCBkb24ndCBhZGQgYW55IHRvcCBwYWRkaW5nICovXFxyXFxuI3BhZ2UtY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcbiNwYWdlLWNvbnRlbnQuc2xpZGUtYWN0aXZlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHsgXFxyXFxuXFx0I3BhZ2UtY29udGVudCB7XFxyXFxuXFx0ICAgIGxlZnQ6IDAhaW1wb3J0YW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xcclxcbiAgICAuaGVhZGVye1xcclxcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXIuc2xpZGUtYWN0aXZle1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nbyBoMXtcXHJcXG4gICAgICAgIGZvbnQ6IGJvbGQgNGVtIE9yYml0cm9uO1xcclxcbiAgICB9XFxyXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYXZiYXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0MjQyNDI7XFxyXFxufVxcclxcblxcclxcbi5uYXY+bGk+YSB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDE3cHg7XFxyXFxuICAgIGZvbnQ6IGJvbGQgMTRweC8yMHB4IE9yYml0cm9uO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdj5saS5hY3RpdmU+YSB7XFxyXFxuICAgIGNvbG9yOiAjZmZhMDVjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLnNvY2lhbCBsaXtcXHJcXG4gICAgbWFyZ2luOiAwLjRlbSAwLjVlbTsgXFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwgbGkgYXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKmZpcnN0IGNoaWxkIG9mICNwYWdlLWNvbnRlbnQgc28gaXQgZG9lc24ndCBzaGlmdCBhcm91bmQqL1xcclxcbi5uby1tYXJnaW4tdG9wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4IWltcG9ydGFudFxcclxcbn1cXHJcXG5cXHJcXG4vKiBwdXQgdG9nZ2xlIGJhcnMgb24gdGhlIGxlZnQgOjogbm90IHVzaW5nIGJ1dHRvbiAqL1xcclxcbiNzbGlkZS1uYXYgLm5hdmJhci10b2dnbGUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi8qIGljb24gYmFyIHByZXR0eXVwIC0gb3B0aW9uYWwgKi9cXHJcXG4jc2xpZGUtbmF2IC5uYXZiYXItdG9nZ2xlID4gLmljb24tYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxyXFxufVxcclxcbiNzbGlkZS1uYXYgLm5hdmJhci10b2dnbGUuc2xpZGUtYWN0aXZlIC5pY29uLWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZVxcclxcbn1cXHJcXG4ubmF2YmFyLWhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbn1cXHJcXG4vKiB1biBmaXggdGhlIG5hdmJhciB3aGVuIGFjdGl2ZSBzbyB0aGF0IGFsbCB0aGUgbWVudSBpdGVtcyBhcmUgYWNjZXNzaWJsZSAqL1xcclxcbi5uYXZiYXIubmF2YmFyLWZpeGVkLXRvcC5zbGlkZS1hY3RpdmUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHsgXFxyXFxuICAgIC5zb2NpYWx7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAjc2xpZGVtZW51LnNsaWRlLWFjdGl2ZXtcXHJcXG4gICAgICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IFxcclxcbiAgICB9XFxyXFxuICAgICNzbGlkZS1uYXYubmF2YmFyLWludmVyc2UgI25hdmJhci1oZWlnaHQtY29sIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICB9XFxyXFxuICAgICNzbGlkZS1uYXYgI25hdmJhci1oZWlnaHQtY29sIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBsZWZ0OiAtODAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcdCNzbGlkZS1uYXYgLmNvbnRhaW5lciB7XFxyXFxuXFx0ICAgIG1hcmdpbjogMDtcXHJcXG5cXHQgICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYgLm5hdmJhci1oZWFkZXIge1xcclxcblxcdCAgICBtYXJnaW46IDAgYXV0bztcXHJcXG5cXHQgICAgcGFkZGluZzogMCAxNXB4O1xcclxcblxcdH1cXHJcXG5cXHQjc2xpZGUtbmF2IC5uYXZiYXIuc2xpZGUtYWN0aXZlIHtcXHJcXG5cXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdCAgICB3aWR0aDogODAlO1xcclxcblxcdCAgICB0b3A6IC0xcHg7XFxyXFxuXFx0ICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYgI3NsaWRlbWVudSB7XFxyXFxuXFx0ICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuXFx0ICAgIGxlZnQ6IC0xMDAlO1xcclxcblxcdCAgICB3aWR0aDogODAlO1xcclxcblxcdCAgICBtaW4td2lkdGg6IDA7XFxyXFxuXFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcblxcdCAgICB6LWluZGV4OiAyO1xcclxcblxcdCAgICB0b3A6IC04cHg7XFxyXFxuXFx0ICAgIG1hcmdpbjogMDtcXHJcXG5cXHR9XFxyXFxuXFx0I3NsaWRlLW5hdiAjc2xpZGVtZW51IC5uYXZiYXItbmF2IHtcXHJcXG5cXHQgICAgbWluLXdpZHRoOiAwO1xcclxcblxcdCAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHQgICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYgI3NsaWRlbWVudSAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSBsaSBhIHtcXHJcXG5cXHQgICAgbWluLXdpZHRoOiAwO1xcclxcblxcdCAgICB3aWR0aDogODAlO1xcclxcblxcdCAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcblxcdH1cXHJcXG5cXHQjc2xpZGUtbmF2IHtcXHJcXG5cXHQgICAgYm9yZGVyLXRvcDogMFxcclxcblxcdH1cXHJcXG4gICAgI3NsaWRlLW5hdi5zbGlkZS1hY3RpdmUge1xcclxcblxcdCAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYubmF2YmFyLWludmVyc2UgI3NsaWRlbWVudSB7XFxyXFxuXFx0ICAgIGJhY2tncm91bmQ6ICMzMzNcXHJcXG5cXHR9XFxyXFxuXFx0LyogdGhpcyBpcyBiZWhpbmQgdGhlIG5hdmlnYXRpb24gYnV0IHRoZSBuYXZpZ2F0aW9uIGlzIG5vdCBpbnNpZGUgaXQgc28gdGhhdCB0aGUgbmF2aWdhdGlvbiBpcyBhY2Nlc3NpYmxlIGFuZCBzY3JvbGxzKi9cXHJcXG5cXHQjc2xpZGUtbmF2ICNuYXZiYXItaGVpZ2h0LWNvbCB7XFxyXFxuXFx0ICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgICAgdG9wOiAwO1xcclxcblxcdCAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ICAgIHdpZHRoOiA4MCU7XFxyXFxuXFx0ICAgIGxlZnQ6IC04MCU7XFxyXFxuXFx0ICAgIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYubmF2YmFyLWludmVyc2UgI25hdmJhci1oZWlnaHQtY29sIHtcXHJcXG5cXHQgICAgYmFja2dyb3VuZDogIzMzMztcXHJcXG5cXHQgICAgei1pbmRleDogMTtcXHJcXG5cXHQgICAgYm9yZGVyOiAwO1xcclxcblxcdH1cXHJcXG5cXHQjc2xpZGUtbmF2IC5uYXZiYXItZm9ybSB7XFxyXFxuXFx0ICAgIHdpZHRoOiAxMDAlO1xcclxcblxcdCAgICBtYXJnaW46IDhweCAwO1xcclxcblxcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0ICAgIC8qZmFzdCBjbGVhcmZpeGVyKi9cXHJcXG5cXHR9XFxyXFxuXFx0I3NsaWRlLW5hdiAubmF2YmFyLWZvcm0gLmZvcm0tY29udHJvbCB7XFxyXFxuXFx0ICAgIHRleHQtYWxpZ246IGNlbnRlclxcclxcblxcdH1cXHJcXG5cXHQjc2xpZGUtbmF2IC5uYXZiYXItZm9ybSAuYnRuIHtcXHJcXG5cXHQgICAgd2lkdGg6IDEwMCVcXHJcXG5cXHR9XFxyXFxuXFxyXFxuICAgIC8qTWVudSBidXR0b24qL1xcclxcbiAgICAjbmF2LWljb24ye1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAvKmhlaWdodDogNDVweDsqL1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAjbmF2LWljb24yIHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbiB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZDM1MzFhO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYtaWNvbjIgc3BhbjpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICAgICAgbGVmdDogMzUlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA5cHggOXB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi1pY29uMiBzcGFuOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgICAgIGxlZnQ6MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4IDAgMCA5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi1pY29uMiBzcGFuOm50aC1jaGlsZCgxKSwgI25hdi1pY29uMiBzcGFuOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICB0b3A6IDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDMpLCAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgICAgIHRvcDogMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDUpLCAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgICAgIHRvcDogMzZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoMSksI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCgyKSwjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoNSkge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgbGVmdDogNXB4O1xcclxcbiAgICAgICAgdG9wOiA3cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gOXB4KTsgLyo1MCUgLTUgKi9cXHJcXG4gICAgICAgIHRvcDogOXB4OyAvKiA3Ki9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoMykge1xcclxcbiAgICAgICAgbGVmdDogLTUwJTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCg1KSB7XFxyXFxuICAgICAgICBsZWZ0OiA1cHg7XFxyXFxuICAgICAgICB0b3A6IDI1cHg7IC8qMjkqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCg2KSB7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDdweCk7IC8qNTAlIC01ICovXFxyXFxuICAgICAgICB0b3A6IDI1cHg7IC8qMjkqL1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7IFxcclxcblxcdC5uYXZiYXIubmF2YmFyLWZpeGVkLXRvcC5zbGlkZS1hY3RpdmUge1xcclxcblxcdCAgICBwb3NpdGlvbjogZml4ZWRcXHJcXG5cXHR9XFxyXFxuXFx0Lm5hdmJhci1oZWFkZXIge1xcclxcblxcdCAgICBsZWZ0OiAwIWltcG9ydGFudFxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3cgYWJvdXRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEgY29sLXhzLTBcXFwiPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZXh0cmEtd3JhcCBleHRyYS1ibG9jay0xIGNvbC1tZC0xMCBjb2wteHMtMTJcXFwiPlxcbiAgICA8aDIgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjtcXFwiPkFib3V0IG1lPC9oMj5cXG4gICAgPGgzIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5TYW0gS3JvbXN0YWluIOKAkyBhIFdlYiBEZXNpZ25lciAmYW1wOyBXZWIgRGV2ZWxvcGVyIGZyb20gTG9zIEFuZ2VsZXM8L2gzPlxcbiAgICA8cD48aW1nIGNsYXNzPVxcXCJhbGlnbmxlZnQgIHdwLWltYWdlLTI3OTcgZXh0cmFcXFwiIGFsdD1cXFwiYWJvdXQtcGhvdG9cXFwiIHNyYz1cXFwiLi4vYXNzZXRzL21lLmpwZ1xcXCI+PC9wPlxcbiAgICA8cD5GdXNjZSBldWlzbW9kIGNvbnNlcXVhdCBhbnRlLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHNlZCBkb2xvci5BbGlxdWFtIGNvbmd1ZSBmZXJtZW50dW0gbmlzbC4gTWF1cmlzIGFjY3Vtc2FuIG51bGxhIHZlbCBkaWFtLiBTZWQgaW4gbGFjdXMgdXQgZW5pbSBhZGlwaXNjaW5nIGFsaXF1ZXQuIE51bGxhIHZlbmVuYXRpcy4gSW4gcGVkZSBtaSwgYWxpcXVldCBzaXQgYW1ldCwgZXVpc21vZCBpbiwgYXVjdG9yIHV0LCBsaWd1bGEuIEFsaXF1YW0gZGFwaWJ1cyB0aW5jaWR1bnQgbWV0dXMuIFByYWVzZW50IGp1c3RvIGRvbG9yLCBsb2JvcnRpcyBxdWlzLCBsb2JvcnRpcyBkaWduaXNzaW1wdWx2aW4gYXIgYWxvcmVtLiBWZXN0aWJ1bHVtIHNlZCBhbm9uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cXG4gICAgPHA+Q3JhcyBlcm9zIG51bGxhLCBwb3J0YSB1dCBlc3QgaW4sIGN1cnN1cyBlZ2VzdGFzIHZlbGl0LiBDcmFzIHF1aXMgYmliZW5kdW0gb2RpbywgaW4gY29uZGltZW50dW0gYW50ZS4gQWxpcXVhbSBncmF2aWRhIG1hdXJpcyBzZWQgaW1wZXJkaWV0IHBvcnR0aXRvci4gVmVzdGlidWx1bSBmZXVnaWF0IG51bGxhIGlkIG1hc3NhIHBvcnRhIHZhcml1cy4gUGhhc2VsbHVzIGR1aSBzZW0sIHZvbHV0cGF0IHF1aXMgZGlnbmlzc2ltIHZpdGFlLCBhdWMgdG9yIHF1aXMgbnVuYy4gRHVpcyBtYWxlc3VhZGEsIGVsaXQgbmVjZmF1Y2lidXMgZmV1Z2lhdCwgbGlndWxhIGFyY3UgcG9ydGEgZXJhdCwgcXVpcyBtb2xlc3RpZSBqdXN0byBudWxsYTwvcD5cXG4gICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3dvcmRwcmVzc180OTE1OC9wb3J0Zm9saW8vcG9ydGZvbGlvLTMvXFxcIiBjbGFzcz1cXFwiYnRuIFxcXCI+dmlldyBteSB3b3JrczwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEgY29sLXhzLTBcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGFwcC1oZWFkZXI+TG9hZGluZy4uLjwvYXBwLWhlYWRlcj5cXHJcXG48YXBwLWFib3V0PjwvYXBwLWFib3V0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxyXFxuICA8YXBwLW5hdmlnYXRpb24+TG9hZGluZy4uLjwvYXBwLW5hdmlnYXRpb24+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiIGlkPVxcXCJwYWdlLWNvbnRlbnRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNwYW4xMlxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhhc2hBbmNvclxcXCIgaWQ9XFxcImhvbWVQYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb193cmFwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJDb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8IS0tPGltZyBzcmM9XFxcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93b3JkcHJlc3NfNDkxNTgvd3AtY29udGVudC90aGVtZXMvdGhlbWU0OTE1OC9pbWFnZXMvaGVhZGVyX2V4dHJhX2ltYWdlLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPi0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28gcHVsbC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoMT5MZW9uYXJkbyBEJ0FudG9uaTwvaDE+XFxyXFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibG9nb190YWdsaW5lXFxcIj5Db25zdHJ1bGxlbmRvIG1hcmF2aWxsb3NhcyBleHBlcmllbmNpYXMgd2ViPC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuIDwvZGl2PlxcclxcbjwvaGVhZGVyPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3BcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBzZWN0aW9uLmFjdGl2ZX1cXFwiICpuZ0Zvcj1cXFwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnNcXFwiPlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiI3t7c2VjdGlvbi5oYXNoVGFnfX1cXFwiIChjbGljayk9XFxcImNoYW5nZVNlY3Rpb24oc2VjdGlvbilcXFwiPnt7c2VjdGlvbi5uYW1lfX08L2E+XFxyXFxuICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBzb2NpYWxcXFwiPlxcclxcbiAgICAgIDxsaT4gPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xlb25hcmRvLWRhbnRvbmktOTNhYmE0MjIvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluIGZhLTN4XFxcIj48L3NwYW4+PC9hPiA8L2xpPlxcclxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbGVvbmFyZG8uZGFudG9uaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1mYWNlYm9vayBmYS0zeFxcXCI+PC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL2xmZGFudG9uaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyIGZhLTN4XFxcIj48L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9sZmRhbnRvbmlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtZ2l0aHViLWFsdCBmYS0zeFxcXCI+PC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9uYXY+LS0+XFxyXFxuXFxyXFxuXFxyXFxuIDxkaXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIiBpZD1cXFwic2xpZGUtbmF2XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgIDwhLS08YSBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgIChjbGljayk9XFxcInRvZ2dsZU1lbnUoJGV2ZW50KVxcXCI+IFxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgIDwvYT4tLT5cXHJcXG4gICAgIDxkaXYgaWQ9XFxcIm5hdi1pY29uMlxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgkZXZlbnQpXFxcIj5cXHJcXG4gICAgICA8c3Bhbj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgICA8c3Bhbj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPkxEPC9hPlxcclxcbiAgIDwvZGl2PlxcclxcbiAgIDxkaXYgaWQ9XFxcInNsaWRlbWVudVxcXCI+XFxyXFxuICAgIDwhLS08Zm9ybSBjbGFzcz1cXFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XFxcIiByb2xlPVxcXCJmb3JtXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJzZWFyY2hcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5TZWFyY2g8L2J1dHRvbj5cXHJcXG4gICAgPC9mb3JtPi0tPlxcclxcbiAgICAgXFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogc2VjdGlvbi5hY3RpdmV9XFxcIiAqbmdGb3I9XFxcImxldCBzZWN0aW9uIG9mIHNlY3Rpb25zXFxcIj5cXHJcXG4gICAgICAgIDxhIGhyZWY9XFxcIiN7e3NlY3Rpb24uaGFzaFRhZ319XFxcIiAoY2xpY2spPVxcXCJjaGFuZ2VTZWN0aW9uKHNlY3Rpb24pXFxcIj57e3NlY3Rpb24ubmFtZX19PC9hPlxcclxcbiAgICAgIDwvbGk+XFxyXFxuICAgICA8IS0tPGxpIGNsYXNzPVxcXCJhY3RpdmVcXFwiPjxhIGhyZWY9XFxcIiNcXFwiPkhvbWU8L2E+PC9saT5cXHJcXG4gICAgIDxsaT48YSBocmVmPVxcXCIjYWJvdXRcXFwiPkFib3V0PC9hPjwvbGk+XFxyXFxuICAgICA8bGk+PGEgaHJlZj1cXFwiI2NvbnRhY3RcXFwiPkNvbnRhY3Q8L2E+PC9saT5cXHJcXG4gICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIFtjbGFzcy5vcGVuXT1cXFwiZHJvcERvd25PcGVuXFxcIj5cXHJcXG4gICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIChjbGljayk9XFxcImRyb3BUb2dnbGUoJGV2ZW50KVxcXCI+RHJvcGRvd24gPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5BY3Rpb248L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93bi1oZWFkZXJcXFwiPk5hdiBoZWFkZXI8L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5BY3Rpb248L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93bi1oZWFkZXJcXFwiPk5hdiBoZWFkZXI8L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5BY3Rpb248L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93bi1oZWFkZXJcXFwiPk5hdiBoZWFkZXI8L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+U2VwYXJhdGVkIGxpbmsgdGVzdCBsb25nIHRpdGxlIGdvZXMgaGVyZTwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcclxcbiAgICAgIDwvdWw+XFxyXFxuICAgICA8L2xpPi0tPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IHNvY2lhbFxcXCI+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGVvbmFyZG8tZGFudG9uaS05M2FiYTQyMi9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW4gZmEtM3hcXFwiPjwvc3Bhbj48L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9sZW9uYXJkby5kYW50b25pXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLWZhY2Vib29rIGZhLTN4XFxcIj48L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vbGZkYW50b25pXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXIgZmEtM3hcXFwiPjwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2xmZGFudG9uaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1naXRodWItYWx0IGZhLTN4XFxcIj48L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgICAgICAgIFxcclxcbiAgIDwvZGl2PlxcclxcbiAgIDxkaXYgaWQ9XFxcIm5hdmJhci1oZWlnaHQtY29sXFxcIj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiA8L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2RhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L251bWJlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9vYmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIlxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVnZXhwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3NldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3ltYm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCJcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM3L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpxdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9