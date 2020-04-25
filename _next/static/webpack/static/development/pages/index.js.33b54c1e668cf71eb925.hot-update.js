webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/home/Partners.js":
/*!*****************************************!*\
  !*** ./src/components/home/Partners.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Partners; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./src/components/Section.js");
/* harmony import */ var _BackgroundSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BackgroundSlider */ "./src/components/BackgroundSlider/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BackgroundSlider/BackgroundSlider */ "./src/components/BackgroundSlider/BackgroundSlider.js");



var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\home\\Partners.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];





function Partners(_ref) {
  var _this = this;

  var _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["images"]);

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](function () {
    return images.reduce(function (acc, curr, index) {
      if (index % 2 === 0) acc[0].push(curr);else acc[1].push(curr);
      return acc;
    }, [[], []]);
  }, [images]),
      _React$useMemo2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useMemo, 2),
      images1 = _React$useMemo2[0],
      images2 = _React$useMemo2[1];

  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx(_BackgroundSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    numberOfElements: images1.length,
    duration: 40,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, images1.map(function (img) {
    return __jsx(_BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_7__["SliderItem"], {
      key: img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Image"], {
      src: "/static/images/partners/".concat(img),
      alt: img.replace('.png', ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }));
  })), __jsx(_BackgroundSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    numberOfElements: images2.length,
    duration: 50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, images2.map(function (img) {
    return __jsx(_BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_7__["SliderItem"], {
      key: img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Image"], {
      src: "/static/images/partners/".concat(img),
      alt: img.replace('.png', ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.33b54c1e668cf71eb925.hot-update.js.map