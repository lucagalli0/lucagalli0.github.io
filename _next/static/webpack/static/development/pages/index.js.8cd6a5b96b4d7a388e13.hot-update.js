webpackHotUpdate("static\\development\\pages\\index.js",{

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
  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useMotionValue"])();
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "relative",
    w: width,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "relative",
    overflow: "hidden",
    maxW: "100%",
    w: "100%",
    zIndex: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    style: {
      width: "".concat(width * children.length),
      transform: "translateX(-".concat(width * index, ")")
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, children.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flex: "1",
      overflow: "hidden",
      minW: width,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, item);
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    w: "100%",
    h: "100%",
    pointerEvents: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointerEvents: "auto",
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%) translateX(50%)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "next"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointerEvents: "auto",
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%) translateX(-50%)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "prev")));
}

/***/ })

})
//# sourceMappingURL=index.js.8cd6a5b96b4d7a388e13.hot-update.js.map