/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/components.ts":
/*!******************************!*\
  !*** ./source/components.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar app_component_1 = __webpack_require__(/*! ./components/app.component */ \"./source/components/app.component.ts\");\nvar appcontainer_component_1 = __webpack_require__(/*! ./components/appcontainer.component */ \"./source/components/appcontainer.component.ts\");\nvar header_component_1 = __webpack_require__(/*! ./components/header.component */ \"./source/components/header.component.ts\");\nvar main_sidebar_component_1 = __webpack_require__(/*! ./components/main-sidebar.component */ \"./source/components/main-sidebar.component.ts\");\nvar control_sidebar_component_1 = __webpack_require__(/*! ./components/control-sidebar.component */ \"./source/components/control-sidebar.component.ts\");\n// pages\nvar home_component_1 = __webpack_require__(/*! ./components/home.component */ \"./source/components/home.component.ts\");\nvar calendar_component_1 = __webpack_require__(/*! ./components/calendar.component */ \"./source/components/calendar.component.ts\");\nvar loginlayer_component_1 = __webpack_require__(/*! ./components/loginlayer.component */ \"./source/components/loginlayer.component.ts\");\nvar login_component_1 = __webpack_require__(/*! ./components/login.component */ \"./source/components/login.component.ts\");\n// module\nvar mod = angular.module('components', []);\nmod.component('appcontainer', appcontainer_component_1.default.Factory());\nmod.component('app', app_component_1.default.Factory());\nmod.component('header', header_component_1.default.Factory());\nmod.component('mainSidebar', main_sidebar_component_1.default.Factory());\nmod.component('controlSidebar', control_sidebar_component_1.default.Factory());\n// pages\nmod.component('home', home_component_1.default.Factory());\nmod.component('calendar', calendar_component_1.default.Factory());\nmod.component('loginlayer', loginlayer_component_1.default.Factory());\nmod.component(\"login\", login_component_1.default.Factory());\nexports.default = mod;\n\n\n//# sourceURL=webpack:///./source/components.ts?");

/***/ }),

/***/ "./source/components/app.component.ts":
/*!********************************************!*\
  !*** ./source/components/app.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AppComponent = /** @class */ (function () {\n    function AppComponent() {\n    }\n    AppComponent.prototype.$onInit = function () {\n        //console.log('app init');\n    };\n    AppComponent.Factory = function () {\n        return {\n            controller: AppComponent,\n            templateUrl: 'views/components/app.html'\n        };\n    };\n    return AppComponent;\n}());\nexports.default = AppComponent;\n\n\n//# sourceURL=webpack:///./source/components/app.component.ts?");

/***/ }),

/***/ "./source/components/appcontainer.component.ts":
/*!*****************************************************!*\
  !*** ./source/components/appcontainer.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AppcontainerComponent = /** @class */ (function () {\n    function AppcontainerComponent(state) {\n        this.state = state;\n        console.log(state.current.name);\n        switch (state.current.name) {\n            case \"login\":\n                this.itemtype = \"0\";\n                break;\n            default:\n                this.itemtype = \"1\";\n                break;\n        }\n    }\n    AppcontainerComponent.prototype.$onInit = function () {\n        //console.log('app init');\n    };\n    AppcontainerComponent.Factory = function () {\n        return {\n            controller: AppcontainerComponent,\n            templateUrl: 'views/components/appcontainer.html'\n        };\n    };\n    AppcontainerComponent.$inject = [\"$state\"];\n    return AppcontainerComponent;\n}());\nexports.default = AppcontainerComponent;\n\n\n//# sourceURL=webpack:///./source/components/appcontainer.component.ts?");

/***/ }),

/***/ "./source/components/calendar.component.ts":
/*!*************************************************!*\
  !*** ./source/components/calendar.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar CalendarComponent = /** @class */ (function () {\n    function CalendarComponent() {\n    }\n    CalendarComponent.Factory = function () {\n        return {\n            controller: CalendarComponent,\n            templateUrl: 'views/components/calendar.html'\n        };\n    };\n    return CalendarComponent;\n}());\nexports.default = CalendarComponent;\n\n\n//# sourceURL=webpack:///./source/components/calendar.component.ts?");

/***/ }),

