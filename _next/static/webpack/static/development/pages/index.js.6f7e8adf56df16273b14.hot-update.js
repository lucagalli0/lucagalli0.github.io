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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Section */ "./src/components/Section.js");
/* harmony import */ var _BackgroundSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackgroundSlider */ "./src/components/BackgroundSlider/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BackgroundSlider/BackgroundSlider */ "./src/components/BackgroundSlider/BackgroundSlider.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\home\\Partners.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];





function Partners(_ref) {
  var _this = this;

  var firstRow = _ref.firstRow,
      secondRow = _ref.secondRow,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["firstRow", "secondRow"]);

  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), __jsx(_BackgroundSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfElements: firstRow.length,
    duration: 40,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, firstRow.map(function (img) {
    return __jsx(_BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_6__["SliderItem"], {
      key: img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      src: "/static/images/partners/".concat(img),
      alt: img.replace('.png', ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }));
  })), __jsx(_BackgroundSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numberOfElements: secondRow.length,
    duration: 50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, secondRow.map(function (img) {
    return __jsx(_BackgroundSlider_BackgroundSlider__WEBPACK_IMPORTED_MODULE_6__["SliderItem"], {
      key: img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      src: "/static/images/partners/".concat(img),
      alt: img.replace('.png', ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.6f7e8adf56df16273b14.hot-update.js.map