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

/***/ "./Components/ListCalendar.jsx":
/*!*************************************!*\
  !*** ./Components/ListCalendar.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListCalendar; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DeleteCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteCalendar */ \"./Components/DeleteCalendar.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction ListCalendar(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    var getData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var res, data;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"/api/getsData?name=Calendar\")\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            4,\n                            res.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        console.log(data);\n                        setData(data.CalendarList);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getData();\n    }, [\n        props.render\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data.map(function(item, index) {\n            return item.name != \"default\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\ListCalendar.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\ListCalendar.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"From:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\ListCalendar.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.from\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\ListCalendar.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"To:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\ListCalendar.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.to\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\ListCalendar.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteCalendar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: item.__id,\n                        rendered: props.rendered\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\ListCalendar.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 29\n                    }, _this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\fox_3\\\\OneDrive\\\\Escritorio\\\\test\\\\Pro 3\\\\Components\\\\ListCalendar.jsx\",\n                lineNumber: 26,\n                columnNumber: 25\n            }, _this) : data.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"No hay informacion\"\n            }, void 0, false);\n        })\n    }, void 0, false);\n};\n_s(ListCalendar, \"7vVO+MPe3Y2IDacHRwt2MQF/mfo=\");\n_c = ListCalendar;\nvar _c;\n$RefreshReg$(_c, \"ListCalendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0xpc3RDYWxlbmRhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUE0QztBQUNFO0FBQy9CLFNBQVNHLFlBQVksQ0FBQ0MsS0FBSyxFQUFFOzs7SUFDeEMsSUFBd0JKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JLLElBQUksR0FBYUwsR0FBWSxHQUF6QixFQUFFTSxPQUFPLEdBQUlOLEdBQVksR0FBaEI7SUFFcEIsSUFBTU8sT0FBTzttQkFBRywrRkFBWTtnQkFDbEJDLEdBQUcsRUFDSEgsSUFBSTs7Ozt3QkFERTs7NEJBQU1JLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzswQkFBQTs7d0JBQWhERCxHQUFHLEdBQUcsYUFBMEM7d0JBQ3pDOzs0QkFBTUEsR0FBRyxDQUFDRSxJQUFJLEVBQUU7MEJBQUE7O3dCQUF2QkwsSUFBSSxHQUFHLGFBQWdCO3dCQUM3Qk0sT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksQ0FBQzt3QkFDakJDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDUSxZQUFZLENBQUMsQ0FBQzs7Ozs7O1FBQy9CLENBQUM7d0JBTEtOLE9BQU87OztPQUtaO0lBRUROLGdEQUFTLENBQUMsV0FBTTtRQUNaTSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDTk4sZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQyxFQUFFO1FBQUNILEtBQUssQ0FBQ1UsTUFBTTtLQUFDLENBQUM7SUFFbEIscUJBQ0k7a0JBRVFULElBQUksQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO1lBQ3RCLE9BQ0ksSUFBSyxDQUFDQyxJQUFJLElBQUksU0FBUyxpQkFDdkIsOERBQUNDLEtBQUc7Z0JBQWFDLFNBQVMsRUFBQyxXQUFXOztrQ0FDdEMsOERBQUNDLElBQUU7a0NBQUMsTUFBSTs7Ozs7NkJBQUs7a0NBQ1QsOERBQUNBLElBQUU7a0NBQUVMLElBQUksQ0FBQ0UsSUFBSTs7Ozs7NkJBQU07a0NBQ3BCLDhEQUFDSSxJQUFFO2tDQUFDLE9BQUs7Ozs7OzZCQUFLO2tDQUNkLDhEQUFDQSxJQUFFO2tDQUFFTixJQUFJLENBQUNPLElBQUk7Ozs7OzZCQUFNO2tDQUNwQiw4REFBQ0QsSUFBRTtrQ0FBQyxLQUFHOzs7Ozs2QkFBSztrQ0FDWiw4REFBQ0EsSUFBRTtrQ0FBRU4sSUFBSSxDQUFDUSxFQUFFOzs7Ozs2QkFBTTtrQ0FDbEIsOERBQUN0Qix1REFBYzt3QkFBQ3VCLEVBQUUsRUFBRVQsSUFBSSxDQUFDVSxJQUFJO3dCQUFFQyxRQUFRLEVBQUV2QixLQUFLLENBQUN1QixRQUFROzs7Ozs2QkFBRzs7ZUFQcERWLEtBQUs7Ozs7cUJBUVQsR0FFTixJQUFLLENBQUNXLE1BQU0sR0FBRyxDQUFDLGlCQUNoQiw2SUFBSyxpQkFFTDswQkFBRSxvQkFBa0I7NkJBQUcsQ0FDMUI7UUFDTCxDQUFDLENBQUM7cUJBRVAsQ0FDTjtBQUNMLENBQUM7R0ExQ3VCekIsWUFBWTtBQUFaQSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTGlzdENhbGVuZGFyLmpzeD85ZGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERlbGV0ZUNhbGVuZGFyIGZyb20gXCIuL0RlbGV0ZUNhbGVuZGFyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RDYWxlbmRhcihwcm9wcykge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dldHNEYXRhP25hbWU9Q2FsZW5kYXJcIik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBzZXREYXRhKGRhdGEuQ2FsZW5kYXJMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICB9LCBbcHJvcHMucmVuZGVyXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLm5hbWUgIT0gXCJkZWZhdWx0XCIpP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TmFtZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2l0ZW0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkZyb206PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS5mcm9tfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VG86PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS50b308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUNhbGVuZGFyIGlkPXtpdGVtLl9faWR9IHJlbmRlcmVkPXtwcm9wcy5yZW5kZXJlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGF0YS5sZW5ndGggPiAxKT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Pk5vIGhheSBpbmZvcm1hY2lvbjwvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRlbGV0ZUNhbGVuZGFyIiwiTGlzdENhbGVuZGFyIiwicHJvcHMiLCJkYXRhIiwic2V0RGF0YSIsImdldERhdGEiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiQ2FsZW5kYXJMaXN0IiwicmVuZGVyIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJmcm9tIiwidG8iLCJpZCIsIl9faWQiLCJyZW5kZXJlZCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/ListCalendar.jsx\n"));

/***/ })

});