/***/ "./source/components/control-sidebar.component.ts":
/*!********************************************************!*\
  !*** ./source/components/control-sidebar.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ControlSidebarComponent = /** @class */ (function () {\n    function ControlSidebarComponent() {\n    }\n    ControlSidebarComponent.prototype.$onInit = function () {\n        //console.log('control sidebar init');\n    };\n    ControlSidebarComponent.Factory = function () {\n        return {\n            controller: ControlSidebarComponent,\n            templateUrl: 'views/components/control-sidebar.html'\n        };\n    };\n    return ControlSidebarComponent;\n}());\nexports.default = ControlSidebarComponent;\n\n\n//# sourceURL=webpack:///./source/components/control-sidebar.component.ts?");

/***/ }),

/***/ "./source/components/header.component.ts":
/*!***********************************************!*\
  !*** ./source/components/header.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar HeaderComponent = /** @class */ (function () {\n    function HeaderComponent() {\n    }\n    HeaderComponent.Factory = function () {\n        return {\n            controller: HeaderComponent,\n            templateUrl: 'views/components/header.html'\n        };\n    };\n    return HeaderComponent;\n}());\nexports.default = HeaderComponent;\n\n\n//# sourceURL=webpack:///./source/components/header.component.ts?");

/***/ }),

/***/ "./source/components/home.component.ts":
/*!*********************************************!*\
  !*** ./source/components/home.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar HomeComponent = /** @class */ (function () {\n    function HomeComponent() {\n        this.message = 'Welcome';\n    }\n    HomeComponent.prototype.$onInit = function () { };\n    HomeComponent.Factory = function () {\n        return {\n            controller: HomeComponent,\n            templateUrl: 'views/components/home.html'\n        };\n    };\n    return HomeComponent;\n}());\nexports.default = HomeComponent;\n\n\n//# sourceURL=webpack:///./source/components/home.component.ts?");

/***/ }),

/***/ "./source/components/login.component.ts":
/*!**********************************************!*\
  !*** ./source/components/login.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar apiconfig_1 = __webpack_require__(/*! ../router/apiconfig */ \"./source/router/apiconfig.ts\");\nvar LoginComponent = /** @class */ (function () {\n    function LoginComponent(api) {\n        this.api = api;\n        this.message = 'Welcome';\n    }\n    LoginComponent.prototype.$onInit = function () {\n        this.api.exec(apiconfig_1.default.login, { id: 1 }).then(function (result) {\n            console.log(result);\n        });\n    };\n    LoginComponent.Factory = function () {\n        return {\n            controller: LoginComponent,\n            templateUrl: 'views/login/login.html'\n        };\n    };\n    return LoginComponent;\n}());\nexports.default = LoginComponent;\n\n\n//# sourceURL=webpack:///./source/components/login.component.ts?");

/***/ }),

/***/ "./source/components/loginlayer.component.ts":
/*!***************************************************!*\
  !*** ./source/components/loginlayer.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar LoginLayerComponent = /** @class */ (function () {\n    function LoginLayerComponent() {\n    }\n    LoginLayerComponent.prototype.$onInit = function () {\n        //console.log('app init');\n    };\n    LoginLayerComponent.Factory = function () {\n        return {\n            controller: LoginLayerComponent,\n            templateUrl: 'views/login/loginlayer.html'\n        };\n    };\n    return LoginLayerComponent;\n}());\nexports.default = LoginLayerComponent;\n\n\n//# sourceURL=webpack:///./source/components/loginlayer.component.ts?");

/***/ }),

/***/ "./source/components/main-sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./source/components/main-sidebar.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar MainSidebarComponent = /** @class */ (function () {\n    function MainSidebarComponent() {\n    }\n    MainSidebarComponent.Factory = function () {\n        return {\n            controller: MainSidebarComponent,\n            templateUrl: 'views/components/main-sidebar.html'\n        };\n    };\n    return MainSidebarComponent;\n}());\nexports.default = MainSidebarComponent;\n\n\n//# sourceURL=webpack:///./source/components/main-sidebar.component.ts?");

/***/ }),

