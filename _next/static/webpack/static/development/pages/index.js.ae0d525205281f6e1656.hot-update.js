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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.module.css */ "./src/components/Carousel/carousel.module.css");
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carousel_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");

var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Carousel(_ref) {
  var _this = this,
      _jsx;

  var children = _ref.children,
      width = _ref.width,
      unit = _ref.unit;

  // here we extracted the carousel functionality into its own hook
  // const { translate, items, setAction } = useTransition(width, children);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var handleNext = function handleNext() {
    return setIndex((index + 1) % children.length);
  };

  var handlePrev = function handlePrev() {
    return setIndex((index - 1) % children.length);
  };

  var dragControls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useDragControls"])();
  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useMotionValue"])(-(width * index));
  return __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.parent,
    style: {
      width: "".concat(width).concat(unit)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, (_jsx = {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inner,
    style: {
      width: "".concat(width * children.length).concat(unit) // transform: `translateX(-${width * index}${unit})`,
      // transition: 'transform 1s ease',

    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
    x: x
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "drag", "x"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "dragControls", dragControls), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "dragConstraints", {
    left: 0,
    right: 0
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }), _jsx), children.map(function (item, i) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
      key: i,
      className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
      style: {
        width: "".concat(width).concat(unit) // pointerEvents: 'none',

      },
      onMouseDown: function onMouseDown(e) {
        return dragControls.start(e, {
          snapToCursor: false
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, item);
  }))), __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.controls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.next,
    onClick: handleNext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Next"), __jsx("button", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.prev,
    onClick: handlePrev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Prev")));
}

/***/ })

})
//# sourceMappingURL=index.js.ae0d525205281f6e1656.hot-update.js.map