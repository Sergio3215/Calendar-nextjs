"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/AddCalendar.jsx":
/*!************************************!*\
  !*** ./Components/AddCalendar.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddCalendarComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AddCalendarComponent() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date()), from = ref1[0], setFrom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date()), to = ref2[0], setTo = ref2[1];\n    var handlerSubmitted = function(e) {\n        // e.preventDefault();\n        alert(\"haciendo algo\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: function(e) {\n            return handlerSubmitted(e);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Asunto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        value: name,\n                        onChange: function(e) {\n                            setName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"From\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"time\",\n                        id: \"from\",\n                        value: from,\n                        onChange: function(e) {\n                            setFrom(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"To\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"time\",\n                        id: \"to\",\n                        value: to,\n                        onChange: function(e) {\n                            setTo(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Guardar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\AddCalendar.jsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n};\n_s(AddCalendarComponent, \"MB9KV/6AXLC8Da/liq2i+ig2w/s=\");\n_c = AddCalendarComponent;\nvar _c;\n$RefreshReg$(_c, \"AddCalendarComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0FkZENhbGVuZGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUE0QztBQUU3QixTQUFTRSxvQkFBb0IsR0FBRzs7SUFDM0MsSUFBd0JGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JHLElBQUksR0FBYUgsR0FBWSxHQUF6QixFQUFFSSxPQUFPLEdBQUlKLEdBQVksR0FBaEI7SUFDcEIsSUFBd0JBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFDLElBQUlLLElBQUksRUFBRSxDQUFDLEVBQXJDQyxJQUFJLEdBQWFOLElBQW9CLEdBQWpDLEVBQUVPLE9BQU8sR0FBSVAsSUFBb0IsR0FBeEI7SUFDcEIsSUFBb0JBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFDLElBQUlLLElBQUksRUFBRSxDQUFDLEVBQWpDRyxFQUFFLEdBQVdSLElBQW9CLEdBQS9CLEVBQUVTLEtBQUssR0FBSVQsSUFBb0IsR0FBeEI7SUFHaEIsSUFBTVUsZ0JBQWdCLEdBQUUsU0FBQ0MsQ0FBQyxFQUFHO1FBQ3pCLHNCQUFzQjtRQUN0QkMsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUMxQixDQUFDO0lBRUQscUJBQ0ksOERBQUNDLE1BQUk7UUFBQ0MsUUFBUSxFQUFFLFNBQUNILENBQUM7bUJBQUdELGdCQUFnQixDQUFDQyxDQUFDLENBQUM7U0FBQTs7MEJBQ3BDLDhEQUFDSSxLQUFHOztrQ0FDQSw4REFBQ0MsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLE1BQU07a0NBQUMsUUFBTTs7Ozs7NEJBQVE7a0NBQ3BDLDhEQUFDQyxPQUFLO3dCQUNGQyxJQUFJLEVBQUMsTUFBTTt3QkFDWEMsRUFBRSxFQUFDLE1BQU07d0JBQ1RDLEtBQUssRUFBRWxCLElBQUk7d0JBQ1htQixRQUFRLEVBQUUsU0FBQ1gsQ0FBQyxFQUFLOzRCQUNiUCxPQUFPLENBQUNPLENBQUMsQ0FBQ1ksTUFBTSxDQUFDRixLQUFLLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQzs7Ozs7NEJBQUk7Ozs7OztvQkFDUDswQkFDTiw4REFBQ04sS0FBRzs7a0NBQ0EsOERBQUNDLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxNQUFNO2tDQUFDLE1BQUk7Ozs7OzRCQUFRO2tDQUNsQyw4REFBQ0MsT0FBSzt3QkFDRkMsSUFBSSxFQUFDLE1BQU07d0JBQ1hDLEVBQUUsRUFBQyxNQUFNO3dCQUNUQyxLQUFLLEVBQUVmLElBQUk7d0JBQ1hnQixRQUFRLEVBQUUsU0FBQ1gsQ0FBQyxFQUFLOzRCQUNiSixPQUFPLENBQUNJLENBQUMsQ0FBQ1ksTUFBTSxDQUFDRixLQUFLLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQzs7Ozs7NEJBQUk7Ozs7OztvQkFDUDswQkFDTiw4REFBQ04sS0FBRzs7a0NBQ0EsOERBQUNDLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxNQUFNO2tDQUFDLElBQUU7Ozs7OzRCQUFRO2tDQUNoQyw4REFBQ0MsT0FBSzt3QkFDRkMsSUFBSSxFQUFDLE1BQU07d0JBQ1hDLEVBQUUsRUFBQyxJQUFJO3dCQUNQQyxLQUFLLEVBQUViLEVBQUU7d0JBQ1RjLFFBQVEsRUFBRSxTQUFDWCxDQUFDLEVBQUs7NEJBQ2JGLEtBQUssQ0FBQ0UsQ0FBQyxDQUFDWSxNQUFNLENBQUNGLEtBQUssQ0FBQyxDQUFDO3dCQUMxQixDQUFDOzs7Ozs0QkFBSTs7Ozs7O29CQUNQOzBCQUNOLDhEQUFDTixLQUFHOzBCQUNBLDRFQUFDRyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsUUFBUTtvQkFBQ0UsS0FBSyxFQUFDLFNBQVM7Ozs7O3dCQUFFOzs7OztvQkFDcEM7Ozs7OztZQUNILENBQ1Y7QUFFTCxDQUFDO0dBakR1Qm5CLG9CQUFvQjtBQUFwQkEsS0FBQUEsb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQWRkQ2FsZW5kYXIuanN4PzgyZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQ2FsZW5kYXJDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtmcm9tLCBzZXRGcm9tXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlclN1Ym1pdHRlZCA9KGUpPT57XHJcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFsZXJ0KFwiaGFjaWVuZG8gYWxnb1wiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+aGFuZGxlclN1Ym1pdHRlZChlKX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Bc3VudG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+RnJvbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm9tXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnJvbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJvbShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5UbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUbyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR3VhcmRhclwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFkZENhbGVuZGFyQ29tcG9uZW50IiwibmFtZSIsInNldE5hbWUiLCJEYXRlIiwiZnJvbSIsInNldEZyb20iLCJ0byIsInNldFRvIiwiaGFuZGxlclN1Ym1pdHRlZCIsImUiLCJhbGVydCIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/AddCalendar.jsx\n"));

/***/ })

});