webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");

var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\BackgroundSlider\\BackgroundSlider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t0% { transform: translateX(0); }\n\t100% { transform: translateX(calc(-250px * ", "))}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */



function createKeyframes(numberOfElements) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject(), numberOfElements);
}

function BackgroundSlider(_ref) {
  var children = _ref.children,
      numberOfElements = _ref.numberOfElements,
      duration = _ref.duration;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    overflow: "hidden",
    position: "relative",
    w: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    css: {
      animation: "".concat(createKeyframes(numberOfElements), " ").concat(duration, "s linear infinite")
    },
    w: 250 * numberOfElements * 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, children, children));
}
function SliderItem(_ref2) {
  var children = _ref2.children;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PseudoBox"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "250px",
    w: "250px",
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
      lineNumber: 29,
      columnNumber: 5
    }
  }, children);
}

/***/ })

})
//# sourceMappingURL=index.js.7339df716acec29bbb35.hot-update.js.map