webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/home/News.js":
/*!*************************************!*\
  !*** ./src/components/home/News.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils */ "./src/utils/index.js");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SectionTitle */ "./src/components/SectionTitle.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Section */ "./src/components/Section.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\home\\News.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];





function News(_ref) {
  var _this = this;

  var data = _ref.data,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["data"]);

  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "blue.50"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mx: [2, 8, 16],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "News"), data.map(function (item) {
    var description = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["nl2br"])(item.descrizione);
    var date = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(item.date);
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      p: 4,
      key: item.date,
      as: "article",
      minHeight: "12em",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.500",
      mb: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, date), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      size: "sm",
      mb: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, item.titolo), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      dangerouslySetInnerHTML: {
        __html: description
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.1130721ce6311d885bdc.hot-update.js.map