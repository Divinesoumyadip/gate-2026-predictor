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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csoumy%5CDownloads%5Cgate-predictor-nextjs%5Cgate-predictor%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csoumy%5CDownloads%5Cgate-predictor-nextjs%5Cgate-predictor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csoumy%5CDownloads%5Cgate-predictor-nextjs%5Cgate-predictor%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csoumy%5CDownloads%5Cgate-predictor-nextjs%5Cgate-predictor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_soumy_Downloads_gate_predictor_nextjs_gate_predictor_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\soumy\\\\Downloads\\\\gate-predictor-nextjs\\\\gate-predictor\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_soumy_Downloads_gate_predictor_nextjs_gate_predictor_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzb3VteSU1Q0Rvd25sb2FkcyU1Q2dhdGUtcHJlZGljdG9yLW5leHRqcyU1Q2dhdGUtcHJlZGljdG9yJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNzb3VteSU1Q0Rvd25sb2FkcyU1Q2dhdGUtcHJlZGljdG9yLW5leHRqcyU1Q2dhdGUtcHJlZGljdG9yJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMyRDtBQUN4STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2dhdGUtMjAyNi1yYW5rLXByZWRpY3Rvci8/YmFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxzb3VteVxcXFxEb3dubG9hZHNcXFxcZ2F0ZS1wcmVkaWN0b3ItbmV4dGpzXFxcXGdhdGUtcHJlZGljdG9yXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHNvdW15XFxcXERvd25sb2Fkc1xcXFxnYXRlLXByZWRpY3Rvci1uZXh0anNcXFxcZ2F0ZS1wcmVkaWN0b3JcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csoumy%5CDownloads%5Cgate-predictor-nextjs%5Cgate-predictor%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csoumy%5CDownloads%5Cgate-predictor-nextjs%5Cgate-predictor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNRO0FBRXpDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhdGUtMjAyNi1yYW5rLXByZWRpY3Rvci8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.ts\");\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        // Google OAuth\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        // Email & Password\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Please provide email and password\");\n                }\n                await (0,_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n                    email: credentials.email\n                }).select(\"+password\");\n                if (!user) {\n                    throw new Error(\"No account found with this email\");\n                }\n                if (!user.password) {\n                    throw new Error(\"Please sign in with Google\");\n                }\n                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    throw new Error(\"Incorrect password\");\n                }\n                return {\n                    id: user._id.toString(),\n                    email: user.email,\n                    name: user.name,\n                    image: user.avatar\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account }) {\n            if (account?.provider === \"google\") {\n                await (0,_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n                const existingUser = await _models_User__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n                    email: user.email\n                });\n                if (!existingUser) {\n                    await _models_User__WEBPACK_IMPORTED_MODULE_4__.User.create({\n                        name: user.name,\n                        email: user.email,\n                        avatar: user.image,\n                        provider: \"google\",\n                        googleId: account.providerAccountId\n                    });\n                }\n            }\n            return true;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    debug: \"development\" === \"development\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vZ2F0ZS0yMDI2LXJhbmstcHJlZGljdG9yLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuL21vbmdvZGJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gR29vZ2xlIE9BdXRoXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCEsXG4gICAgfSksXG5cbiAgICAvLyBFbWFpbCAmIFBhc3N3b3JkXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBlbWFpbCBhbmQgcGFzc3dvcmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBjb25uZWN0REIoKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0pLnNlbGVjdChcIitwYXNzd29yZFwiKTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhY2NvdW50IGZvdW5kIHdpdGggdGhpcyBlbWFpbFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlci5wYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBzaWduIGluIHdpdGggR29vZ2xlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdXNlci5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgaW1hZ2U6IHVzZXIuYXZhdGFyLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcblxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyLCBhY2NvdW50IH0pIHtcbiAgICAgIGlmIChhY2NvdW50Py5wcm92aWRlciA9PT0gXCJnb29nbGVcIikge1xuICAgICAgICBhd2FpdCBjb25uZWN0REIoKTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogdXNlci5lbWFpbCB9KTtcblxuICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgIGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmltYWdlLFxuICAgICAgICAgICAgcHJvdmlkZXI6IFwiZ29vZ2xlXCIsXG4gICAgICAgICAgICBnb29nbGVJZDogYWNjb3VudC5wcm92aWRlckFjY291bnRJZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLmlkID0gdG9rZW4uaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9sb2dpblwiLFxuICAgIGVycm9yOiBcIi9sb2dpblwiLFxuICB9LFxuXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkYXlzXG4gIH0sXG5cbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG5cbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG59O1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsImJjcnlwdCIsImNvbm5lY3REQiIsIlVzZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kT25lIiwic2VsZWN0IiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZSIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJpbWFnZSIsImF2YXRhciIsImNhbGxiYWNrcyIsInNpZ25JbiIsImFjY291bnQiLCJwcm92aWRlciIsImV4aXN0aW5nVXNlciIsImNyZWF0ZSIsImdvb2dsZUlkIiwicHJvdmlkZXJBY2NvdW50SWQiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJwYWdlcyIsImVycm9yIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define MONGODB_URI in .env.local\");\n}\nlet cached = global.mongooseCache;\nif (!cached) {\n    cached = global.mongooseCache = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false,\n            maxPoolSize: 10,\n            serverSelectionTimeoutMS: 5000,\n            socketTimeoutMS: 45000\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log(\"✅ MongoDB connected\");\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFXQSxJQUFJQyxTQUF3QkMsT0FBT0MsYUFBYTtBQUVoRCxJQUFJLENBQUNGLFFBQVE7SUFDWEEsU0FBU0MsT0FBT0MsYUFBYSxHQUFHO1FBQUVDLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQzlEO0FBRU8sZUFBZUM7SUFDcEIsSUFBSUwsT0FBT0csSUFBSSxFQUFFLE9BQU9ILE9BQU9HLElBQUk7SUFFbkMsSUFBSSxDQUFDSCxPQUFPSSxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7WUFDaEJDLGFBQWE7WUFDYkMsMEJBQTBCO1lBQzFCQyxpQkFBaUI7UUFDbkI7UUFFQVYsT0FBT0ksT0FBTyxHQUFHVCx1REFBZ0IsQ0FBQ0MsYUFBYVUsTUFBTU0sSUFBSSxDQUFDLENBQUNqQjtZQUN6RGtCLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9uQjtRQUNUO0lBQ0Y7SUFFQSxJQUFJO1FBQ0ZLLE9BQU9HLElBQUksR0FBRyxNQUFNSCxPQUFPSSxPQUFPO0lBQ3BDLEVBQUUsT0FBT1csR0FBRztRQUNWZixPQUFPSSxPQUFPLEdBQUc7UUFDakIsTUFBTVc7SUFDUjtJQUVBLE9BQU9mLE9BQU9HLElBQUk7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYXRlLTIwMjYtcmFuay1wcmVkaWN0b3IvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSBhcyBzdHJpbmc7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRlZmluZSBNT05HT0RCX1VSSSBpbiAuZW52LmxvY2FsXCIpO1xufVxuXG5pbnRlcmZhY2UgTW9uZ29vc2VDYWNoZSB7XG4gIGNvbm46IHR5cGVvZiBtb25nb29zZSB8IG51bGw7XG4gIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIG1vbmdvb3NlQ2FjaGU6IE1vbmdvb3NlQ2FjaGU7XG59XG5cbmxldCBjYWNoZWQ6IE1vbmdvb3NlQ2FjaGUgPSBnbG9iYWwubW9uZ29vc2VDYWNoZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlQ2FjaGUgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgICBtYXhQb29sU2l6ZTogMTAsXG4gICAgICBzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM6IDUwMDAsXG4gICAgICBzb2NrZXRUaW1lb3V0TVM6IDQ1MDAwLFxuICAgIH07XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuKchSBNb25nb0RCIGNvbm5lY3RlZFwiKTtcbiAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJtb25nb29zZUNhY2hlIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0REIiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJtYXhQb29sU2l6ZSIsInNlcnZlclNlbGVjdGlvblRpbWVvdXRNUyIsInNvY2tldFRpbWVvdXRNUyIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Name is required\"\n        ],\n        trim: true,\n        maxlength: [\n            50,\n            \"Name cannot exceed 50 characters\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        lowercase: true,\n        trim: true,\n        match: [\n            /^\\S+@\\S+\\.\\S+$/,\n            \"Please provide a valid email\"\n        ]\n    },\n    password: {\n        type: String,\n        minlength: [\n            6,\n            \"Password must be at least 6 characters\"\n        ],\n        select: false\n    },\n    avatar: {\n        type: String,\n        default: null\n    },\n    provider: {\n        type: String,\n        enum: [\n            \"credentials\",\n            \"google\"\n        ],\n        default: \"credentials\"\n    },\n    googleId: {\n        type: String,\n        default: null\n    },\n    predictions: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: \"Prediction\"\n        }\n    ]\n}, {\n    timestamps: true\n});\n// Hash password before saving\nUserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\") || !this.password) return next();\n    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, 12);\n    next();\n});\n// Compare password method\nUserSchema.methods.comparePassword = async function(candidatePassword) {\n    if (!this.password) return false;\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(candidatePassword, this.password);\n};\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRDtBQUN4QjtBQWU5QixNQUFNRyxhQUFhLElBQUlGLDRDQUFNQSxDQUMzQjtJQUNFRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQW1CO1FBQ3BDQyxNQUFNO1FBQ05DLFdBQVc7WUFBQztZQUFJO1NBQW1DO0lBQ3JEO0lBQ0FDLE9BQU87UUFDTEwsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBb0I7UUFDckNJLFFBQVE7UUFDUkMsV0FBVztRQUNYSixNQUFNO1FBQ05LLE9BQU87WUFBQztZQUFrQjtTQUErQjtJQUMzRDtJQUNBQyxVQUFVO1FBQ1JULE1BQU1DO1FBQ05TLFdBQVc7WUFBQztZQUFHO1NBQXlDO1FBQ3hEQyxRQUFRO0lBQ1Y7SUFDQUMsUUFBUTtRQUNOWixNQUFNQztRQUNOWSxTQUFTO0lBQ1g7SUFDQUMsVUFBVTtRQUNSZCxNQUFNQztRQUNOYyxNQUFNO1lBQUM7WUFBZTtTQUFTO1FBQy9CRixTQUFTO0lBQ1g7SUFDQUcsVUFBVTtRQUNSaEIsTUFBTUM7UUFDTlksU0FBUztJQUNYO0lBQ0FJLGFBQWE7UUFDWDtZQUNFakIsTUFBTUosNENBQU1BLENBQUNzQixLQUFLLENBQUNDLFFBQVE7WUFDM0JDLEtBQUs7UUFDUDtLQUNEO0FBQ0gsR0FDQTtJQUNFQyxZQUFZO0FBQ2Q7QUFHRiw4QkFBOEI7QUFDOUJ2QixXQUFXd0IsR0FBRyxDQUFDLFFBQVEsZUFBZ0JDLElBQUk7SUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUNmLFFBQVEsRUFBRSxPQUFPYztJQUMzRCxJQUFJLENBQUNkLFFBQVEsR0FBRyxNQUFNWixvREFBVyxDQUFDLElBQUksQ0FBQ1ksUUFBUSxFQUFFO0lBQ2pEYztBQUNGO0FBRUEsMEJBQTBCO0FBQzFCekIsV0FBVzRCLE9BQU8sQ0FBQ0MsZUFBZSxHQUFHLGVBQ25DQyxpQkFBeUI7SUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQ25CLFFBQVEsRUFBRSxPQUFPO0lBQzNCLE9BQU9aLHVEQUFjLENBQUMrQixtQkFBbUIsSUFBSSxDQUFDbkIsUUFBUTtBQUN4RDtBQUVPLE1BQU1xQixPQUNYbkMsd0RBQWUsQ0FBQ21DLElBQUksSUFBSW5DLHFEQUFjLENBQVEsUUFBUUcsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhdGUtMjAyNi1yYW5rLXByZWRpY3Rvci8uL21vZGVscy9Vc2VyLnRzPzZkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXIgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGF2YXRhcj86IHN0cmluZztcbiAgcHJvdmlkZXI6IFwiY3JlZGVudGlhbHNcIiB8IFwiZ29vZ2xlXCI7XG4gIGdvb2dsZUlkPzogc3RyaW5nO1xuICBwcmVkaWN0aW9uczogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWRbXTtcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG4gIGNvbXBhcmVQYXNzd29yZChjYW5kaWRhdGVQYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbn1cblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWE8SVVzZXI+KFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIk5hbWUgaXMgcmVxdWlyZWRcIl0sXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgbWF4bGVuZ3RoOiBbNTAsIFwiTmFtZSBjYW5ub3QgZXhjZWVkIDUwIGNoYXJhY3RlcnNcIl0sXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkVtYWlsIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIG1hdGNoOiBbL15cXFMrQFxcUytcXC5cXFMrJC8sIFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbFwiXSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBtaW5sZW5ndGg6IFs2LCBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCJdLFxuICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHByb3ZpZGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBlbnVtOiBbXCJjcmVkZW50aWFsc1wiLCBcImdvb2dsZVwiXSxcbiAgICAgIGRlZmF1bHQ6IFwiY3JlZGVudGlhbHNcIixcbiAgICB9LFxuICAgIGdvb2dsZUlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgcHJlZGljdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6IFwiUHJlZGljdGlvblwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuLy8gSGFzaCBwYXNzd29yZCBiZWZvcmUgc2F2aW5nXG5Vc2VyU2NoZW1hLnByZShcInNhdmVcIiwgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoXCJwYXNzd29yZFwiKSB8fCAhdGhpcy5wYXNzd29yZCkgcmV0dXJuIG5leHQoKTtcbiAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIDEyKTtcbiAgbmV4dCgpO1xufSk7XG5cbi8vIENvbXBhcmUgcGFzc3dvcmQgbWV0aG9kXG5Vc2VyU2NoZW1hLm1ldGhvZHMuY29tcGFyZVBhc3N3b3JkID0gYXN5bmMgZnVuY3Rpb24gKFxuICBjYW5kaWRhdGVQYXNzd29yZDogc3RyaW5nXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgaWYgKCF0aGlzLnBhc3N3b3JkKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlciA9XG4gIG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsPElVc2VyPihcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJiY3J5cHQiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhsZW5ndGgiLCJlbWFpbCIsInVuaXF1ZSIsImxvd2VyY2FzZSIsIm1hdGNoIiwicGFzc3dvcmQiLCJtaW5sZW5ndGgiLCJzZWxlY3QiLCJhdmF0YXIiLCJkZWZhdWx0IiwicHJvdmlkZXIiLCJlbnVtIiwiZ29vZ2xlSWQiLCJwcmVkaWN0aW9ucyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJoYXNoIiwibWV0aG9kcyIsImNvbXBhcmVQYXNzd29yZCIsImNhbmRpZGF0ZVBhc3N3b3JkIiwiY29tcGFyZSIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csoumy%5CDownloads%5Cgate-predictor-nextjs%5Cgate-predictor%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csoumy%5CDownloads%5Cgate-predictor-nextjs%5Cgate-predictor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();