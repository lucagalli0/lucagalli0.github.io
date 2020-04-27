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

  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(0, {
    dumping: 10,
    stiffness: 200
  });

  var handleNext = function handleNext() {
    return setIndex(function (old) {
      return (old + 1) % children.length;
    });
  };

  var handlePrev = function handlePrev() {
    return setIndex(function (old) {
      return (old - 1) % children.length;
    });
  };

  var dragControls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useDragControls"])(); // const x = useMotionValue(-(width * index));

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    x.set(-width * index);
  }, [index]);
  console.log(x);
  return __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.parent,
    style: {
      width: "".concat(width).concat(unit)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
    style: {
      width: "".concat(width * children.length).concat(unit),
      // transform: `translateX(-${width * index}${unit})`,
      // transition: 'transform 1s ease',
      x: x
    },
    drag: "x",
    dragControls: dragControls,
    dragConstraints: {
      left: 0,
      right: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, children.map(function (item, i) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
      key: i,
      className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,
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
        lineNumber: 41,
        columnNumber: 13
      }
    }, item);
  }))), __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.controls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.next,
    onClick: handleNext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Next"), __jsx("button", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.prev,
    onClick: handlePrev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Prev")));
}

/***/ })

})
//# sourceMappingURL=index.js.e03bd21fadd1c7fa171f.hot-update.js.map