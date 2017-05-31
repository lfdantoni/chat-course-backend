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

module.exports = ".about{\r\n    background-color: #b3a58b;\r\n    color: white;\r\n}\r\n\r\n.alignleft {\r\n    float: left;\r\n    margin: 5px 20px 10px 0;\r\n}\r\n\r\n.extra-block-1 p {\r\n    margin-bottom: 26px;\r\n}\r\n\r\nh2{\r\n    font: bold 66px/70px Orbitron;\r\n    color: #ffa05c;\r\n}\r\n.extra-block-1 h3 {\r\n    font-family: Open Sans;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0;\r\n}\r\nh3 {\r\n    font: bold 18px/22px Orbitron;\r\n}\r\n.extra-block-1 h3:after {\r\n    content: '';\r\n    display: block;\r\n    max-width: 570px;\r\n    height: 5px;\r\n    margin: 26px auto 54px;\r\n    background-color: black;\r\n}\r\n.me-photo{\r\n    border-radius: 50% 50%;\r\n}\r\n\r\n@media (max-width: 767px){\r\n    .about{\r\n        margin: 0;\r\n    }\r\n    .me-photo{\r\n        max-width: 100%;\r\n    }\r\n}"

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

module.exports = "<div class=\"row about\">\r\n  <div class=\"col-md-1 col-xs-0\"></div>\r\n  <div class=\"extra-wrap extra-block-1 col-md-10 col-xs-12\">\r\n    <h2 style=\"text-align: center;\">About me</h2>\r\n    <h3 style=\"text-align: center;\">Sam Kromstain – a Web Designer &amp; Web Developer from Los Angeles</h3>\r\n    <p><img class=\"alignleft me-photo\" alt=\"about-photo\" src=\"../assets/me.jpg\"></p>\r\n    <p>Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor.Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissimpulvin ar alorem. Vestibulum sed anonsectetur adipiscing elit.</p>\r\n    <p>Cras eros nulla, porta ut est in, cursus egestas velit. Cras quis bibendum odio, in condimentum ante. Aliquam gravida mauris sed imperdiet porttitor. Vestibulum feugiat nulla id massa porta varius. Phasellus dui sem, volutpat quis dignissim vitae, auc tor quis nunc. Duis malesuada, elit necfaucibus feugiat, ligula arcu porta erat, quis molestie justo nulla</p>\r\n    <a href=\"https://livedemo00.template-help.com/wordpress_49158/portfolio/portfolio-3/\" class=\"btn \">view my works</a>\r\n  </div>\r\n  <div class=\"col-md-1 col-xs-0\"></div>\r\n</div>\r\n"

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-header>Loading...</app-header>\r\n    <app-about></app-about>\r\n</div>"

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = "<header class=\"row header\">\r\n  <app-navigation>Loading...</app-navigation>\r\n  <div class=\"container\" id=\"page-content\">\r\n    <div class=\"row\">\r\n      <div class=\"span12\">\r\n          <div class=\"hashAncor\" id=\"homePage\"></div>\r\n          <div class=\"logo_wrap\">\r\n            <div class=\"headerCover\">\r\n              <!--<img src=\"https://livedemo00.template-help.com/wordpress_49158/wp-content/themes/theme49158/images/header_extra_image.png\" alt=\"\">-->\r\n            </div>\r\n            <div class=\"logo pull-left\">\r\n              <h1>Leonardo D'Antoni</h1>\r\n              <p class=\"logo_tagline\">Construllendo maravillosas experiencias web</p>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n </div>\r\n</header>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmE4YjVjN2M3Y2FjNTI5YmYzNTUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR3VCO0FBQ1M7QUFDSjtBQUNNO0FBQ1E7QUFDWTtBQUNSO0FBQ0c7QUFDTztBQUNoQjtBQUV4QyxNQUFNO0FBRU4sSUFBTSxHQUFHLEdBQUkscUNBQU8sRUFBRSxDQUFDO0FBQ3ZCLElBQU0sSUFBSSxHQUFHLDBDQUFTLENBQUMsNkNBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFdEM7O0dBRUc7QUFDSCxFQUFFLENBQUMsQ0FBQyw4RUFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDM0Isb0ZBQWMsRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFFRDs7R0FFRztBQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLDRGQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSwwQ0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRS9COztHQUVHO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5Q0FBVyxFQUFFLENBQUMsQ0FBQztBQUV2Qjs7R0FFRztBQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLCtDQUFjLENBQUMsMENBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXhFOztHQUVHO0FBQ0gsd0JBQXdCO0FBRXhCOzs7O0dBSUc7QUFDSCxlQUFlLEdBQVEsRUFBRSxHQUFRO0lBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2xCLFFBQUc7UUFDSCxRQUFHO1FBQ0gsUUFBUSxFQUFFLHVFQUFTO1FBQ25CLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFLEdBQUc7UUFDWixVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVc7UUFDM0IsU0FBUyxFQUFFLEdBQUcsQ0FBQyxRQUFRO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRDs7R0FFRztBQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BCLDhEQUFNLENBQUMsT0FBTyxDQUFDLGVBQUs7SUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLEtBQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQUksS0FBSyxPQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBUSxFQUFFLEdBQVE7SUFDdkMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNsRCxJQUFNLElBQUksR0FBRyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQyxDQUFDO0lBQ2xELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBcUIsSUFBTSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUN4Rkg7O0dBRUc7QUFFSCxvQkFBb0I7QUFDcEIsSUFBSSxZQUFZLEdBQVEsbUJBQU8sQ0FBQyxFQUFtQixDQUFDLENBQUM7QUFFckQsSUFBSSxnQkFBZ0IsR0FBUSxtQkFBTyxDQUFDLENBQWUsQ0FBQyxDQUFDO0FBQ3JELElBQUksS0FBSyxHQUFZLEtBQUssQ0FBQztBQUUzQixFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNiLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7QUFDN0QsQ0FBQztBQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxvQkFBb0IsR0FBRztRQUNsQyxlQUFlLEVBQUUsWUFBWSxDQUFDLGVBQWU7UUFDN0MsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXO0tBQ3hDO0FBQ0wsQ0FBQztBQUVELElBQUksYUFBYSxHQUFRLG1CQUFPLENBQUMsRUFBNEMsQ0FBQyxDQUFDO0FBQy9FLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDUixhQUFhLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztJQUN0RCxhQUFhLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxXQUFXO0lBQ3BELGFBQWEsQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWU7QUFDaEUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmdEO0FBT2pEO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQixpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVZIO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLGlDQUFxQztZQUNyQyxpQ0FBb0M7U0FDckMsQ0FBQzs7c0JBQUE7SUFRRixxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHdDO0FBT3pDO0lBQUE7SUFDQSxDQUFDO0lBTkQ7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsaUNBQW1DO1lBQ25DLGlDQUFrQztTQUNuQyxDQUFDOztvQkFBQTtJQUVGLG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7QUFFcUM7QUFDWTtBQUNSO0FBQ047QUFDaUM7QUFDWjtBQUNIO0FBQ3hELGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFFakQ7O0dBRUc7QUFtQkg7SUFBQTtJQUVBLENBQUM7SUFwQkQ7UUFBQyw4RUFBUSxDQUFDO1lBQ1IseUJBQXlCO1lBQ3pCLFNBQVMsRUFBRSxDQUFFLDREQUFZLENBQUU7WUFDM0IscUJBQXFCO1lBQ3JCLFlBQVksRUFBRSxDQUFFLDREQUFZLEVBQUUsNkZBQW1CLEVBQUUsaUZBQWUsRUFBRSw4RUFBYyxDQUFFO1lBQ3BGLE9BQU8sRUFBRTtnQkFDUDs7O21CQUdHO2dCQUNILG1FQUFlO2dCQUNmLDJEQUFXO2FBS1o7U0FDRixDQUFDOztpQkFBQTtJQUdGLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2dEO0FBT2pEO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVZIO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLGlDQUFzQztZQUN0QyxpQ0FBcUM7U0FDdEMsQ0FBQzs7dUJBQUE7SUFRRixzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7QUNkK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7QUFFcEM7QUFPM0I7SUFNRTtRQUxBLGFBQVEsR0FBZSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7UUFFMUgsYUFBUSxHQUFHLDBEQUEwRCxDQUFDO1FBQ3RFLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBSTlCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsT0FBaUI7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBR0Qsc0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixFQUFFLENBQUMsQ0FBQyxvQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLElBQUksb0NBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckUsb0NBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRCxvQ0FBb0M7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsTUFBTTtRQUNmLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxNQUFNO1FBQ2YsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV4QixvRUFBb0U7UUFDcEUsb0ZBQW9GO1FBRXBGLDRCQUE0QjtRQUM1QixJQUFJLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQUMvQixJQUFJLFdBQVcsR0FBRyxlQUFlLENBQUM7UUFDbEMsSUFBSSxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyx3Q0FBd0M7UUFDaEUsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN0QixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxRQUFRLEdBQUcsb0NBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhFLG9DQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksRUFBRSxRQUFRLEdBQUcsT0FBTyxHQUFHLEtBQUs7U0FDbkMsQ0FBQyxDQUFDO1FBRUgsb0NBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNuQyxJQUFJLEVBQUUsUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLO1NBQ3BDLENBQUMsQ0FBQztRQUVILG9DQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzFCLElBQUksRUFBRSxRQUFRLEdBQUcsS0FBSyxHQUFHLFVBQVU7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsb0NBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLEVBQUUsUUFBUSxHQUFHLEtBQUssR0FBRyxVQUFVO1NBQ3RDLENBQUMsQ0FBQztRQUdILG9DQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvRCxvQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxvQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUdwQyxvQ0FBQyxDQUFDLHVEQUF1RCxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUF4REQ7UUFBQyxrRkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3VEQUFBO0lBekI1QztRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGlDQUEwQztZQUMxQyxpQ0FBeUM7U0FDMUMsQ0FBQzs7MkJBQUE7SUE4RUYsMEJBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQ3RGRDtBQUFBLG1GQUFtRjtBQUNuRiw4RkFBOEY7QUFDOUYsMEVBQTBFO0FBQzFFLCtFQUErRTtBQUV4RSxJQUFNLFdBQVcsR0FBRztJQUN6QixVQUFVLEVBQUUsS0FBSztDQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BGO0FBQUE7QUFBQSx3RUFBd0U7QUFDeEUsOERBQThEO0FBRXpCO0FBQ1Y7QUFDQTtBQUNFO0FBQ0M7QUFDRTtBQUNMO0FBQ0Y7QUFDRTtBQUNGO0FBQ0M7QUFDQztBQUNIO0FBQ0E7QUFDSTtBQUVBOzs7Ozs7OztBQ25CNUI7QUFBQTs7Ozs7Ozs7OztJQVVJO0FBQ0csSUFBTSxNQUFNLEdBQWEsRUFFL0IsQ0FBQzs7Ozs7OztBQ2JGLHlCQUF5QixrQ0FBa0MscUJBQXFCLEtBQUssb0JBQW9CLG9CQUFvQixnQ0FBZ0MsS0FBSywwQkFBMEIsNEJBQTRCLEtBQUssV0FBVyxzQ0FBc0MsdUJBQXVCLEtBQUssdUJBQXVCLCtCQUErQix5QkFBeUIsa0NBQWtDLHlCQUF5QixLQUFLLFFBQVEsc0NBQXNDLEtBQUssNkJBQTZCLG9CQUFvQix1QkFBdUIseUJBQXlCLG9CQUFvQiwrQkFBK0IsZ0NBQWdDLEtBQUssY0FBYywrQkFBK0IsS0FBSyxrQ0FBa0MsZUFBZSxzQkFBc0IsU0FBUyxrQkFBa0IsNEJBQTRCLFNBQVMsS0FBSyxDOzs7Ozs7QUNBbjJCLG1COzs7Ozs7QUNBQSwyQkFBMkIsb0RBQW9ELHFDQUFxQyx3Q0FBd0Msc0NBQXNDLDBCQUEwQixLQUFLLGdEQUFnRCx5QkFBeUIsMkJBQTJCLGtDQUFrQyx5QkFBeUIsdUJBQXVCLGtEQUFrRCw0QkFBNEIsa0JBQWtCLEtBQUssNEJBQTRCLDJCQUEyQiwyQkFBMkIsMEJBQTBCLDRCQUE0QixLQUFLLG9CQUFvQiwyQkFBMkIsMEJBQTBCLDJCQUEyQixLQUFLLGtDQUFrQywrQkFBK0IsOEJBQThCLG1CQUFtQixLQUFLLDBDQUEwQywyQkFBMkIsOEJBQThCLDJCQUEyQixLQUFLLGlCQUFpQixnQ0FBZ0MsdUJBQXVCLG1EQUFtRCxLQUFLLHNJQUFzSSwyQkFBMkIsMEJBQTBCLGdCQUFnQixLQUFLLGdDQUFnQywyQkFBMkIsc0NBQXNDLHNCQUFzQiw0QkFBNEIsT0FBTyxLQUFLLGlDQUFpQyxnQkFBZ0IsK0JBQStCLFNBQVMsNkJBQTZCLDZCQUE2QixTQUFTLGlCQUFpQixvQ0FBb0MsU0FBUyxLQUFLLEM7Ozs7OztBQ0ExckQsMEJBQTBCLDRCQUE0QixLQUFLLG1CQUFtQixrQ0FBa0MscUJBQXFCLHVCQUF1QixzQ0FBc0MsdUJBQXVCLEtBQUssMEJBQTBCLHVCQUF1QixzQ0FBc0MsS0FBSyxnQkFBZ0IscUJBQXFCLHVCQUF1QixLQUFLLGVBQWUsNEJBQTRCLE1BQU0scUJBQXFCLGtCQUFrQixtQkFBbUIsS0FBSyx1R0FBdUcsc0NBQXNDLDRGQUE0Rix3QkFBd0IsMkJBQTJCLHVCQUF1QixvQkFBb0Isa0JBQWtCLG9CQUFvQixxQkFBcUIsNEJBQTRCLGtCQUFrQixnQ0FBZ0MsS0FBSyxpRkFBaUYsb0JBQW9CLHVCQUF1QixvQkFBb0IsMEJBQTBCLEtBQUssc0RBQXNELCtCQUErQixvQkFBb0IsK0JBQStCLDRIQUE0SCwrQkFBK0Isa0NBQWtDLGlCQUFpQix3QkFBd0IsK0JBQStCLFNBQVMsZ0NBQWdDLDBCQUEwQiwrQkFBK0IsVUFBVSxzREFBc0QsNkJBQTZCLHVCQUF1QixzQkFBc0IsU0FBUyx1Q0FBdUMsNEJBQTRCLG1CQUFtQix5QkFBeUIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsU0FBUyxpQ0FBaUMsb0JBQW9CLCtCQUErQixPQUFPLGlDQUFpQyx5QkFBeUIsMEJBQTBCLE9BQU8sdUNBQXVDLDZCQUE2QixxQkFBcUIsb0JBQW9CLHdCQUF3QixPQUFPLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLHFCQUFxQix1QkFBdUIsNkJBQTZCLDBCQUEwQixxQkFBcUIsb0JBQW9CLG9CQUFvQixPQUFPLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLHlCQUF5QixPQUFPLDZEQUE2RCx1QkFBdUIscUJBQXFCLDhCQUE4QixPQUFPLGtCQUFrQiw4QkFBOEIsaUNBQWlDLDBCQUEwQixPQUFPLDRDQUE0QyxpQ0FBaUMsa0tBQWtLLDBCQUEwQixpQkFBaUIsdUJBQXVCLHFCQUFxQixxQkFBcUIsMkJBQTJCLE9BQU8sb0RBQW9ELDJCQUEyQixxQkFBcUIsb0JBQW9CLE9BQU8sK0JBQStCLHNCQUFzQix3QkFBd0IsNkJBQTZCLDJCQUEyQixvQ0FBb0MsNkNBQTZDLG1DQUFtQyxvQ0FBb0MsNEJBQTRCLDhDQUE4Qyx3QkFBd0IsMkJBQTJCLGlDQUFpQyw2QkFBNkIsd0JBQXdCLDRDQUE0QyxvQ0FBb0Msd0NBQXdDLDRCQUE0QixTQUFTLGlDQUFpQywyQkFBMkIsK0JBQStCLHdCQUF3Qix3QkFBd0IsOEJBQThCLHVCQUF1Qiw0Q0FBNEMsb0NBQW9DLHlDQUF5QyxTQUFTLGtDQUFrQyxnQ0FBZ0MsU0FBUyw2Q0FBNkMsc0JBQXNCLHVDQUF1QyxTQUFTLDRDQUE0QyxxQkFBcUIsdUNBQXVDLFNBQVMsd0VBQXdFLHFCQUFxQixTQUFTLHdFQUF3RSxzQkFBc0IsU0FBUyx3RUFBd0Usc0JBQXNCLFNBQVMsaUZBQWlGLDZDQUE2QyxxQ0FBcUMsU0FBUyxpRkFBaUYsOENBQThDLHNDQUFzQyxTQUFTLCtDQUErQyxzQkFBc0IscUJBQXFCLFNBQVMsK0NBQStDLGtDQUFrQyxpQ0FBaUMsZ0JBQWdCLCtDQUErQyx1QkFBdUIsdUJBQXVCLFNBQVMsK0NBQStDLHVCQUF1Qix1QkFBdUIsU0FBUywrQ0FBK0Msc0JBQXNCLHNCQUFzQixnQkFBZ0IsK0NBQStDLGtDQUFrQyxrQ0FBa0MsZ0JBQWdCLEtBQUssOEJBQThCLDhDQUE4QyxnQ0FBZ0Msc0JBQXNCLGtDQUFrQyxLQUFLLFM7Ozs7OztBQ0F6ak0saU1BQWlNLHVEQUF1RCx1Q0FBdUMseW9DOzs7Ozs7QUNBL1IsZ0k7Ozs7OztBQ0FBLHd5Qjs7Ozs7O0FDQUEsc0xBQXNMLHlCQUF5QiwrREFBK0QsaUJBQWlCLHdDQUF3QyxjQUFjLGd3REFBZ3dELHlCQUF5QiwrREFBK0QsaUJBQWlCLHdDQUF3QyxjQUFjLHlzRjs7Ozs7O0FDQXB2RSw4Qzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSx1RTs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLHlEOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiYThiNWM3YzdjYWM1MjliZjM1NSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcclxuICovXHJcbmltcG9ydCAnLi9wb2x5ZmlsbHMudHMnO1xyXG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcclxuaW1wb3J0IHsgY3JlYXRlRW5naW5lIH0gZnJvbSAnYW5ndWxhcjItZXhwcmVzcy1lbmdpbmUnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubm9kZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9zZXJ2ZXIucm91dGVzJztcclxuXHJcbi8vIEFwcFxyXG5cclxuY29uc3QgYXBwICA9IGV4cHJlc3MoKTtcclxuY29uc3QgUk9PVCA9IHBhdGguam9pbihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSk7XHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQyMDA7XHJcblxyXG4vKipcclxuICogZW5hYmxlIHByb2QgbW9kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcclxuICovXHJcbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XHJcbiAgZW5hYmxlUHJvZE1vZGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4cHJlc3MgVmlld1xyXG4gKi9cclxuYXBwLmVuZ2luZSgnLmh0bWwnLCBjcmVhdGVFbmdpbmUoe30pKTtcclxuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xyXG5cclxuLyoqXHJcbiAqIEVuYWJsZSBjb21wcmVzc2lvblxyXG4gKi9cclxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcclxuXHJcbi8qKlxyXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcclxuICovXHJcbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpLCB7aW5kZXg6IGZhbHNlfSkpO1xyXG5cclxuLyoqXHJcbiAqIHBsYWNlIHlvdXIgYXBpIHJvdXRlcyBoZXJlXHJcbiAqL1xyXG4vLyBhcHAudXNlKCcvYXBpJywgYXBpKTtcclxuXHJcbi8qKlxyXG4gKiBib290c3RyYXAgdW5pdmVyc2FsIGFwcFxyXG4gKiBAcGFyYW0gcmVxXHJcbiAqIEBwYXJhbSByZXNcclxuICovXHJcbmZ1bmN0aW9uIG5nQXBwKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xyXG4gICAgcmVxLFxyXG4gICAgcmVzLFxyXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcclxuICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgYmFzZVVybDogJy8nLFxyXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxyXG4gICAgb3JpZ2luVXJsOiByZXEuaG9zdG5hbWVcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xyXG4gKi9cclxuYXBwLmdldCgnLycsIG5nQXBwKTtcclxucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xyXG4gIGFwcC5nZXQoYC8ke3JvdXRlfWAsIG5nQXBwKTtcclxuICBhcHAuZ2V0KGAvJHtyb3V0ZX0vKmAsIG5nQXBwKTtcclxufSk7XHJcblxyXG4vKipcclxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxyXG4gKi9cclxuXHJcbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XHJcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICBjb25zdCBwb2pvID0ge3N0YXR1czogNDA0LCBtZXNzYWdlOiAnTm8gQ29udGVudCd9O1xyXG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcclxuICByZXMuc3RhdHVzKDQwNCkuc2VuZChqc29uKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsIi8qXHJcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcclxuICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xyXG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbnZhciBfX2NvcmVfcHJpdmF0ZV9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fLmhhc093blByb3BlcnR5KCdWaWV3VXRpbHMnKSkge1xyXG4gICAgcGF0Y2ggPSB0cnVlO1xyXG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XHJcbn1cclxuXHJcbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XHJcbiAgICBwYXRjaCA9IHRydWU7XHJcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcclxuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXHJcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XHJcbmlmIChwYXRjaCkge1xyXG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XHJcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXHJcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFib3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgYW5kIGBtYWluLmJyb3dzZXIudHNgIGFyZSBpZGVudGljYWwsIGF0IHRoZSBtb21lbnQoISlcclxuICogQnkgc3BsaXR0aW5nIHRoZXNlLCB5b3UncmUgYWJsZSB0byBjcmVhdGUgbG9naWMsIGltcG9ydHMsIGV0YyB0aGF0IGFyZSBcIlBsYXRmb3JtXCIgc3BlY2lmaWMuXHJcbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XHJcbiAqIFlvdSBjYW4gYWxzbyBqdXN0IGhhdmUgMSBmaWxlLCB0aGF0IGlzIGltcG9ydGVkIGludG8gYm90aFxyXG4gKiBjbGllbnQudHMgYW5kIHNlcnZlci50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7IGFwcFJvdXRlcyB9IGZyb20gJy4vYXBwL2FwcC5yb3V0aW5nJztcclxuXHJcbi8qKlxyXG4gKiBUb3AtbGV2ZWwgTmdNb2R1bGUgXCJjb250YWluZXJcIlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICAvKiogUm9vdCBBcHAgQ29tcG9uZW50ICovXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIC8qKiBPdXIgQ29tcG9uZW50cyAqL1xyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBDb21wb25lbnQsIE5hdmlnYXRpb25Db21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgQWJvdXRDb21wb25lbnQgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICAvKipcclxuICAgICAqIE5PVEU6IE5lZWRzIHRvIGJlIHlvdXIgZmlyc3QgaW1wb3J0ICghKVxyXG4gICAgICogTm9kZU1vZHVsZSwgTm9kZUh0dHBNb2R1bGUsIE5vZGVKc29ucE1vZHVsZSBhcmUgaW5jbHVkZWRcclxuICAgICAqL1xyXG4gICAgVW5pdmVyc2FsTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGVcclxuICAgIC8qKlxyXG4gICAgICogdXNpbmcgcm91dGVzXHJcbiAgICAgKi9cclxuICAgIC8vIFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcylcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsImV4cG9ydCAqIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElTZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL0lTZWN0aW9uJ1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW5hdmlnYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2VjdGlvbnM6IElTZWN0aW9uW10gPSBbe25hbWU6ICdIb21lJywgYWN0aXZlOiB0cnVlLCBoYXNoVGFnOiAnaG9tZSd9LCB7bmFtZTogJ1NraWxscycsIGFjdGl2ZTogZmFsc2UsIGhhc2hUYWc6ICdza2lsbHMnfV1cclxuICBhY3RpdmVTZWN0aW9uOiBJU2VjdGlvbjtcclxuICBzZWxlY3RlZCA9ICcjc2xpZGVtZW51LCAjcGFnZS1jb250ZW50LCBib2R5LCAubmF2YmFyLCAubmF2YmFyLWhlYWRlcic7XHJcbiAgZHJvcERvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuc2VjdGlvbnNbMF07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTZWN0aW9uKHNlY3Rpb246IElTZWN0aW9uKXtcclxuICAgIHRoaXMuYWN0aXZlU2VjdGlvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuYWN0aXZlU2VjdGlvbiA9IHNlY3Rpb247XHJcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24uYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIG9uUmVzaXplKGV2ZW50KSB7XHJcbiAgICBpZiAoJChldmVudC50YXJnZXQpLndpZHRoKCkgPiA3NjcgJiYgJCgnLm5hdmJhci10b2dnbGUnKS5pcygnOmhpZGRlbicpKSB7XHJcbiAgICAgICAgJCh0aGlzLnNlbGVjdGVkKS5yZW1vdmVDbGFzcygnc2xpZGUtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJCgnLm5hdmJhci10b2dnbGUnKSk7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuaW5uZXJXaWR0aCk7XHJcbiAgfVxyXG5cclxuICBkcm9wVG9nZ2xlKCRldmVudCl7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZHJvcERvd25PcGVuID0gIXRoaXMuZHJvcERvd25PcGVuO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTWVudSgkZXZlbnQpe1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy9zdGljayBpbiB0aGUgZml4ZWQgMTAwJSBoZWlnaHQgYmVoaW5kIHRoZSBuYXZiYXIgYnV0IGRvbid0IHdyYXAgaXRcclxuICAgIC8vJCgnI3NsaWRlLW5hdi5uYXZiYXIgLmNvbnRhaW5lcicpLmFwcGVuZCgkKCc8ZGl2IGlkPVwibmF2YmFyLWhlaWdodC1jb2xcIj48L2Rpdj4nKSk7XHJcblxyXG4gICAgLy8gRW50ZXIgeW91ciBpZHMgb3IgY2xhc3Nlc1xyXG4gICAgdmFyIHRvZ2dsZXIgPSAnLm5hdmJhci10b2dnbGUnO1xyXG4gICAgdmFyIHBhZ2V3cmFwcGVyID0gJyNwYWdlLWNvbnRlbnQnO1xyXG4gICAgdmFyIG5hdmlnYXRpb253cmFwcGVyID0gJy5uYXZiYXItaGVhZGVyJztcclxuICAgIHZhciBtZW51d2lkdGggPSAnMTAwJSc7IC8vIHRoZSBtZW51IGluc2lkZSB0aGUgc2xpZGUgbWVudSBpdHNlbGZcclxuICAgIHZhciBzbGlkZXdpZHRoID0gJzgwJSc7XHJcbiAgICB2YXIgbWVudW5lZyA9ICctMTAwJSc7XHJcbiAgICB2YXIgc2xpZGVuZWcgPSAnLTgwJSc7XHJcbiAgICB2YXIgc2VsZWN0ZWQgPSAkKCRldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnc2xpZGUtYWN0aXZlJyk7XHJcblxyXG4gICAgJCgnI3NsaWRlbWVudScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBsZWZ0OiBzZWxlY3RlZCA/IG1lbnVuZWcgOiAnMHB4J1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI25hdmJhci1oZWlnaHQtY29sJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGxlZnQ6IHNlbGVjdGVkID8gc2xpZGVuZWcgOiAnMHB4J1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChwYWdld3JhcHBlcikuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGxlZnQ6IHNlbGVjdGVkID8gJzBweCcgOiBzbGlkZXdpZHRoXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKG5hdmlnYXRpb253cmFwcGVyKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgbGVmdDogc2VsZWN0ZWQgPyAnMHB4JyA6IHNsaWRld2lkdGhcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCRldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGVDbGFzcygnc2xpZGUtYWN0aXZlJywgIXNlbGVjdGVkKTtcclxuICAgICQoJyNzbGlkZW1lbnUnKS50b2dnbGVDbGFzcygnc2xpZGUtYWN0aXZlJyk7XHJcbiAgICAkKCcjbmF2LWljb24yJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHJcblxyXG4gICAgJCgnI3BhZ2UtY29udGVudCwgLm5hdmJhciwgYm9keSwgLm5hdmJhci1oZWFkZXIsIC5oZWFkZXInKS50b2dnbGVDbGFzcygnc2xpZGUtYWN0aXZlJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXHJcbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cclxuLy8gYHVuZyBidWlsZCAtLWVudj1wcm9kYCB0aGVuIGBlbnZpcm9ubWVudC5wcm9kLnRzYCB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cclxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gIHByb2R1Y3Rpb246IGZhbHNlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIDIgYW5kIGlzIGxvYWRlZCBiZWZvcmVcclxuLy8gdGhlIGFwcC4gWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cclxuXHJcbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xyXG5cclxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxyXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cclxuICogSGFzIHRvIG1hdGNoIGNsaWVudCBzaWRlIHJvdXRlcy5cclxuICpcclxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xyXG4gKiAnaG9tZScsICdhYm91dCdcclxuICogXTtcclxuICoqL1xyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcclxuXHJcbl07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5hYm91dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzYTU4YjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxpZ25sZWZ0IHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbjogNXB4IDIwcHggMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXh0cmEtYmxvY2stMSBwIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIGZvbnQ6IGJvbGQgNjZweC83MHB4IE9yYml0cm9uO1xcclxcbiAgICBjb2xvcjogI2ZmYTA1YztcXHJcXG59XFxyXFxuLmV4dHJhLWJsb2NrLTEgaDMge1xcclxcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5oMyB7XFxyXFxuICAgIGZvbnQ6IGJvbGQgMThweC8yMnB4IE9yYml0cm9uO1xcclxcbn1cXHJcXG4uZXh0cmEtYmxvY2stMSBoMzphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWF4LXdpZHRoOiA1NzBweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMjZweCBhdXRvIDU0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubWUtcGhvdG97XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XFxyXFxuICAgIC5hYm91dHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbiAgICAubWUtcGhvdG97XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaGVhZGVyLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nb193cmFwIC5sb2dvIC5sb2dvX3RhZ2xpbmUge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjZmZhMDVjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5sb2dvX3dyYXAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ29fd3JhcCAubG9nbyB7XFxyXFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nb193cmFwIC5sb2dvIC5sb2dvX2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBoMXtcXHJcXG4gICAgZm9udDogYm9sZCA1ZW0gT3JiaXRyb247XFxyXFxuICAgIGNvbG9yOiAjZmZhMDVjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxOHB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbi8qd3JhcCB0aGUgZW50aXJlIHBhZ2UgY29udGVudCBidXQgbm90IG5hdiBpbnNpZGUgdGhpcyBkaXYgaWYgbm90IGEgZml4ZWQgdG9wLCBkb24ndCBhZGQgYW55IHRvcCBwYWRkaW5nICovXFxyXFxuI3BhZ2UtY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcbiNwYWdlLWNvbnRlbnQuc2xpZGUtYWN0aXZlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHsgXFxyXFxuXFx0I3BhZ2UtY29udGVudCB7XFxyXFxuXFx0ICAgIGxlZnQ6IDAhaW1wb3J0YW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xcclxcbiAgICAuaGVhZGVye1xcclxcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXIuc2xpZGUtYWN0aXZle1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nbyBoMXtcXHJcXG4gICAgICAgIGZvbnQ6IGJvbGQgNGVtIE9yYml0cm9uO1xcclxcbiAgICB9XFxyXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYXZiYXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0MjQyNDI7XFxyXFxufVxcclxcblxcclxcbi5uYXY+bGk+YSB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDE3cHg7XFxyXFxuICAgIGZvbnQ6IGJvbGQgMTRweC8yMHB4IE9yYml0cm9uO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdj5saS5hY3RpdmU+YSB7XFxyXFxuICAgIGNvbG9yOiAjZmZhMDVjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLnNvY2lhbCBsaXtcXHJcXG4gICAgbWFyZ2luOiAwLjRlbSAwLjVlbTsgXFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwgbGkgYXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKmZpcnN0IGNoaWxkIG9mICNwYWdlLWNvbnRlbnQgc28gaXQgZG9lc24ndCBzaGlmdCBhcm91bmQqL1xcclxcbi5uby1tYXJnaW4tdG9wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4IWltcG9ydGFudFxcclxcbn1cXHJcXG5cXHJcXG4vKiBwdXQgdG9nZ2xlIGJhcnMgb24gdGhlIGxlZnQgOjogbm90IHVzaW5nIGJ1dHRvbiAqL1xcclxcbiNzbGlkZS1uYXYgLm5hdmJhci10b2dnbGUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi8qIGljb24gYmFyIHByZXR0eXVwIC0gb3B0aW9uYWwgKi9cXHJcXG4jc2xpZGUtbmF2IC5uYXZiYXItdG9nZ2xlID4gLmljb24tYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxyXFxufVxcclxcbiNzbGlkZS1uYXYgLm5hdmJhci10b2dnbGUuc2xpZGUtYWN0aXZlIC5pY29uLWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZVxcclxcbn1cXHJcXG4ubmF2YmFyLWhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbn1cXHJcXG4vKiB1biBmaXggdGhlIG5hdmJhciB3aGVuIGFjdGl2ZSBzbyB0aGF0IGFsbCB0aGUgbWVudSBpdGVtcyBhcmUgYWNjZXNzaWJsZSAqL1xcclxcbi5uYXZiYXIubmF2YmFyLWZpeGVkLXRvcC5zbGlkZS1hY3RpdmUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHsgXFxyXFxuICAgIC5zb2NpYWx7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAjc2xpZGVtZW51LnNsaWRlLWFjdGl2ZXtcXHJcXG4gICAgICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IFxcclxcbiAgICB9XFxyXFxuICAgICNzbGlkZS1uYXYubmF2YmFyLWludmVyc2UgI25hdmJhci1oZWlnaHQtY29sIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICB9XFxyXFxuICAgICNzbGlkZS1uYXYgI25hdmJhci1oZWlnaHQtY29sIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBsZWZ0OiAtODAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcdCNzbGlkZS1uYXYgLmNvbnRhaW5lciB7XFxyXFxuXFx0ICAgIG1hcmdpbjogMDtcXHJcXG5cXHQgICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYgLm5hdmJhci1oZWFkZXIge1xcclxcblxcdCAgICBtYXJnaW46IDAgYXV0bztcXHJcXG5cXHQgICAgcGFkZGluZzogMCAxNXB4O1xcclxcblxcdH1cXHJcXG5cXHQjc2xpZGUtbmF2IC5uYXZiYXIuc2xpZGUtYWN0aXZlIHtcXHJcXG5cXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdCAgICB3aWR0aDogODAlO1xcclxcblxcdCAgICB0b3A6IC0xcHg7XFxyXFxuXFx0ICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYgI3NsaWRlbWVudSB7XFxyXFxuXFx0ICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuXFx0ICAgIGxlZnQ6IC0xMDAlO1xcclxcblxcdCAgICB3aWR0aDogODAlO1xcclxcblxcdCAgICBtaW4td2lkdGg6IDA7XFxyXFxuXFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcblxcdCAgICB6LWluZGV4OiAyO1xcclxcblxcdCAgICB0b3A6IC04cHg7XFxyXFxuXFx0ICAgIG1hcmdpbjogMDtcXHJcXG5cXHR9XFxyXFxuXFx0I3NsaWRlLW5hdiAjc2xpZGVtZW51IC5uYXZiYXItbmF2IHtcXHJcXG5cXHQgICAgbWluLXdpZHRoOiAwO1xcclxcblxcdCAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHQgICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYgI3NsaWRlbWVudSAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSBsaSBhIHtcXHJcXG5cXHQgICAgbWluLXdpZHRoOiAwO1xcclxcblxcdCAgICB3aWR0aDogODAlO1xcclxcblxcdCAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcblxcdH1cXHJcXG5cXHQjc2xpZGUtbmF2IHtcXHJcXG5cXHQgICAgYm9yZGVyLXRvcDogMFxcclxcblxcdH1cXHJcXG4gICAgI3NsaWRlLW5hdi5zbGlkZS1hY3RpdmUge1xcclxcblxcdCAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYubmF2YmFyLWludmVyc2UgI3NsaWRlbWVudSB7XFxyXFxuXFx0ICAgIGJhY2tncm91bmQ6ICMzMzNcXHJcXG5cXHR9XFxyXFxuXFx0LyogdGhpcyBpcyBiZWhpbmQgdGhlIG5hdmlnYXRpb24gYnV0IHRoZSBuYXZpZ2F0aW9uIGlzIG5vdCBpbnNpZGUgaXQgc28gdGhhdCB0aGUgbmF2aWdhdGlvbiBpcyBhY2Nlc3NpYmxlIGFuZCBzY3JvbGxzKi9cXHJcXG5cXHQjc2xpZGUtbmF2ICNuYXZiYXItaGVpZ2h0LWNvbCB7XFxyXFxuXFx0ICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgICAgdG9wOiAwO1xcclxcblxcdCAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ICAgIHdpZHRoOiA4MCU7XFxyXFxuXFx0ICAgIGxlZnQ6IC04MCU7XFxyXFxuXFx0ICAgIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuXFx0fVxcclxcblxcdCNzbGlkZS1uYXYubmF2YmFyLWludmVyc2UgI25hdmJhci1oZWlnaHQtY29sIHtcXHJcXG5cXHQgICAgYmFja2dyb3VuZDogIzMzMztcXHJcXG5cXHQgICAgei1pbmRleDogMTtcXHJcXG5cXHQgICAgYm9yZGVyOiAwO1xcclxcblxcdH1cXHJcXG5cXHQjc2xpZGUtbmF2IC5uYXZiYXItZm9ybSB7XFxyXFxuXFx0ICAgIHdpZHRoOiAxMDAlO1xcclxcblxcdCAgICBtYXJnaW46IDhweCAwO1xcclxcblxcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0ICAgIC8qZmFzdCBjbGVhcmZpeGVyKi9cXHJcXG5cXHR9XFxyXFxuXFx0I3NsaWRlLW5hdiAubmF2YmFyLWZvcm0gLmZvcm0tY29udHJvbCB7XFxyXFxuXFx0ICAgIHRleHQtYWxpZ246IGNlbnRlclxcclxcblxcdH1cXHJcXG5cXHQjc2xpZGUtbmF2IC5uYXZiYXItZm9ybSAuYnRuIHtcXHJcXG5cXHQgICAgd2lkdGg6IDEwMCVcXHJcXG5cXHR9XFxyXFxuXFxyXFxuICAgIC8qTWVudSBidXR0b24qL1xcclxcbiAgICAjbmF2LWljb24ye1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAvKmhlaWdodDogNDVweDsqL1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAjbmF2LWljb24yIHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbiB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZDM1MzFhO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYtaWNvbjIgc3BhbjpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICAgICAgbGVmdDogMzUlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA5cHggOXB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi1pY29uMiBzcGFuOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgICAgIGxlZnQ6MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4IDAgMCA5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi1pY29uMiBzcGFuOm50aC1jaGlsZCgxKSwgI25hdi1pY29uMiBzcGFuOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICB0b3A6IDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDMpLCAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgICAgIHRvcDogMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDUpLCAjbmF2LWljb24yIHNwYW46bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgICAgIHRvcDogMzZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoMSksI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCgyKSwjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoNSkge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgbGVmdDogNXB4O1xcclxcbiAgICAgICAgdG9wOiA3cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gOXB4KTsgLyo1MCUgLTUgKi9cXHJcXG4gICAgICAgIHRvcDogOXB4OyAvKiA3Ki9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2LWljb24yLm9wZW4gc3BhbjpudGgtY2hpbGQoMykge1xcclxcbiAgICAgICAgbGVmdDogLTUwJTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi1pY29uMi5vcGVuIHNwYW46bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCg1KSB7XFxyXFxuICAgICAgICBsZWZ0OiA1cHg7XFxyXFxuICAgICAgICB0b3A6IDI1cHg7IC8qMjkqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYtaWNvbjIub3BlbiBzcGFuOm50aC1jaGlsZCg2KSB7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDdweCk7IC8qNTAlIC01ICovXFxyXFxuICAgICAgICB0b3A6IDI1cHg7IC8qMjkqL1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7IFxcclxcblxcdC5uYXZiYXIubmF2YmFyLWZpeGVkLXRvcC5zbGlkZS1hY3RpdmUge1xcclxcblxcdCAgICBwb3NpdGlvbjogZml4ZWRcXHJcXG5cXHR9XFxyXFxuXFx0Lm5hdmJhci1oZWFkZXIge1xcclxcblxcdCAgICBsZWZ0OiAwIWltcG9ydGFudFxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3cgYWJvdXRcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEgY29sLXhzLTBcXFwiPjwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZXh0cmEtd3JhcCBleHRyYS1ibG9jay0xIGNvbC1tZC0xMCBjb2wteHMtMTJcXFwiPlxcclxcbiAgICA8aDIgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjtcXFwiPkFib3V0IG1lPC9oMj5cXHJcXG4gICAgPGgzIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5TYW0gS3JvbXN0YWluIOKAkyBhIFdlYiBEZXNpZ25lciAmYW1wOyBXZWIgRGV2ZWxvcGVyIGZyb20gTG9zIEFuZ2VsZXM8L2gzPlxcclxcbiAgICA8cD48aW1nIGNsYXNzPVxcXCJhbGlnbmxlZnQgbWUtcGhvdG9cXFwiIGFsdD1cXFwiYWJvdXQtcGhvdG9cXFwiIHNyYz1cXFwiLi4vYXNzZXRzL21lLmpwZ1xcXCI+PC9wPlxcclxcbiAgICA8cD5GdXNjZSBldWlzbW9kIGNvbnNlcXVhdCBhbnRlLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHNlZCBkb2xvci5BbGlxdWFtIGNvbmd1ZSBmZXJtZW50dW0gbmlzbC4gTWF1cmlzIGFjY3Vtc2FuIG51bGxhIHZlbCBkaWFtLiBTZWQgaW4gbGFjdXMgdXQgZW5pbSBhZGlwaXNjaW5nIGFsaXF1ZXQuIE51bGxhIHZlbmVuYXRpcy4gSW4gcGVkZSBtaSwgYWxpcXVldCBzaXQgYW1ldCwgZXVpc21vZCBpbiwgYXVjdG9yIHV0LCBsaWd1bGEuIEFsaXF1YW0gZGFwaWJ1cyB0aW5jaWR1bnQgbWV0dXMuIFByYWVzZW50IGp1c3RvIGRvbG9yLCBsb2JvcnRpcyBxdWlzLCBsb2JvcnRpcyBkaWduaXNzaW1wdWx2aW4gYXIgYWxvcmVtLiBWZXN0aWJ1bHVtIHNlZCBhbm9uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cXHJcXG4gICAgPHA+Q3JhcyBlcm9zIG51bGxhLCBwb3J0YSB1dCBlc3QgaW4sIGN1cnN1cyBlZ2VzdGFzIHZlbGl0LiBDcmFzIHF1aXMgYmliZW5kdW0gb2RpbywgaW4gY29uZGltZW50dW0gYW50ZS4gQWxpcXVhbSBncmF2aWRhIG1hdXJpcyBzZWQgaW1wZXJkaWV0IHBvcnR0aXRvci4gVmVzdGlidWx1bSBmZXVnaWF0IG51bGxhIGlkIG1hc3NhIHBvcnRhIHZhcml1cy4gUGhhc2VsbHVzIGR1aSBzZW0sIHZvbHV0cGF0IHF1aXMgZGlnbmlzc2ltIHZpdGFlLCBhdWMgdG9yIHF1aXMgbnVuYy4gRHVpcyBtYWxlc3VhZGEsIGVsaXQgbmVjZmF1Y2lidXMgZmV1Z2lhdCwgbGlndWxhIGFyY3UgcG9ydGEgZXJhdCwgcXVpcyBtb2xlc3RpZSBqdXN0byBudWxsYTwvcD5cXHJcXG4gICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3dvcmRwcmVzc180OTE1OC9wb3J0Zm9saW8vcG9ydGZvbGlvLTMvXFxcIiBjbGFzcz1cXFwiYnRuIFxcXCI+dmlldyBteSB3b3JrczwvYT5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEgY29sLXhzLTBcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGFwcC1oZWFkZXI+TG9hZGluZy4uLjwvYXBwLWhlYWRlcj5cXHJcXG4gICAgPGFwcC1hYm91dD48L2FwcC1hYm91dD5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyIGNsYXNzPVxcXCJyb3cgaGVhZGVyXFxcIj5cXHJcXG4gIDxhcHAtbmF2aWdhdGlvbj5Mb2FkaW5nLi4uPC9hcHAtbmF2aWdhdGlvbj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgaWQ9XFxcInBhZ2UtY29udGVudFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3BhbjEyXFxcIj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGFzaEFuY29yXFxcIiBpZD1cXFwiaG9tZVBhZ2VcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvX3dyYXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlckNvdmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDwhLS08aW1nIHNyYz1cXFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3dvcmRwcmVzc180OTE1OC93cC1jb250ZW50L3RoZW1lcy90aGVtZTQ5MTU4L2ltYWdlcy9oZWFkZXJfZXh0cmFfaW1hZ2UucG5nXFxcIiBhbHQ9XFxcIlxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nbyBwdWxsLWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGgxPkxlb25hcmRvIEQnQW50b25pPC9oMT5cXHJcXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJsb2dvX3RhZ2xpbmVcXFwiPkNvbnN0cnVsbGVuZG8gbWFyYXZpbGxvc2FzIGV4cGVyaWVuY2lhcyB3ZWI8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gPC9kaXY+XFxyXFxuPC9oZWFkZXI+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICA8bGkgY2xhc3M9XFxcIlxcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IHNlY3Rpb24uYWN0aXZlfVxcXCIgKm5nRm9yPVxcXCJsZXQgc2VjdGlvbiBvZiBzZWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIje3tzZWN0aW9uLmhhc2hUYWd9fVxcXCIgKGNsaWNrKT1cXFwiY2hhbmdlU2VjdGlvbihzZWN0aW9uKVxcXCI+e3tzZWN0aW9uLm5hbWV9fTwvYT5cXHJcXG4gICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcblxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IHNvY2lhbFxcXCI+XFxyXFxuICAgICAgPGxpPiA8YSBocmVmPVxcXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGVvbmFyZG8tZGFudG9uaS05M2FiYTQyMi9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW4gZmEtM3hcXFwiPjwvc3Bhbj48L2E+IDwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9sZW9uYXJkby5kYW50b25pXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLWZhY2Vib29rIGZhLTN4XFxcIj48L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vbGZkYW50b25pXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXIgZmEtM3hcXFwiPjwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2xmZGFudG9uaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1naXRodWItYWx0IGZhLTN4XFxcIj48L3NwYW4+PC9hPjwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICA8L2Rpdj5cXHJcXG48L25hdj4tLT5cXHJcXG5cXHJcXG5cXHJcXG4gPGRpdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiIGlkPVxcXCJzbGlkZS1uYXZcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXHJcXG4gICAgPCEtLTxhIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiAgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgkZXZlbnQpXFxcIj4gXFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgPC9hPi0tPlxcclxcbiAgICAgPGRpdiBpZD1cXFwibmF2LWljb24yXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVNZW51KCRldmVudClcXFwiPlxcclxcbiAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgICA8c3Bhbj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4+PC9zcGFuPlxcclxcbiAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgICA8c3Bhbj48L3NwYW4+XFxyXFxuICAgICAgPHNwYW4+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCI+TEQ8L2E+XFxyXFxuICAgPC9kaXY+XFxyXFxuICAgPGRpdiBpZD1cXFwic2xpZGVtZW51XFxcIj5cXHJcXG4gICAgPCEtLTxmb3JtIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcXFwiIHJvbGU9XFxcImZvcm1cXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcInNlYXJjaFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlNlYXJjaDwvYnV0dG9uPlxcclxcbiAgICA8L2Zvcm0+LS0+XFxyXFxuICAgICBcXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBzZWN0aW9uLmFjdGl2ZX1cXFwiICpuZ0Zvcj1cXFwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnNcXFwiPlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiI3t7c2VjdGlvbi5oYXNoVGFnfX1cXFwiIChjbGljayk9XFxcImNoYW5nZVNlY3Rpb24oc2VjdGlvbilcXFwiPnt7c2VjdGlvbi5uYW1lfX08L2E+XFxyXFxuICAgICAgPC9saT5cXHJcXG4gICAgIDwhLS08bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+SG9tZTwvYT48L2xpPlxcclxcbiAgICAgPGxpPjxhIGhyZWY9XFxcIiNhYm91dFxcXCI+QWJvdXQ8L2E+PC9saT5cXHJcXG4gICAgIDxsaT48YSBocmVmPVxcXCIjY29udGFjdFxcXCI+Q29udGFjdDwvYT48L2xpPlxcclxcbiAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCIgW2NsYXNzLm9wZW5dPVxcXCJkcm9wRG93bk9wZW5cXFwiPlxcclxcbiAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgKGNsaWNrKT1cXFwiZHJvcFRvZ2dsZSgkZXZlbnQpXFxcIj5Ecm9wZG93biA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFjdGlvbjwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcclxcbiAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duLWhlYWRlclxcXCI+TmF2IGhlYWRlcjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFjdGlvbjwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcclxcbiAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duLWhlYWRlclxcXCI+TmF2IGhlYWRlcjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFjdGlvbjwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcclxcbiAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duLWhlYWRlclxcXCI+TmF2IGhlYWRlcjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5TZXBhcmF0ZWQgbGluayB0ZXN0IGxvbmcgdGl0bGUgZ29lcyBoZXJlPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxyXFxuICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxcclxcbiAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cXHJcXG4gICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XFxyXFxuICAgICAgPC91bD5cXHJcXG4gICAgIDwvbGk+LS0+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgc29jaWFsXFxcIj5cXHJcXG4gICAgICA8bGk+IDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sZW9uYXJkby1kYW50b25pLTkzYWJhNDIyL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1saW5rZWRpbiBmYS0zeFxcXCI+PC9zcGFuPjwvYT4gPC9saT5cXHJcXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2xlb25hcmRvLmRhbnRvbmlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtZmFjZWJvb2sgZmEtM3hcXFwiPjwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9sZmRhbnRvbmlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtdHdpdHRlciBmYS0zeFxcXCI+PC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vbGZkYW50b25pXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLWdpdGh1Yi1hbHQgZmEtM3hcXFwiPjwvc3Bhbj48L2E+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgICAgICAgXFxyXFxuICAgPC9kaXY+XFxyXFxuICAgPGRpdiBpZD1cXFwibmF2YmFyLWhlaWdodC1jb2xcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuIDwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tcGlsZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIlxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIlxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbnVtYmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCJcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L29iamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCJcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWdleHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCJcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zeW1ib2xcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczcvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=