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
exports.id = "pages/api/getsData";
exports.ids = ["pages/api/getsData"];
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

/***/ "(api)/./pages/api/getsData.js":
/*!*******************************!*\
  !*** ./pages/api/getsData.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nasync function handler(req, res) {\n    const { name  } = req.query;\n    // console.log(name)\n    const nameDB = name;\n    let CalendarList = [];\n    try {\n        if (nameDB == undefined) {\n            throw new Error(\"El nombre de la base de datos no esta declarado\");\n        }\n        const CalendarCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Calendar\");\n        const querySorted = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(CalendarCol, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)(\"day\"));\n        const CalendarSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(querySorted);\n        CalendarList = CalendarSnapshot.docs.map((doc)=>doc.data());\n        res.json({\n            CalendarList,\n            success: true\n        });\n    } catch (error) {\n        console.log(error);\n        res.json({\n            CalendarList,\n            success: false\n        });\n    }\n}; /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0c0RhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQzRGO0FBRzFILGVBQWVjLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxFQUFDQyxJQUFJLEdBQUMsR0FBR0YsR0FBRyxDQUFDSCxLQUFLO0lBQ3hCLG9CQUFvQjtJQUNwQixNQUFNTSxNQUFNLEdBQUdELElBQUk7SUFDbkIsSUFBSUUsWUFBWSxHQUFHLEVBQUU7SUFDckIsSUFBSTtRQUNBLElBQUdELE1BQU0sSUFBSUUsU0FBUyxFQUFFO1lBQ3BCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUNELE1BQU1DLFdBQVcsR0FBR2pCLDhEQUFVLENBQUNMLG1DQUFFLEVBQUUsVUFBVSxDQUFDO1FBQzlDLE1BQU11QixXQUFXLEdBQUdYLHlEQUFLLENBQUNVLFdBQVcsRUFBRW5CLDJEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsTUFBTXFCLGdCQUFnQixHQUFHLE1BQU1sQiwyREFBTyxDQUFDaUIsV0FBVyxDQUFDO1FBQ25ESixZQUFZLEdBQUdLLGdCQUFnQixDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ2hCLENBQUFBLEdBQUcsR0FBSUEsR0FBRyxDQUFDaUIsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUc1RFgsR0FBRyxDQUFDWSxJQUFJLENBQUM7WUFBRVQsWUFBWTtZQUFDVSxPQUFPLEVBQUMsSUFBSTtTQUFFLENBQUM7SUFDM0MsRUFDQSxPQUFPQyxLQUFLLEVBQUU7UUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ25CZCxHQUFHLENBQUNZLElBQUksQ0FBQztZQUFFVCxZQUFZO1lBQUVVLE9BQU8sRUFBQyxLQUFLO1NBQUUsQ0FBQztJQUM3QyxDQUFDO0FBQ0wsQ0FBQyxFQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvLTMvLi9wYWdlcy9hcGkvZ2V0c0RhdGEuanM/OTkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiwgYXBwLCBmaXJlYmFzZSB9IGZyb20gJy4uLy4uL2RiJztcclxuaW1wb3J0IHsgb3JkZXJCeSAsZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uLCBnZXREb2NzLCBnZXREb2MsIGFkZERvYywgdXBkYXRlRG9jLCBkb2MsIGRlbGV0ZURvYywgcXVlcnksIHdoZXJlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHtuYW1lfSA9IHJlcS5xdWVyeTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICBjb25zdCBuYW1lREIgPSBuYW1lO1xyXG4gICAgbGV0IENhbGVuZGFyTGlzdCA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZihuYW1lREIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsIG5vbWJyZSBkZSBsYSBiYXNlIGRlIGRhdG9zIG5vIGVzdGEgZGVjbGFyYWRvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBDYWxlbmRhckNvbCA9IGNvbGxlY3Rpb24oZGIsICdDYWxlbmRhcicpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U29ydGVkID0gcXVlcnkoQ2FsZW5kYXJDb2wsIG9yZGVyQnkoJ2RheScpKVxyXG4gICAgICAgIGNvbnN0IENhbGVuZGFyU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5U29ydGVkKTtcclxuICAgICAgICBDYWxlbmRhckxpc3QgPSBDYWxlbmRhclNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzLmpzb24oeyBDYWxlbmRhckxpc3Qsc3VjY2Vzczp0cnVlIH0pXHJcbiAgICB9IFxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJlcy5qc29uKHsgQ2FsZW5kYXJMaXN0LCBzdWNjZXNzOmZhbHNlIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgICAvL1Bvc3RcclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwiVGFza1wiKSwge1xyXG4gICAgICBuYW1lOiBcIlBydWViYSAxXCIsXHJcbiAgICAgIGRhdGU6IFwiMjUvMDgvMjAyMlwiXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgd3JpdHRlbiB3aXRoIElEOiBcIiwgZG9jUmVmLmlkKTtcclxuXHJcbiAgICAvL1VwZGF0ZVxyXG4gICAgY29uc3QgZG9jVXBkYXRlZCA9IGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwiVGFza1wiLCBkb2NSZWYuaWQpLHtcclxuICAgICAgX19pZDpkb2NSZWYuaWRcclxuICAgIH0pXHJcblxyXG4gICAgLy9HZXQgT25lXHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgZG9jR2V0T25lID0gYXdhaXQgZ2V0RG9jKGRvYyhkYiwgXCJUYXNrXCIsIGRvY1JlZi5pZCkpXHJcbiAgICBjb25zb2xlLmxvZyhkb2NHZXRPbmUuZGF0YSgpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgT25lIGJ5IGRhdGFcclxuICAgIC8vIGNvbnN0IHRhc2tDb2wxID0gY29sbGVjdGlvbihkYiwgJ1Rhc2snKTtcclxuICAgIC8vIGNvbnN0IHF1ZXJ5Q29uc3VsdGFudCA9IHF1ZXJ5KHRhc2tDb2wxLCB3aGVyZSgnbmFtZScsXCI9PVwiLFwiUHJ1ZWJhXCIpKTtcclxuICAgIC8vIGNvbnN0IHRhc2tTbmFwc2hvdDEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5Q29uc3VsdGFudCk7XHJcbiAgICAvLyBsZXQgdGFza0xpc3QxO1xyXG4gICAgLy8gdGFza1NuYXBzaG90MS5mb3JFYWNoKGRvYyA9PiB0YXNrTGlzdDEgPSBkb2MuZGF0YSgpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tMaXN0MSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tMaXN0MSAhPSB1bmRlZmluZWQpXHJcblxyXG5cclxuICAgIC8vRGVsZXRlXHJcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKGRiLFwiVGFza1wiLGRvY1JlZi5pZCkpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcclxuICB9XHJcbiAgICAvL0dldFxyXG4gIGNvbnN0IHRhc2tDb2wgPSBjb2xsZWN0aW9uKGRiLCAnVGFzaycpO1xyXG4gIGNvbnN0IHRhc2tTbmFwc2hvdCA9IGF3YWl0IGdldERvY3ModGFza0NvbCk7XHJcbiAgY29uc3QgdGFza0xpc3QgPSB0YXNrU25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRhc2tMaXN0KVxyXG4gKi8iXSwibmFtZXMiOlsiZGIiLCJhcHAiLCJmaXJlYmFzZSIsIm9yZGVyQnkiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImdldERvYyIsImFkZERvYyIsInVwZGF0ZURvYyIsImRvYyIsImRlbGV0ZURvYyIsInF1ZXJ5Iiwid2hlcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibmFtZSIsIm5hbWVEQiIsIkNhbGVuZGFyTGlzdCIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ2FsZW5kYXJDb2wiLCJxdWVyeVNvcnRlZCIsIkNhbGVuZGFyU25hcHNob3QiLCJkb2NzIiwibWFwIiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getsData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getsData.js"));
module.exports = __webpack_exports__;

})();