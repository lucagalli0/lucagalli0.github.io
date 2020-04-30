webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Carousel/Carousel.js":
/*!*********************************************!*\
  !*** ./src/components/Carousel/Carousel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");


var _jsxFileName = "C:\\Users\\lgalli\\Desktop\\WebApps\\New Columbus\\frontend\\src\\components\\Carousel\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];
 // import styles from './carousel.module.css';
// import { useMotionValue, motion, useDragControls, useSpring } from 'framer-motion';
// export default function Carousel({ children, width, unit }) {
//   // here we extracted the carousel functionality into its own hook
//   // const { translate, items, setAction } = useTransition(width, children);
//   const [index, setIndex] = useState(0);
//   const x = useSpring(0, { dumping: 0, stifness: 100, mass: 1 });
//   const handleNext = () => setIndex((old) => (old + 1) % children.length);
//   const handlePrev = () => setIndex((old) => (old - 1) % children.length);
//   const dragControls = useDragControls();
//   // const x = useMotionValue(-(width * index));
//   useEffect(() => {
//     x.set(-width * index);
//   }, [index]);
//   function onDragEnd(event, info) {
//     console.log(info);
//     const offset = info.offset.x;
//     const velocity = info.velocity.x;
//     if (offset > width / 3 || velocity > 0.4) {
//       if (offset > 0) {
//         handleNext();
//       } else {
//         handlePrev();
//       }
//     }
//   }
//   return (
//     <div
//       className={styles.parent}
//       style={{
//         width: `${width}${unit}`,
//       }}
//     >
//       <div className={styles.container}>
//         <motion.div
//           className={styles.inner}
//           style={{
//             width: `${width * children.length}${unit}`,
//             // transform: `translateX(-${width * index}${unit})`,
//             // transition: 'transform 1s ease',
//             x,
//           }}
//           drag="x"
//           dragControls={dragControls}
//           dragConstraints={{ left: 0, right: 0 }}
//           // onDrag={(event, info) => console.log(info.point.x, info.point.y)}
//         >
//           {children.map((item, i) => (
//             <motion.div
//               key={i}
//               className={styles.item}
//               style={{
//                 width: `${width}${unit}`,
//                 // pointerEvents: 'none',
//               }}
//               // onMouseDown={(e) => console.log(e) || dragControls.start(e, { snapToCursor: false,  })}
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               onDragEnd={onDragEnd}
//             >
//               {item}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//       <div className={styles.controls}>
//         <button className={styles.next} onClick={handleNext}>
//           Next
//         </button>
//         <button className={styles.prev} onClick={handlePrev}>
//           Prev
//         </button>
//       </div>
//     </div>
//   );
// }



var children = ['https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']; // export default function Carousel({ children, width }) {
//   const index = React.useRef(0);
//   const [props, set] = useSprings(children.length, (i) => ({ x: (i * width) / 2, sc: 1, display: 'block' }));
//   const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
//     if (down && distance > width / 2 / 2)
//       cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, children.length - 1)));
//     set((i) => {
//       if (i < index.current - 1 || i > index.current + 1) return { display: 'none' };
//       const x = ((i - index.current) * width) / 2 + (down ? xDelta : 0);
//       const sc = down ? 1 - distance / width / 2 / 2 : 1;
//       return { x, sc, display: 'block' };
//     });
//   });
//   console.log(bind());
//   return (
//     <div style={{ position: 'relative', height: 200, width, overflow: 'hidden' }}>
//       {props.map(({ x, display, sc }, i) => (
//         <animated.div
//           {...bind()}
//           key={i}
//           style={{ display, position: 'absolute', transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}
//         >
//           <animated.div key={i} style={{ transform: sc.interpolate((s) => `scale(${s})`) }}>
//             {children[i]}
//           </animated.div>
//         </animated.div>
//       ))}
//     </div>
//   );
// }

function clamp(num, clamp, higher) {
  return higher ? Math.min(Math.max(num, clamp), higher) : Math.min(num, clamp);
}

var pages = ['https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];
function Carousel(_ref) {
  var _this = this;

  var width = _ref.width;
  var index = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](0);

  var _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSprings"])(pages.length, function (i) {
    return {
      x: i * width,
      sc: 1,
      display: 'block'
    };
  }),
      _useSprings2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSprings, 2),
      props = _useSprings2[0],
      set = _useSprings2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_4__["useDrag"])(function (_ref2) {
    var down = _ref2.down,
        _ref2$movement = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2.movement, 1),
        mx = _ref2$movement[0],
        _ref2$direction = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2.direction, 1),
        xDir = _ref2$direction[0],
        distance = _ref2.distance,
        cancel = _ref2.cancel;

    if (down && distance > width / 2) cancel(index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1));
    set(function (i) {
      if (i < index.current - 1 || i > index.current + 1) return {
        display: 'none'
      };
      var x = (i - index.current) * width + (down ? mx : 0);
      var scale = down ? 1 - distance / width / 2 : 1;
      return {
        x: x,
        scale: scale,
        display: 'block'
      };
    });
  });
  return __jsx("div", {
    style: {
      position: 'relative',
      width: width,
      height: 200,
      overflow: 'hidden'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, props.map(function (_ref3, i) {
    var x = _ref3.x,
        display = _ref3.display,
        sc = _ref3.sc;
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(), {
      key: i,
      style: {
        display: display,
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        transform: x.interpolate(function (x) {
          return "translate3d(".concat(x, "px,0,0)");
        })
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
      style: {
        height: 200,
        transform: sc.interpolate(function (s) {
          return "scale(".concat(s, ")");
        }),
        backgroundImage: "url(".concat(pages[i], ")")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }));
  }));
}

function getDimensionObject(node) {
  var rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: 'x' in rect ? rect.x : rect.top,
    left: 'y' in rect ? rect.y : rect.left,
    x: 'x' in rect ? rect.x : rect.left,
    y: 'y' in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom
  };
}

function useDimensions(_ref4) {
  var _ref4$liveMeasure = _ref4.liveMeasure,
      liveMeasure = _ref4$liveMeasure === void 0 ? true : _ref4$liveMeasure;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({}),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      dimensions = _React$useState2[0],
      setDimensions = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      node = _React$useState4[0],
      setNode = _React$useState4[1];

  var ref = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (node) {
    setNode(node);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"](function () {
    if (node) {
      var measure = function measure() {
        return window.requestAnimationFrame(function () {
          return setDimensions(getDimensionObject(node));
        });
      };

      measure();

      if (liveMeasure) {
        window.addEventListener('resize', measure);
        window.addEventListener('scroll', measure);
        return function () {
          window.removeEventListener('resize', measure);
          window.removeEventListener('scroll', measure);
        };
      }
    }
  }, [node]);
  return [ref, dimensions, node];
}

/***/ })

})
//# sourceMappingURL=index.js.3c2d1308dacb29fc8b79.hot-update.js.map