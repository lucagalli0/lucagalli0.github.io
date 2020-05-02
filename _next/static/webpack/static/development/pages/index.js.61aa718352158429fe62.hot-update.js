webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: PrimaryButton, SecondaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return PrimaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButton", function() { return SecondaryButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core/dist/Button */ "./node_modules/@chakra-ui/core/dist/es/Button/index.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];


function PrimaryButton(_ref) {
  var color = _ref.color,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["color", "children"]);

  return __jsx(_chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "".concat(color, ".600"),
    color: "".concat(color, ".50") // boxShadow="0 4px 6px -1px rgba(42, 105, 172, 0.6), 0 2px 4px -1px rgba(42, 105, 172,0.06)"
    ,
    shadow: "md",
    fontWeight: "bold",
    _hover: {
      backgroundColor: "".concat(color, ".700")
    },
    _active: {
      backgroundColor: "".concat(color, ".800")
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), children);
}
function SecondaryButton(_ref2) {
  var color = _ref2.color,
      children = _ref2.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["color", "children"]);

  return __jsx(_chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#fff",
    color: "".concat(color, ".500"),
    borderColor: "".concat(color, ".500"),
    borderWidth: 2,
    borderStyle: "solid" // boxShadow="0 4px 6px -1px rgba(42, 105, 172, 0.6), 0 2px 4px -1px rgba(42, 105, 172,0.06)"
    ,
    shadow: "md",
    fontWeight: "bold",
    _hover: {
      color: "".concat(color, ".700"),
      borderColor: "".concat(color, ".700")
    },
    _active: {
      color: "".concat(color, ".800"),
      borderColor: "".concat(color, ".800")
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), children);
}

/***/ })

})
//# sourceMappingURL=index.js.61aa718352158429fe62.hot-update.js.map