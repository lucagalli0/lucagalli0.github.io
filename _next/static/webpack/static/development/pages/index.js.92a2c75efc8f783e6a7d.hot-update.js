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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");



var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];





function Carousel(_ref) {
  var _this = this;

  var _ref$activeIndex = _ref.activeIndex,
      activeIndex = _ref$activeIndex === void 0 ? 0 : _ref$activeIndex,
      _ref$auto = _ref.auto,
      auto = _ref$auto === void 0 ? 0 : _ref$auto,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["activeIndex", "auto", "children"]);

  var sliderRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      slide = _React$useState2[0],
      setSlide = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
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

      if (down && distance > width / 3) {
        if (cancel) cancel();
        setSlide((slide + (xDir > 0 ? -1 : 1)) % children.length);
      }

      setSpringProps(function (index) {
        return {
          offset: (down ? xDelta : 0) / width + (index - slide)
        };
      });
    }
  }, {
    filterTaps: true,
    delay: true,
    axis: 'x',
    enabled: true
    /*children.length > 1*/

  }); // Triggered on slide change

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    setSpringProps(function (index) {
      return {
        offset: index - slide
      };
    });
  }, [slide, setSpringProps]); // Effect for autosliding

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
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

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    setSlide(activeIndex % children.length);
  }, [activeIndex, children.length]);

  var nextSlide = function nextSlide() {
    setSlide(slide + 1 & children.length);
  };

  var previousSlide = function previousSlide() {
    setSlide(slide - 1 & children.length);
  };

  var bulletProps = Object(framer_motion__WEBPACK_IMPORTED_MODULE_7__["useSpring"])({
    transform: "translateX(".concat(slide + 1, "rem)")
  });
  console.log(bulletProps);
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    minH: "320px",
    w: "100%",
    ref: sliderRef
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    position: "relative",
    overflow: "hidden",
    minH: "320px",
    w: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
        display: 'inline-block',
        width: '100%',
        height: '100%',
        willChange: 'transform'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      minH: "320px",
      w: "100%",
      userSelect: isDragging ? 'none' : 'auto',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, children[index]));
  })), children.length > 1 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    mx: [2, 8, 24],
    alignItems: "center",
    position: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, children.map(function (_, i) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      mx: "0.5rem",
      h: "1rem",
      w: "1rem",
      borderRadius: "50%",
      backgroundColor: "gray.200",
      transition: "background-color 0.2s linear",
      cursor: "pointer",
      onClick: function onClick() {
        return setSlide(i);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    });
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    // mx="0.5rem"
    // h="1rem"
    // w="1rem"
    // borderRadius="50%"
    // backgroundColor="green.200"
    // transition="background-color 0.2s linear"
    // cursor="pointer"
    position: "absolute",
    style: {
      height: '1rem',
      width: '1rem',
      borderRadius: '50%',
      backgroundColor: 'red',
      transform: bulletProps
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  })) : null);
}
var AnimatedBox = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"]);

/***/ })

})
//# sourceMappingURL=index.js.92a2c75efc8f783e6a7d.hot-update.js.map