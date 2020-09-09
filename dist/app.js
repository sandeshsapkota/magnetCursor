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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(node) {
    _classCallCheck(this, Button);

    this.button = node;
    this.distance = 80;
    this.a = 160;
    this.mouseHasEntered = false;
    this.mouseIsInButtonTerritory = false;
    this.init();
    this.handleEvent();
  }

  _createClass(Button, [{
    key: "init",
    value: function init() {
      var _this$button$getBound = this.button.getBoundingClientRect(),
          width = _this$button$getBound.width,
          height = _this$button$getBound.height,
          centerPointX = _this$button$getBound.x,
          centerPointY = _this$button$getBound.y; // gives you width, height, left-X,top-y of the button


      centerPointX = centerPointX + width / 2; //  center point of button on x-axis

      centerPointY = centerPointY + height / 2; //  center point of button on y-axis

      this.centerPointX = centerPointX;
      this.centerPointY = centerPointY;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent() {
      var _this = this;

      window.addEventListener('mousemove', function (e) {
        return _this.handleMove(e);
      });
      window.addEventListener('mouseout', function () {
        return _this.handleReset();
      });
      window.addEventListener('scroll', function () {
        return _this.init();
      }); //  updates the button x,y position

      buttonStates.push({
        button: this.button,
        state: this.mouseIsInButtonTerritory
      });
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this2 = this;

      var x = e.x; // current x of cursor

      var y = e.y; // current y of cursor

      var leftBorderLine = this.centerPointX - this.distance;
      var rightBorderLine = this.centerPointX + this.distance;
      var topBorderLine = this.centerPointY - this.distance;
      var bottomBorderline = this.centerPointY + this.distance;
      this.xWalk = (x - this.centerPointX) / 2; // the distance to move the button when mouse moves on X axis

      this.yWalk = (y - this.centerPointY) / 2; // the distance to move the button when mouse moves on Y axis

      this.mouseIsInButtonTerritory = x > leftBorderLine && x < rightBorderLine && y > topBorderLine && y < bottomBorderline; // becomes true if  mouse is inside all of these border-line

      if (this.mouseIsInButtonTerritory) {
        if (!this.mouseHasEntered) {
          //  this must happen only once to create outside borderline
          //  creating another level borderline by increasing distance;
          //  while cursor is returning the button comes out of nearest border-line and return from this borderline
          this.distance = 240;
          this.mouseHasEntered = true;
        }

        this.handleCatch(); // when mouse enters the button's territory
      } else {
        this.handleReset();
      }

      var index = buttonStates.findIndex(function (button) {
        return button.button === _this2.button;
      });
      buttonStates[index].state = this.mouseIsInButtonTerritory;
    }
  }, {
    key: "handleCatch",
    value: function handleCatch() {
      // translates the button in the direction where cursor is.
      this.button.style.transform = "translate(".concat(this.xWalk, "px, ").concat(this.yWalk, "px)");
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      // resets the position of the button as it was initial.
      this.button.style.transform = "translate(".concat(0, "px, ", 0, "px)");
      if (this.mouseHasEntered) this.distance = 80;
      this.mouseHasEntered = false; // when button is return to it's position (mouseHasEntered = true) lets to increase the initial borderline of button for the next time
    }
  }]);

  return Button;
}();

var buttons = document.querySelectorAll('.button');
var bubble = document.querySelector('.bubble');
var buttonStates = [];

function handleBubble(e) {
  bubble.style.left = "".concat(e.x, "px");
  bubble.style.top = "".concat(e.y, "px");
  var anyOfTheButtonIsHover = buttonStates.some(function (buttonObj) {
    return buttonObj.state;
  });

  if (anyOfTheButtonIsHover || e.target.classList.contains("nav__link")) {
    bubble.classList.add("bubble--big");
    document.body.style.cursor = '-webkit-grab';
  } else {
    bubble.classList.remove("bubble--big");
    document.body.style.cursor = 'auto';
  }
}

buttons.forEach(function (button) {
  var node = button.querySelector('.button__like-text');
  new Button(node);
});
window.addEventListener("mousemove", function (e) {
  handleBubble(e);
});

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

__webpack_require__(/*! E:\practise\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! E:\practise\src\sass\app.scss */"./src/sass/app.scss");


/***/ })

/******/ });