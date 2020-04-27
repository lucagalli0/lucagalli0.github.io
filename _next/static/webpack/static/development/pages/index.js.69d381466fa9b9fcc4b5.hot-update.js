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



function Carousel(_ref) {
  var _this = this;

  var children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 500 : _ref$width;
  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useMotionValue"])(0);
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
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

function Track() {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  });
}

function getDimensionObject(node) {
  var rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: 'x' in rect ? rect.x : rect.top,
    left: 'y' in rect ? rect.y : rect.left,
    x: 'x' in rect ? rect.x : rect.left,
    y: 'y' in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom
  };
}

function useDimensions(_ref2) {
  var _ref2$liveMeasure = _ref2.liveMeasure,
      liveMeasure = _ref2$liveMeasure === void 0 ? true : _ref2$liveMeasure;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      dimensions = _React$useState2[0],
      setDimensions = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      node = _React$useState4[0],
      setNode = _React$useState4[1];

  var ref = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (node) {
    setNode(node);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"](function () {
    if (node) {
      var measure = function measure() {
        return window.requestAnimationFrame(function () {
          return setDimensions(getDimensionObject(node));
        });
      };

      measure();

      if (liveMeasure) {
        window.addEventListener('resize', measure);
        window.addEventListener('scroll', measure);
        return function () {
          window.removeEventListener('resize', measure);
          window.removeEventListener('scroll', measure);
        };
      }
    }
  }, [node]);
  return [ref, dimensions, node];
}

/***/ })

})
//# sourceMappingURL=index.js.69d381466fa9b9fcc4b5.hot-update.js.map