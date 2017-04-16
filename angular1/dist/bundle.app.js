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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('myApp.view1', ['ngRoute'])\n\n.config(['$routeProvider', function($routeProvider) {\n  $routeProvider.when('/view1', {\n    templateUrl: 'app/view1/view1.html',\n    controller: 'View1Ctrl'\n  });\n}])\n\n.controller('View1Ctrl', [function() {\n\n}]);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./view1/view1.js\n// module id = 0\n// module chunks = 1\n\n//# sourceURL=webpack:///./view1/view1.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('myApp.view2', ['ngRoute'])\n\n.config(['$routeProvider', function($routeProvider) {\n  $routeProvider.when('/view2', {\n    templateUrl: 'app/view2/view2.html',\n    controller: 'View2Ctrl'\n  });\n}])\n\n.controller('View2Ctrl', [function() {\n\n}]);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./view2/view2.js\n// module id = 1\n// module chunks = 1\n\n//# sourceURL=webpack:///./view2/view2.js?");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Declare app level module which depends on views, and components\nangular.module('myApp', [\n  'ngRoute',\n  'myApp.view1',\n  'myApp.view2'\n]).\nconfig(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {\n  $locationProvider.hashPrefix('!');\n  console.log('asdasd')\n  $routeProvider.otherwise({redirectTo: '/view1'});\n}]);\n\n__webpack_require__(0);\n__webpack_require__(1);\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app.js\n// module id = 4\n// module chunks = 1\n\n//# sourceURL=webpack:///./app.js?");

/***/ })
/******/ ]);