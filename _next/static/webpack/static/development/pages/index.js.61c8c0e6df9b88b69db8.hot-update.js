webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Main */ "./src/components/Main.js");
/* harmony import */ var _components_home_Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/home/Intro */ "./src/components/home/Intro.js");
/* harmony import */ var _components_home_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/home/Description */ "./src/components/home/Description.js");
/* harmony import */ var _components_home_InEvidenza__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/home/InEvidenza */ "./src/components/home/InEvidenza.js");
/* harmony import */ var _components_home_News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/home/News */ "./src/components/home/News.js");
/* harmony import */ var _components_home_Promo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/home/Promo */ "./src/components/home/Promo.js");
/* harmony import */ var _components_home_Partners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/home/Partners */ "./src/components/home/Partners.js");
/* harmony import */ var _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/Carousel/Carousel */ "./src/components/Carousel/Carousel.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];










var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var homepage = _ref.homepage,
      news = _ref.news,
      offerte = _ref.offerte,
      firstRow = _ref.firstRow,
      secondRow = _ref.secondRow;
  return __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isHome: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    overflowX: "hidden",
    spacing: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_components_home_Intro__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_components_home_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: homepage.cards,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(_components_home_InEvidenza__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_components_home_News__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: news,
    skew: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(_components_home_Promo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: offerte,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "MAMMA"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "MAMMA2"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "MAMMA3"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "MAMMA4")), __jsx(_components_home_Partners__WEBPACK_IMPORTED_MODULE_8__["default"], {
    firstRow: firstRow,
    secondRow: secondRow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })));
});

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
var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function Carousel(_ref) {
  var _this = this;

  var children = _ref.children;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, children.map(function (item) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, item);
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "next"), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "prev")));
}

/***/ })

})
//# sourceMappingURL=index.js.61c8c0e6df9b88b69db8.hot-update.js.map