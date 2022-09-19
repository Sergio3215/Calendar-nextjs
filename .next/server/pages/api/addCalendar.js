"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addCalendar";
exports.ids = ["pages/api/addCalendar"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: process.env.apiKey,\n    authDomain: process.env.authDomain,\n    projectId: process.env.projectId,\n    storageBucket: process.env.storageBucket,\n    messagingSenderId: process.env.messagingSenderId,\n    appId: process.env.appId\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNBO0FBQ1A7QUFDaERHLG9EQUF3QixFQUFFO0FBQzFCLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLE1BQU1FLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTtJQUMxQkcsVUFBVSxFQUFFRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNsQ0MsU0FBUyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsU0FBUztJQUNoQ0MsYUFBYSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csYUFBYTtJQUN4Q0MsaUJBQWlCLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxpQkFBaUI7SUFDaERDLEtBQUssRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEtBQUs7Q0FDekI7QUFFRCxzQkFBc0I7QUFDZixNQUFNQyxHQUFHLEdBQUdiLDJEQUFhLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0FBRXpDLE1BQU1VLEVBQUUsR0FBR2IsZ0VBQVksQ0FBQ1ksR0FBRyxDQUFDLENBQUM7QUFFckMsaUVBQWVkLG9EQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvLTMvLi9kYi5qcz81NjY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IGZpcmViYXNlLCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7Z2V0RmlyZXN0b3JlfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpXHJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LmFwaUtleSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5hdXRoRG9tYWluLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYucHJvamVjdElkLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LnN0b3JhZ2VCdWNrZXQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lm1lc3NhZ2luZ1NlbmRlcklkLFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5hcHBJZFxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5leHBvcnQgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5leHBvcnQgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZSJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJyZXF1aXJlIiwiY29uZmlnIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./pages/api/addCalendar.js":
/*!**********************************!*\
  !*** ./pages/api/addCalendar.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n/**\r\n  * fetch(\"http://localhost:3000/api/addCalendar?name=Calendar\",\r\n{\r\n    headers: {\r\n      'Accept': 'application/json',\r\n      'Content-Type': 'application/json'\r\n    },\r\n    method: \"POST\",\r\n    body: JSON.stringify({data:{name:\"default 2\"}})\r\n})\r\n.then(function(res){ console.log(res) })\r\n.catch(function(res){ console.log(res) })\r\n  */ async function handler(req, res) {\n    const { name  } = req.query;\n    const { data  } = req.body;\n    const nameDB = name;\n    console.log(req.body);\n    console.log(\"data showed\");\n    //Post\n    try {\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, nameDB), data);\n        console.log(\"Document written with ID: \", docRef.id);\n        //Update\n        const docUpdated = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, nameDB, docRef.id), {\n            __id: docRef.id\n        });\n        res.json({\n            success: true\n        });\n    } catch (error) {\n        // console.log(error);\n        res.json({\n            success: false\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQ2FsZW5kYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQ21GO0FBQy9IO0lBZUcsTUFBTSxFQUFFZ0IsSUFBSSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0gsS0FBSzs7SUFFMUIsTUFBTVE7SUFDTkMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDO0lBQ3JCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDdEI7SUFDQSxJQUFJO1FBQ0EsTUFBTUMsTUFBTSxHQUFHLE1BQU1mLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDSixFQUFFLEVBQUVtQjs7UUFHM0MsUUFBUTtRQUNSLE1BQU1LLFVBQVUsR0FBRyxNQUFNaEIsU0FBUztLQUN4QmMsSUFBTSxDQUFDQyxFQUFFO1NBQ2xCLENBQUM7UUFDRlIsR0FBRyxDQUFDVyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1NBQU0sQ0FBQztJQUMvQixFQUNBLE9BQU9DLEtBQUssRUFBRTtRQUNWO1FBQ0FiO1lBQVdZLE9BQU8sRUFBRSxLQUFLO1NBQUUsQ0FBQztJQUNoQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byby0zLy4vcGFnZXMvYXBpL2FkZENhbGVuZGFyLmpzPzE1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIsIGFwcCwgZmlyZWJhc2UgfSBmcm9tICcuLi8uLi9kYic7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiwgZ2V0RG9jcywgZ2V0RG9jLCBhZGREb2MsIHVwZGF0ZURvYywgZG9jLCBkZWxldGVEb2MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuIC8qKlxyXG4gICogZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2FkZENhbGVuZGFyP25hbWU9Q2FsZW5kYXJcIixcclxue1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtkYXRhOntuYW1lOlwiZGVmYXVsdCAyXCJ9fSlcclxufSlcclxuLnRoZW4oZnVuY3Rpb24ocmVzKXsgY29uc29sZS5sb2cocmVzKSB9KVxyXG4uY2F0Y2goZnVuY3Rpb24ocmVzKXsgY29uc29sZS5sb2cocmVzKSB9KVxyXG4gICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHtkYXRhfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgbmFtZURCID0gbmFtZTtcclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIHNob3dlZFwiKVxyXG4gICAgICAgIC8vUG9zdFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBuYW1lREIpLCBkYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCB3cml0dGVuIHdpdGggSUQ6IFwiLCBkb2NSZWYuaWQpO1xyXG5cclxuICAgICAgICAgICAgLy9VcGRhdGVcclxuICAgICAgICAgICAgY29uc3QgZG9jVXBkYXRlZCA9IGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIG5hbWVEQiwgZG9jUmVmLmlkKSwge1xyXG4gICAgICAgICAgICAgICAgX19pZDogZG9jUmVmLmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSJdLCJuYW1lcyI6WyJkYiIsImFwcCIsImZpcmViYXNlIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJnZXREb2MiLCJhZGREb2MiLCJ1cGRhdGVEb2MiLCJkb2MiLCJkZWxldGVEb2MiLCJxdWVyeSIsIndoZXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJkYXRhIiwiYm9keSIsIm5hbWVEQiIsImNvbnNvbGUiLCJsb2ciLCJkb2NSZWYiLCJpZCIsImRvY1VwZGF0ZWQiLCJfX2lkIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addCalendar.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addCalendar.js"));
module.exports = __webpack_exports__;

})();