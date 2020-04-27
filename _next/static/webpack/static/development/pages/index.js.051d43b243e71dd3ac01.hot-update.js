webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Carousel/carousel.module.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/Carousel/carousel.module.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".carousel_parent__39K89 {\r\n  position: relative;\r\n  margin: 0 auto;\r\n}\r\n\r\n.carousel_container__JvBc0 {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.carousel_inner__2JSIC {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.carousel_item__3U3Ky {\r\n  flex: 1 1;\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel_controls__Q6ycX {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n}\r\n\r\n.carousel_controls__Q6ycX * {\r\n  pointer-events: auto;\r\n}\r\n\r\n.carousel_button__3uG7U {\r\n  position: absolute;\r\n  top: 50%;\r\n}\r\n\r\n.carousel_next__aMs8N {\r\n  right: 0;\r\n  transform: translateY(-50%) translateX(50%);\r\n}\r\n\r\n.carousel_prev__VYJ1F {\r\n  left: 0;\r\n  transform: translateY(-50%) translateX(-50%);\r\n}\r\n", "",{"version":3,"sources":["C:/Users/lgalli/Desktop/WebApps/New Columbus/frontend/src/components/Carousel/carousel.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,QAAQ;EACR,2CAA2C;AAC7C;;AAEA;EACE,OAAO;EACP,4CAA4C;AAC9C","file":"carousel.module.css","sourcesContent":[".parent {\r\n  position: relative;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.inner {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.item {\r\n  flex: 1;\r\n  overflow: hidden;\r\n}\r\n\r\n.controls {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n}\r\n\r\n.controls * {\r\n  pointer-events: auto;\r\n}\r\n\r\n.button {\r\n  position: absolute;\r\n  top: 50%;\r\n}\r\n\r\n.next {\r\n  right: 0;\r\n  transform: translateY(-50%) translateX(50%);\r\n}\r\n\r\n.prev {\r\n  left: 0;\r\n  transform: translateY(-50%) translateX(-50%);\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"parent": "carousel_parent__39K89",
	"container": "carousel_container__JvBc0",
	"inner": "carousel_inner__2JSIC",
	"item": "carousel_item__3U3Ky",
	"controls": "carousel_controls__Q6ycX",
	"button": "carousel_button__3uG7U",
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.module.css */ "./src/components/Carousel/carousel.module.css");
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import useTransition from './useTransition';

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
  }, __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
    style: {
      width: "".concat(width * items.length).concat(unit),
      transform: "translateX(-".concat(translate).concat(unit, ")")
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, items.map(function (item) {
    return __jsx("div", {
      className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,
      style: {
        width: "".concat(width).concat(unit)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, item);
  }))), __jsx("div", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.controls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.next,
    onClick: handleNext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Next"), __jsx("button", {
    className: _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.prev,
    onClick: handlePrev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Prev")));
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
//# sourceMappingURL=index.js.051d43b243e71dd3ac01.hot-update.js.map