webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./src/components/Carousel/Carousel.js":
/*!*********************************************!*\
  !*** ./src/components/Carousel/Carousel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



function Carousel(_ref) {
  var _this = this;

  var children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 500 : _ref$width;
  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useMotionValue"])(0);
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    overflow: "hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(Track, {
    padding: padding,
    velocity: velocity,
    transition: transition,
    allowSlideToLast: allowSlideToLast,
    overflow: overflow,
    style: {
      x: x
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, children.map(function (child, i) {
    return __jsx(Item, {
      key: i,
      gap: gap,
      padding: padding,
      index: i,
      offset: x,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, child);
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.19266ade2b043a7cb951.hot-update.js.map