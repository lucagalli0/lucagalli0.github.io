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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");

var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




function Container(_ref) {
  var children = _ref.children,
      width = _ref.width,
      index = _ref.index;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    width: "".concat(width * children.length),
    transform: "translateX(-".concat(width * index, ")"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, children);
}

var MotionContainer = framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].custom();
function Carousel(_ref2) {
  var _this = this;

  var children = _ref2.children,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 500 : _ref2$width;
  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useMotionValue"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  console.log(index);
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    position: "relative",
    width: width,
    mx: "auto",
    my: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    position: "relative",
    overflow: "hidden",
    maxW: "100%",
    w: "100%",
    zIndex: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    width: "".concat(width * children.length),
    transform: "translateX(-".concat(width * index, ")"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, children.map(function (item, i) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      key: i,
      flex: "1",
      overflow: "hidden",
      minW: width,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, item);
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
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
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    pointerEvents: "auto",
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%) translateX(50%)",
    onClick: function onClick() {
      return setIndex(index >= children.length - 1 ? index : index + 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "next"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    pointerEvents: "auto",
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%) translateX(-50%)",
    onClick: function onClick() {
      return setIndex(index <= 0 ? index : index - 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "prev")));
}

/***/ })

})
//# sourceMappingURL=index.js.7fa729f308b004b17359.hot-update.js.map