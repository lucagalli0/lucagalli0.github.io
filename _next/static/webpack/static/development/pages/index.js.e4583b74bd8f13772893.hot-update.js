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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




function swipePower(offset, absDistance) {
  return offset / absDistance * 100;
}

var variants = {
  toLeft: {
    x: '-100%',
    pointerEvents: 'none'
  },
  toRight: {
    x: '100%',
    pointerEvents: 'none'
  },
  center: {
    x: 0,
    pointerEvents: 'initial'
  }
};
function Carousel(_ref) {
  var _this = this;

  var children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 500 : _ref$width;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1]; // const prev = wrap(0, data.length, page - 1);
  // const cur = wrap(0, data.length, page);
  // const next = wrap(0, data.length, page + 1);


  var animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useAnimation"])();

  var handleDragEnd = function handleDragEnd(evt, _ref2) {
    var offset, power;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleDragEnd$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            offset = _ref2.offset;
            power = swipePower(offset.x, width);

            if (!(power > 60)) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(animation.start('toRight'));

          case 5:
            paginate(-1);
            _context.next = 12;
            break;

          case 8:
            if (!(power < -60)) {
              _context.next = 12;
              break;
            }

            _context.next = 11;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(animation.start('toLeft'));

          case 11:
            paginate(1);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var paginate = function paginate(dir) {
    setIndex((index + dir) % children.lenght);
  };

  return __jsx("div", {
    style: {
      width: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children.map(function (item, i) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
      },
      drag: "x",
      dragDirectionLock: true,
      dragConstraints: {
        left: 0,
        right: 0
      },
      onDragEnd: handleDragEnd,
      variants: variants,
      animate: animation,
      dragMomentum: false,
      transition: {
        x: {
          type: 'spring',
          mass: 0.5,
          stiffness: 500,
          damping: 50
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, item);
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.e4583b74bd8f13772893.hot-update.js.map