/***/ "./source/config.ts":
/*!**************************!*\
  !*** ./source/config.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction config(locationProvider, stateProvider, urlRouterProvider) {\n    locationProvider.html5Mode(true);\n    urlRouterProvider.otherwise('/home');\n    stateProvider.state('home', {\n        url: '/home',\n        template: '<home></home>'\n    })\n        .state('login', {\n        url: '/login',\n        template: \"<login></login>\"\n    })\n        .state('calendar', {\n        url: '/calendar',\n        template: '<calendar></calendar>'\n    });\n}\nconfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];\nexports.default = config;\n\n\n//# sourceURL=webpack:///./source/config.ts?");

/***/ }),

/***/ "./source/directives.ts":
/*!******************************!*\
  !*** ./source/directives.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar my_directive_1 = __webpack_require__(/*! ./directives/my.directive */ \"./source/directives/my.directive.ts\");\nvar navitem_1 = __webpack_require__(/*! ./directives/navitem */ \"./source/directives/navitem.ts\");\nvar navitem_inner_1 = __webpack_require__(/*! ./directives/navitem.inner */ \"./source/directives/navitem.inner.ts\");\nvar navitem_inner_rich_1 = __webpack_require__(/*! ./directives/navitem.inner.rich */ \"./source/directives/navitem.inner.rich.ts\");\nvar mod = angular.module('directives', []);\nmod.directive('myDrc', my_directive_1.default.Factory);\nmod.directive('navItem', navitem_1.default.Factory);\nmod.directive('navItemInner', navitem_inner_1.default.Factory);\nmod.directive('navItemInnerRich', navitem_inner_rich_1.default.Factory);\nexports.default = mod;\n\n\n//# sourceURL=webpack:///./source/directives.ts?");

/***/ }),

/***/ "./source/directives/my.directive.ts":
/*!*******************************************!*\
  !*** ./source/directives/my.directive.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar MyDirective = /** @class */ (function () {\n    function MyDirective(myService, apiService, scope) {\n        this.myService = myService;\n        this.apiService = apiService;\n    }\n    MyDirective.prototype.do = function () {\n        this.myService.do();\n    };\n    MyDirective.Link = function (scope, element, attrs) {\n        element.css({ color: 'red' });\n    };\n    MyDirective.Factory = function () {\n        return {\n            scope: {\n                name: '='\n            },\n            link: MyDirective.Link,\n            controller: MyDirective,\n            controllerAs: 'myDrc',\n            template: \"name: {{name}} <br> <button ng-click=\\\"myDrc.do()\\\">service.do</button>\"\n        };\n    };\n    return MyDirective;\n}());\nexports.default = MyDirective;\nMyDirective.$inject = ['myService', 'apiService', '$scope'];\n\n\n//# sourceURL=webpack:///./source/directives/my.directive.ts?");

/***/ }),

/***/ "./source/directives/navitem.inner.rich.ts":
/*!*************************************************!*\
  !*** ./source/directives/navitem.inner.rich.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar navItemInnerRich = /** @class */ (function () {\n    function navItemInnerRich(myService, apiService, scope) {\n        this.myService = myService;\n        this.apiService = apiService;\n    }\n    navItemInnerRich.prototype.do = function () {\n        this.myService.do();\n    };\n    navItemInnerRich.Link = function (scope, element, attrs) {\n        element.css({ color: 'red' });\n    };\n    navItemInnerRich.Factory = function () {\n        return {\n            replace: true,\n            scope: {\n                title: '=',\n                detail: '=',\n                supper: '=',\n                imgurl: '=',\n                imgalt: '='\n            },\n            link: navItemInnerRich.Link,\n            controller: navItemInnerRich,\n            controllerAs: 'navItemCtrl',\n            templateUrl: 'views/directives/navitem.inner.rich.html'\n        };\n    };\n    return navItemInnerRich;\n}());\nexports.default = navItemInnerRich;\nnavItemInnerRich.$inject = ['myService', 'apiService', '$scope'];\n\n\n//# sourceURL=webpack:///./source/directives/navitem.inner.rich.ts?");

/***/ }),

