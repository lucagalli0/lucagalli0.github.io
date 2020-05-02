(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@chakra-ui/core/dist/es/Badge/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@chakra-ui/core/dist/es/Badge/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./node_modules/@chakra-ui/core/dist/es/Badge/styles.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/@chakra-ui/core/dist/es/utils/index.js");



/** @jsx jsx */





var Badge = Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function (_ref, ref) {
  var _ref$variantColor = _ref.variantColor,
      variantColor = _ref$variantColor === void 0 ? "gray" : _ref$variantColor,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "subtle" : _ref$variant,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["variantColor", "variant"]);

  // Wrong usage of `variantColor` prop is quite common
  // Let's add a warning hook that validates the passed variantColor
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["useVariantColorWarning"])("Badge", variantColor);
  var badgeStyleProps = Object(_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({
    color: variantColor,
    variant: variant
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    ref: ref,
    display: "inline-block",
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    verticalAlign: "middle"
  }, badgeStyleProps, props));
});
Badge.displayName = "Badge";
/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./node_modules/@chakra-ui/core/dist/es/Badge/styles.js":
/*!**************************************************************!*\
  !*** ./node_modules/@chakra-ui/core/dist/es/Badge/styles.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/colors-utils */ "./node_modules/@chakra-ui/core/dist/es/theme/colors-utils.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ThemeProvider */ "./node_modules/@chakra-ui/core/dist/es/ThemeProvider/index.js");
/* harmony import */ var _ColorModeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ColorModeProvider */ "./node_modules/@chakra-ui/core/dist/es/ColorModeProvider/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var solidStyle = function solidStyle(_ref) {
  var colors = _ref.theme.colors,
      color = _ref.color;

  var _color = colors[color] && colors[color][500];

  var darkModeBg = Object(_theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__["addOpacity"])(_color, 0.6);
  return {
    light: {
      bg: Object(_theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__["get"])(color, 500),
      color: "white"
    },
    dark: {
      bg: darkModeBg,
      color: "whiteAlpha.800"
    }
  };
};

var subtleStyle = function subtleStyle(_ref2) {
  var colors = _ref2.theme.colors,
      color = _ref2.color;

  var _color = colors[color] && colors[color][200];

  var alphaColors = Object(_theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__["generateAlphaColors"])(_color);
  var darkModeBg = alphaColors[300];
  return {
    light: {
      bg: Object(_theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__["get"])(color, 100),
      color: Object(_theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__["get"])(color, 800)
    },
    dark: {
      bg: darkModeBg,
      color: Object(_theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__["get"])(color, 200)
    }
  };
};

var outlineStyle = function outlineStyle(_ref3) {
  var colors = _ref3.theme.colors,
      color = _ref3.color;

  var _color = colors[color] && colors[color][200];

  var darkModeColor = Object(_theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__["addOpacity"])(_color, 0.8);
  var boxShadowColor = colors[color] && colors[color][500];
  return {
    light: {
      boxShadow: "inset 0 0 0px 1px " + boxShadowColor,
      color: Object(_theme_colors_utils__WEBPACK_IMPORTED_MODULE_1__["get"])(color, 500)
    },
    dark: {
      boxShadow: "inset 0 0 0px 1px " + darkModeColor,
      color: darkModeColor
    }
  };
};

var variantProps = function variantProps(props) {
  var variant = props.variant,
      colorMode = props.colorMode;

  switch (variant) {
    case "solid":
      return solidStyle(props)[colorMode];

    case "subtle":
      return subtleStyle(props)[colorMode];

    case "outline":
      return outlineStyle(props)[colorMode];

    default:
      return {};
  }
};

var useBadgeStyle = function useBadgeStyle(props) {
  var theme = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();

  var _useColorMode = Object(_ColorModeProvider__WEBPACK_IMPORTED_MODULE_3__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var _props = _objectSpread({}, props, {
    theme: theme,
    colorMode: colorMode
  });

  return variantProps(_props);
};

/* harmony default export */ __webpack_exports__["default"] = (useBadgeStyle);

/***/ }),

/***/ "./src/components/SectionTitle.js":
/*!****************************************!*\
  !*** ./src/components/SectionTitle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionTitle; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core_dist_PseudoBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core/dist/PseudoBox */ "./node_modules/@chakra-ui/core/dist/es/PseudoBox/index.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\SectionTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];


function SectionTitle(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return __jsx(_chakra_ui_core_dist_PseudoBox__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "h2",
    fontWeight: "bold",
    fontSize: "1.2em",
    position: "relative",
    display: "inline-block",
    mx: 4,
    mb: 2,
    _after: {
      content: '""',
      height: '0.75em',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      margin: '0 auto',
      backgroundColor: 'green.200',
      zIndex: -1,
      transform: 'skew(20deg) rotate(-6deg) translateX(-0.12em)'
    },
    textTransform: "uppercase",
    zIndex: "1"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), children);
}

/***/ }),

/***/ "./src/components/home/Promo.js":
/*!**************************************!*\
  !*** ./src/components/home/Promo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Promo; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core/dist/Heading */ "./node_modules/@chakra-ui/core/dist/es/Heading/index.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _chakra_ui_core_dist_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core/dist/Text */ "./node_modules/@chakra-ui/core/dist/es/Text/index.js");
/* harmony import */ var _chakra_ui_core_dist_Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/Flex */ "./node_modules/@chakra-ui/core/dist/es/Flex/index.js");
/* harmony import */ var _chakra_ui_core_dist_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core/dist/Badge */ "./node_modules/@chakra-ui/core/dist/es/Badge/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/utils */ "./src/utils/index.js");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SectionTitle */ "./src/components/SectionTitle.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Section */ "./src/components/Section.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\home\\Promo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */









function Promo(_ref) {
  var _this = this;

  var data = _ref.data,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["data"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_Section__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mx: [2, 8, 24],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Promozioni"), data.map(function (item) {
    var description = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["nl2br"])(item.descrizione);
    var scadenza = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(item.scadenza);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      p: 4,
      key: item.scadenza,
      as: "article",
      minHeight: "12em",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Flex__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "baseline",
      mb: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Badge__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variantColor: "green",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, item.area), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fontSize: "sm",
      fontWeight: "semibold",
      color: "green.800",
      ml: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "\u2022 Valida fino al ", scadenza)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: "sm",
      mb: 2,
      lineHeight: "short",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, item.titolo), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Flex__WEBPACK_IMPORTED_MODULE_7__["default"], {
      borderRadius: "50%",
      w: "92px",
      h: "92px",
      backgroundColor: "green.100",
      align: "center",
      justify: "center",
      "float": "left",
      m: 2,
      css: {
        shapeOutside: 'circle()'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
      src: "/static/images/partners/".concat(item.produttore.toLowerCase(), ".png"),
      width: "92px",
      alt: item.produttore,
      loading: "lazy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core_dist_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fontSize: "sm",
      dangerouslySetInnerHTML: {
        __html: description
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }));
  })));
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: nl2br, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nl2br", function() { return nl2br; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
function nl2br(str, is_xhtml) {
  var breakTag = is_xhtml || typeof is_xhtml === 'undefined' ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
function formatDate(input) {
  var data = new Date(input);
  var d = data.getDate().toString();
  d = d.length > 1 ? d : '0' + d;
  var m = (data.getMonth() + 1).toString();
  m = m.length > 1 ? m : '0' + m;
  var y = data.getFullYear();
  return d + '/' + m + '/' + y;
}

/***/ })

}]);
//# sourceMappingURL=2.js.map