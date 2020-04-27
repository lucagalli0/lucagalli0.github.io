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
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];


function PrimaryButton(_ref) {
  var color = _ref.color,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["color", "children"]);

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

/***/ }),

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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




function Card(_ref) {
  var card = _ref.card,
      icon = _ref.icon,
      index = _ref.index;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    p: 4,
    flexBasis: "320px",
    flexGrow: "1",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    mb: 2,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "4em",
    height: "5em",
    backgroundColor: "green.200",
    transform: "translate(-50%, -50%) skew(-20deg) rotate(-30deg)",
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
    color: "gray.700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 18
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    size: "xs",
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    mb: 1,
    color: "gray.700",
    borderBottomColor: "green",
    borderBottomStyle: "solid",
    borderBottomWidth: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, card.title), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: card.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    mt: "auto",
    spacing: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 4,
    borderBottom: "1px solid",
    borderColor: "gray.300",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["SecondaryButton"], {
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Scopri di pi\xF9 ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "arrow-forward",
    ml: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }))));
}

/***/ }),

/***/ "./src/components/home/Intro.js":
/*!**************************************!*\
  !*** ./src/components/home/Intro.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Intro; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");

var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\home\\Intro.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




function Intro(props) {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    position: "relative",
    height: "80vh",
    minHeight: "400px",
    display: "flex",
    alignItems: "center"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
    transform: "skewY(-6deg)",
    transformOrigin: "0",
    background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='white' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\"), \n        linear-gradient(150deg,#2f855a 15%,#1e4e8c 70%,#153e75 95%)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "span",
    position: "absolute",
    opacity: "0.7",
    top: "0",
    left: "0",
    width: "10%",
    height: "25%",
    backgroundColor: "#2A785F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "span",
    position: "absolute",
    opacity: "0.7",
    top: "4%",
    left: "10%",
    width: "20%",
    height: "25%",
    backgroundColor: "#2D7E5D",
    transform: "skewY(12deg)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "span",
    position: "absolute",
    opacity: "0.7",
    top: "10%",
    left: "50%",
    width: "50%",
    height: "25%",
    backgroundColor: "#1F596A",
    transform: "skewY(12deg)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "span",
    position: "absolute",
    opacity: "0.7",
    bottom: "0",
    left: "20%",
    width: "30%",
    height: "25%",
    backgroundColor: "#184771",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "svg",
    viewBox: "0 0 52 52",
    width: "50%",
    height: "50%",
    position: "absolute",
    right: "5%",
    top: "35%",
    transform: "skewY(6deg)",
    opacity: "0.3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    d: "M26.6845 34.5945C22.5646 33.0513 19.0663 29.8725 17.1577 26.3773C14.1608 20.6858 13.2693 13.3333 17.1051 8.1388C20.4275 3.11513 24.493 3.21029 29.5925 3.30043C30.6268 3.22144 30.4639 0.711565 30.195 0.57709L30.7313 0.234985L36.1965 9.556L35.6116 9.86974C34.015 8.22795 32.4986 6.66053 30.5325 5.67544C26.7204 3.5013 21.9042 4.95923 19.4324 8.6621C17.5637 11.5516 17.8972 14.8311 18.5893 17.7265C19.817 21.763 21.232 25.5834 24.5461 28.6742C25.7837 29.9037 27.1125 30.8527 28.5325 31.521C29.9454 32.1763 31.2762 32.707 32.7247 32.7131C34.1861 32.712 35.8077 32.4251 37.1895 31.6523C40.2822 30.0216 41.4703 26.5754 41.3124 23.1841C41.1282 21.2754 41.0511 20.8866 40.8968 19.8504L42.6749 21.4321C43.2442 31.5421 35.6225 37.458 26.6845 34.5943L26.6845 34.5945Z",
    fill: "white",
    transform: "translate(-12, 12)",
    initial: {
      opacity: 0,
      x: '-100%',
      y: '100%'
    },
    animate: {
      opacity: 0.4,
      x: -12,
      y: 12
    },
    transition: {
      duration: 2,
      ease: 'easeOut'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    d: "M26.6845 34.5945C22.5646 33.0513 19.0663 29.8725 17.1577 26.3773C14.1608 20.6858 13.2693 13.3333 17.1051 8.1388C20.4275 3.11513 24.493 3.21029 29.5925 3.30043C30.6268 3.22144 30.4639 0.711565 30.195 0.57709L30.7313 0.234985L36.1965 9.556L35.6116 9.86974C34.015 8.22795 32.4986 6.66053 30.5325 5.67544C26.7204 3.5013 21.9042 4.95923 19.4324 8.6621C17.5637 11.5516 17.8972 14.8311 18.5893 17.7265C19.817 21.763 21.232 25.5834 24.5461 28.6742C25.7837 29.9037 27.1125 30.8527 28.5325 31.521C29.9454 32.1763 31.2762 32.707 32.7247 32.7131C34.1861 32.712 35.8077 32.4251 37.1895 31.6523C40.2822 30.0216 41.4703 26.5754 41.3124 23.1841C41.1282 21.2754 41.0511 20.8866 40.8968 19.8504L42.6749 21.4321C43.2442 31.5421 35.6225 37.458 26.6845 34.5943L26.6845 34.5945Z",
    fill: "white",
    transform: "translate(-8, 8)",
    initial: {
      opacity: 0,
      x: '-100%',
      y: '100%'
    },
    animate: {
      opacity: 0.6,
      x: -8,
      y: 8
    },
    transition: {
      duration: 2,
      ease: 'easeOut'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    d: "M26.6845 34.5945C22.5646 33.0513 19.0663 29.8725 17.1577 26.3773C14.1608 20.6858 13.2693 13.3333 17.1051 8.1388C20.4275 3.11513 24.493 3.21029 29.5925 3.30043C30.6268 3.22144 30.4639 0.711565 30.195 0.57709L30.7313 0.234985L36.1965 9.556L35.6116 9.86974C34.015 8.22795 32.4986 6.66053 30.5325 5.67544C26.7204 3.5013 21.9042 4.95923 19.4324 8.6621C17.5637 11.5516 17.8972 14.8311 18.5893 17.7265C19.817 21.763 21.232 25.5834 24.5461 28.6742C25.7837 29.9037 27.1125 30.8527 28.5325 31.521C29.9454 32.1763 31.2762 32.707 32.7247 32.7131C34.1861 32.712 35.8077 32.4251 37.1895 31.6523C40.2822 30.0216 41.4703 26.5754 41.3124 23.1841C41.1282 21.2754 41.0511 20.8866 40.8968 19.8504L42.6749 21.4321C43.2442 31.5421 35.6225 37.458 26.6845 34.5943L26.6845 34.5945Z",
    fill: "white",
    transform: "translate(-4, 4)",
    initial: {
      opacity: 0,
      x: '-100%',
      y: '100%'
    },
    animate: {
      opacity: 0.8,
      x: -4,
      y: 4
    },
    transition: {
      duration: 2,
      ease: 'easeOut'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    d: "M26.6845 34.5945C22.5646 33.0513 19.0663 29.8725 17.1577 26.3773C14.1608 20.6858 13.2693 13.3333 17.1051 8.1388C20.4275 3.11513 24.493 3.21029 29.5925 3.30043C30.6268 3.22144 30.4639 0.711565 30.195 0.57709L30.7313 0.234985L36.1965 9.556L35.6116 9.86974C34.015 8.22795 32.4986 6.66053 30.5325 5.67544C26.7204 3.5013 21.9042 4.95923 19.4324 8.6621C17.5637 11.5516 17.8972 14.8311 18.5893 17.7265C19.817 21.763 21.232 25.5834 24.5461 28.6742C25.7837 29.9037 27.1125 30.8527 28.5325 31.521C29.9454 32.1763 31.2762 32.707 32.7247 32.7131C34.1861 32.712 35.8077 32.4251 37.1895 31.6523C40.2822 30.0216 41.4703 26.5754 41.3124 23.1841C41.1282 21.2754 41.0511 20.8866 40.8968 19.8504L42.6749 21.4321C43.2442 31.5421 35.6225 37.458 26.6845 34.5943L26.6845 34.5945Z",
    fill: "white",
    initial: {
      opacity: 0,
      x: '-100%',
      y: '100%'
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0
    },
    transition: {
      duration: 2,
      ease: 'easeOut'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    py: 8,
    px: 4,
    mx: [2, 8, 24],
    zIndex: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    as: "h2",
    mb: 6,
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Sempre un passo avanti"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "lg",
    color: "green.50",
    mb: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "30 anni di esperienza al vostro servizio"), __jsx(Button, {
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "Contattaci")));
}

/***/ })

})
//# sourceMappingURL=index.js.51cedf2ebc9303a4b218.hot-update.js.map