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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.module.css */ "./src/components/Carousel/carousel.module.css");
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];






function clamp(num, clamp, higher) {
  return higher ? Math.min(Math.max(num, clamp), higher) : Math.min(num, clamp);
}

function Carousel(_ref) {
  var _this = this;

  var _ref$activeIndex = _ref.activeIndex,
      activeIndex = _ref$activeIndex === void 0 ? 0 : _ref$activeIndex,
      _ref$auto = _ref.auto,
      auto = _ref$auto === void 0 ? 0 : _ref$auto,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children;
  var sliderRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      slide = _React$useState2[0],
      setSlide = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      isDragging = _React$useState4[0],
      setDragging = _React$useState4[1]; // Initialize slides with spring


  var _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSprings"])(children.length, function (index) {
    return {
      offset: index
    };
  }),
      _useSprings2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSprings, 2),
      springProps = _useSprings2[0],
      setSpringProps = _useSprings2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_5__["useDrag"])(function (_ref2) {
    var down = _ref2.down,
        _ref2$movement = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2.movement, 1),
        xDelta = _ref2$movement[0],
        _ref2$direction = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2.direction, 1),
        xDir = _ref2$direction[0],
        distance = _ref2.distance,
        cancel = _ref2.cancel,
        first = _ref2.first;

    if (first) {
      setDragging(true);
    }

    if (sliderRef && sliderRef.current && sliderRef.current.parentElement) {
      var _sliderRef$current$pa = sliderRef.current.parentElement.getBoundingClientRect(),
          width = _sliderRef$current$pa.width;

      if (down && distance > width / 2) {
        if (cancel) cancel();
        setSlide(clamp(slide + (xDir > 0 ? -1 : 1), 0, children.length - 1));
      }

      setSpringProps(function (index) {
        return {
          offset: (down ? xDelta : 0) / width + (index - slide)
        };
      });
    }
  }); // Triggered on slide change

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    setSpringProps(function (index) {
      return {
        offset: index - slide
      };
    });
  }, [slide, setSpringProps]); // Effect for autosliding

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var interval;

    if (auto > 0) {
      interval = setInterval(function () {
        var targetIndex = (slide + 1) % children.length;
        setSlide(targetIndex);
      }, auto);
    }

    return function () {
      if (interval) clearInterval(interval);
    };
  }, [auto, children.length, slide]); // Jump to slide index when prop changes

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    setSlide(activeIndex % children.length);
  }, [activeIndex, children.length]); // Sets pointer events none to every child and preserves styles
  // const childs = children.map((child, index) => (
  //   <StyledSlide key={index}>{child}</StyledSlide> // eslint-disable-line react/no-array-index-key
  // ));

  var nextSlide = function nextSlide() {
    if (slide === children.length - 1) {
      setSlide(0);
      return;
    }

    setSlide(slide + 1);
  };

  var previousSlide = function previousSlide() {
    if (slide === 0) {
      setSlide(children.length - 1);
      return;
    }

    setSlide(slide - 1);
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    h: "100%",
    w: "100%",
    ref: sliderRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    position: "relative",
    overflow: "hidden",
    h: "100%",
    w: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, springProps.map(function (_ref3, index) {
    var offset = _ref3.offset;
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(), {
      key: index,
      style: {
        transform: offset.interpolate(function (offsetX) {
          return "translate3d(".concat(offsetX * 100, "%, 0, 0)");
        }),
        position: 'absolute',
        width: '100%',
        height: '100%',
        willChange: 'transform'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      h: "100%",
      w: "100%",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, children[index]));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.e3cb94135e41d4164724.hot-update.js.map