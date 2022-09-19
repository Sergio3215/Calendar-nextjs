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
exports.id = "pages/api/getCalendario";
exports.ids = ["pages/api/getCalendario"];
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

/***/ "(api)/./pages/api/getCalendario.js":
/*!************************************!*\
  !*** ./pages/api/getCalendario.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nasync function handler(req, res) {\n    const { name  } = req.query;\n    console.log(name);\n    const nameDB = name;\n    let CalendarioList = [];\n    try {\n        if (nameDB == undefined) {\n            throw new Error(\"El nombre de la base de datos no esta declarado\");\n        }\n        const CalendarioCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"Calendar\");\n        const CalendarioSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(CalendarioCol);\n        CalendarioSnapshot.docs.map((doc)=>CalendarioList = doc.data());\n        res.json({\n            CalendarioList,\n            success: true\n        });\n    } catch (error) {\n        console.log(error);\n        res.json({\n            CalendarioList,\n            success: false\n        });\n    }\n}; /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q2FsZW5kYXJpby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkM7QUFDbUY7QUFHakgsZUFBZWEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUNDLElBQUksR0FBQyxHQUFHRixHQUFHLENBQUNILEtBQUs7SUFDeEJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7SUFDakIsTUFBTUcsTUFBTSxHQUFHSCxJQUFJO0lBQ25CLElBQUlJLGNBQWMsR0FBRyxFQUFFO0lBQ3ZCLElBQUk7UUFDQSxJQUFHRCxNQUFNLElBQUlFLFNBQVMsRUFBRTtZQUNwQixNQUFNLElBQUlDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFDRCxNQUFNQyxhQUFhLEdBQUduQiw4REFBVSxDQUFDSixtQ0FBRSxFQUFFLFVBQVUsQ0FBQztRQUNoRCxNQUFNd0Isa0JBQWtCLEdBQUcsTUFBTW5CLDJEQUFPLENBQUNrQixhQUFhLENBQUM7UUFDdkRDLGtCQUFrQixDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ2pCLENBQUFBLEdBQUcsR0FBSVcsY0FBYyxHQUFDWCxHQUFHLENBQUNrQixJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlEWixHQUFHLENBQUNhLElBQUksQ0FBQztZQUFFUixjQUFjO1lBQUNTLE9BQU8sRUFBQyxJQUFJO1NBQUUsQ0FBQztJQUM3QyxFQUNBLE9BQU9DLEtBQUssRUFBRTtRQUNWYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksS0FBSyxDQUFDLENBQUM7UUFDbkJmLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDO1lBQUVSLGNBQWM7WUFBRVMsT0FBTyxFQUFDLEtBQUs7U0FBRSxDQUFDO0lBQy9DLENBQUM7QUFDTCxDQUFDLEVBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm8tMy8uL3BhZ2VzL2FwaS9nZXRDYWxlbmRhcmlvLmpzP2RjNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIsIGFwcCwgZmlyZWJhc2UgfSBmcm9tICcuLi8uLi9kYic7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiwgZ2V0RG9jcywgZ2V0RG9jLCBhZGREb2MsIHVwZGF0ZURvYywgZG9jLCBkZWxldGVEb2MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7bmFtZX0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgY29uc3QgbmFtZURCID0gbmFtZTtcclxuICAgIGxldCBDYWxlbmRhcmlvTGlzdCA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZihuYW1lREIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsIG5vbWJyZSBkZSBsYSBiYXNlIGRlIGRhdG9zIG5vIGVzdGEgZGVjbGFyYWRvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBDYWxlbmRhcmlvQ29sID0gY29sbGVjdGlvbihkYiwgJ0NhbGVuZGFyJyk7XHJcbiAgICAgICAgY29uc3QgQ2FsZW5kYXJpb1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhDYWxlbmRhcmlvQ29sKTtcclxuICAgICAgICBDYWxlbmRhcmlvU25hcHNob3QuZG9jcy5tYXAoZG9jID0+IENhbGVuZGFyaW9MaXN0PWRvYy5kYXRhKCkpO1xyXG4gICAgICAgIHJlcy5qc29uKHsgQ2FsZW5kYXJpb0xpc3Qsc3VjY2Vzczp0cnVlIH0pXHJcbiAgICB9IFxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJlcy5qc29uKHsgQ2FsZW5kYXJpb0xpc3QsIHN1Y2Nlc3M6ZmFsc2UgfSlcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuICAgIC8vUG9zdFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJUYXNrXCIpLCB7XHJcbiAgICAgIG5hbWU6IFwiUHJ1ZWJhIDFcIixcclxuICAgICAgZGF0ZTogXCIyNS8wOC8yMDIyXCJcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJEb2N1bWVudCB3cml0dGVuIHdpdGggSUQ6IFwiLCBkb2NSZWYuaWQpO1xyXG5cclxuICAgIC8vVXBkYXRlXHJcbiAgICBjb25zdCBkb2NVcGRhdGVkID0gYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJUYXNrXCIsIGRvY1JlZi5pZCkse1xyXG4gICAgICBfX2lkOmRvY1JlZi5pZFxyXG4gICAgfSlcclxuXHJcbiAgICAvL0dldCBPbmVcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCBkb2NHZXRPbmUgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCBcIlRhc2tcIiwgZG9jUmVmLmlkKSlcclxuICAgIGNvbnNvbGUubG9nKGRvY0dldE9uZS5kYXRhKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBPbmUgYnkgZGF0YVxyXG4gICAgLy8gY29uc3QgdGFza0NvbDEgPSBjb2xsZWN0aW9uKGRiLCAnVGFzaycpO1xyXG4gICAgLy8gY29uc3QgcXVlcnlDb25zdWx0YW50ID0gcXVlcnkodGFza0NvbDEsIHdoZXJlKCduYW1lJyxcIj09XCIsXCJQcnVlYmFcIikpO1xyXG4gICAgLy8gY29uc3QgdGFza1NuYXBzaG90MSA9IGF3YWl0IGdldERvY3MocXVlcnlDb25zdWx0YW50KTtcclxuICAgIC8vIGxldCB0YXNrTGlzdDE7XHJcbiAgICAvLyB0YXNrU25hcHNob3QxLmZvckVhY2goZG9jID0+IHRhc2tMaXN0MSA9IGRvYy5kYXRhKCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGFza0xpc3QxKVxyXG4gICAgLy8gY29uc29sZS5sb2codGFza0xpc3QxICE9IHVuZGVmaW5lZClcclxuXHJcblxyXG4gICAgLy9EZWxldGVcclxuICAgIGF3YWl0IGRlbGV0ZURvYyhkb2MoZGIsXCJUYXNrXCIsZG9jUmVmLmlkKSlcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xyXG4gIH1cclxuICAgIC8vR2V0XHJcbiAgY29uc3QgdGFza0NvbCA9IGNvbGxlY3Rpb24oZGIsICdUYXNrJyk7XHJcbiAgY29uc3QgdGFza1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyh0YXNrQ29sKTtcclxuICBjb25zdCB0YXNrTGlzdCA9IHRhc2tTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24odGFza0xpc3QpXHJcbiAqLyJdLCJuYW1lcyI6WyJkYiIsImFwcCIsImZpcmViYXNlIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJnZXREb2MiLCJhZGREb2MiLCJ1cGRhdGVEb2MiLCJkb2MiLCJkZWxldGVEb2MiLCJxdWVyeSIsIndoZXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwibmFtZURCIiwiQ2FsZW5kYXJpb0xpc3QiLCJ1bmRlZmluZWQiLCJFcnJvciIsIkNhbGVuZGFyaW9Db2wiLCJDYWxlbmRhcmlvU25hcHNob3QiLCJkb2NzIiwibWFwIiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCalendario.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getCalendario.js"));
module.exports = __webpack_exports__;

})();