webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



function Card(_ref) {
  var card = _ref.card,
      icon = _ref.icon,
      index = _ref.index;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 4,
    flexBasis: "320px",
    flexGrow: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: 2,
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems: "center",
    justifyItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "5em",
    height: "5em",
    gridRow: "1",
    gridColumn: "1",
    backgroundColor: "green.400",
    transform: "skew(20deg) rotate(-30deg)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), icon && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: icon,
    zIndex: "1",
    size: "6em",
    gridRow: "1",
    gridColumn: "1",
    color: "gray.700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 18
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    size: "xs",
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    mb: 1,
    color: "".concat(card.color, ".600"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, card.title), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: card.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.bfdc88ffea304c17de51.hot-update.js.map