webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/home/Description.js":
/*!********************************************!*\
  !*** ./src/components/home/Description.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Description; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./src/components/Card.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./src/components/Section.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\home\\Description.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




var icons = ['ideas', 'structure', 'rent'];
function Description(_ref) {
  var _this = this;

  var data = _ref.data,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["data"]);

  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    display: "flex",
    flexWrap: "wrap"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    mx: [2, 8, 16],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, data.map(function (card, index) {
    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: card.id,
      card: card,
      icon: icons[index],
      index: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    });
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.be60bcd921c523c48485.hot-update.js.map