/***/ "./source/directives/navitem.inner.ts":
/*!********************************************!*\
  !*** ./source/directives/navitem.inner.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar navItemInner = /** @class */ (function () {\n    function navItemInner(myService, apiService, scope) {\n        this.myService = myService;\n        this.apiService = apiService;\n    }\n    navItemInner.prototype.do = function () {\n        this.myService.do();\n    };\n    navItemInner.Link = function (scope, element, attrs) {\n        element.css({ color: 'red' });\n    };\n    navItemInner.Factory = function () {\n        return {\n            replace: true,\n            scope: {\n                text: '=',\n                icon: '@',\n                color: '@',\n            },\n            link: navItemInner.Link,\n            controller: navItemInner,\n            controllerAs: 'navItemCtrl',\n            templateUrl: 'views/directives/navitem.inner.html'\n        };\n    };\n    return navItemInner;\n}());\nexports.default = navItemInner;\nnavItemInner.$inject = ['myService', 'apiService', '$scope'];\n\n\n//# sourceURL=webpack:///./source/directives/navitem.inner.ts?");

/***/ }),

/***/ "./source/directives/navitem.ts":
/*!**************************************!*\
  !*** ./source/directives/navitem.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar navItem = /** @class */ (function () {\n    function navItem(myService, apiService, scope) {\n        this.myService = myService;\n        this.apiService = apiService;\n    }\n    navItem.prototype.do = function () {\n        this.myService.do();\n    };\n    navItem.Link = function (scope, element, attrs) {\n        element.css({ color: 'red' });\n    };\n    navItem.Factory = function () {\n        return {\n            transclude: true,\n            replace: true,\n            scope: {\n                name: '=',\n                navClass: '@',\n                countLabel: '@',\n                icon: '@',\n                count: '=',\n                title: '=',\n                footer: '='\n            },\n            link: navItem.Link,\n            controller: navItem,\n            controllerAs: 'navItemCtrl',\n            templateUrl: 'views/directives/navitem.html'\n        };\n    };\n    return navItem;\n}());\nexports.default = navItem;\nnavItem.$inject = ['myService', 'apiService', '$scope'];\n\n\n//# sourceURL=webpack:///./source/directives/navitem.ts?");

/***/ }),

/***/ "./source/errortoast.ts":
/*!******************************!*\
  !*** ./source/errortoast.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction errortoast(msg) {\n    console.log(\"error---------------\" + msg);\n    bootoast({\n        message: msg,\n        type: 'danger',\n        position: 'right-bottom',\n        timeout: 2\n    });\n    //mui.toast(msg);\n    /*mui.alert(msg);*/\n    throw {\n        msg: msg\n    };\n}\n;\nexports.default = errortoast;\n\n\n//# sourceURL=webpack:///./source/errortoast.ts?");

/***/ }),

/***/ "./source/main.ts":
/*!************************!*\
  !*** ./source/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar components_1 = __webpack_require__(/*! ./components */ \"./source/components.ts\");\nvar directives_1 = __webpack_require__(/*! ./directives */ \"./source/directives.ts\");\nvar services_1 = __webpack_require__(/*! ./services */ \"./source/services.ts\");\nvar config_1 = __webpack_require__(/*! ./config */ \"./source/config.ts\");\nvar app = angular.module('EcgStatistics', ['ui.router']);\napp.config(config_1.default);\nangular.bootstrap(document.body, [app.name, components_1.default.name, directives_1.default.name, services_1.default.name], {\n    strictDi: true\n});\n\n\n//# sourceURL=webpack:///./source/main.ts?");

/***/ }),

/***/ "./source/router/apiconfig.ts":
/*!************************************!*\
  !*** ./source/router/apiconfig.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ApiConfig = {\n    \"login\": {\n        url: \"http://localhost:55398/api/Test/sss\",\n        method: \"get\"\n    }\n};\nexports.default = ApiConfig;\n\n\n//# sourceURL=webpack:///./source/router/apiconfig.ts?");

/***/ }),

/***/ "./source/services.ts":
/*!****************************!*\
  !*** ./source/services.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar api_service_1 = __webpack_require__(/*! ./services/api.service */ \"./source/services/api.service.ts\");\nvar my_service_1 = __webpack_require__(/*! ./services/my.service */ \"./source/services/my.service.ts\");\nvar mod = angular.module('services', []);\nmod.service('apiService', api_service_1.default);\nmod.service('myService', my_service_1.default);\nexports.default = mod;\n\n\n//# sourceURL=webpack:///./source/services.ts?");

/***/ }),

