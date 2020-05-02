(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./src/components/BackgroundSlider/BackgroundSlider.js":
/*!*************************************************************!*\
  !*** ./src/components/BackgroundSlider/BackgroundSlider.js ***!
  \*************************************************************/
/*! exports provided: default, SliderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderItem", function() { return SliderItem; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _chakra_ui_core_dist_PseudoBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core/dist/PseudoBox */ "./node_modules/@chakra-ui/core/dist/es/PseudoBox/index.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\BackgroundSlider\\BackgroundSlider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t0% { transform: translateX(0); }\n\t100% { transform: translateX(", "px)}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */




function createKeyframes(numberOfElements) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject(), -250 * numberOfElements);
}

var fadeStyle = {
  content: '""',
  height: 92,
  position: 'absolute',
  width: 128,
  zIndex: 2,
  top: 0,
  background: 'linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
  pointerEvents: 'none'
};
function BackgroundSlider(_ref) {
  var children = _ref.children,
      numberOfElements = _ref.numberOfElements,
      duration = _ref.duration;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_PseudoBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    _before: _objectSpread({}, fadeStyle, {
      left: 0
    }),
    _after: _objectSpread({}, fadeStyle, {
      right: 0,
      transform: 'rotateZ(180deg)'
    }),
    overflow: "hidden",
    position: "relative",
    w: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "flex",
    css: {
      animation: "".concat(createKeyframes(numberOfElements), " ").concat(duration, "s linear infinite")
    },
    w: 250 * numberOfElements * 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, children, children));
}
function SliderItem(_ref2) {
  var children = _ref2.children;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_PseudoBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "250px",
    w: "250px",
    height: "92px",
    transition: "all 0.2s ease",
    css: {
      filter: 'grayscale(1)'
    },
    opacity: "0.75",
    _hover: {
      filter: 'none',
      opacity: 1,
      transform: 'scale(1.05)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./src/components/BackgroundSlider/index.js":
/*!**************************************************!*\
  !*** ./src/components/BackgroundSlider/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackgroundSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundSlider */ "./src/components/BackgroundSlider/BackgroundSlider.js");

/* harmony default export */ __webpack_exports__["default"] = (_BackgroundSlider__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/home/Partners.js":
/*!*****************************************!*\
  !*** ./src/components/home/Partners.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Partners; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./src/components/Section.js");
/* harmony import */ var _BackgroundSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BackgroundSlider */ "./src/components/BackgroundSlider/index.js");
/* harmony import */ var _BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BackgroundSlider/BackgroundSlider */ "./src/components/BackgroundSlider/BackgroundSlider.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\home\\Partners.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */





function Partners(_ref) {
  var _this = this;

  var firstRow = _ref.firstRow,
      secondRow = _ref.secondRow,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["firstRow", "secondRow"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_BackgroundSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    numberOfElements: firstRow.length,
    duration: 40,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, firstRow.map(function (img) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_6__["SliderItem"], {
      key: img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
      css: {
        height: 64
      },
      src: "/static/images/partners/".concat(img),
      alt: img.replace('.png', ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }));
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mb: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_BackgroundSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    numberOfElements: secondRow.length,
    duration: 50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, secondRow.map(function (img) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_6__["SliderItem"], {
      key: img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
      css: {
        height: 64
      },
      src: "/static/images/partners/".concat(img),
      alt: img.replace('.png', ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }));
  })));
}

/***/ })

}]);
//# sourceMappingURL=1.js.map