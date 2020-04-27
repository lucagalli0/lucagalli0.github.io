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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.module.css */ "./src/components/Carousel/carousel.module.css");
/* harmony import */ var _carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");


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

function Carousel(_ref) {
  var children = _ref.children;
}

/***/ })

})
//# sourceMappingURL=index.js.2ae2d6138fc8d1f2d190.hot-update.js.map