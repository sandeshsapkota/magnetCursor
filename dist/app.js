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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var button = document.querySelector(".button__like-text");
var bubble = document.querySelector(".bubble");

var _button$getBoundingCl = button.getBoundingClientRect(),
    width = _button$getBoundingCl.width,
    height = _button$getBoundingCl.height,
    centerPointX = _button$getBoundingCl.x,
    centerPointY = _button$getBoundingCl.y; // gives you width, height, left-X,top-y of the button


centerPointX = centerPointX + width / 2; //  center point of button on x-axis

centerPointY = centerPointY + height / 2; //  center point of button on y-axis

/*************** Functions ***************/

var distance = 80;
var mouseHasEntered = true;
var mouseIsInButtonTerritory;

function mouseMove(e) {
  var x = e.x; // current x of cursor

  var y = e.y; // current y of cursor

  var leftBorderLine = centerPointX - distance;
  var rightBorderLine = centerPointX + distance;
  var topBorderLine = centerPointY - distance;
  var bottomBorderline = centerPointY + distance;
  var xWalk = (x - centerPointX) / 2; // the distance to move the button when mouse moves on X axis

  var yWalk = (y - centerPointY) / 2; // the distance to move the button when mouse moves on Y axis

  mouseIsInButtonTerritory = x > leftBorderLine && x < rightBorderLine && y > topBorderLine && y < bottomBorderline; // becomes true if  mouse is inside all of these border-line

  if (mouseIsInButtonTerritory) {
    if (mouseHasEntered) {
      // this must happen only once to create outside borderline
      //creating another level borderline by incresing distance;
      // while cursor is returing the button comes out of nearest border-line and return from this borderline
      distance = 160;
      mouseHasEntered = false;
    }

    catchCursor(xWalk, yWalk); // call the function when mouse in in the button's territory
  } else {
    resetPositon();
  }
}

function resetPositon() {
  // resets the postion of the button as it was initial.
  button.style.transform = "translate(".concat(0, "px, ", 0, "px)");
  if (!mouseHasEntered) distance = 80;
  mouseHasEntered = true; // when button is return to it's position (mouseHasEntered = true) lets to increase the initial borderline of button for the next time
}

function catchCursor(xWalk, yWalk) {
  // translates the button in the direction where cursor is.
  button.style.transform = "translate(".concat(xWalk, "px, ").concat(yWalk, "px)");
}

function positionTheBubble(e) {
  bubble.style.left = "".concat(e.x, "px");
  bubble.style.top = "".concat(e.y, "px");

  if (mouseIsInButtonTerritory || e.target.classList.contains("nav__link")) {
    bubble.classList.add("bubble--big");
  } else {
    bubble.classList.remove("bubble--big");
  }
}
/*************** Event-handler ***************/


window.addEventListener("mousemove", function (e) {
  positionTheBubble(e);
  mouseMove(e);
});
window.addEventListener("mouseout", resetPositon);

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\magnetCursor\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! E:\magnetCursor\src\sass\app.scss */"./src/sass/app.scss");


/***/ })

/******/ });