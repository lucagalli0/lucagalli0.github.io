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


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js",
    _this2 = undefined;

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

var Track = function Track(_ref2) {
  var children = _ref2.children,
      padding = _ref2.padding,
      gap = _ref2.gap,
      velocity = _ref2.velocity,
      transition = _ref2.transition,
      allowSlideToLast = _ref2.allowSlideToLast,
      style = _ref2.style;

  var _useDimensions = useDimensions({
    liveMeasure: false
  }),
      _useDimensions2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDimensions, 2),
      trackRef = _useDimensions2[0],
      trackDimensions = _useDimensions2[1];

  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])();

  var _useContext = useContext(Context),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  console.log(state);
  var negativeItems = state.items.map(function (item) {
    return item * -1 + trackDimensions.x || 0;
  });
  var lastTwo = state.items.slice(-2);
  var lastItem = lastTwo[1] - lastTwo[0];

  function onDragEnd(event, info) {
    var offset = info.offset.x;
    var correctedVelocity = info.velocity.x * velocity;
    var direction = correctedVelocity < 0 || offset < 0 ? 1 : -1;
    var startPosition = info.point.x - offset;
    var endOffset = direction === 1 ? Math.min(correctedVelocity, offset) : Math.max(correctedVelocity, offset);
    var endPosition = startPosition + endOffset;
    var closestPosition = negativeItems.reduce(function (prev, curr) {
      return Math.abs(curr - endPosition) < Math.abs(prev - endPosition) ? curr : prev;
    });
    var activeSlide = negativeItems.indexOf(closestPosition);
    dispatch({
      type: 'SET_ACTIVE_ITEM',
      activeItem: activeSlide
    });
    controls.start({
      x: closestPosition,
      transition: {
        type: 'spring',
        velocity: info.velocity.x,
        stiffness: transition.stiffness,
        damping: transition.damping,
        mass: transition.mass
      }
    });
  }

  return __jsx(TrackWrapper, {
    ref: trackRef,
    style: style,
    padding: padding,
    animate: controls,
    drag: "x",
    dragConstraints: {
      left: lastItem + gap - trackDimensions.width,
      right: 0
    },
    onDragEnd: onDragEnd,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, children);
};

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

function useDimensions(_ref3) {
  var _ref3$liveMeasure = _ref3.liveMeasure,
      liveMeasure = _ref3$liveMeasure === void 0 ? true : _ref3$liveMeasure;

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
//# sourceMappingURL=index.js.3d7fe1a9fde4e1001887.hot-update.js.map