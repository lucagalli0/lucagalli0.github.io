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
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.module.css */ "./src/components/Carousel/carousel.module.css");
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Carousel(_ref) {
  var _this = this;

  var children = _ref.children,
      width = _ref.width,
      unit = _ref.unit;

  // here we extracted the carousel functionality into its own hook
  // const { translate, items, setAction } = useTransition(width, children);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var handleNext = function handleNext() {
    return setIndex((index + 1) % children.length);
  };

  var handlePrev = function handlePrev() {
    return setIndex((index - 1) % children.length);
  };

  return __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.parent,
    style: {
      width: "".concat(width).concat(unit)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
    style: {
      width: "".concat(width * children.length).concat(unit),
      transform: "translateX(-".concat(width * index).concat(unit, ")") // transition: 'transform 1s ease',

    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, children.map(function (item, i) {
    return __jsx("div", {
      key: i,
      className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,
      style: {
        width: "".concat(width).concat(unit)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, item);
  }))), __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.controls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.next,
    onClick: handleNext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Next"), __jsx("button", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.prev,
    onClick: handlePrev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Prev")));
}

/***/ })

})
//# sourceMappingURL=index.js.66d1451b871b6111d0a4.hot-update.js.map