/***/ "./source/services/api.service.ts":
/*!****************************************!*\
  !*** ./source/services/api.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar errortoast_1 = __webpack_require__(/*! ../errortoast */ \"./source/errortoast.ts\");\nvar ApiService = /** @class */ (function () {\n    function ApiService(http, $q, $rootScope) {\n        this.http = http;\n        this.$q = $q;\n        this.$rootScope = $rootScope;\n        this.server_url = \"http://localhost:4000\";\n    }\n    ApiService.prototype.do = function () {\n        console.log(this.http);\n        console.log('my service do() called');\n    };\n    ApiService.prototype.exec = function (reqitem, param) {\n        var delay = this.$q.defer();\n        var ToUrl = reqitem.url;\n        var CData = null;\n        var CType;\n        var method = \"post\";\n        if (reqitem.method) {\n            method = reqitem.method;\n        }\n        if (method == \"get\") {\n            if (param) {\n                CData = $.param(param);\n                if (ToUrl.indexOf(\"?\") < 0)\n                    ToUrl = ToUrl + \"?\" + CData;\n                else\n                    ToUrl = ToUrl + \"&\" + CData;\n                CData = {};\n            }\n            else {\n                console.log(\"param=null\");\n            }\n        }\n        else {\n            method = \"post\";\n            if (ToUrl.indexOf(\".ashx\") > 0) {\n                CData = $.param(param);\n                CType = \"application/x-www-form-urlencoded\"; //\"multipart/form-data\";\n            }\n            else {\n                CType = 'application/json';\n                if (param != null)\n                    CData = JSON.stringify(param);\n            }\n        }\n        console.log(\"call api :\" + ToUrl + \":\" + JSON.stringify(CData));\n        this.$rootScope.loading = true;\n        var promise = this.http({\n            url: this.server_url + ToUrl,\n            method: method,\n            data: CData,\n            //timeout: 10000,\n            withCredentials: true,\n            headers: {\n                'Content-Type': CType,\n            }\n        })\n            .then(function (response) {\n            console.log(\"response:\" + JSON.stringify(response));\n            delay.resolve(response.data);\n            this.$rootScope.loading = false;\n        }, function (err) {\n            //console.log(error.statusText + error.status);\n            if (err.status == 401) {\n                console.log(\"401 error,go autologin\");\n                this.http({\n                    url: this.server_url + ToUrl,\n                    method: method,\n                    data: CData,\n                    timeout: 10000,\n                    headers: {\n                        'Content-Type': CType,\n                    }\n                })\n                    .then(function (response) {\n                    console.log(\"response:\" + JSON.stringify(response));\n                    delay.resolve(response.data);\n                    this.$rootScope.loading = false;\n                }, function (err) {\n                    delay.reject(err.statusText);\n                    this.$rootScope.loading = false;\n                });\n            }\n            else {\n                this.$rootScope.loading = false;\n                delay.reject(err.statusText);\n                //alert(error.statusText + \":\" + error.data.ExceptionMessage);\n                if (err.status != 0) {\n                    errortoast_1.default(\"请求服务器错误:status=\" + err.status + \",\" + err.statusText);\n                }\n                else {\n                    errortoast_1.default(\"无法连接服务器,请检查网络设置\");\n                }\n            }\n        });\n        //return promise;\n        return delay.promise;\n    };\n    ApiService.prototype.bar = function () {\n        console.log('my service bar() called');\n    };\n    return ApiService;\n}());\nexports.default = ApiService;\nApiService.$inject = ['$http', '$rootScope', '$q', 'Functions', '$state'];\n\n\n//# sourceURL=webpack:///./source/services/api.service.ts?");

/***/ }),

/***/ "./source/services/my.service.ts":
/*!***************************************!*\
  !*** ./source/services/my.service.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar MyService = /** @class */ (function () {\n    function MyService(http) {\n        this.http = http;\n    }\n    MyService.prototype.do = function () {\n        console.log(this.http);\n        console.log('my service do() called');\n    };\n    MyService.prototype.bar = function () {\n        console.log('my service bar() called');\n    };\n    return MyService;\n}());\nexports.default = MyService;\nMyService.$inject = ['$http'];\n\n\n//# sourceURL=webpack:///./source/services/my.service.ts?");

/***/ })

/******/ });