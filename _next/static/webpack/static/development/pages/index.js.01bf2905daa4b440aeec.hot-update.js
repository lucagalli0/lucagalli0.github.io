webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Carousel/carousel.module.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/Carousel/carousel.module.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".carousel_container__JvBc0 {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.carousel_inner__2JSIC {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.carousel_item__3U3Ky {\r\n  flex: 1 1;\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel_item__3U3Ky > * {\r\n  pointer-events: auto;\r\n}\r\n\r\n.carousel_controls__Q6ycX {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n}\r\n\r\n.carousel_controls__Q6ycX * {\r\n  pointer-events: auto;\r\n}\r\n\r\n.carousel_next__aMs8N {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%) translateX(50%);\r\n}\r\n\r\n.carousel_prev__VYJ1F {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  transform: translateY(-50%) translateX(-50%);\r\n}\r\n", "",{"version":3,"sources":["C:/Users/lgalli/Desktop/WebApps/New Columbus/frontend/src/components/Carousel/carousel.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,4CAA4C;AAC9C","file":"carousel.module.css","sourcesContent":[".container {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.inner {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.item {\r\n  flex: 1;\r\n  overflow: hidden;\r\n}\r\n\r\n.item > * {\r\n  pointer-events: auto;\r\n}\r\n\r\n.controls {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n}\r\n\r\n.controls * {\r\n  pointer-events: auto;\r\n}\r\n\r\n.next {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%) translateX(50%);\r\n}\r\n\r\n.prev {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  transform: translateY(-50%) translateX(-50%);\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"container": "carousel_container__JvBc0",
	"inner": "carousel_inner__2JSIC",
	"item": "carousel_item__3U3Ky",
	"controls": "carousel_controls__Q6ycX",
	"next": "carousel_next__aMs8N",
	"prev": "carousel_prev__VYJ1F"
};

/***/ }),

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


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];





function clamp(num, clamp, higher) {
  return higher ? Math.min(Math.max(num, clamp), higher) : Math.min(num, clamp);
}

var pages = ['https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];
function Carousel(props) {
  var _useDimensions = useDimensions(),
      _useDimensions2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useDimensions, 2),
      ref = _useDimensions2[0],
      width = _useDimensions2[1].width;

  return __jsx("div", {
    ref: ref,
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, width ? __jsx(CarouselItems, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: width
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 16
    }
  })) : null);
}

function CarouselItems(_ref) {
  var _this = this;

  var width = _ref.width;
  console.log(width);
  var index = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](0);

  var _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSprings"])(pages.length, function (i) {
    return {
      x: i * width,
      sc: 1,
      display: 'block'
    };
  }),
      _useSprings2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSprings, 2),
      props = _useSprings2[0],
      set = _useSprings2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_5__["useDrag"])(function (_ref2) {
    var down = _ref2.down,
        _ref2$movement = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2.movement, 1),
        mx = _ref2$movement[0],
        _ref2$direction = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2.direction, 1),
        xDir = _ref2$direction[0],
        distance = _ref2.distance,
        cancel = _ref2.cancel;

    if (down && distance > width / 2) cancel(index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1));
    set(function (i) {
      if (i < index.current - 1 || i > index.current + 1) return {
        display: 'none'
      };
      var x = (i - index.current) * width + (down ? mx : 0);
      var scale = down ? 1 - distance / width / 2 : 1;
      return {
        x: x,
        scale: scale,
        display: 'block'
      };
    });
  });
  return props.map(function (_ref3, i) {
    var x = _ref3.x,
        display = _ref3.display,
        sc = _ref3.sc;
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(), {
      key: i,
      style: {
        display: display,
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        transform: x.interpolate(function (x) {
          return "translate3d(".concat(x, "px,0,0)");
        })
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }
    }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
      style: {
        height: 200,
        transform: sc.interpolate(function (s) {
          return "scale(".concat(s, ")");
        }),
        backgroundImage: "url(".concat(pages[i], ")")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }));
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

function useDimensions() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({}),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      dimensions = _React$useState2[0],
      setDimensions = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      node = _React$useState4[0],
      setNode = _React$useState4[1];

  var ref = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (node) {
    setNode(node);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"](function () {
    if (node) {
      var measure = function measure() {
        return window.requestAnimationFrame(function () {
          return setDimensions(getDimensionObject(node));
        });
      };

      measure();
      window.addEventListener('resize', measure);
      window.addEventListener('scroll', measure);
      return function () {
        window.removeEventListener('resize', measure);
        window.removeEventListener('scroll', measure);
      };
    }
  }, [node]);
  return [ref, dimensions, node];
}

/***/ }),

/***/ "./src/components/Carousel/carousel.module.css":
/*!*****************************************************!*\
  !*** ./src/components/Carousel/carousel.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./carousel.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Carousel/carousel.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./carousel.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Carousel/carousel.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./carousel.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Carousel/carousel.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ })

})
//# sourceMappingURL=index.js.01bf2905daa4b440aeec.hot-update.js.map