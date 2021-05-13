/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/app/index.ts":
/*!*****************************!*\
  !*** ./client/app/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.get = get;\nexports.post = post;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nconst axiosInstanse = _axios.default.create({\n  baseURL: 'http://localhost:3010/api/v2',\n  headers: {\n    \"Content-Type\": \"application/json\"\n  },\n  withCredentials: true\n});\n\nconst host = \"https://ya-praktikum.tech/api/v2\"; // const host = \"http://localhost:3010/api/v2\";\n\nfunction get(apiMethod, params = {}) {\n  console.log(params);\n  return axiosInstanse.get(`/${apiMethod}`, {\n    params\n  }).then(({\n    data\n  }) => data);\n}\n\nfunction post(apiMethod, params = {}) {\n  return axiosInstanse.post(`${host}/${apiMethod}`, {\n    params\n  }).then(({\n    data\n  }) => data);\n}\n\n//# sourceURL=webpack://our-game/./client/app/index.ts?");

/***/ }),

/***/ "./client/app/resolvers/user/userInfo.ts":
/*!***********************************************!*\
  !*** ./client/app/resolvers/user/userInfo.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.resolveUserInfo = void 0;\n\nvar _ = __webpack_require__(/*! ../.. */ \"./client/app/index.ts\");\n\nconst resolveUserInfo = () => (0, _.get)(\"auth/user\").then(({\n  first_name,\n  last_name,\n  display_name,\n  ...userInfo\n}) => ({\n  firstName: first_name,\n  lastName: last_name,\n  displayName: display_name,\n  ...userInfo\n}));\n\nexports.resolveUserInfo = resolveUserInfo;\n\n//# sourceURL=webpack://our-game/./client/app/resolvers/user/userInfo.ts?");

/***/ }),

/***/ "./client/src/App.tsx":
/*!****************************!*\
  !*** ./client/src/App.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\n__webpack_require__(/*! ./common.css */ \"./client/src/common.css\");\n\n__webpack_require__(/*! ./assets/css/fonts.css */ \"./client/src/assets/css/fonts.css\");\n\n//@ts-ignore\nconst App = ({\n  route\n}) => {\n  return /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(\"div\", null, (0, _reactRouterConfig.renderRoutes)(route.routes)));\n};\n\nvar _default = {\n  component: App\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/App.tsx?");

/***/ }),

/***/ "./client/src/components/avatar/Avatar.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/avatar/Avatar.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Avatar = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\n__webpack_require__(/*! ./avatar.css */ \"./client/src/components/avatar/avatar.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst Avatar = props => {\n  const {\n    className,\n    size\n  } = props;\n  const [path, setPath] = (0, _react.useState)(props.src);\n  const classNames = (0, _classnames.default)(\"avatar\", `avatar_size-${size}`, className);\n  const onError = (0, _react.useCallback)(() => {\n    setPath(\"images/avatar-default.png\");\n  }, []);\n  return /*#__PURE__*/_react.default.createElement(\"img\", {\n    onError: onError,\n    className: classNames,\n    src: path\n  });\n};\n\nexports.Avatar = Avatar;\n\n//# sourceURL=webpack://our-game/./client/src/components/avatar/Avatar.tsx?");

/***/ }),

/***/ "./client/src/components/avatar/index.ts":
/*!***********************************************!*\
  !*** ./client/src/components/avatar/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _Avatar.Avatar;\n  }\n}));\n\nvar _Avatar = __webpack_require__(/*! ./Avatar */ \"./client/src/components/avatar/Avatar.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/avatar/index.ts?");

/***/ }),

/***/ "./client/src/components/boxwrapper/BoxWrapper.tsx":
/*!*********************************************************!*\
  !*** ./client/src/components/boxwrapper/BoxWrapper.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BoxWrapper = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\n__webpack_require__(/*! ./boxwrapper.css */ \"./client/src/components/boxwrapper/boxwrapper.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst BoxWrapper = props => {\n  const {\n    className,\n    children\n  } = props;\n  const classNames = (0, _classnames.default)(\"boxwrapper\", className);\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: classNames\n  }, children));\n};\n\nexports.BoxWrapper = BoxWrapper;\n\n//# sourceURL=webpack://our-game/./client/src/components/boxwrapper/BoxWrapper.tsx?");

/***/ }),

/***/ "./client/src/components/boxwrapper/index.ts":
/*!***************************************************!*\
  !*** ./client/src/components/boxwrapper/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _BoxWrapper.BoxWrapper;\n  }\n}));\n\nvar _BoxWrapper = __webpack_require__(/*! ./BoxWrapper */ \"./client/src/components/boxwrapper/BoxWrapper.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/boxwrapper/index.ts?");

/***/ }),

/***/ "./client/src/components/button/Button.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/button/Button.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Button = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\n__webpack_require__(/*! ./button.css */ \"./client/src/components/button/button.css\");\n\nconst Button = props => {\n  const {\n    className,\n    type,\n    style,\n    stretch,\n    clickHandler,\n    children\n  } = props;\n  const classNames = (0, _classnames.default)(\"button\", `button_${style}`, className, {\n    button_fullwidth: stretch\n  });\n  return /*#__PURE__*/_react.default.createElement(\"button\", {\n    className: classNames,\n    type: type,\n    onClick: clickHandler\n  }, children);\n};\n\nexports.Button = Button;\n\n//# sourceURL=webpack://our-game/./client/src/components/button/Button.tsx?");

/***/ }),

/***/ "./client/src/components/button/index.tsx":
/*!************************************************!*\
  !*** ./client/src/components/button/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _Button.Button;\n  }\n}));\n\nvar _Button = __webpack_require__(/*! ./Button */ \"./client/src/components/button/Button.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/button/index.tsx?");

/***/ }),

/***/ "./client/src/components/footer/Footer.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/footer/Footer.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Footer = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _content = __webpack_require__(/*! ../../data/content */ \"./client/src/data/content.ts\");\n\n__webpack_require__(/*! ./footer.css */ \"./client/src/components/footer/footer.css\");\n\nconst Footer = ({\n  color\n}) => {\n  return /*#__PURE__*/_react.default.createElement(\"footer\", {\n    className: `footer footer_${color}`\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"footer-content\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"footer-content__allrights\"\n  }, /*#__PURE__*/_react.default.createElement(\"p\", null, _content.footerMessage))));\n};\n\nexports.Footer = Footer;\n\n//# sourceURL=webpack://our-game/./client/src/components/footer/Footer.tsx?");

/***/ }),

/***/ "./client/src/components/footer/index.ts":
/*!***********************************************!*\
  !*** ./client/src/components/footer/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _Footer.Footer;\n  }\n}));\n\nvar _Footer = __webpack_require__(/*! ./Footer */ \"./client/src/components/footer/Footer.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/footer/index.ts?");

/***/ }),

/***/ "./client/src/components/generalError/GeneralError.tsx":
/*!*************************************************************!*\
  !*** ./client/src/components/generalError/GeneralError.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.GeneralError = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\n__webpack_require__(/*! ./generalError.css */ \"./client/src/components/generalError/generalError.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst GeneralError = ({\n  message,\n  errorStatus,\n  errorCode\n}) => {\n  const [loading, setLoading] = (0, _react.useState)(true);\n  (0, _react.useEffect)(() => {\n    setTimeout(() => setLoading(false), 7000);\n  }, [loading]);\n\n  const messageHandler = () => {\n    const messageContent = [];\n\n    if (errorStatus) {\n      messageContent.push(errorStatus);\n    }\n\n    messageContent.push(message);\n\n    if (errorCode) {\n      messageContent.push(errorCode);\n    }\n\n    return messageContent.join(\" \");\n  };\n\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, loading && /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"generalError\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"generalError_content\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"generalError_content_message\"\n  }, /*#__PURE__*/_react.default.createElement(\"p\", null, messageHandler())), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"generalError_content_close\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    onClick: () => setLoading(false),\n    className: \"inner_close\"\n  }, /*#__PURE__*/_react.default.createElement(\"svg\", {\n    width: \"9\",\n    height: \"9\",\n    viewBox: \"0 0 9 9\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/_react.default.createElement(\"line\", {\n    x1: \"7.7953\",\n    y1: \"1.35358\",\n    x2: \"0.724228\",\n    y2: \"8.42465\",\n    stroke: \"#F9F6F6\"\n  }), /*#__PURE__*/_react.default.createElement(\"line\", {\n    x1: \"8.08834\",\n    y1: \"8.35358\",\n    x2: \"1.01727\",\n    y2: \"1.28252\",\n    stroke: \"#F9F6F6\"\n  })))))));\n};\n\nexports.GeneralError = GeneralError;\n\n//# sourceURL=webpack://our-game/./client/src/components/generalError/GeneralError.tsx?");

/***/ }),

/***/ "./client/src/components/generalError/index.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/generalError/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _GeneralError.GeneralError;\n  }\n}));\n\nvar _GeneralError = __webpack_require__(/*! ./GeneralError */ \"./client/src/components/generalError/GeneralError.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/generalError/index.tsx?");

/***/ }),

/***/ "./client/src/components/header/Header.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/header/Header.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Header = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Logo = __webpack_require__(/*! ../logos/Logo */ \"./client/src/components/logos/Logo.tsx\");\n\nvar _content = __webpack_require__(/*! ../../data/content */ \"./client/src/data/content.ts\");\n\n__webpack_require__(/*! ./header.css */ \"./client/src/components/header/header.css\");\n\nvar _menu = _interopRequireDefault(__webpack_require__(/*! ../menu */ \"./client/src/components/menu/index.tsx\"));\n\nconst Header = ({\n  color\n}) => {\n  return /*#__PURE__*/_react.default.createElement(\"header\", {\n    className: `type-${color}`\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"header-content\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"header-content__logo-menu\"\n  }, /*#__PURE__*/_react.default.createElement(_Logo.LogoHeader, null), /*#__PURE__*/_react.default.createElement(_menu.default, {\n    color: color\n  })), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"header-content__menu\"\n  }, /*#__PURE__*/_react.default.createElement(\"ul\", null, /*#__PURE__*/_react.default.createElement(\"li\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: \"/login\"\n  }, \" \", _content.menuLogin)), /*#__PURE__*/_react.default.createElement(\"li\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: \"/register\"\n  }, _content.menuRegister, \" \"))))));\n};\n\nexports.Header = Header;\n\n//# sourceURL=webpack://our-game/./client/src/components/header/Header.tsx?");

/***/ }),

/***/ "./client/src/components/header/index.ts":
/*!***********************************************!*\
  !*** ./client/src/components/header/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _Header.Header;\n  }\n}));\n\nvar _Header = __webpack_require__(/*! ./Header */ \"./client/src/components/header/Header.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/header/index.ts?");

/***/ }),

/***/ "./client/src/components/infoLine/InfoLine.tsx":
/*!*****************************************************!*\
  !*** ./client/src/components/infoLine/InfoLine.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.InfoLine = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\n__webpack_require__(/*! ./infoLine.css */ \"./client/src/components/infoLine/infoLine.css\");\n\nconst InfoLine = ({\n  className,\n  name,\n  value,\n  dark = false\n}) => {\n  const classNames = (0, _classnames.default)(\"info-line\", className, {\n    \"info-line_dark\": dark\n  });\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: classNames\n  }, /*#__PURE__*/_react.default.createElement(\"span\", {\n    className: \"info-line__name\"\n  }, name), /*#__PURE__*/_react.default.createElement(\"span\", {\n    className: \"info-line__value\"\n  }, value));\n};\n\nexports.InfoLine = InfoLine;\n\n//# sourceURL=webpack://our-game/./client/src/components/infoLine/InfoLine.tsx?");

/***/ }),

/***/ "./client/src/components/infoLine/index.ts":
/*!*************************************************!*\
  !*** ./client/src/components/infoLine/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _InfoLine.InfoLine;\n  }\n}));\n\nvar _InfoLine = __webpack_require__(/*! ./InfoLine */ \"./client/src/components/infoLine/InfoLine.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/infoLine/index.ts?");

/***/ }),

/***/ "./client/src/components/inputField/InputField.tsx":
/*!*********************************************************!*\
  !*** ./client/src/components/inputField/InputField.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.InputField = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _reactFinalForm = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n\n__webpack_require__(/*! ./inputfield.css */ \"./client/src/components/inputField/inputfield.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst InputField = ({\n  className,\n  type,\n  stretch,\n  name,\n  placeholder,\n  initialValue,\n  inputRef,\n  onFocus,\n  onBlur\n}) => {\n  const inputClassNames = (0, _classnames.default)(\"input-field\", {\n    \"input-field_fullwidth\": stretch\n  });\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {\n    name: name,\n    initialValue: initialValue\n  }, ({\n    input,\n    meta\n  }) => /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(\"input\", (0, _extends2.default)({}, input, {\n    ref: inputRef,\n    className: inputClassNames,\n    type: type,\n    placeholder: placeholder,\n    onBlur: onBlur,\n    onFocus: onFocus\n  })), (meta.error || meta.submitError) && meta.touched ? /*#__PURE__*/_react.default.createElement(\"span\", {\n    className: \"input-error\"\n  }, meta.error || meta.submitError) : null)));\n};\n\nexports.InputField = InputField;\n\n//# sourceURL=webpack://our-game/./client/src/components/inputField/InputField.tsx?");

/***/ }),

/***/ "./client/src/components/inputField/index.ts":
/*!***************************************************!*\
  !*** ./client/src/components/inputField/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _InputField.InputField;\n  }\n}));\n\nvar _InputField = __webpack_require__(/*! ./InputField */ \"./client/src/components/inputField/InputField.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/inputField/index.ts?");

/***/ }),

/***/ "./client/src/components/inputList/InputList.tsx":
/*!*******************************************************!*\
  !*** ./client/src/components/inputList/InputList.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.InputList = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _inputField = _interopRequireDefault(__webpack_require__(/*! ../../components/inputField */ \"./client/src/components/inputField/index.ts\"));\n\nconst InputList = (values, className, stretch) => {\n  return values.map(input => /*#__PURE__*/_react.default.createElement(_inputField.default, {\n    className: className,\n    type: input.type,\n    name: input.name,\n    stretch: stretch,\n    placeholder: input.placeholder\n  }));\n};\n\nexports.InputList = InputList;\n\n//# sourceURL=webpack://our-game/./client/src/components/inputList/InputList.tsx?");

/***/ }),

/***/ "./client/src/components/inputList/index.ts":
/*!**************************************************!*\
  !*** ./client/src/components/inputList/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _InputList.InputList;\n  }\n}));\n\nvar _InputList = __webpack_require__(/*! ./InputList */ \"./client/src/components/inputList/InputList.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/inputList/index.ts?");

/***/ }),

/***/ "./client/src/components/leftsideButton/LeftsideButton.tsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/leftsideButton/LeftsideButton.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.LeftsideButton = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\n__webpack_require__(/*! ./leftsideButton.css */ \"./client/src/components/leftsideButton/leftsideButton.css\");\n\nconst LeftsideButton = ({\n  className,\n  dark = false\n}) => {\n  const classNames = (0, _classnames.default)(\"leftside-button\", className, {\n    leftsideButton_dark: dark\n  });\n  return /*#__PURE__*/_react.default.createElement(\"button\", {\n    className: classNames\n  }, /*#__PURE__*/_react.default.createElement(\"svg\", {\n    width: \"31\",\n    height: \"35\",\n    viewBox: \"0 0 31 35\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/_react.default.createElement(\"line\", {\n    x1: \"1.58579\",\n    y1: \"18.6152\",\n    x2: \"18.6152\",\n    y2: \"1.58579\",\n    stroke: \"black\",\n    strokeWidth: \"4\"\n  }), /*#__PURE__*/_react.default.createElement(\"line\", {\n    x1: \"18.6151\",\n    y1: \"33.4436\",\n    x2: \"1.5857\",\n    y2: \"16.4142\",\n    stroke: \"black\",\n    strokeWidth: \"4\"\n  }), /*#__PURE__*/_react.default.createElement(\"line\", {\n    x1: \"11.5858\",\n    y1: \"18.6152\",\n    x2: \"28.6152\",\n    y2: \"1.58579\",\n    stroke: \"black\",\n    strokeWidth: \"4\"\n  }), /*#__PURE__*/_react.default.createElement(\"line\", {\n    x1: \"28.6151\",\n    y1: \"33.4436\",\n    x2: \"11.5857\",\n    y2: \"16.4142\",\n    stroke: \"black\",\n    strokeWidth: \"4\"\n  })));\n};\n\nexports.LeftsideButton = LeftsideButton;\n\n//# sourceURL=webpack://our-game/./client/src/components/leftsideButton/LeftsideButton.tsx?");

/***/ }),

/***/ "./client/src/components/leftsideButton/index.ts":
/*!*******************************************************!*\
  !*** ./client/src/components/leftsideButton/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _LeftsideButton.LeftsideButton;\n  }\n}));\n\nvar _LeftsideButton = __webpack_require__(/*! ./LeftsideButton */ \"./client/src/components/leftsideButton/LeftsideButton.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/leftsideButton/index.ts?");

/***/ }),

/***/ "./client/src/components/logos/Logo.tsx":
/*!**********************************************!*\
  !*** ./client/src/components/logos/Logo.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.LogoHome = exports.LogoHeader = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nconst LogoHeader = () => {\n  return /*#__PURE__*/_react.default.createElement(\"svg\", {\n    width: \"140\",\n    height: \"24\",\n    viewBox: \"0 0 140 24\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M1 18.08V6.08C1 5.74667 1.08 5.48667 1.24 5.3C1.41333 5.1 1.63333 5 1.9 5H5.24C7.36 5 8.96667 5.53333 10.06 6.6C11.1667 7.66667 11.72 9.34667 11.72 11.64C11.72 16.5467 9.62667 19 5.44 19H2.02C1.34 19 1 18.6933 1 18.08ZM4.84 8.8V14.78C4.84 15.06 4.86 15.24 4.9 15.32C4.94 15.3867 5.06 15.42 5.26 15.42C5.99333 15.42 6.54667 15.1467 6.92 14.6C7.30667 14.0533 7.5 13.1467 7.5 11.88C7.5 10.6 7.3 9.76667 6.9 9.38C6.51333 8.99333 5.89333 8.8 5.04 8.8H4.84ZM23.6042 9.1C23.6042 8.98 23.9709 8.92 24.7042 8.92C26.3576 8.92 27.1709 8.97333 27.1442 9.08L25.1842 18.8C25.1442 19.0133 24.4042 19.12 22.9642 19.12C21.5242 19.12 20.7842 19.0133 20.7442 18.8L19.9242 14.32L18.9042 18.8C18.8642 19 18.0976 19.1 16.6042 19.1C15.1242 19.1 14.3642 18.98 14.3242 18.74L12.5442 9C12.5042 8.92 13.0776 8.88 14.2642 8.88C15.4376 8.89333 16.0242 8.92 16.0242 8.96L16.9442 15.72L18.6042 9.04C18.6309 8.96 19.0709 8.92 19.9242 8.92C20.7776 8.92 21.2176 8.96 21.2442 9.04L22.8842 15.64L23.6042 9.1ZM29.5233 11.74C29.1499 11.0733 28.9633 10.5333 28.9633 10.12C28.9633 9.69333 29.0766 9.42 29.3033 9.3C30.0633 8.96667 31.1033 8.8 32.4233 8.8C33.7566 8.8 34.6966 9.11333 35.2433 9.74C35.7899 10.3533 36.0633 11.2667 36.0633 12.48V15.64H36.7433C36.9699 15.64 37.1433 15.7733 37.2633 16.04C37.3966 16.3067 37.4633 16.6733 37.4633 17.14C37.4633 17.6067 37.3433 18.0667 37.1033 18.52C36.8766 18.9733 36.5633 19.2 36.1633 19.2C35.4433 19.2 34.8633 19.0067 34.4233 18.62C34.2233 18.46 34.0699 18.2667 33.9633 18.04C33.3499 18.8133 32.3966 19.2 31.1033 19.2C30.1299 19.2 29.3099 18.8533 28.6433 18.16C27.9766 17.4667 27.6433 16.6467 27.6433 15.7C27.6433 13.5267 28.9433 12.44 31.5433 12.44H32.6433V12.24C32.6433 11.8933 32.5833 11.6733 32.4633 11.58C32.3566 11.4733 32.0966 11.42 31.6833 11.42C31.1766 11.42 30.4566 11.5267 29.5233 11.74ZM31.1233 15.42C31.1233 15.7133 31.2033 15.94 31.3633 16.1C31.5233 16.2467 31.7233 16.32 31.9633 16.32C32.2166 16.32 32.4433 16.22 32.6433 16.02V14.48H32.0833C31.4433 14.48 31.1233 14.7933 31.1233 15.42ZM42.9753 18.98C42.9753 19.0733 42.3686 19.12 41.1553 19.12C39.942 19.0933 39.3353 19.04 39.3353 18.96V12.32H38.7953C38.582 12.32 38.4086 12.1933 38.2753 11.94C38.1553 11.6733 38.0953 11.3467 38.0953 10.96C38.0953 9.52 38.522 8.8 39.3753 8.8C39.9753 8.8 40.4753 8.98667 40.8753 9.36C41.2753 9.72 41.4753 10.1333 41.4753 10.6C41.7553 10.0533 42.1286 9.62 42.5953 9.3C43.0753 8.96667 43.562 8.8 44.0553 8.8C44.8286 8.8 45.2953 9 45.4553 9.4C45.4953 9.50667 45.5153 9.66667 45.5153 9.88C45.5153 10.08 45.4486 10.4467 45.3153 10.98C45.1953 11.5133 45.0686 11.9 44.9353 12.14C44.802 12.38 44.722 12.5 44.6953 12.5C44.6686 12.5 44.542 12.4533 44.3153 12.36C44.102 12.2533 43.9086 12.2 43.7353 12.2C43.2286 12.2 42.9753 12.6 42.9753 13.4V18.98ZM47.305 11.66H46.325C46.125 11.66 46.025 11.22 46.025 10.34C46.025 9.44667 46.125 9 46.325 9H47.305V8.56C47.305 7.14667 47.5983 6.17333 48.185 5.64C48.785 5.09333 49.6183 4.82 50.685 4.82C51.7517 4.82 52.6917 5.01333 53.505 5.4C53.6117 5.44 53.665 5.58667 53.665 5.84C53.665 6.08 53.5517 6.47333 53.325 7.02C53.0983 7.56667 52.905 7.88 52.745 7.96C52.2917 7.68 51.825 7.54 51.345 7.54C50.825 7.54 50.565 7.88667 50.565 8.58V9H52.225C52.465 9 52.585 9.42667 52.585 10.28C52.585 11.2133 52.4317 11.68 52.125 11.68H50.845V18.76C50.845 18.92 50.2517 19 49.065 19C47.8917 19 47.305 18.92 47.305 18.76V11.66ZM54.0544 15.4C55.1344 16.0533 55.9877 16.38 56.6144 16.38C57.0144 16.38 57.2144 16.24 57.2144 15.96C57.2144 15.76 56.8677 15.5 56.1744 15.18C54.5077 14.5 53.6744 13.3867 53.6744 11.84C53.6744 10.8533 54.0344 10.1 54.7544 9.58C55.4744 9.06 56.3344 8.8 57.3344 8.8C58.3477 8.8 59.201 8.90667 59.8944 9.12C60.601 9.33333 60.9544 9.61333 60.9544 9.96C60.9544 10.2533 60.8077 10.64 60.5144 11.12C60.2344 11.6 60.041 11.86 59.9344 11.9C59.361 11.58 58.741 11.42 58.0744 11.42C57.7144 11.42 57.5344 11.5467 57.5344 11.8C57.5344 11.96 57.601 12.1 57.7344 12.22C57.881 12.3267 58.141 12.4667 58.5144 12.64C58.8877 12.8 59.1944 12.9467 59.4344 13.08C59.6877 13.2133 59.9677 13.4 60.2744 13.64C60.9144 14.1467 61.2344 14.8067 61.2344 15.62C61.2344 16.6867 60.881 17.5533 60.1744 18.22C59.4677 18.8733 58.401 19.2 56.9744 19.2C56.0277 19.2 55.1677 19.04 54.3944 18.72C53.621 18.4 53.2344 17.96 53.2344 17.4C53.2344 17.0267 53.321 16.6333 53.4944 16.22C53.681 15.8067 53.8677 15.5333 54.0544 15.4ZM63.2583 14.12C63.5116 14.32 63.9449 14.5933 64.5583 14.94C65.1849 15.2867 65.7783 15.46 66.3383 15.46C66.9116 15.46 67.1983 15.24 67.1983 14.8C67.1983 14.6 67.1183 14.4267 66.9583 14.28C66.7983 14.12 66.5049 13.94 66.0783 13.74C65.6516 13.54 65.3316 13.3867 65.1183 13.28C64.9049 13.16 64.6183 12.9733 64.2583 12.72C63.9116 12.4533 63.6449 12.18 63.4583 11.9C62.9249 11.14 62.6583 10.1733 62.6583 9C62.6583 7.82667 63.0916 6.84 63.9583 6.04C64.8383 5.22667 65.9849 4.82 67.3983 4.82C68.3583 4.82 69.2449 4.92667 70.0583 5.14C70.8716 5.34 71.2916 5.60667 71.3183 5.94C71.3183 5.98 71.3183 6.02 71.3183 6.06C71.3183 6.52667 71.1716 7.12 70.8783 7.84C70.5849 8.54667 70.3783 8.94 70.2583 9.02C69.4049 8.58 68.6383 8.36 67.9583 8.36C67.2916 8.36 66.9583 8.6 66.9583 9.08C66.9583 9.37333 67.2049 9.63333 67.6983 9.86C67.8049 9.91333 67.9583 9.98667 68.1583 10.08C68.3583 10.1733 68.5849 10.2867 68.8383 10.42C69.1049 10.54 69.3849 10.7 69.6783 10.9C69.9849 11.0867 70.3116 11.34 70.6583 11.66C71.3649 12.3267 71.7183 13.2067 71.7183 14.3C71.7183 15.7267 71.3249 16.8933 70.5383 17.8C69.7516 18.7067 68.5383 19.1733 66.8983 19.2C66.0983 19.2 65.3716 19.1333 64.7183 19C64.0783 18.8667 63.5183 18.6067 63.0383 18.22C62.5583 17.8333 62.3183 17.3667 62.3183 16.82C62.3183 16.2733 62.4183 15.7333 62.6183 15.2C62.8183 14.6533 63.0316 14.2933 63.2583 14.12ZM77.8633 18.88C77.8633 19.04 77.3033 19.12 76.1833 19.12C74.8499 19.0667 74.1833 18.98 74.1833 18.86V11.78H73.1633C72.8966 11.78 72.7633 11.32 72.7633 10.4C72.7633 10.16 72.7833 9.86667 72.8233 9.52C72.8766 9.17333 72.9766 9 73.1233 9H74.1833V7.24C74.1833 6.97333 74.7433 6.84 75.8633 6.84C76.9966 6.84 77.5633 6.94667 77.5633 7.16V8.44L77.5833 9H79.2833C79.5099 9 79.6233 9.46667 79.6233 10.4C79.6233 11.3333 79.5099 11.8 79.2833 11.8H77.8633V18.88ZM81.4866 17.82C80.6599 16.9 80.2466 15.6267 80.2466 14C80.2466 12.3733 80.6599 11.1 81.4866 10.18C82.3266 9.26 83.4532 8.8 84.8666 8.8C86.2799 8.8 87.3999 9.26 88.2266 10.18C89.0532 11.1 89.4666 12.3733 89.4666 14C89.4666 15.6267 89.0532 16.9 88.2266 17.82C87.3999 18.74 86.2799 19.2 84.8666 19.2C83.4532 19.2 82.3266 18.74 81.4866 17.82ZM84.8666 12.14C84.1199 12.14 83.7466 12.7533 83.7466 13.98C83.7466 15.2067 84.1199 15.82 84.8666 15.82C85.6266 15.82 86.0066 15.2067 86.0066 13.98C86.0066 12.7533 85.6266 12.14 84.8666 12.14ZM95.0605 18.88C95.0605 18.9733 94.5805 19.02 93.6205 19.02C92.2871 18.98 91.6205 18.9067 91.6205 18.8V12.32H91.1005C90.7538 12.32 90.5271 12.0267 90.4205 11.44C90.3938 11.2667 90.3805 11.0933 90.3805 10.92C90.3805 10.5067 90.4605 10.0933 90.6205 9.68C90.8605 9.09333 91.2338 8.8 91.7405 8.8C92.2471 8.8 92.7005 8.92 93.1005 9.16C93.5005 9.4 93.7671 9.64 93.9005 9.88C94.7405 9.16 95.7405 8.8 96.9005 8.8C98.0605 8.8 98.9005 9.11333 99.4205 9.74C99.9405 10.3667 100.2 11.3933 100.2 12.82V18.82C100.2 18.98 99.6271 19.06 98.4805 19.06C97.3471 19.06 96.7805 18.98 96.7805 18.82V13.04C96.7805 12.3733 96.5471 12.04 96.0805 12.04C95.9471 12.04 95.7605 12.1 95.5205 12.22C95.2805 12.3267 95.1271 12.4067 95.0605 12.46V18.88ZM109.456 18.46C108.616 18.9533 107.536 19.2 106.216 19.2C104.896 19.2 103.783 18.7533 102.876 17.86C101.969 16.9533 101.516 15.7067 101.516 14.12C101.516 12.52 101.949 11.2333 102.816 10.26C103.696 9.28667 104.803 8.8 106.136 8.8C107.469 8.8 108.496 9.14 109.216 9.82C109.949 10.5 110.316 11.3267 110.316 12.3C110.316 14.46 109.076 15.54 106.596 15.54H105.216C105.216 15.94 105.323 16.22 105.536 16.38C105.763 16.5267 106.089 16.6 106.516 16.6C107.449 16.6 108.336 16.3867 109.176 15.96C109.189 15.9467 109.249 16.04 109.356 16.24C109.676 16.8133 109.836 17.3 109.836 17.7C109.836 18.0867 109.709 18.34 109.456 18.46ZM106.956 12.68C106.956 12.12 106.683 11.84 106.136 11.84C105.883 11.84 105.663 11.92 105.476 12.08C105.303 12.2267 105.216 12.4467 105.216 12.74V13.36H106.296C106.736 13.36 106.956 13.1333 106.956 12.68Z\",\n    fill: \"#F9F6F6\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M128.5 24C134.851 24 140 18.8513 140 12.5C140 6.14873 134.851 1 128.5 1C122.149 1 117 6.14873 117 12.5C117 18.8513 122.149 24 128.5 24Z\",\n    fill: \"#FFF0ED\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M128.5 22.1197C130.966 22.1197 132.965 21.8971 132.965 21.6224C132.965 21.3477 130.966 21.125 128.5 21.125C126.034 21.125 124.035 21.3477 124.035 21.6224C124.035 21.8971 126.034 22.1197 128.5 22.1197Z\",\n    fill: \"#9D9D9D\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M128.5 19.2563C128.271 19.2563 128.052 19.1654 127.89 19.0036C127.728 18.8419 127.637 18.6225 127.637 18.3938V6.03126C127.637 5.80251 127.728 5.58313 127.89 5.42138C128.052 5.25963 128.271 5.16876 128.5 5.16876C128.729 5.16876 128.948 5.25963 129.11 5.42138C129.272 5.58313 129.362 5.80251 129.362 6.03126V18.3938C129.362 18.6225 129.272 18.8419 129.11 19.0036C128.948 19.1654 128.729 19.2563 128.5 19.2563Z\",\n    fill: \"#C99B56\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M127.638 6.38201C126.796 6.22173 126.015 5.82942 125.384 5.2493C124.753 4.66918 124.297 3.92434 124.067 3.09875C123.467 3.68748 122.991 4.38972 122.666 5.16446C122.341 5.9392 122.174 6.77093 122.174 7.61107C122.174 8.45121 122.341 9.28293 122.666 10.0577C122.991 10.8324 123.467 11.5347 124.067 12.1234C124.297 11.2983 124.754 10.5541 125.385 9.97451C126.016 9.39493 126.796 9.00305 127.638 8.843V6.38201Z\",\n    fill: \"#485362\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M132.93 3.09875C132.7 3.92396 132.245 4.66855 131.614 5.24863C130.984 5.82871 130.204 6.22125 129.363 6.38201V8.843C130.204 9.00376 130.984 9.3963 131.614 9.97638C132.245 10.5565 132.7 11.301 132.93 12.1263C133.53 11.5375 134.006 10.8353 134.331 10.0605C134.656 9.28581 134.823 8.45408 134.823 7.61394C134.823 6.7738 134.656 5.94208 134.331 5.16734C134.006 4.39259 133.53 3.69036 132.93 3.10163V3.09875Z\",\n    fill: \"#485362\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M127.52 7.34511V6.94836C127.533 6.6979 127.642 6.46218 127.824 6.28968C128.006 6.11719 128.248 6.02105 128.499 6.02105C128.749 6.02105 128.991 6.11719 129.173 6.28968C129.355 6.46218 129.464 6.6979 129.478 6.94836V7.34511C130.434 7.16105 131.32 6.71366 132.035 6.05333C132.751 5.393 133.268 4.54596 133.528 3.60761C133.345 3.36746 133.146 3.14071 132.93 2.92911C132.702 3.75644 132.247 4.50346 131.617 5.08569C130.986 5.66793 130.205 6.06218 129.362 6.22386V5.88748C129.362 5.77422 129.34 5.66206 129.297 5.55742C129.254 5.45278 129.19 5.35769 129.11 5.2776C129.03 5.19751 128.935 5.13398 128.83 5.09064C128.725 5.04729 128.613 5.02498 128.5 5.02498C128.387 5.02498 128.275 5.04729 128.17 5.09064C128.065 5.13398 127.97 5.19751 127.89 5.2776C127.81 5.35769 127.746 5.45278 127.703 5.55742C127.66 5.66206 127.637 5.77422 127.637 5.88748V6.23823C126.794 6.07704 126.013 5.68301 125.382 5.10074C124.751 4.51847 124.295 3.7712 124.067 2.94348C123.852 3.15517 123.652 3.38191 123.469 3.62198C123.731 4.55767 124.249 5.40168 124.965 6.05932C125.681 6.71696 126.565 7.16221 127.52 7.34511Z\",\n    fill: \"#FCBC5D\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M128.5 19.2563C128.271 19.2563 128.052 19.1654 127.89 19.0036C127.728 18.8419 127.637 18.6225 127.637 18.3938V6.03126C127.637 5.80251 127.728 5.58313 127.89 5.42138C128.052 5.25963 128.271 5.16876 128.5 5.16876C128.729 5.16876 128.948 5.25963 129.11 5.42138C129.272 5.58313 129.362 5.80251 129.362 6.03126V18.3938C129.362 18.6225 129.272 18.8419 129.11 19.0036C128.948 19.1654 128.729 19.2563 128.5 19.2563V19.2563Z\",\n    stroke: \"#45413C\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M127.638 6.38201C126.796 6.22173 126.015 5.82942 125.384 5.2493C124.753 4.66918 124.297 3.92434 124.067 3.09875C123.467 3.68748 122.991 4.38972 122.666 5.16446C122.341 5.9392 122.174 6.77093 122.174 7.61107C122.174 8.45121 122.341 9.28293 122.666 10.0577C122.991 10.8324 123.467 11.5347 124.067 12.1234C124.297 11.2983 124.754 10.5541 125.385 9.97451C126.016 9.39493 126.796 9.00305 127.638 8.843V6.38201Z\",\n    stroke: \"#45413C\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M132.93 3.10147C132.93 3.10104 132.93 3.10096 132.93 3.10138C132.699 3.92554 132.244 4.66916 131.614 5.24863C131.188 5.64111 130.693 5.94774 130.157 6.15481C129.709 6.32772 129.363 6.72912 129.363 7.20904V8.01597C129.363 8.49589 129.709 8.89729 130.157 9.0702C130.693 9.27727 131.188 9.5839 131.614 9.97638C131.826 10.1712 132.018 10.3846 132.188 10.6133C132.643 11.2239 133.584 11.4501 133.967 10.7918C134.103 10.5567 134.225 10.3124 134.331 10.0605C134.656 9.28581 134.823 8.45408 134.823 7.61394C134.823 6.7738 134.656 5.94208 134.331 5.16734C134.006 4.39264 133.53 3.69044 132.93 3.10174C132.93 3.10167 132.93 3.10157 132.93 3.10147V3.10147Z\",\n    stroke: \"#45413C\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }));\n};\n\nexports.LogoHeader = LogoHeader;\n\nconst LogoHome = () => {\n  return /*#__PURE__*/_react.default.createElement(\"svg\", {\n    width: \"499\",\n    height: \"82\",\n    viewBox: \"0 0 499 82\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M3.6 62.688V19.488C3.6 18.288 3.888 17.352 4.464 16.68C5.088 15.96 5.88 15.6 6.84 15.6H18.864C26.496 15.6 32.28 17.52 36.216 21.36C40.2 25.2 42.192 31.248 42.192 39.504C42.192 57.168 34.656 66 19.584 66H7.272C4.824 66 3.6 64.896 3.6 62.688ZM17.424 29.28V50.808C17.424 51.816 17.496 52.464 17.64 52.752C17.784 52.992 18.216 53.112 18.936 53.112C21.576 53.112 23.568 52.128 24.912 50.16C26.304 48.192 27 44.928 27 40.368C27 35.76 26.28 32.76 24.84 31.368C23.448 29.976 21.216 29.28 18.144 29.28H17.424ZM84.9752 30.36C84.9752 29.928 86.2952 29.712 88.9352 29.712C94.8872 29.712 97.8152 29.904 97.7192 30.288L90.6632 65.28C90.5192 66.048 87.8552 66.432 82.6712 66.432C77.4872 66.432 74.8232 66.048 74.6792 65.28L71.7272 49.152L68.0552 65.28C67.9112 66 65.1512 66.36 59.7752 66.36C54.4472 66.36 51.7112 65.928 51.5672 65.064L45.1592 30C45.0152 29.712 47.0792 29.568 51.3512 29.568C55.5752 29.616 57.6872 29.712 57.6872 29.856L60.9992 54.192L66.9752 30.144C67.0712 29.856 68.6552 29.712 71.7272 29.712C74.7992 29.712 76.3832 29.856 76.4792 30.144L82.3832 53.904L84.9752 30.36ZM106.284 39.864C104.94 37.464 104.268 35.52 104.268 34.032C104.268 32.496 104.676 31.512 105.492 31.08C108.228 29.88 111.972 29.28 116.724 29.28C121.524 29.28 124.908 30.408 126.876 32.664C128.844 34.872 129.828 38.16 129.828 42.528V53.904H132.276C133.092 53.904 133.716 54.384 134.148 55.344C134.628 56.304 134.868 57.624 134.868 59.304C134.868 60.984 134.436 62.64 133.572 64.272C132.756 65.904 131.628 66.72 130.188 66.72C127.596 66.72 125.508 66.024 123.924 64.632C123.204 64.056 122.652 63.36 122.268 62.544C120.06 65.328 116.628 66.72 111.972 66.72C108.468 66.72 105.516 65.472 103.116 62.976C100.716 60.48 99.5158 57.528 99.5158 54.12C99.5158 46.296 104.196 42.384 113.556 42.384H117.516V41.664C117.516 40.416 117.3 39.624 116.868 39.288C116.484 38.904 115.548 38.712 114.06 38.712C112.236 38.712 109.644 39.096 106.284 39.864ZM112.044 53.112C112.044 54.168 112.332 54.984 112.908 55.56C113.484 56.088 114.204 56.352 115.068 56.352C115.98 56.352 116.796 55.992 117.516 55.272V49.728H115.5C113.196 49.728 112.044 50.856 112.044 53.112ZM154.711 65.928C154.711 66.264 152.527 66.432 148.159 66.432C143.791 66.336 141.607 66.144 141.607 65.856V41.952H139.663C138.895 41.952 138.271 41.496 137.791 40.584C137.359 39.624 137.143 38.448 137.143 37.056C137.143 31.872 138.679 29.28 141.751 29.28C143.911 29.28 145.711 29.952 147.151 31.296C148.591 32.592 149.311 34.08 149.311 35.76C150.319 33.792 151.663 32.232 153.343 31.08C155.071 29.88 156.823 29.28 158.599 29.28C161.383 29.28 163.063 30 163.639 31.44C163.783 31.824 163.855 32.4 163.855 33.168C163.855 33.888 163.615 35.208 163.135 37.128C162.703 39.048 162.247 40.44 161.767 41.304C161.287 42.168 160.999 42.6 160.903 42.6C160.807 42.6 160.351 42.432 159.535 42.096C158.767 41.712 158.071 41.52 157.447 41.52C155.623 41.52 154.711 42.96 154.711 45.84V65.928ZM170.298 39.576H166.77C166.05 39.576 165.69 37.992 165.69 34.824C165.69 31.608 166.05 30 166.77 30H170.298V28.416C170.298 23.328 171.354 19.824 173.466 17.904C175.626 15.936 178.626 14.952 182.466 14.952C186.306 14.952 189.69 15.648 192.618 17.04C193.002 17.184 193.194 17.712 193.194 18.624C193.194 19.488 192.786 20.904 191.97 22.872C191.154 24.84 190.458 25.968 189.882 26.256C188.25 25.248 186.57 24.744 184.842 24.744C182.97 24.744 182.034 25.992 182.034 28.488V30H188.01C188.874 30 189.306 31.536 189.306 34.608C189.306 37.968 188.754 39.648 187.65 39.648H183.042V65.136C183.042 65.712 180.906 66 176.634 66C172.41 66 170.298 65.712 170.298 65.136V39.576ZM194.596 53.04C198.484 55.392 201.556 56.568 203.812 56.568C205.252 56.568 205.972 56.064 205.972 55.056C205.972 54.336 204.724 53.4 202.228 52.248C196.228 49.8 193.228 45.792 193.228 40.224C193.228 36.672 194.524 33.96 197.116 32.088C199.708 30.216 202.804 29.28 206.404 29.28C210.052 29.28 213.124 29.664 215.62 30.432C218.164 31.2 219.436 32.208 219.436 33.456C219.436 34.512 218.908 35.904 217.852 37.632C216.844 39.36 216.148 40.296 215.764 40.44C213.7 39.288 211.468 38.712 209.068 38.712C207.772 38.712 207.124 39.168 207.124 40.08C207.124 40.656 207.364 41.16 207.844 41.592C208.372 41.976 209.308 42.48 210.652 43.104C211.996 43.68 213.1 44.208 213.964 44.688C214.876 45.168 215.884 45.84 216.988 46.704C219.292 48.528 220.444 50.904 220.444 53.832C220.444 57.672 219.172 60.792 216.628 63.192C214.084 65.544 210.244 66.72 205.108 66.72C201.7 66.72 198.604 66.144 195.82 64.992C193.036 63.84 191.644 62.256 191.644 60.24C191.644 58.896 191.956 57.48 192.58 55.992C193.252 54.504 193.924 53.52 194.596 53.04ZM227.73 48.432C228.642 49.152 230.202 50.136 232.41 51.384C234.666 52.632 236.802 53.256 238.818 53.256C240.882 53.256 241.914 52.464 241.914 50.88C241.914 50.16 241.626 49.536 241.05 49.008C240.474 48.432 239.418 47.784 237.882 47.064C236.346 46.344 235.194 45.792 234.426 45.408C233.658 44.976 232.626 44.304 231.33 43.392C230.082 42.432 229.122 41.448 228.45 40.44C226.53 37.704 225.57 34.224 225.57 30C225.57 25.776 227.13 22.224 230.25 19.344C233.418 16.416 237.546 14.952 242.634 14.952C246.09 14.952 249.282 15.336 252.21 16.104C255.138 16.824 256.65 17.784 256.746 18.984C256.746 19.128 256.746 19.272 256.746 19.416C256.746 21.096 256.218 23.232 255.162 25.824C254.106 28.368 253.362 29.784 252.93 30.072C249.858 28.488 247.098 27.696 244.65 27.696C242.25 27.696 241.05 28.56 241.05 30.288C241.05 31.344 241.938 32.28 243.714 33.096C244.098 33.288 244.65 33.552 245.37 33.888C246.09 34.224 246.906 34.632 247.818 35.112C248.778 35.544 249.786 36.12 250.842 36.84C251.946 37.512 253.122 38.424 254.37 39.576C256.914 41.976 258.186 45.144 258.186 49.08C258.186 54.216 256.77 58.416 253.938 61.68C251.106 64.944 246.738 66.624 240.834 66.72C237.954 66.72 235.338 66.48 232.986 66C230.682 65.52 228.666 64.584 226.938 63.192C225.21 61.8 224.346 60.12 224.346 58.152C224.346 56.184 224.706 54.24 225.426 52.32C226.146 50.352 226.914 49.056 227.73 48.432ZM280.308 65.568C280.308 66.144 278.292 66.432 274.26 66.432C269.46 66.24 267.06 65.928 267.06 65.496V40.008H263.388C262.428 40.008 261.948 38.352 261.948 35.04C261.948 34.176 262.02 33.12 262.164 31.872C262.356 30.624 262.716 30 263.244 30H267.06V23.664C267.06 22.704 269.076 22.224 273.108 22.224C277.188 22.224 279.228 22.608 279.228 23.376V27.984L279.3 30H285.42C286.236 30 286.644 31.68 286.644 35.04C286.644 38.4 286.236 40.08 285.42 40.08H280.308V65.568ZM293.352 61.752C290.376 58.44 288.888 53.856 288.888 48C288.888 42.144 290.376 37.56 293.352 34.248C296.376 30.936 300.432 29.28 305.52 29.28C310.608 29.28 314.64 30.936 317.616 34.248C320.592 37.56 322.08 42.144 322.08 48C322.08 53.856 320.592 58.44 317.616 61.752C314.64 65.064 310.608 66.72 305.52 66.72C300.432 66.72 296.376 65.064 293.352 61.752ZM305.52 41.304C302.832 41.304 301.488 43.512 301.488 47.928C301.488 52.344 302.832 54.552 305.52 54.552C308.256 54.552 309.624 52.344 309.624 47.928C309.624 43.512 308.256 41.304 305.52 41.304ZM342.218 65.568C342.218 65.904 340.49 66.072 337.034 66.072C332.234 65.928 329.834 65.664 329.834 65.28V41.952H327.962C326.714 41.952 325.898 40.896 325.514 38.784C325.418 38.16 325.37 37.536 325.37 36.912C325.37 35.424 325.658 33.936 326.234 32.448C327.098 30.336 328.442 29.28 330.266 29.28C332.09 29.28 333.722 29.712 335.162 30.576C336.602 31.44 337.562 32.304 338.042 33.168C341.066 30.576 344.666 29.28 348.842 29.28C353.018 29.28 356.042 30.408 357.914 32.664C359.786 34.92 360.722 38.616 360.722 43.752V65.352C360.722 65.928 358.658 66.216 354.53 66.216C350.45 66.216 348.41 65.928 348.41 65.352V44.544C348.41 42.144 347.57 40.944 345.89 40.944C345.41 40.944 344.738 41.16 343.874 41.592C343.01 41.976 342.458 42.264 342.218 42.456V65.568ZM394.042 64.056C391.018 65.832 387.13 66.72 382.378 66.72C377.626 66.72 373.618 65.112 370.354 61.896C367.09 58.632 365.458 54.144 365.458 48.432C365.458 42.672 367.018 38.04 370.138 34.536C373.306 31.032 377.29 29.28 382.09 29.28C386.89 29.28 390.586 30.504 393.178 32.952C395.818 35.4 397.138 38.376 397.138 41.88C397.138 49.656 392.674 53.544 383.746 53.544H378.778C378.778 54.984 379.162 55.992 379.93 56.568C380.746 57.096 381.922 57.36 383.458 57.36C386.818 57.36 390.01 56.592 393.034 55.056C393.082 55.008 393.298 55.344 393.682 56.064C394.834 58.128 395.41 59.88 395.41 61.32C395.41 62.712 394.954 63.624 394.042 64.056ZM385.042 43.248C385.042 41.232 384.058 40.224 382.09 40.224C381.178 40.224 380.386 40.512 379.714 41.088C379.09 41.616 378.778 42.408 378.778 43.464V45.696H382.666C384.25 45.696 385.042 44.88 385.042 43.248Z\",\n    fill: \"#F9F6F6\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M459 82C481.091 82 499 64.0914 499 42C499 19.9086 481.091 2 459 2C436.909 2 419 19.9086 419 42C419 64.0914 436.909 82 459 82Z\",\n    fill: \"#FFF0ED\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M459 75.46C467.577 75.46 474.53 74.6855 474.53 73.73C474.53 72.7746 467.577 72 459 72C450.423 72 443.47 72.7746 443.47 73.73C443.47 74.6855 450.423 75.46 459 75.46Z\",\n    fill: \"#9D9D9D\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M459 65.5C458.204 65.5 457.441 65.1839 456.879 64.6213C456.316 64.0587 456 63.2957 456 62.5V19.5C456 18.7044 456.316 17.9413 456.879 17.3787C457.441 16.8161 458.204 16.5 459 16.5C459.796 16.5 460.559 16.8161 461.121 17.3787C461.684 17.9413 462 18.7044 462 19.5V62.5C462 63.2957 461.684 64.0587 461.121 64.6213C460.559 65.1839 459.796 65.5 459 65.5Z\",\n    fill: \"#C99B56\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M456 20.72C453.071 20.1625 450.357 18.798 448.162 16.7802C445.968 14.7624 444.381 12.1716 443.58 9.3C441.495 11.3477 439.839 13.7903 438.709 16.4851C437.579 19.1798 436.996 22.0728 436.996 24.995C436.996 27.9172 437.579 30.8102 438.709 33.5049C439.839 36.1997 441.495 38.6423 443.58 40.69C444.382 37.8203 445.97 35.2316 448.165 33.2157C450.359 31.1998 453.073 29.8367 456 29.28V20.72Z\",\n    fill: \"#485362\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M474.41 9.3C473.61 12.1703 472.024 14.7601 469.832 16.7778C467.639 18.7955 464.927 20.1608 462 20.72V29.28C464.927 29.8392 467.639 31.2045 469.832 33.2222C472.024 35.2399 473.61 37.8297 474.41 40.7C476.495 38.6523 478.151 36.2097 479.281 33.5149C480.411 30.8202 480.994 27.9272 480.994 25.005C480.994 22.0828 480.411 19.1898 479.281 16.4951C478.151 13.8003 476.495 11.3578 474.41 9.31V9.3Z\",\n    fill: \"#485362\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M455.59 24.07V22.69C455.637 21.8188 456.017 20.9989 456.65 20.3989C457.283 19.799 458.123 19.4646 458.995 19.4646C459.867 19.4646 460.707 19.799 461.34 20.3989C461.973 20.9989 462.353 21.8188 462.4 22.69V24.07C465.726 23.4298 468.807 21.8737 471.297 19.5769C473.786 17.2801 475.585 14.3338 476.49 11.07C475.854 10.2347 475.159 9.44602 474.41 8.70999C473.616 11.5877 472.034 14.186 469.841 16.2112C467.648 18.2363 464.932 19.6076 462 20.17V19C462 18.606 461.922 18.2159 461.772 17.8519C461.621 17.488 461.4 17.1572 461.121 16.8787C460.843 16.6001 460.512 16.3791 460.148 16.2284C459.784 16.0776 459.394 16 459 16C458.606 16 458.216 16.0776 457.852 16.2284C457.488 16.3791 457.157 16.6001 456.879 16.8787C456.6 17.1572 456.379 17.488 456.228 17.8519C456.078 18.2159 456 18.606 456 19V20.22C453.067 19.6593 450.349 18.2888 448.154 16.2635C445.959 14.2382 444.374 11.639 443.58 8.75999C442.832 9.4963 442.136 10.285 441.5 11.12C442.413 14.3746 444.216 17.3103 446.704 19.5977C449.193 21.8851 452.27 23.4338 455.59 24.07Z\",\n    fill: \"#FCBC5D\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M459 65.5C458.204 65.5 457.441 65.1839 456.879 64.6213C456.316 64.0587 456 63.2956 456 62.5V19.5C456 18.7044 456.316 17.9413 456.879 17.3787C457.441 16.8161 458.204 16.5 459 16.5C459.796 16.5 460.559 16.8161 461.121 17.3787C461.684 17.9413 462 18.7044 462 19.5V62.5C462 63.2956 461.684 64.0587 461.121 64.6213C460.559 65.1839 459.796 65.5 459 65.5V65.5Z\",\n    stroke: \"#45413C\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M456 20.72C453.071 20.1625 450.357 18.798 448.162 16.7802C445.968 14.7624 444.381 12.1716 443.58 9.3C441.495 11.3477 439.839 13.7903 438.709 16.4851C437.579 19.1798 436.996 22.0728 436.996 24.995C436.996 27.9172 437.579 30.8102 438.709 33.5049C439.839 36.1997 441.495 38.6423 443.58 40.69C444.382 37.8203 445.97 35.2316 448.165 33.2157C450.359 31.1998 453.073 29.8367 456 29.28V20.72Z\",\n    stroke: \"#45413C\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M474.41 9.30946C474.41 9.30796 474.408 9.30767 474.407 9.30912C473.607 12.1758 472.022 14.7623 469.832 16.7778C467.842 18.6085 465.425 19.9022 462.808 20.5439C462.342 20.6582 462 21.0671 462 21.547V28.453C462 28.9329 462.342 29.3418 462.808 29.4561C465.425 30.0978 467.842 31.3915 469.832 33.2222C471.607 34.8561 472.985 36.8652 473.869 39.0946C474.15 39.8023 475.072 40.0408 475.572 39.4671C477.116 37.6968 478.37 35.6879 479.281 33.5149C480.411 30.8202 480.994 27.9272 480.994 25.005C480.994 22.0828 480.411 19.1898 479.281 16.4951C478.151 13.8005 476.495 11.3581 474.41 9.31038C474.41 9.31014 474.41 9.30981 474.41 9.30946V9.30946Z\",\n    stroke: \"#45413C\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }));\n};\n\nexports.LogoHome = LogoHome;\n\n//# sourceURL=webpack://our-game/./client/src/components/logos/Logo.tsx?");

/***/ }),

/***/ "./client/src/components/menu/Menu.tsx":
/*!*********************************************!*\
  !*** ./client/src/components/menu/Menu.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Menu = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\n__webpack_require__(/*! ./menu.css */ \"./client/src/components/menu/menu.css\");\n\nvar _content = __webpack_require__(/*! ../../data/content */ \"./client/src/data/content.ts\");\n\nconst Menu = ({\n  color\n}) => {\n  return /*#__PURE__*/_react.default.createElement(\"nav\", null, /*#__PURE__*/_react.default.createElement(\"ul\", null, /*#__PURE__*/_react.default.createElement(\"li\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: \"/\"\n  }, _content.menuMain)), /*#__PURE__*/_react.default.createElement(\"li\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: \"/\"\n  }, _content.menuAbout)), /*#__PURE__*/_react.default.createElement(\"li\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: \"/\"\n  }, _content.menuForum)), /*#__PURE__*/_react.default.createElement(\"li\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: \"/contact-us\"\n  }, _content.menuContact))));\n};\n\nexports.Menu = Menu;\n\n//# sourceURL=webpack://our-game/./client/src/components/menu/Menu.tsx?");

/***/ }),

/***/ "./client/src/components/menu/index.tsx":
/*!**********************************************!*\
  !*** ./client/src/components/menu/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Menu = __webpack_require__(/*! ./Menu */ \"./client/src/components/menu/Menu.tsx\");\n\nvar _default = _Menu.Menu;\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/components/menu/index.tsx?");

/***/ }),

/***/ "./client/src/components/modal/Modal.tsx":
/*!***********************************************!*\
  !*** ./client/src/components/modal/Modal.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Modal = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ \"react-modal\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../button */ \"./client/src/components/button/index.tsx\"));\n\n__webpack_require__(/*! ./modal.css */ \"./client/src/components/modal/modal.css\");\n\nconst Modal = ({\n  className,\n  children,\n  isOpen,\n  closeModalHandler\n}) => {\n  const classNames = (0, _classnames.default)(\"modal__content\", className);\n\n  _reactModal.default.setAppElement(\"#root\");\n\n  return /*#__PURE__*/_react.default.createElement(_reactModal.default, {\n    isOpen: isOpen,\n    portalClassName: \"modal__protal\",\n    overlayClassName: \"modal__overlay\",\n    className: classNames,\n    onRequestClose: closeModalHandler,\n    contentElement: (props, children) => /*#__PURE__*/_react.default.createElement(\"div\", props, children)\n  }, children, /*#__PURE__*/_react.default.createElement(_button.default, {\n    type: \"button\",\n    style: \"dark\",\n    className: \"button_close-modal\",\n    clickHandler: closeModalHandler\n  }, \"x\"));\n};\n\nexports.Modal = Modal;\n\n//# sourceURL=webpack://our-game/./client/src/components/modal/Modal.tsx?");

/***/ }),

/***/ "./client/src/components/modal/index.ts":
/*!**********************************************!*\
  !*** ./client/src/components/modal/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _Modal.Modal;\n  }\n}));\n\nvar _Modal = __webpack_require__(/*! ./Modal */ \"./client/src/components/modal/Modal.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/modal/index.ts?");

/***/ }),

/***/ "./client/src/components/spinner/Spinner.tsx":
/*!***************************************************!*\
  !*** ./client/src/components/spinner/Spinner.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Spinner = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\n__webpack_require__(/*! ./spinner.css */ \"./client/src/components/spinner/spinner.css\");\n\nconst Spinner = props => {\n  let className = (0, _classnames.default)(\"spinner\", `spinner_${props.color}`);\n  return /*#__PURE__*/_react.default.createElement(\"svg\", {\n    className: className,\n    viewBox: \"0 0 100 100\",\n    preserveAspectRatio: \"xMidYMid\"\n  }, /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50\",\n    stroke: \"none\"\n  }, /*#__PURE__*/_react.default.createElement(\"animateTransform\", {\n    attributeName: \"transform\",\n    type: \"rotate\",\n    dur: \"1.2048192771084336s\",\n    repeatCount: \"indefinite\",\n    keyTimes: \"0;1\",\n    values: \"0 50 51;360 50 51\"\n  })));\n};\n\nexports.Spinner = Spinner;\n\n//# sourceURL=webpack://our-game/./client/src/components/spinner/Spinner.tsx?");

/***/ }),

/***/ "./client/src/components/spinner/index.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/spinner/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Spinner = __webpack_require__(/*! ./Spinner */ \"./client/src/components/spinner/Spinner.tsx\");\n\nvar _default = _Spinner.Spinner;\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/components/spinner/index.tsx?");

/***/ }),

/***/ "./client/src/components/textareaField/TextareaField.tsx":
/*!***************************************************************!*\
  !*** ./client/src/components/textareaField/TextareaField.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.TextareaField = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _reactFinalForm = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n\n__webpack_require__(/*! ./textareafield.css */ \"./client/src/components/textareaField/textareafield.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst TextareaField = ({\n  className,\n  rows,\n  stretch,\n  name,\n  placeholder,\n  initialValue,\n  inputRef,\n  onBlur,\n  onFocus\n}) => {\n  const inputClassNames = (0, _classnames.default)(\"input-field\", {\n    \"input-field_fullwidth\": stretch\n  });\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {\n    name: name,\n    initialValue: initialValue\n  }, ({\n    input,\n    meta\n  }) => /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(\"textarea\", (0, _extends2.default)({\n    rows: rows\n  }, input, {\n    ref: inputRef,\n    className: inputClassNames,\n    placeholder: placeholder,\n    onBlur: onBlur,\n    onFocus: onFocus\n  })), (meta.error || meta.submitError) && meta.touched ? /*#__PURE__*/_react.default.createElement(\"span\", {\n    className: \"input-error\"\n  }, meta.error || meta.submitError) : null)));\n};\n\nexports.TextareaField = TextareaField;\n\n//# sourceURL=webpack://our-game/./client/src/components/textareaField/TextareaField.tsx?");

/***/ }),

/***/ "./client/src/components/textareaField/index.ts":
/*!******************************************************!*\
  !*** ./client/src/components/textareaField/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _TextareaField.TextareaField;\n  }\n}));\n\nvar _TextareaField = __webpack_require__(/*! ./TextareaField */ \"./client/src/components/textareaField/TextareaField.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/textareaField/index.ts?");

/***/ }),

/***/ "./client/src/components/title/Title.tsx":
/*!***********************************************!*\
  !*** ./client/src/components/title/Title.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Title = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\n__webpack_require__(/*! ./title.css */ \"./client/src/components/title/title.css\");\n\nconst Title = ({\n  text,\n  className,\n  level,\n  dark = false\n}) => {\n  const Tag = `h${level}`;\n  const classNames = (0, _classnames.default)(\"title\", `h${level}`, className, {\n    title_dark: dark\n  });\n  return /*#__PURE__*/_react.default.createElement(Tag, {\n    className: classNames\n  }, text);\n};\n\nexports.Title = Title;\n\n//# sourceURL=webpack://our-game/./client/src/components/title/Title.tsx?");

/***/ }),

/***/ "./client/src/components/title/index.ts":
/*!**********************************************!*\
  !*** ./client/src/components/title/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _Title.Title;\n  }\n}));\n\nvar _Title = __webpack_require__(/*! ./Title */ \"./client/src/components/title/Title.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/components/title/index.ts?");

/***/ }),

/***/ "./client/src/data/cards.ts":
/*!**********************************!*\
  !*** ./client/src/data/cards.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.stockCards = void 0;\n\nvar _card_ = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_1.png */ \"./client/src/assets/images/game/full-card/card_1.png\"));\n\nvar _card_2 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_2.png */ \"./client/src/assets/images/game/full-card/card_2.png\"));\n\nvar _card_3 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_3.png */ \"./client/src/assets/images/game/full-card/card_3.png\"));\n\nvar _card_4 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_4.png */ \"./client/src/assets/images/game/full-card/card_4.png\"));\n\nvar _card_5 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_5.png */ \"./client/src/assets/images/game/full-card/card_5.png\"));\n\nvar _card_6 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_6.png */ \"./client/src/assets/images/game/full-card/card_6.png\"));\n\nvar _card_7 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_7.png */ \"./client/src/assets/images/game/full-card/card_7.png\"));\n\nvar _card_8 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_8.png */ \"./client/src/assets/images/game/full-card/card_8.png\"));\n\nvar _card_9 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_9.png */ \"./client/src/assets/images/game/full-card/card_9.png\"));\n\nvar _card_10 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/full-card/card_10.png */ \"./client/src/assets/images/game/full-card/card_10.png\"));\n\nvar _card_1_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_1_fight.png */ \"./client/src/assets/images/game/fight-card/card_1_fight.png\"));\n\nvar _card_2_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_2_fight.png */ \"./client/src/assets/images/game/fight-card/card_2_fight.png\"));\n\nvar _card_3_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_3_fight.png */ \"./client/src/assets/images/game/fight-card/card_3_fight.png\"));\n\nvar _card_4_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_4_fight.png */ \"./client/src/assets/images/game/fight-card/card_4_fight.png\"));\n\nvar _card_5_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_5_fight.png */ \"./client/src/assets/images/game/fight-card/card_5_fight.png\"));\n\nvar _card_6_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_6_fight.png */ \"./client/src/assets/images/game/fight-card/card_6_fight.png\"));\n\nvar _card_7_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_7_fight.png */ \"./client/src/assets/images/game/fight-card/card_7_fight.png\"));\n\nvar _card_8_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_8_fight.png */ \"./client/src/assets/images/game/fight-card/card_8_fight.png\"));\n\nvar _card_9_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_9_fight.png */ \"./client/src/assets/images/game/fight-card/card_9_fight.png\"));\n\nvar _card_10_fight = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/fight-card/card_10_fight.png */ \"./client/src/assets/images/game/fight-card/card_10_fight.png\"));\n\nvar _card_1_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_1_dead.png */ \"./client/src/assets/images/game/dead-card/card_1_dead.png\"));\n\nvar _card_2_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_2_dead.png */ \"./client/src/assets/images/game/dead-card/card_2_dead.png\"));\n\nvar _card_3_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_3_dead.png */ \"./client/src/assets/images/game/dead-card/card_3_dead.png\"));\n\nvar _card_4_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_4_dead.png */ \"./client/src/assets/images/game/dead-card/card_4_dead.png\"));\n\nvar _card_5_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_5_dead.png */ \"./client/src/assets/images/game/dead-card/card_5_dead.png\"));\n\nvar _card_6_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_6_dead.png */ \"./client/src/assets/images/game/dead-card/card_6_dead.png\"));\n\nvar _card_7_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_7_dead.png */ \"./client/src/assets/images/game/dead-card/card_7_dead.png\"));\n\nvar _card_8_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_8_dead.png */ \"./client/src/assets/images/game/dead-card/card_8_dead.png\"));\n\nvar _card_9_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_9_dead.png */ \"./client/src/assets/images/game/dead-card/card_9_dead.png\"));\n\nvar _card_10_dead = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/dead-card/card_10_dead.png */ \"./client/src/assets/images/game/dead-card/card_10_dead.png\"));\n\nconst stockCards = [{\n  \"id\": 1,\n  \"type\": \"character\",\n  \"name\": \"Robin Goodsha\",\n  \"description\": \"Just couple of words about me,  can’t dance but ability to make Margarita on a high Level.\",\n  \"cost\": 3,\n  \"health\": 8,\n  \"attack\": 4,\n  \"imageFull\": _card_.default,\n  \"imageFight\": _card_1_fight.default,\n  \"imageFightDead\": _card_1_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 2,\n  \"type\": \"character\",\n  \"name\": \"Titanium JR.\",\n  \"description\": \"Young grand master of enemy.  Won olympic games in 1265. Still sleeping with his teddy bear.\",\n  \"cost\": 5,\n  \"health\": 4,\n  \"attack\": 7,\n  \"imageFull\": _card_2.default,\n  \"imageFight\": _card_2_fight.default,\n  \"imageFightDead\": _card_2_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 3,\n  \"type\": \"character\",\n  \"name\": \"Golem Edward\",\n  \"description\": \"He is slow, but to stronggg. Rich guy, in his parking he has Chevrolet Camaro 1967y\",\n  \"cost\": 3,\n  \"health\": 12,\n  \"attack\": 3,\n  \"imageFull\": _card_3.default,\n  \"imageFight\": _card_3_fight.default,\n  \"imageFightDead\": _card_3_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 4,\n  \"type\": \"character\",\n  \"name\": \"Lord Amstrong\",\n  \"description\": \"Lord, living in a castle, probably you heard about him some not nice words, but meantime, He is doing good things. He is a teacher in school\",\n  \"cost\": 2,\n  \"health\": 7,\n  \"attack\": 8,\n  \"imageFull\": _card_4.default,\n  \"imageFight\": _card_4_fight.default,\n  \"imageFightDead\": _card_4_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 5,\n  \"type\": \"character\",\n  \"name\": \"Laura Great\",\n  \"description\": \"Really love to read, spending hours with book in her hands. Good player in bridge.\",\n  \"cost\": 5,\n  \"health\": 6,\n  \"attack\": 10,\n  \"imageFull\": _card_5.default,\n  \"imageFight\": _card_5_fight.default,\n  \"imageFightDead\": _card_5_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 6,\n  \"type\": \"character\",\n  \"name\": \"Henry IX\",\n  \"description\": \"Spend some time in magic guide. Didn’t finish Self learner. Looking for a job\",\n  \"cost\": 5,\n  \"health\": 8,\n  \"attack\": 9,\n  \"imageFull\": _card_6.default,\n  \"imageFight\": _card_6_fight.default,\n  \"imageFightDead\": _card_6_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 7,\n  \"type\": \"character\",\n  \"name\": \"Ursula\",\n  \"description\": \"Warior, with huge expirience.\",\n  \"cost\": 4,\n  \"health\": 12,\n  \"attack\": 7,\n  \"imageFull\": _card_7.default,\n  \"imageFight\": _card_7_fight.default,\n  \"imageFightDead\": _card_7_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 8,\n  \"type\": \"character\",\n  \"name\": \"Landergof\",\n  \"description\": \"Hard worker, nice singer.\",\n  \"cost\": 7,\n  \"health\": 8,\n  \"attack\": 11,\n  \"imageFull\": _card_8.default,\n  \"imageFight\": _card_8_fight.default,\n  \"imageFightDead\": _card_8_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 9,\n  \"type\": \"character\",\n  \"name\": \"Switsha\",\n  \"description\": \"Miner.\",\n  \"cost\": 3,\n  \"health\": 10,\n  \"attack\": 11,\n  \"imageFull\": _card_9.default,\n  \"imageFight\": _card_9_fight.default,\n  \"imageFightDead\": _card_9_dead.default,\n  \"isLeave\": true\n}, {\n  \"id\": 10,\n  \"type\": \"character\",\n  \"name\": \"Wispy\",\n  \"description\": \"Main monster\",\n  \"cost\": 8,\n  \"health\": 20,\n  \"attack\": 5,\n  \"imageFull\": _card_10.default,\n  \"imageFight\": _card_10_fight.default,\n  \"imageFightDead\": _card_10_dead.default,\n  \"isLeave\": true\n}];\nexports.stockCards = stockCards;\n\n//# sourceURL=webpack://our-game/./client/src/data/cards.ts?");

/***/ }),

/***/ "./client/src/data/content.ts":
/*!************************************!*\
  !*** ./client/src/data/content.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.invalidImageResError = exports.noAvatarError = exports.newPasswordMatchError = exports.passwordError = exports.phoneError = exports.emailError = exports.loginError = exports.thankYouText = exports.contactUsTitle = exports.messageLabel = exports.titleLabel = exports.emailLabel = exports.nameLabel = exports.lightButtonHomeLabel = exports.darkButtonHomeLabel = exports.backToProfile = exports.startNew = exports.menuRegister = exports.menuLogin = exports.menuContact = exports.menuForum = exports.menuAbout = exports.menuMain = exports.homeDescription = exports.isEmptyField = exports.emailIsNotValid = exports.minLengthField = exports.errorMessage404 = exports.footerMessage = void 0;\nconst footerMessage = \"Все права защищены 2021\";\nexports.footerMessage = footerMessage;\nconst errorMessage404 = \"Страница не найдена\";\nexports.errorMessage404 = errorMessage404;\nconst minLengthField = \"Длина поля должна быть больше 6 символов\";\nexports.minLengthField = minLengthField;\nconst emailIsNotValid = \"Введите валидный email\";\nexports.emailIsNotValid = emailIsNotValid;\nconst isEmptyField = 'Это поле не может быть пустым';\nexports.isEmptyField = isEmptyField;\nconst homeDescription = `Давным давно собрались несколько гномов  для того что б создать гильдию из добротных и сильных персон что б выжить в этом сложном мире. Им прийдется преодолеть\nдолгий и трудный путь. Но бок об бок они справятся со всеми трудностями.`;\nexports.homeDescription = homeDescription;\nconst menuMain = \"Главная\";\nexports.menuMain = menuMain;\nconst menuAbout = \"О нас\";\nexports.menuAbout = menuAbout;\nconst menuForum = \"Форум\";\nexports.menuForum = menuForum;\nconst menuContact = \"Связаться с нами\";\nexports.menuContact = menuContact;\nconst menuLogin = \"Логин\";\nexports.menuLogin = menuLogin;\nconst menuRegister = \"Регистрация\";\nexports.menuRegister = menuRegister;\nconst startNew = \"Начать заново\";\nexports.startNew = startNew;\nconst backToProfile = \"В профиль\";\nexports.backToProfile = backToProfile;\nconst darkButtonHomeLabel = 'Связаться с нами';\nexports.darkButtonHomeLabel = darkButtonHomeLabel;\nconst lightButtonHomeLabel = 'На кофе';\nexports.lightButtonHomeLabel = lightButtonHomeLabel;\nconst nameLabel = 'Имя';\nexports.nameLabel = nameLabel;\nconst emailLabel = 'Почта';\nexports.emailLabel = emailLabel;\nconst titleLabel = 'Заголовок';\nexports.titleLabel = titleLabel;\nconst messageLabel = 'Сообщение';\nexports.messageLabel = messageLabel;\nconst contactUsTitle = 'Написать нам';\nexports.contactUsTitle = contactUsTitle;\nconst thankYouText = 'Спасибо ваще сообщение принято! Мы отреагируем в ближайшее время';\nexports.thankYouText = thankYouText;\nconst loginError = \"Логин может содержать буквы и цифры и быть от 2 до 12 символов\";\nexports.loginError = loginError;\nconst emailError = \"Введите валидный email\";\nexports.emailError = emailError;\nconst phoneError = 'Номер телефона должен быть записан в формате \"8XXXXXXXXXX\"';\nexports.phoneError = phoneError;\nconst passwordError = \"Пароль может содержать буквы и цифры и быть не короче 6 символов\";\nexports.passwordError = passwordError;\nconst newPasswordMatchError = \"Новый пароль не может совпадать со старым\";\nexports.newPasswordMatchError = newPasswordMatchError;\nconst noAvatarError = \"Загрузите файл\";\nexports.noAvatarError = noAvatarError;\nconst invalidImageResError = \"Допускаются расширения .png .jpeg .jpg\";\nexports.invalidImageResError = invalidImageResError;\n\n//# sourceURL=webpack://our-game/./client/src/data/content.ts?");

/***/ }),

/***/ "./client/src/data/numbers.ts":
/*!************************************!*\
  !*** ./client/src/data/numbers.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.userNumbersHealth = exports.userNumbersMana = exports.cardsNumbersStrength = exports.cardsNumbersHealth = exports.cardsNumbersMana = void 0;\n\nvar _cardHealth = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-0.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-0.png\"));\n\nvar _cardHealth2 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health.png */ \"./client/src/assets/images/game/card-numbers/health/card-health.png\"));\n\nvar _cardHealth3 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-1.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-1.png\"));\n\nvar _cardHealth4 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-2.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-2.png\"));\n\nvar _cardHealth5 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-3.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-3.png\"));\n\nvar _cardHealth6 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-4.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-4.png\"));\n\nvar _cardHealth7 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-5.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-5.png\"));\n\nvar _cardHealth8 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-6.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-6.png\"));\n\nvar _cardHealth9 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-7.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-7.png\"));\n\nvar _cardHealth10 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-8.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-8.png\"));\n\nvar _cardHealth11 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-9.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-9.png\"));\n\nvar _cardHealth12 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-10.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-10.png\"));\n\nvar _cardHealth13 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-11.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-11.png\"));\n\nvar _cardHealth14 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-12.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-12.png\"));\n\nvar _cardHealth15 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-13.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-13.png\"));\n\nvar _cardHealth16 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-14.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-14.png\"));\n\nvar _cardHealth17 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-15.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-15.png\"));\n\nvar _cardHealth18 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-16.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-16.png\"));\n\nvar _cardHealth19 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-17.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-17.png\"));\n\nvar _cardHealth20 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-18.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-18.png\"));\n\nvar _cardHealth21 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-19.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-19.png\"));\n\nvar _cardHealth22 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-20.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-20.png\"));\n\nvar _cardHealth23 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-21.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-21.png\"));\n\nvar _cardHealth24 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-22.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-22.png\"));\n\nvar _cardHealth25 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-23.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-23.png\"));\n\nvar _cardHealth26 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-24.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-24.png\"));\n\nvar _cardHealth27 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-25.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-25.png\"));\n\nvar _cardHealth28 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-26.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-26.png\"));\n\nvar _cardHealth29 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-27.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-27.png\"));\n\nvar _cardHealth30 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-28.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-28.png\"));\n\nvar _cardHealth31 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/health/card-health-29.png */ \"./client/src/assets/images/game/card-numbers/health/card-health-29.png\"));\n\nvar _health = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-0.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-0.png\"));\n\nvar _health2 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health.png */ \"./client/src/assets/images/game/card-numbers/life-user/health.png\"));\n\nvar _health3 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-1.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-1.png\"));\n\nvar _health4 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-2.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-2.png\"));\n\nvar _health5 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-3.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-3.png\"));\n\nvar _health6 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-4.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-4.png\"));\n\nvar _health7 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-5.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-5.png\"));\n\nvar _health8 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-6.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-6.png\"));\n\nvar _health9 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-7.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-7.png\"));\n\nvar _health10 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-8.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-8.png\"));\n\nvar _health11 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-9.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-9.png\"));\n\nvar _health12 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-10.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-10.png\"));\n\nvar _health13 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-11.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-11.png\"));\n\nvar _health14 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-12.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-12.png\"));\n\nvar _health15 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-13.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-13.png\"));\n\nvar _health16 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-14.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-14.png\"));\n\nvar _health17 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-15.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-15.png\"));\n\nvar _health18 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-16.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-16.png\"));\n\nvar _health19 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-17.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-17.png\"));\n\nvar _health20 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-18.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-18.png\"));\n\nvar _health21 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-19.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-19.png\"));\n\nvar _health22 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-20.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-20.png\"));\n\nvar _health23 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-21.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-21.png\"));\n\nvar _health24 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-22.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-22.png\"));\n\nvar _health25 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-23.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-23.png\"));\n\nvar _health26 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-24.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-24.png\"));\n\nvar _health27 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-25.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-25.png\"));\n\nvar _health28 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-26.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-26.png\"));\n\nvar _health29 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-27.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-27.png\"));\n\nvar _health30 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-28.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-28.png\"));\n\nvar _health31 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/life-user/health-29.png */ \"./client/src/assets/images/game/card-numbers/life-user/health-29.png\"));\n\nvar _mana = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-0.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-0.png\"));\n\nvar _mana2 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana.png\"));\n\nvar _mana3 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-1.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-1.png\"));\n\nvar _mana4 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-2.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-2.png\"));\n\nvar _mana5 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-3.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-3.png\"));\n\nvar _mana6 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-4.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-4.png\"));\n\nvar _mana7 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-5.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-5.png\"));\n\nvar _mana8 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-6.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-6.png\"));\n\nvar _mana9 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-7.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-7.png\"));\n\nvar _mana10 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-8.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-8.png\"));\n\nvar _mana11 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-9.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-9.png\"));\n\nvar _mana12 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-10.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-10.png\"));\n\nvar _mana13 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-11.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-11.png\"));\n\nvar _mana14 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-12.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-12.png\"));\n\nvar _mana15 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-13.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-13.png\"));\n\nvar _mana16 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-14.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-14.png\"));\n\nvar _mana17 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-15.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-15.png\"));\n\nvar _mana18 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-16.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-16.png\"));\n\nvar _mana19 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-17.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-17.png\"));\n\nvar _mana20 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-18.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-18.png\"));\n\nvar _mana21 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-19.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-19.png\"));\n\nvar _mana22 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-20.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-20.png\"));\n\nvar _mana23 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-21.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-21.png\"));\n\nvar _mana24 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-22.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-22.png\"));\n\nvar _mana25 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-23.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-23.png\"));\n\nvar _mana26 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-24.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-24.png\"));\n\nvar _mana27 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-25.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-25.png\"));\n\nvar _mana28 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-26.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-26.png\"));\n\nvar _mana29 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-27.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-27.png\"));\n\nvar _mana30 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-28.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-28.png\"));\n\nvar _mana31 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana-user/mana-29.png */ \"./client/src/assets/images/game/card-numbers/mana-user/mana-29.png\"));\n\nvar _cardStrength = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength.png\"));\n\nvar _cardStrength2 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-1.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-1.png\"));\n\nvar _cardStrength3 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-2.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-2.png\"));\n\nvar _cardStrength4 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-3.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-3.png\"));\n\nvar _cardStrength5 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-4.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-4.png\"));\n\nvar _cardStrength6 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-5.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-5.png\"));\n\nvar _cardStrength7 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-6.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-6.png\"));\n\nvar _cardStrength8 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-7.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-7.png\"));\n\nvar _cardStrength9 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-8.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-8.png\"));\n\nvar _cardStrength10 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-9.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-9.png\"));\n\nvar _cardStrength11 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-10.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-10.png\"));\n\nvar _cardStrength12 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-11.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-11.png\"));\n\nvar _cardStrength13 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-12.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-12.png\"));\n\nvar _cardStrength14 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-13.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-13.png\"));\n\nvar _cardStrength15 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-14.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-14.png\"));\n\nvar _cardStrength16 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-15.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-15.png\"));\n\nvar _cardStrength17 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-16.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-16.png\"));\n\nvar _cardStrength18 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-17.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-17.png\"));\n\nvar _cardStrength19 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-18.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-18.png\"));\n\nvar _cardStrength20 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-19.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-19.png\"));\n\nvar _cardStrength21 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-20.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-20.png\"));\n\nvar _cardStrength22 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-21.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-21.png\"));\n\nvar _cardStrength23 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-22.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-22.png\"));\n\nvar _cardStrength24 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-23.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-23.png\"));\n\nvar _cardStrength25 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-24.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-24.png\"));\n\nvar _cardStrength26 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-25.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-25.png\"));\n\nvar _cardStrength27 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-26.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-26.png\"));\n\nvar _cardStrength28 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-27.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-27.png\"));\n\nvar _cardStrength29 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-28.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-28.png\"));\n\nvar _cardStrength30 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/strength/card-strength-29.png */ \"./client/src/assets/images/game/card-numbers/strength/card-strength-29.png\"));\n\nvar _cardMana = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-10.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-10.png\"));\n\nvar _cardMana2 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-1.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-1.png\"));\n\nvar _cardMana3 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-2.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-2.png\"));\n\nvar _cardMana4 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-3.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-3.png\"));\n\nvar _cardMana5 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-4.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-4.png\"));\n\nvar _cardMana6 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-5.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-5.png\"));\n\nvar _cardMana7 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-6.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-6.png\"));\n\nvar _cardMana8 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-7.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-7.png\"));\n\nvar _cardMana9 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-8.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-8.png\"));\n\nvar _cardMana10 = _interopRequireDefault(__webpack_require__(/*! ../assets/images/game/card-numbers/mana/card-mana-9.png */ \"./client/src/assets/images/game/card-numbers/mana/card-mana-9.png\"));\n\nconst cardsNumbersMana = id => {\n  const retNumber = {\n    cardsNumbersMana1: _cardMana2.default,\n    cardsNumbersMana2: _cardMana3.default,\n    cardsNumbersMana3: _cardMana4.default,\n    cardsNumbersMana4: _cardMana5.default,\n    cardsNumbersMana5: _cardMana6.default,\n    cardsNumbersMana6: _cardMana7.default,\n    cardsNumbersMana7: _cardMana8.default,\n    cardsNumbersMana8: _cardMana9.default,\n    cardsNumbersMana9: _cardMana10.default,\n    cardsNumbersMana10: _cardMana.default\n  };\n  return retNumber[`cardsNumbersMana${id}`];\n};\n\nexports.cardsNumbersMana = cardsNumbersMana;\n\nconst cardsNumbersHealth = id => {\n  const retNumber = {\n    cardsNumbersHealth0: _cardHealth.default,\n    cardsNumbersHealth1: _cardHealth2.default,\n    cardsNumbersHealth2: _cardHealth3.default,\n    cardsNumbersHealth3: _cardHealth4.default,\n    cardsNumbersHealth4: _cardHealth5.default,\n    cardsNumbersHealth5: _cardHealth6.default,\n    cardsNumbersHealth6: _cardHealth7.default,\n    cardsNumbersHealth7: _cardHealth8.default,\n    cardsNumbersHealth8: _cardHealth9.default,\n    cardsNumbersHealth9: _cardHealth10.default,\n    cardsNumbersHealth10: _cardHealth11.default,\n    cardsNumbersHealth11: _cardHealth12.default,\n    cardsNumbersHealth12: _cardHealth13.default,\n    cardsNumbersHealth13: _cardHealth14.default,\n    cardsNumbersHealth14: _cardHealth15.default,\n    cardsNumbersHealth15: _cardHealth16.default,\n    cardsNumbersHealth16: _cardHealth17.default,\n    cardsNumbersHealth17: _cardHealth18.default,\n    cardsNumbersHealth18: _cardHealth19.default,\n    cardsNumbersHealth19: _cardHealth20.default,\n    cardsNumbersHealth20: _cardHealth21.default,\n    cardsNumbersHealth21: _cardHealth22.default,\n    cardsNumbersHealth22: _cardHealth23.default,\n    cardsNumbersHealth23: _cardHealth24.default,\n    cardsNumbersHealth24: _cardHealth25.default,\n    cardsNumbersHealth25: _cardHealth26.default,\n    cardsNumbersHealth26: _cardHealth27.default,\n    cardsNumbersHealth27: _cardHealth28.default,\n    cardsNumbersHealth28: _cardHealth29.default,\n    cardsNumbersHealth29: _cardHealth30.default,\n    cardsNumbersHealth30: _cardHealth31.default\n  };\n  return retNumber[`cardsNumbersHealth${id}`];\n};\n\nexports.cardsNumbersHealth = cardsNumbersHealth;\n\nconst cardsNumbersStrength = id => {\n  const retNumber = {\n    cardsNumbersStrength1: _cardStrength.default,\n    cardsNumbersStrength2: _cardStrength2.default,\n    cardsNumbersStrength3: _cardStrength3.default,\n    cardsNumbersStrength4: _cardStrength4.default,\n    cardsNumbersStrength5: _cardStrength5.default,\n    cardsNumbersStrength6: _cardStrength6.default,\n    cardsNumbersStrength7: _cardStrength7.default,\n    cardsNumbersStrength8: _cardStrength8.default,\n    cardsNumbersStrength9: _cardStrength9.default,\n    cardsNumbersStrength10: _cardStrength10.default,\n    cardsNumbersStrength11: _cardStrength11.default,\n    cardsNumbersStrength12: _cardStrength12.default,\n    cardsNumbersStrength13: _cardStrength13.default,\n    cardsNumbersStrength14: _cardStrength14.default,\n    cardsNumbersStrength15: _cardStrength15.default,\n    cardsNumbersStrength16: _cardStrength16.default,\n    cardsNumbersStrength17: _cardStrength17.default,\n    cardsNumbersStrength18: _cardStrength18.default,\n    cardsNumbersStrength19: _cardStrength19.default,\n    cardsNumbersStrength20: _cardStrength20.default,\n    cardsNumbersStrength21: _cardStrength21.default,\n    cardsNumbersStrength22: _cardStrength22.default,\n    cardsNumbersStrength23: _cardStrength23.default,\n    cardsNumbersStrength24: _cardStrength24.default,\n    cardsNumbersStrength25: _cardStrength25.default,\n    cardsNumbersStrength26: _cardStrength26.default,\n    cardsNumbersStrength27: _cardStrength27.default,\n    cardsNumbersStrength28: _cardStrength28.default,\n    cardsNumbersStrength29: _cardStrength29.default,\n    cardsNumbersStrength30: _cardStrength30.default\n  };\n  return retNumber[`cardsNumbersStrength${id}`];\n};\n\nexports.cardsNumbersStrength = cardsNumbersStrength;\n\nconst userNumbersMana = id => {\n  const retNumber = {\n    userNumbersMana0: _mana.default,\n    userNumbersMana1: _mana2.default,\n    userNumbersMana2: _mana3.default,\n    userNumbersMana3: _mana4.default,\n    userNumbersMana4: _mana5.default,\n    userNumbersMana5: _mana6.default,\n    userNumbersMana6: _mana7.default,\n    userNumbersMana7: _mana8.default,\n    userNumbersMana8: _mana9.default,\n    userNumbersMana9: _mana10.default,\n    userNumbersMana10: _mana11.default,\n    userNumbersMana11: _mana12.default,\n    userNumbersMana12: _mana13.default,\n    userNumbersMana13: _mana14.default,\n    userNumbersMana14: _mana15.default,\n    userNumbersMana15: _mana16.default,\n    userNumbersMana16: _mana17.default,\n    userNumbersMana17: _mana18.default,\n    userNumbersMana18: _mana19.default,\n    userNumbersMana19: _mana20.default,\n    userNumbersMana20: _mana21.default,\n    userNumbersMana21: _mana22.default,\n    userNumbersMana22: _mana23.default,\n    userNumbersMana23: _mana24.default,\n    userNumbersMana24: _mana25.default,\n    userNumbersMana25: _mana26.default,\n    userNumbersMana26: _mana27.default,\n    userNumbersMana27: _mana28.default,\n    userNumbersMana28: _mana29.default,\n    userNumbersMana29: _mana30.default,\n    userNumbersMana30: _mana31.default\n  };\n  return retNumber[`userNumbersMana${id}`];\n};\n\nexports.userNumbersMana = userNumbersMana;\n\nconst userNumbersHealth = id => {\n  const retNumber = {\n    userNumbersHealth0: _health.default,\n    userNumbersHealth1: _health2.default,\n    userNumbersHealth2: _health3.default,\n    userNumbersHealth3: _health4.default,\n    userNumbersHealth4: _health5.default,\n    userNumbersHealth5: _health6.default,\n    userNumbersHealth6: _health7.default,\n    userNumbersHealth7: _health8.default,\n    userNumbersHealth8: _health9.default,\n    userNumbersHealth9: _health10.default,\n    userNumbersHealth10: _health11.default,\n    userNumbersHealth11: _health12.default,\n    userNumbersHealth12: _health13.default,\n    userNumbersHealth13: _health14.default,\n    userNumbersHealth14: _health15.default,\n    userNumbersHealth15: _health16.default,\n    userNumbersHealth16: _health17.default,\n    userNumbersHealth17: _health18.default,\n    userNumbersHealth18: _health19.default,\n    userNumbersHealth19: _health20.default,\n    userNumbersHealth20: _health21.default,\n    userNumbersHealth21: _health22.default,\n    userNumbersHealth22: _health23.default,\n    userNumbersHealth23: _health24.default,\n    userNumbersHealth24: _health25.default,\n    userNumbersHealth25: _health26.default,\n    userNumbersHealth26: _health27.default,\n    userNumbersHealth27: _health28.default,\n    userNumbersHealth28: _health29.default,\n    userNumbersHealth29: _health30.default,\n    userNumbersHealth30: _health31.default\n  };\n  return retNumber[`userNumbersHealth${id}`];\n};\n\nexports.userNumbersHealth = userNumbersHealth;\n\n//# sourceURL=webpack://our-game/./client/src/data/numbers.ts?");

/***/ }),

/***/ "./client/src/gameEngine/Board/Board.tsx":
/*!***********************************************!*\
  !*** ./client/src/gameEngine/Board/Board.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Board = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactToastify = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n\nvar _leftDecor = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/game/left-decor.png */ \"./client/src/assets/images/game/left-decor.png\"));\n\nvar _rightDecor = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/game/right-decor.png */ \"./client/src/assets/images/game/right-decor.png\"));\n\nvar _greenBg = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/game/green-bg.png */ \"./client/src/assets/images/game/green-bg.png\"));\n\nvar _deck = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/game/deck.jpg */ \"./client/src/assets/images/game/deck.jpg\"));\n\nvar _endTurn = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/game/end-turn.png */ \"./client/src/assets/images/game/end-turn.png\"));\n\nvar _BoardActivities = _interopRequireDefault(__webpack_require__(/*! ../BoardActivities */ \"./client/src/gameEngine/BoardActivities/index.ts\"));\n\nvar _user = __webpack_require__(/*! ../User/user */ \"./client/src/gameEngine/User/user.ts\");\n\nvar _shuffle = __webpack_require__(/*! ../eventHandler/shuffle */ \"./client/src/gameEngine/eventHandler/shuffle.ts\");\n\nvar _Arrow = __webpack_require__(/*! ../eventHandler/Arrow */ \"./client/src/gameEngine/eventHandler/Arrow.ts\");\n\nvar _sword = __webpack_require__(/*! ../Sword/sword */ \"./client/src/gameEngine/Sword/sword.tsx\");\n\n__webpack_require__(/*! ./board.css */ \"./client/src/gameEngine/Board/board.css\");\n\nvar _addCard = __webpack_require__(/*! ../eventHandler/addCard */ \"./client/src/gameEngine/eventHandler/addCard.ts\");\n\nvar _setCardData = __webpack_require__(/*! ../eventHandler/setCardData */ \"./client/src/gameEngine/eventHandler/setCardData.ts\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _EndGame = _interopRequireDefault(__webpack_require__(/*! ../EndGame */ \"./client/src/gameEngine/EndGame/index.ts\"));\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst Board = () => {\n  let location = (0, _reactRouterDom.useLocation)();\n  const gameId = location.pathname.split(\"/\")[2];\n  const firstUserDeck = (0, _shuffle.shulledCards)();\n  const secondUserDeck = (0, _shuffle.shulledCards)();\n  const firstUser = (0, _user.userInstance)(\"mainUser\", \"33\", firstUserDeck);\n  const secondUser = (0, _user.userInstance)(\"secondUser\", \"13\", secondUserDeck);\n  const [currentUser, setCurrentUser] = (0, _react.useState)(firstUser.id);\n  const [cardsToFight, setCardsToFight] = (0, _react.useState)([]);\n  const [endGameStatus, setEndGameStatus] = (0, _react.useState)({\n    status: false\n  });\n  const [gameState, setGameState] = (0, _react.useState)({\n    gameId,\n    firstUser,\n    secondUser,\n    currentUser\n  });\n  const [swordData, setSwordData] = (0, _react.useState)({\n    left: 0,\n    top: 0,\n    isActive: false\n  });\n  const canvasRef = (0, _react.useRef)();\n  const [eventLog, setEventLog] = (0, _react.useState)([\"Start game\"]);\n  const [gameElements, setGameElements] = (0, _react.useState)([]);\n  const [statusElements, setStatusElements] = (0, _react.useState)([]);\n\n  const onClickHandler = event => {\n    const canvas = canvasRef.current;\n    const elemLeft = canvas.offsetLeft + canvas.clientLeft;\n    const elemTop = canvas.offsetTop + canvas.clientTop;\n    let x = event.pageX - elemLeft,\n        y = event.pageY - elemTop;\n    gameElements.forEach(async function (element) {\n      if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {\n        const eventArr = eventLog;\n        eventArr.push(`${gameState.currentUser}-${element.name}`);\n\n        _reactToastify.toast.dark(`${gameState.currentUser}-${element.name}`);\n\n        setEventLog([...eventArr]);\n\n        switch (element.name) {\n          case \"UserCard\":\n            const userDefenderInstance = gameState.currentUser != gameState.firstUser.id ? gameState.firstUser : gameState.secondUser;\n            const isAllMinionsDead = userDefenderInstance === null || userDefenderInstance === void 0 ? void 0 : userDefenderInstance.fightDeck.filter(card => !card.isLeave);\n\n            if ((isAllMinionsDead === null || isAllMinionsDead === void 0 ? void 0 : isAllMinionsDead.length) != (userDefenderInstance === null || userDefenderInstance === void 0 ? void 0 : userDefenderInstance.fightDeck.length)) {\n              return;\n            }\n\n            if (element.user === userDefenderInstance.id && cardsToFight.length > 0) {\n              setCardsToFight(oldArray => [...oldArray, {\n                fightCard: {\n                  id: 0,\n                  type: \"user\",\n                  name: userDefenderInstance.name,\n                  description: userDefenderInstance.name,\n                  cost: userDefenderInstance.mana,\n                  health: userDefenderInstance.health,\n                  attack: 0,\n                  imageFull: \"\",\n                  imageFight: \"\",\n                  imageFightDead: \"\",\n                  isLeave: true\n                },\n                userHolder: element.user\n              }]);\n            }\n\n            break;\n\n          case \"CardFightDeck\":\n            const userInstance = element.user === gameState.firstUser.id ? gameState.firstUser : gameState.secondUser;\n            const currCard = userInstance === null || userInstance === void 0 ? void 0 : userInstance.fightDeck.find(card => card.id === element.id);\n            const isFigthed = userInstance === null || userInstance === void 0 ? void 0 : userInstance.isFightedDeck.find(card => card.id === element.id);\n            console.log(isFigthed);\n            console.log(!(currCard !== null && currCard !== void 0 && currCard.isLeave));\n\n            if (isFigthed || !(currCard !== null && currCard !== void 0 && currCard.isLeave)) {\n              return;\n            }\n\n            if (gameState.currentUser != element.user && !(currCard !== null && currCard !== void 0 && currCard.isLeave)) {\n              return;\n            }\n\n            if (gameState.currentUser != element.user && cardsToFight.length === 0) {\n              return;\n            }\n\n            if (cardsToFight.length === 0) {\n              setCardsToFight([{\n                fightCard: element.card,\n                userHolder: element.user\n              }]);\n            } else {\n              element.user != cardsToFight[0].userHolder ? setCardsToFight(oldArray => [...oldArray, {\n                fightCard: element.card,\n                userHolder: element.user\n              }]) : null;\n            }\n\n            if (cardsToFight.length < 2) {\n              if (swordData.isActive) {\n                setSwordData({\n                  left: 10,\n                  top: 10,\n                  isActive: false\n                });\n              }\n\n              console.log(element);\n              setSwordData({\n                left: element.left + element.width - 35,\n                top: element.top + element.height - 20,\n                isActive: true\n              });\n            }\n\n            console.log(cardsToFight);\n            break;\n\n          case \"endTurnButton\":\n            setStatusElements([]);\n            setCardsToFight([]);\n            console.log(element);\n\n            if (swordData.isActive) {\n              setSwordData({\n                left: 10,\n                top: 10,\n                isActive: false\n              });\n            }\n\n            const newGameState = { ...gameState\n            };\n            newGameState.currentUser = gameState.currentUser === gameState.firstUser.id ? gameState.secondUser.id : gameState.firstUser.id;\n            newGameState.firstUser.mana = newGameState.currentUser === gameState.firstUser.id ? gameState.firstUser.mana : gameState.firstUser.mana + 1;\n            newGameState.secondUser.mana = newGameState.currentUser === gameState.secondUser.id ? gameState.secondUser.mana : gameState.secondUser.mana + 1;\n            newGameState.secondUser.isFightedDeck = [];\n            newGameState.firstUser.isFightedDeck = [];\n            setGameState({ ...newGameState\n            });\n            addCardToUser(canvas, \"top\", gameState.currentUser);\n            const currentUserInstance = gameState.currentUser === gameState.firstUser.id ? gameState.firstUser : gameState.secondUser;\n            (0, _user.addMana)(currentUserInstance, canvas, gameState.currentUser === gameState.firstUser.id);\n            (0, _Arrow.ArrowHandler)(canvas, gameState.currentUser === gameState.firstUser.id ? \"top\" : \"bottom\");\n            break;\n\n          case \"CardDeck\":\n            const currUserInstance = gameState.currentUser === gameState.firstUser.id ? gameState.firstUser : gameState.secondUser;\n\n            if (element.cost > currUserInstance.mana) {\n              return;\n            }\n\n            if (element.isUsed || gameState.currentUser != element.user) {\n              return;\n            }\n\n            element.isUsed = true;\n            setGameElements(oldArray => [...oldArray, element]);\n            let position;\n            let newGameIsntance = { ...gameState\n            };\n\n            if (gameState.currentUser === gameState.firstUser.id) {\n              position = \"bottom\";\n            } else {\n              position = \"top\";\n            }\n\n            const currCardIncance = currUserInstance.deck.find(card => card.id === element.id);\n\n            if (element.user === gameState.currentUser && currUserInstance.mana >= currCardIncance.cost) {\n              const context = canvas.getContext(\"2d\");\n              context.fillStyle = \"rgba(255, 255, 255, 0.5)\";\n              context.fillRect(element.left, element.top, element.width, element.height);\n              currUserInstance.mana = currUserInstance.mana - currCardIncance.cost;\n              currUserInstance.fightDeck.push(currCardIncance);\n              (0, _user.useMana)(currUserInstance, canvas, gameState.currentUser === gameState.firstUser.id);\n              const fightCard = await (0, _addCard.addCardFight)(canvas, currUserInstance, position, currCardIncance);\n\n              if (position === \"top\") {\n                newGameIsntance = { ...newGameIsntance,\n                  secondUser: currUserInstance\n                };\n                setGameState(newGameIsntance);\n              } else {\n                newGameIsntance = { ...newGameIsntance,\n                  firstUser: currUserInstance\n                };\n                setGameState(newGameIsntance);\n              }\n\n              console.log(gameState);\n              setGameElements(oldArray => [...oldArray, {\n                id: fightCard.id,\n                card: currCardIncance,\n                name: `CardFightDeck`,\n                user: currUserInstance.id,\n                width: fightCard.cardWidth,\n                height: fightCard.cardHeight,\n                top: fightCard.top,\n                left: fightCard.left,\n                isUsed: false\n              }]);\n            }\n\n            break;\n\n          default:\n            break;\n        }\n      }\n    });\n  };\n\n  const addCardToUser = async (canvas, position, userId) => {\n    let userInstance;\n    let currentDec;\n\n    if (gameState.firstUser.id === userId) {\n      var _userInstance;\n\n      userInstance = gameState.firstUser;\n\n      if ((_userInstance = userInstance) !== null && _userInstance !== void 0 && _userInstance.userStockCard) {\n        var _userInstance2;\n\n        if (userInstance.userStockCard.length < 3) {\n          return;\n        }\n\n        currentDec = (_userInstance2 = userInstance) === null || _userInstance2 === void 0 ? void 0 : _userInstance2.userStockCard.pop();\n      }\n\n      setGameState(prevState => ({ ...prevState,\n        firstUser: userInstance\n      }));\n      position = \"bottom\";\n    } else {\n      var _userInstance3;\n\n      userInstance = gameState.secondUser;\n\n      if ((_userInstance3 = userInstance) !== null && _userInstance3 !== void 0 && _userInstance3.userStockCard) {\n        var _userInstance4;\n\n        if (userInstance.userStockCard.length < 3) {\n          return;\n        }\n\n        currentDec = (_userInstance4 = userInstance) === null || _userInstance4 === void 0 ? void 0 : _userInstance4.userStockCard.pop();\n      }\n\n      setGameState(prevState => ({ ...prevState,\n        secondUser: userInstance\n      }));\n      position = \"top\";\n    }\n\n    const card = await (0, _addCard.addCard)(canvas, userInstance, position, currentDec);\n    setGameElements(oldArray => [...oldArray, {\n      id: card.id,\n      name: `CardDeck`,\n      user: userInstance.id,\n      width: card.cardWidth,\n      height: card.cardHeight,\n      top: card.top,\n      left: card.left,\n      isUsed: false,\n      cost: card.cardMana\n    }]);\n    return card;\n  };\n\n  const addCardToFirstUser = async (canvas, position) => {\n    const deckOfCardsToLogic = gameState.firstUser;\n    const currentDec = deckOfCardsToLogic === null || deckOfCardsToLogic === void 0 ? void 0 : deckOfCardsToLogic.userStockCard.pop();\n    setGameState(prevState => ({ ...prevState,\n      firstUser: deckOfCardsToLogic\n    }));\n    const card = await (0, _addCard.addCard)(canvas, gameState.firstUser, position, currentDec);\n    setGameElements(oldArray => [...oldArray, {\n      id: card.id,\n      name: `CardDeck`,\n      user: gameState.firstUser.id,\n      width: card.cardWidth,\n      height: card.cardHeight,\n      top: card.top,\n      left: card.left,\n      isUsed: false,\n      cost: card.cardMana\n    }]);\n  };\n\n  const addCardToSecondUser = async (canvas, position) => {\n    const deckOfCardsToLogic = gameState.secondUser;\n    const currentDec = deckOfCardsToLogic === null || deckOfCardsToLogic === void 0 ? void 0 : deckOfCardsToLogic.userStockCard.pop();\n    setGameState(prevState => ({ ...prevState,\n      secondUser: deckOfCardsToLogic\n    }));\n    const card = await (0, _addCard.addCard)(canvas, gameState.secondUser, position, currentDec);\n    setGameElements(oldArray => [...oldArray, {\n      id: card.id,\n      name: `CardDeck`,\n      user: gameState.secondUser.id,\n      width: card.cardWidth,\n      height: card.cardHeight,\n      top: card.top,\n      left: card.left,\n      cost: card.cardMana,\n      isUsed: false\n    }]);\n  };\n\n  (0, _react.useEffect)(() => {\n    const canvas = canvasRef.current;\n\n    if (cardsToFight.length < 2) {\n      return;\n    }\n\n    const attackerUser = cardsToFight[0].userHolder === gameState.firstUser.id ? gameState.firstUser : gameState.secondUser;\n    const defenderUser = cardsToFight[1].userHolder === gameState.firstUser.id ? gameState.firstUser : gameState.secondUser;\n    const isAllMinionsDead = defenderUser === null || defenderUser === void 0 ? void 0 : defenderUser.fightDeck.filter(card => !card.isLeave);\n    console.log(\"isAllMinionsDead\", isAllMinionsDead);\n\n    if (cardsToFight[1].fightCard.type === \"user\") {\n      if (isAllMinionsDead.length != (defenderUser === null || defenderUser === void 0 ? void 0 : defenderUser.fightDeck.length)) {\n        return;\n      }\n\n      attackerUser.isFightedDeck.push(cardsToFight[0].fightCard);\n\n      if (defenderUser.health < cardsToFight[0].fightCard.attack) {\n        defenderUser.health = 0;\n        (0, _user.setUserHealth)(defenderUser, canvas, cardsToFight[0].userHolder === gameState.firstUser.id ? false : true); // setUserDead(\n        // \tdefenderUser,\n        // \tcanvas!,\n        // \tcardsToFight[0].userHolder === gameState.firstUser!.id\n        // \t\t\t? false\n        // \t\t\t: true\n        // )\n\n        setEndGameStatus({\n          status: true,\n          userData: attackerUser\n        });\n      } else {\n        defenderUser.health = defenderUser.health - cardsToFight[0].fightCard.attack;\n        (0, _user.setUserHealth)(defenderUser, canvas, cardsToFight[0].userHolder === gameState.firstUser.id ? false : true);\n      }\n\n      setCardsToFight([]); // setSwordData({ left: 10, top: 10, isActive: false });\n\n      return;\n    }\n\n    if (cardsToFight[0].fightCard.attack > cardsToFight[1].fightCard.health) {\n      (0, _addCard.addDeadCard)(canvas, defenderUser, cardsToFight[0].userHolder === gameState.firstUser.id ? \"top\" : \"bottom\", cardsToFight[1].fightCard);\n      const cardIndex = defenderUser.fightDeck.findIndex(card => card.id === cardsToFight[1].fightCard.id);\n      defenderUser.fightDeck[cardIndex].isLeave = false;\n      attackerUser.isFightedDeck.push(cardsToFight[0].fightCard);\n    } else {\n      const cardIndex = defenderUser.fightDeck.findIndex(card => card.id === cardsToFight[1].fightCard.id);\n      defenderUser.fightDeck[cardIndex].health = defenderUser.fightDeck[cardIndex].health - cardsToFight[0].fightCard.attack;\n      (0, _setCardData.setHealth)(canvas, defenderUser, cardsToFight[0].userHolder === gameState.firstUser.id ? \"top\" : \"bottom\", cardsToFight[1].fightCard, defenderUser.fightDeck[cardIndex].health);\n      attackerUser.isFightedDeck.push(cardsToFight[0].fightCard);\n    }\n\n    if (cardsToFight[0].userHolder === gameState.firstUser.id) {\n      setGameState(prevState => ({ ...prevState,\n        firstUser: attackerUser,\n        secondUser: defenderUser\n      }));\n    } else {\n      setGameState(prevState => ({ ...prevState,\n        firstUser: defenderUser,\n        secondUser: attackerUser\n      }));\n    }\n\n    setCardsToFight([]);\n    setSwordData({\n      left: 10,\n      top: 10,\n      isActive: false\n    });\n  }, [cardsToFight]);\n  (0, _react.useEffect)(() => {\n    (async function () {\n      const canvas = canvasRef.current;\n      const context = canvas.getContext(\"2d\"); // if (typeof localStorage.getItem(gameId) === null) {\n\n      await addCardToFirstUser(canvas, \"bottom\");\n      await addCardToFirstUser(canvas, \"bottom\");\n      await addCardToSecondUser(canvas, \"top\");\n      await addCardToSecondUser(canvas, \"top\");\n      (0, _Arrow.ArrowHandler)(canvas, \"bottom\"); // }\n\n      const userFirstClickElem = await (0, _user.userPics)(firstUser, canvas, true);\n      const userSecondClickElem = await (0, _user.userPics)(secondUser, canvas, false);\n      setGameElements(oldArray => [...oldArray, {\n        name: `UserCard`,\n        user: userSecondClickElem.user.id,\n        width: userSecondClickElem.width,\n        height: userSecondClickElem.height,\n        top: userSecondClickElem.top,\n        left: userSecondClickElem.left\n      }]);\n      setGameElements(oldArray => [...oldArray, {\n        name: `UserCard`,\n        user: userFirstClickElem.user.id,\n        width: userFirstClickElem.width,\n        height: userFirstClickElem.height,\n        top: userFirstClickElem.top,\n        left: userFirstClickElem.left\n      }]);\n    })();\n  }, []);\n  (0, _react.useEffect)(() => {\n    const canvas = canvasRef.current;\n    const context = canvas.getContext(\"2d\");\n    const contextTopDeck = canvas.getContext(\"2d\");\n    const leftDecoration = new Image();\n    const rightDecoration = new Image();\n    const topDeck = new Image();\n    const bottomDeck = new Image();\n    const bgCover = new Image();\n    const endTurnButton = new Image();\n    endTurnButton.src = _endTurn.default;\n    leftDecoration.src = _leftDecor.default;\n    rightDecoration.src = _rightDecor.default;\n    bgCover.src = _greenBg.default;\n    topDeck.src = _deck.default;\n    bottomDeck.src = _deck.default;\n\n    endTurnButton.onload = () => {\n      context.imageSmoothingEnabled = false;\n      context.drawImage(endTurnButton, 900, 320, endTurnButton.naturalWidth, endTurnButton.naturalHeight);\n      console.log(endTurnButton.naturalWidth);\n      console.log(endTurnButton.naturalHeight);\n      setGameElements(oldArray => [...oldArray, {\n        name: \"endTurnButton\",\n        width: endTurnButton.naturalWidth,\n        height: endTurnButton.naturalHeight,\n        top: 320,\n        left: 900\n      }]);\n    };\n\n    rightDecoration.onload = () => {\n      context.imageSmoothingEnabled = false;\n      context.drawImage(rightDecoration, 1168, 50, rightDecoration.naturalWidth, rightDecoration.naturalHeight);\n    };\n\n    topDeck.onload = () => {\n      contextTopDeck.imageSmoothingEnabled = false;\n      contextTopDeck.drawImage(topDeck, 1004, 178, topDeck.naturalWidth, topDeck.naturalHeight);\n      setGameElements(oldArray => [...oldArray, {\n        name: \"topDeck\",\n        width: topDeck.naturalWidth,\n        height: topDeck.naturalHeight,\n        top: 178,\n        left: 1004\n      }]);\n    };\n\n    bottomDeck.onload = () => {\n      context.imageSmoothingEnabled = false;\n      context.drawImage(bottomDeck, 1004, 401, bottomDeck.naturalWidth, bottomDeck.naturalHeight);\n      setGameElements(oldArray => [...oldArray, {\n        name: \"bottomDeck\",\n        width: bottomDeck.naturalWidth,\n        height: bottomDeck.naturalHeight,\n        top: 401,\n        left: 1004\n      }]);\n    };\n\n    leftDecoration.onload = () => {\n      context.imageSmoothingEnabled = false;\n      context.drawImage(leftDecoration, 0, 50, leftDecoration.naturalWidth, leftDecoration.naturalHeight);\n    };\n\n    context === null || context === void 0 ? void 0 : context.beginPath();\n    context.fillStyle = \"#3A2411\";\n    context.fillRect(0, 0, context.canvas.width, context.canvas.width);\n    context === null || context === void 0 ? void 0 : context.closePath();\n  }, []);\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"game\"\n  }, /*#__PURE__*/_react.default.createElement(_sword.Sword, swordData), /*#__PURE__*/_react.default.createElement(\"canvas\", {\n    onClick: onClickHandler,\n    height: \"720\",\n    width: \"1280\",\n    ref: canvasRef\n  }), /*#__PURE__*/_react.default.createElement(_EndGame.default, {\n    status: endGameStatus.status,\n    userData: endGameStatus.userData && endGameStatus.userData\n  }), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, {\n    position: \"top-right\",\n    autoClose: 5000,\n    hideProgressBar: false,\n    newestOnTop: false,\n    closeOnClick: true,\n    rtl: false,\n    pauseOnFocusLoss: true,\n    draggable: true,\n    pauseOnHover: true\n  }), /*#__PURE__*/_react.default.createElement(_BoardActivities.default, {\n    eventsLogs: eventLog\n  }));\n};\n\nexports.Board = Board;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/Board/Board.tsx?");

/***/ }),

/***/ "./client/src/gameEngine/Board/index.ts":
/*!**********************************************!*\
  !*** ./client/src/gameEngine/Board/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _Board.Board;\n  }\n}));\n\nvar _Board = __webpack_require__(/*! ./Board */ \"./client/src/gameEngine/Board/Board.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/Board/index.ts?");

/***/ }),

/***/ "./client/src/gameEngine/BoardActivities/BoardActivities.tsx":
/*!*******************************************************************!*\
  !*** ./client/src/gameEngine/BoardActivities/BoardActivities.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BoardActivities = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\n__webpack_require__(/*! ./boardActivities.css */ \"./client/src/gameEngine/BoardActivities/boardActivities.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst BoardActivities = ({\n  eventsLogs\n}) => {\n  // console.log(eventsLogs);\n  (0, _react.useEffect)(() => {}, [eventsLogs]);\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"eventLog\"\n  }, /*#__PURE__*/_react.default.createElement(\"h2\", null, \"Event Log\"), eventsLogs && eventsLogs.map((log, index) => /*#__PURE__*/_react.default.createElement(\"div\", {\n    key: index\n  }, /*#__PURE__*/_react.default.createElement(\"p\", null, log))));\n};\n\nexports.BoardActivities = BoardActivities;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/BoardActivities/BoardActivities.tsx?");

/***/ }),

/***/ "./client/src/gameEngine/BoardActivities/index.ts":
/*!********************************************************!*\
  !*** ./client/src/gameEngine/BoardActivities/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _BoardActivities.BoardActivities;\n  }\n}));\n\nvar _BoardActivities = __webpack_require__(/*! ./BoardActivities */ \"./client/src/gameEngine/BoardActivities/BoardActivities.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/BoardActivities/index.ts?");

/***/ }),

/***/ "./client/src/gameEngine/EndGame/EndGame.tsx":
/*!***************************************************!*\
  !*** ./client/src/gameEngine/EndGame/EndGame.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.EndGame = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _modal = _interopRequireDefault(__webpack_require__(/*! ../../components/modal */ \"./client/src/components/modal/index.ts\"));\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\nvar _title = _interopRequireDefault(__webpack_require__(/*! ../../components/title */ \"./client/src/components/title/index.ts\"));\n\n__webpack_require__(/*! ./endGame.css */ \"./client/src/gameEngine/EndGame/endGame.css\");\n\nvar _content = __webpack_require__(/*! ../../data/content */ \"./client/src/data/content.ts\");\n\nconst EndGame = ({\n  status,\n  userData\n}) => {\n  const history = (0, _reactRouterDom.useHistory)();\n\n  const startNewHandler = () => {\n    history.push(`/game/${Math.floor(Math.random() * 10000)}`);\n  };\n\n  const backToProfileHandler = () => {\n    history.push(\"/profile\");\n  };\n\n  return /*#__PURE__*/_react.default.createElement(_modal.default, {\n    isOpen: status,\n    className: \"endGame\",\n    closeModalHandler: () => {}\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"endGame-modal\"\n  }, /*#__PURE__*/_react.default.createElement(_title.default, {\n    text: `Победил! ${userData && userData.name}`,\n    level: 1,\n    dark: true\n  }), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"endGame__button-container\"\n  }, /*#__PURE__*/_react.default.createElement(_button.default, {\n    type: \"button\",\n    style: \"primary\",\n    stretch: false,\n    clickHandler: startNewHandler\n  }, _content.startNew), /*#__PURE__*/_react.default.createElement(_button.default, {\n    type: \"button\",\n    style: \"dark\",\n    stretch: false,\n    clickHandler: backToProfileHandler\n  }, _content.backToProfile))));\n};\n\nexports.EndGame = EndGame;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/EndGame/EndGame.tsx?");

/***/ }),

/***/ "./client/src/gameEngine/EndGame/index.ts":
/*!************************************************!*\
  !*** ./client/src/gameEngine/EndGame/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _EndGame.EndGame;\n  }\n}));\n\nvar _EndGame = __webpack_require__(/*! ./EndGame */ \"./client/src/gameEngine/EndGame/EndGame.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/EndGame/index.ts?");

/***/ }),

/***/ "./client/src/gameEngine/Sword/sword.tsx":
/*!***********************************************!*\
  !*** ./client/src/gameEngine/Sword/sword.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Sword = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\n__webpack_require__(/*! ./sword.css */ \"./client/src/gameEngine/Sword/sword.css\");\n\nvar _sword2 = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/game/sword.png */ \"./client/src/assets/images/game/sword.png\"));\n\nconst Sword = ({\n  top,\n  left,\n  isActive\n}) => {\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"sword\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"sword__item\",\n    style: {\n      top: `${top}px`,\n      left: `${left}px`,\n      display: `${isActive ? \"block\" : \"none\"}`\n    }\n  }, /*#__PURE__*/_react.default.createElement(\"img\", {\n    src: _sword2.default,\n    alt: \"\"\n  })));\n};\n\nexports.Sword = Sword;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/Sword/sword.tsx?");

/***/ }),

/***/ "./client/src/gameEngine/User/user.ts":
/*!********************************************!*\
  !*** ./client/src/gameEngine/User/user.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.setUserHealth = exports.useMana = exports.addMana = exports.userPics = exports.userInstance = void 0;\n\nvar _defaultUser = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/game/default-user.png */ \"./client/src/assets/images/game/default-user.png\"));\n\nvar _profilePicWrapper = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/game/profile-pic-wrapper.png */ \"./client/src/assets/images/game/profile-pic-wrapper.png\"));\n\nvar _numbers = __webpack_require__(/*! ../../data/numbers */ \"./client/src/data/numbers.ts\");\n\nconst userInstance = (name, id, userStockCard, userPic) => {\n  return {\n    id,\n    name,\n    mana: 1,\n    health: 9,\n    deck: [],\n    imageProfile: userPic ? userPic : _defaultUser.default,\n    userStockCard: userStockCard,\n    fightDeck: [],\n    isFightedDeck: []\n  };\n};\n\nexports.userInstance = userInstance;\nconst USER_PIC_DATA = {\n  width: 128,\n  height: 124\n};\n\nconst userPics = (userProfile, canvas, current) => {\n  const context = canvas.getContext('2d');\n  const wrapperImg = new Image();\n  const userPic = new Image();\n  const userMana = new Image();\n  const userHealth = new Image();\n  wrapperImg.src = _profilePicWrapper.default;\n  userPic.src = userProfile.imageProfile;\n  userMana.src = (0, _numbers.userNumbersMana)(userProfile.mana.toString());\n  userHealth.src = (0, _numbers.userNumbersHealth)(userProfile.health.toString());\n\n  if (current) {\n    wrapperImg.onload = () => {\n      context.imageSmoothingEnabled = false;\n      context.drawImage(wrapperImg, 180, 370, wrapperImg.naturalWidth, wrapperImg.naturalHeight);\n\n      userPic.onload = () => {\n        context.imageSmoothingEnabled = false;\n        context.drawImage(userPic, 200, 390, userPic.naturalWidth, userPic.naturalHeight);\n\n        userHealth.onload = () => {\n          context.imageSmoothingEnabled = false;\n          context.drawImage(userHealth, 300, 490, userHealth.naturalWidth, userHealth.naturalHeight);\n        };\n\n        userMana.onload = () => {\n          context.imageSmoothingEnabled = false;\n          context.drawImage(userMana, 180, 490, userMana.naturalWidth, userMana.naturalHeight);\n        };\n      };\n    };\n  } else {\n    wrapperImg.onload = () => {\n      context.imageSmoothingEnabled = false;\n      context.drawImage(wrapperImg, 180, 190, wrapperImg.naturalWidth, wrapperImg.naturalHeight);\n\n      userPic.onload = () => {\n        context.imageSmoothingEnabled = false;\n        context.drawImage(userPic, 200, 210, userPic.naturalWidth, userPic.naturalHeight);\n      };\n\n      userMana.onload = () => {\n        context.imageSmoothingEnabled = false;\n        context.drawImage(userMana, 180, 310, userMana.naturalWidth, userMana.naturalHeight);\n      };\n\n      userHealth.onload = () => {\n        context.imageSmoothingEnabled = false;\n        context.drawImage(userHealth, 300, 310, userHealth.naturalWidth, userHealth.naturalHeight);\n      };\n    };\n  }\n\n  return {\n    user: userProfile,\n    top: current ? 390 : 210,\n    left: 200,\n    width: USER_PIC_DATA.width,\n    height: USER_PIC_DATA.width\n  };\n};\n\nexports.userPics = userPics;\n\nconst addMana = (userData, canvas, current) => {\n  const context = canvas.getContext('2d');\n  const userMana = new Image();\n  userMana.src = (0, _numbers.userNumbersMana)(userData.mana.toString());\n  console.log(current);\n\n  userMana.onload = () => {\n    context.imageSmoothingEnabled = false;\n    context.drawImage(userMana, 180, current ? 490 : 310, userMana.naturalWidth, userMana.naturalHeight);\n  };\n\n  context === null || context === void 0 ? void 0 : context.save();\n};\n\nexports.addMana = addMana;\n\nconst useMana = (userData, canvas, current) => {\n  const context = canvas.getContext('2d');\n  const userMana = new Image();\n  userMana.src = (0, _numbers.userNumbersMana)(userData.mana.toString());\n  console.log(current);\n\n  userMana.onload = () => {\n    context.imageSmoothingEnabled = false;\n    context.drawImage(userMana, 180, current ? 490 : 310, userMana.naturalWidth, userMana.naturalHeight);\n  };\n\n  context === null || context === void 0 ? void 0 : context.save();\n};\n\nexports.useMana = useMana;\n\nconst setUserHealth = (userData, canvas, current) => {\n  const context = canvas.getContext('2d');\n  const userHealth = new Image();\n  userHealth.src = (0, _numbers.userNumbersHealth)(userData.health.toString());\n  console.log(current);\n\n  userHealth.onload = () => {\n    context.imageSmoothingEnabled = false;\n    context.drawImage(userHealth, 300, current ? 490 : 310, userHealth.naturalWidth, userHealth.naturalHeight);\n  };\n\n  context === null || context === void 0 ? void 0 : context.save();\n};\n\nexports.setUserHealth = setUserHealth;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/User/user.ts?");

/***/ }),

/***/ "./client/src/gameEngine/eventHandler/Arrow.ts":
/*!*****************************************************!*\
  !*** ./client/src/gameEngine/eventHandler/Arrow.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ArrowHandler = void 0;\n\nconst ArrowHandler = (canvas, userPosition) => {\n  const ctx = canvas.getContext('2d');\n  const ctxShadow = canvas.getContext('2d');\n\n  if (ctx) {\n    const arrow = new Path2D();\n    const arrowShadow = new Path2D();\n    ctx.beginPath();\n\n    if (userPosition === 'top') {\n      arrow.moveTo(175, 280);\n      arrow.lineTo(155, 300);\n      arrow.lineTo(155, 260);\n    } else {\n      arrow.moveTo(175, 450);\n      arrow.lineTo(155, 470);\n      arrow.lineTo(155, 430);\n    }\n\n    ctx.fillStyle = \"#313e2d\";\n    ctx.fill(arrow);\n    ctx.closePath();\n    ctxShadow.beginPath();\n\n    if (userPosition === 'top') {\n      arrowShadow.moveTo(175, 450);\n      arrowShadow.lineTo(155, 470);\n      arrowShadow.lineTo(155, 430);\n    } else {\n      arrowShadow.moveTo(175, 280);\n      arrowShadow.lineTo(155, 300);\n      arrowShadow.lineTo(155, 260);\n    }\n\n    ctxShadow.fillStyle = \"#3A2411\";\n    ctxShadow.fill(arrowShadow);\n    ctxShadow.closePath();\n  }\n};\n\nexports.ArrowHandler = ArrowHandler;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/eventHandler/Arrow.ts?");

/***/ }),

/***/ "./client/src/gameEngine/eventHandler/addCard.ts":
/*!*******************************************************!*\
  !*** ./client/src/gameEngine/eventHandler/addCard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.addDeadCard = exports.addCardFight = exports.addCard = void 0;\nconst CARD_POSITION_DATA_FIGHT = {\n  width: 87,\n  height: 91\n};\nconst CARD_POSITION_DATA = {\n  width: 120,\n  height: 170\n};\n\nconst addCard = async (canvas, user, position, card) => {\n  let topPosition = 540;\n  const cont = canvas.getContext('2d');\n  const nextCard = new Image();\n  nextCard.src = card.imageFull;\n  user.deck.push(card);\n  const cardPosition = 130 * user.deck.length;\n\n  if (position === 'bottom') {\n    nextCard.addEventListener(\"load\", () => {\n      cont.imageSmoothingEnabled = false;\n      cont.drawImage(nextCard, 10 + cardPosition, 540);\n      cont === null || cont === void 0 ? void 0 : cont.save();\n    });\n  } else {\n    nextCard.addEventListener(\"load\", () => {\n      cont.imageSmoothingEnabled = false;\n      cont.drawImage(nextCard, 10 + cardPosition, 10);\n      cont === null || cont === void 0 ? void 0 : cont.save();\n    });\n    topPosition = 10;\n  }\n\n  return {\n    id: card.id,\n    left: 10 + cardPosition,\n    top: topPosition,\n    cardWidth: CARD_POSITION_DATA.width,\n    cardHeight: CARD_POSITION_DATA.height,\n    cardMana: card.cost\n  };\n};\n\nexports.addCard = addCard;\n\nconst addCardFight = (canvas, user, position, card) => {\n  const cont = canvas.getContext('2d');\n  const nextCard = new Image();\n  nextCard.src = card.imageFight;\n  let topPosition = 390;\n  const cardPosition = 90 * user.fightDeck.length;\n\n  if (position === 'bottom') {\n    nextCard.onload = () => {\n      cont.imageSmoothingEnabled = false;\n      cont.drawImage(nextCard, 270 + cardPosition, 390, nextCard.naturalWidth, nextCard.naturalHeight);\n    };\n  } else {\n    nextCard.onload = () => {\n      cont.imageSmoothingEnabled = false;\n      cont.drawImage(nextCard, 270 + cardPosition, 210, nextCard.naturalWidth, nextCard.naturalHeight);\n    };\n\n    topPosition = 210;\n  }\n\n  return {\n    id: card.id,\n    left: 270 + cardPosition,\n    top: topPosition,\n    cardWidth: CARD_POSITION_DATA_FIGHT.width,\n    cardHeight: CARD_POSITION_DATA_FIGHT.height\n  };\n};\n\nexports.addCardFight = addCardFight;\n\nconst addDeadCard = (canvas, user, position, card) => {\n  const cont = canvas.getContext('2d');\n  const nextCard = new Image();\n  nextCard.src = card.imageFightDead;\n  let topPosition = 390;\n  const findIndex = user.fightDeck.findIndex(item => item.id === card.id);\n  console.log(findIndex);\n  const cardPosition = 90 * (findIndex + 1);\n\n  if (position === 'bottom') {\n    nextCard.onload = () => {\n      cont.imageSmoothingEnabled = false;\n      cont.drawImage(nextCard, 270 + cardPosition, 390, nextCard.naturalWidth, nextCard.naturalHeight);\n    };\n  } else {\n    nextCard.onload = () => {\n      cont.imageSmoothingEnabled = false;\n      cont.drawImage(nextCard, 270 + cardPosition, 210, nextCard.naturalWidth, nextCard.naturalHeight);\n    };\n\n    topPosition = 210;\n  }\n\n  return {\n    id: card.id,\n    left: 270 + cardPosition,\n    top: topPosition,\n    cardWidth: CARD_POSITION_DATA_FIGHT.width,\n    cardHeight: CARD_POSITION_DATA_FIGHT.height\n  };\n};\n\nexports.addDeadCard = addDeadCard;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/eventHandler/addCard.ts?");

/***/ }),

/***/ "./client/src/gameEngine/eventHandler/setCardData.ts":
/*!***********************************************************!*\
  !*** ./client/src/gameEngine/eventHandler/setCardData.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.setHealth = void 0;\n\nvar _numbers = __webpack_require__(/*! ../../data/numbers */ \"./client/src/data/numbers.ts\");\n\nconst setHealth = (canvas, user, position, card, currentHealth) => {\n  const cont = canvas.getContext('2d');\n  const nextCard = new Image();\n  nextCard.src = (0, _numbers.cardsNumbersHealth)(currentHealth.toString());\n  let topPosition = 370;\n  const findIndex = user.fightDeck.findIndex(item => item.id === card.id);\n  console.log(findIndex);\n  const cardPosition = 90 * (findIndex + 1);\n\n  if (position === 'bottom') {\n    nextCard.onload = () => {\n      cont.imageSmoothingEnabled = false;\n      cont.drawImage(nextCard, 328 + cardPosition, 390, nextCard.naturalWidth, nextCard.naturalHeight);\n    };\n  } else {\n    nextCard.onload = () => {\n      cont.imageSmoothingEnabled = false;\n      cont.drawImage(nextCard, 328 + cardPosition, 210, nextCard.naturalWidth, nextCard.naturalHeight);\n    };\n\n    topPosition = 270;\n  }\n\n  return {\n    id: card.id,\n    left: 270 + cardPosition,\n    top: topPosition,\n    cardWidth: 87,\n    cardHeight: 91\n  };\n};\n\nexports.setHealth = setHealth;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/eventHandler/setCardData.ts?");

/***/ }),

/***/ "./client/src/gameEngine/eventHandler/shuffle.ts":
/*!*******************************************************!*\
  !*** ./client/src/gameEngine/eventHandler/shuffle.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.shulledCards = void 0;\n\nvar _cards = __webpack_require__(/*! ../../data/cards */ \"./client/src/data/cards.ts\");\n\nconst shulledCards = () => {\n  const stockShuffledCards = [..._cards.stockCards];\n  let currentIndex = stockShuffledCards.length;\n  let randomIndex;\n  let temporaryValue;\n\n  while (0 !== currentIndex) {\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1;\n    temporaryValue = stockShuffledCards[currentIndex];\n    stockShuffledCards[currentIndex] = stockShuffledCards[randomIndex];\n    stockShuffledCards[randomIndex] = temporaryValue;\n  }\n\n  return stockShuffledCards;\n};\n\nexports.shulledCards = shulledCards;\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/eventHandler/shuffle.ts?");

/***/ }),

/***/ "./client/src/layouts/SiteLayout/SiteLayout.tsx":
/*!******************************************************!*\
  !*** ./client/src/layouts/SiteLayout/SiteLayout.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.SiteLayout = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _header = _interopRequireDefault(__webpack_require__(/*! ../../components/header */ \"./client/src/components/header/index.ts\"));\n\nvar _footer = _interopRequireDefault(__webpack_require__(/*! ../../components/footer */ \"./client/src/components/footer/index.ts\"));\n\n__webpack_require__(/*! ./siteLayout.css */ \"./client/src/layouts/SiteLayout/siteLayout.css\");\n\nconst SiteLayout = ({\n  children,\n  bgColor\n}) => {\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: `global ${bgColor}`\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"global__inner\"\n  }, /*#__PURE__*/_react.default.createElement(_header.default, {\n    color: \"blue\"\n  }), children, /*#__PURE__*/_react.default.createElement(_footer.default, {\n    color: \"dark\"\n  })));\n};\n\nexports.SiteLayout = SiteLayout;\n\n//# sourceURL=webpack://our-game/./client/src/layouts/SiteLayout/SiteLayout.tsx?");

/***/ }),

/***/ "./client/src/layouts/gamelayout/GameLayout.tsx":
/*!******************************************************!*\
  !*** ./client/src/layouts/gamelayout/GameLayout.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.GameLayout = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\n__webpack_require__(/*! ./gamelayout.css */ \"./client/src/layouts/gamelayout/gamelayout.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst GameLayout = props => {\n  const {\n    children\n  } = props;\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"main\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"content\"\n  }, children)));\n};\n\nexports.GameLayout = GameLayout;\n\n//# sourceURL=webpack://our-game/./client/src/layouts/gamelayout/GameLayout.tsx?");

/***/ }),

/***/ "./client/src/layouts/gamelayout/index.ts":
/*!************************************************!*\
  !*** ./client/src/layouts/gamelayout/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _GameLayout.GameLayout;\n  }\n}));\n\nvar _GameLayout = __webpack_require__(/*! ./GameLayout */ \"./client/src/layouts/gamelayout/GameLayout.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/layouts/gamelayout/index.ts?");

/***/ }),

/***/ "./client/src/pages/404/Page404.tsx":
/*!******************************************!*\
  !*** ./client/src/pages/404/Page404.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Page404 = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\n__webpack_require__(/*! ./page404.css */ \"./client/src/pages/404/page404.css\");\n\nconst Page404 = ({\n  message\n}) => /*#__PURE__*/_react.default.createElement(\"div\", {\n  className: \"error\"\n}, /*#__PURE__*/_react.default.createElement(\"div\", {\n  className: \"error-content\"\n}, /*#__PURE__*/_react.default.createElement(\"div\", {\n  className: \"error-content__title\"\n}, /*#__PURE__*/_react.default.createElement(\"svg\", {\n  width: \"215\",\n  height: \"88\",\n  viewBox: \"0 0 215 88\",\n  fill: \"none\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, /*#__PURE__*/_react.default.createElement(\"path\", {\n  d: \"M64.64 50.12C65.44 50.12 65.84 53.16 65.84 59.24C65.84 65.24 65.44 68.24 64.64 68.24L56.72 68.36V83.48C56.72 84.36 55.08 85 51.8 85.4C48.52 85.8 45.68 86 43.28 86L38.36 85.76C34.28 85.44 32.24 84.72 32.24 83.6V68.72H8.36C6.28 66.64 4.4 63.96 2.72 60.68C1.04 57.32 0.2 54.92 0.2 53.48C0.2 51.96 0.44 50.76 0.92 49.88L27.2 3.32C27.52 2.68 29.96 2.2 34.52 1.88C39.16 1.56 44 1.39999 49.04 1.39999C54.08 1.39999 56.6 1.59999 56.6 1.99999L56.72 50.12H64.64ZM35.72 50.24V25.16L21.68 50.24H35.72ZM108.999 87.2C98.9988 87.2 90.7988 83.52 84.3988 76.16C78.0788 68.8 74.9188 58.04 74.9188 43.88C74.9188 29.72 78.1188 19.04 84.5188 11.84C90.9188 4.55999 99.1588 0.919994 109.239 0.919994C119.399 0.919994 127.599 4.52 133.839 11.72C140.079 18.92 143.199 29.76 143.199 44.24C143.199 58.72 139.999 69.52 133.599 76.64C127.279 83.68 119.079 87.2 108.999 87.2ZM108.999 23.96C105.959 23.96 103.359 25.72 101.199 29.24C99.1188 32.68 98.0788 37.6 98.0788 44C98.0788 50.4 99.0788 55.32 101.079 58.76C103.159 62.12 105.799 63.8 108.999 63.8C112.279 63.8 114.919 62.08 116.919 58.64C118.999 55.2 120.039 50.28 120.039 43.88C120.039 37.48 118.959 32.56 116.799 29.12C114.719 25.68 112.119 23.96 108.999 23.96ZM212.999 50.12C213.799 50.12 214.199 53.16 214.199 59.24C214.199 65.24 213.799 68.24 212.999 68.24L205.079 68.36V83.48C205.079 84.36 203.439 85 200.159 85.4C196.879 85.8 194.039 86 191.639 86L186.719 85.76C182.639 85.44 180.599 84.72 180.599 83.6V68.72H156.719C154.639 66.64 152.759 63.96 151.079 60.68C149.399 57.32 148.559 54.92 148.559 53.48C148.559 51.96 148.799 50.76 149.279 49.88L175.559 3.32C175.879 2.68 178.319 2.2 182.879 1.88C187.519 1.56 192.359 1.39999 197.399 1.39999C202.439 1.39999 204.959 1.59999 204.959 1.99999L205.079 50.12H212.999ZM184.079 50.24V25.16L170.039 50.24H184.079Z\",\n  fill: \"#FCBC5D\"\n}))), /*#__PURE__*/_react.default.createElement(\"div\", {\n  className: \"error-content__description\"\n}, /*#__PURE__*/_react.default.createElement(\"p\", null, message)), /*#__PURE__*/_react.default.createElement(\"div\", {\n  className: \"error-content__button-home\"\n}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n  to: \"/\"\n}, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430 \\u0433\\u043B\\u0430\\u0432\\u043D\\u0443\\u044E\"))));\n\nexports.Page404 = Page404;\n\n//# sourceURL=webpack://our-game/./client/src/pages/404/Page404.tsx?");

/***/ }),

/***/ "./client/src/pages/404/index.tsx":
/*!****************************************!*\
  !*** ./client/src/pages/404/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Page = __webpack_require__(/*! ./Page404 */ \"./client/src/pages/404/Page404.tsx\");\n\nvar _default = {\n  component: _Page.Page404\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/404/index.tsx?");

/***/ }),

/***/ "./client/src/pages/contactUs/ContactUs.tsx":
/*!**************************************************!*\
  !*** ./client/src/pages/contactUs/ContactUs.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ContactUs = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactFinalForm = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n\nvar _inputField = _interopRequireDefault(__webpack_require__(/*! ../../components/inputField */ \"./client/src/components/inputField/index.ts\"));\n\nvar _textareaField = _interopRequireDefault(__webpack_require__(/*! ../../components/textareaField */ \"./client/src/components/textareaField/index.ts\"));\n\nvar _SiteLayout = __webpack_require__(/*! ../../layouts/SiteLayout/SiteLayout */ \"./client/src/layouts/SiteLayout/SiteLayout.tsx\");\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\nvar _title = _interopRequireDefault(__webpack_require__(/*! ../../components/title */ \"./client/src/components/title/index.ts\"));\n\nvar _generalError = _interopRequireDefault(__webpack_require__(/*! ../../components/generalError */ \"./client/src/components/generalError/index.tsx\"));\n\nvar _validate = __webpack_require__(/*! ../../utils/validate */ \"./client/src/utils/validate.ts\");\n\nvar _content = __webpack_require__(/*! ../../data/content */ \"./client/src/data/content.ts\");\n\n__webpack_require__(/*! ./contactUs.css */ \"./client/src/pages/contactUs/contactUs.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst formValues = [{\n  placeholder: _content.nameLabel,\n  name: \"name\",\n  type: \"text\"\n}, {\n  placeholder: _content.emailLabel,\n  name: \"email\",\n  type: \"email\"\n}, {\n  placeholder: _content.titleLabel,\n  name: \"title\",\n  type: \"text\"\n}, {\n  placeholder: _content.messageLabel,\n  name: \"message\",\n  rows: \"5\"\n}];\n\nconst ContactUs = () => {\n  const [isSent, setIsSent] = (0, _react.useState)(false);\n  const [error, setError] = (0, _react.useState)(null);\n\n  const renderInputs = () => {\n    return formValues.map((item, index) => {\n      if (item.rows) {\n        return /*#__PURE__*/_react.default.createElement(\"div\", {\n          key: index\n        }, /*#__PURE__*/_react.default.createElement(_textareaField.default, (0, _extends2.default)({\n          stretch: true,\n          className: \"contact__input\"\n        }, item)));\n      } else {\n        return /*#__PURE__*/_react.default.createElement(\"div\", {\n          key: index\n        }, /*#__PURE__*/_react.default.createElement(_inputField.default, (0, _extends2.default)({\n          stretch: true,\n          className: \"contact__input\"\n        }, item)));\n      }\n    });\n  };\n\n  const onSubmitHandler = async e => {\n    try {\n      // after successful submission show message\n      setIsSent(true);\n    } catch (err) {\n      setError(err);\n    }\n  };\n\n  return /*#__PURE__*/_react.default.createElement(_SiteLayout.SiteLayout, {\n    bgColor: \"secondary\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"contact\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"contact-left\"\n  }, /*#__PURE__*/_react.default.createElement(_title.default, {\n    text: _content.contactUsTitle,\n    level: 1\n  }), isSent ? /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"contact__message-success\"\n  }, /*#__PURE__*/_react.default.createElement(\"p\", null, _content.thankYouText)) : /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {\n    validate: _validate.validateContact,\n    onSubmit: onSubmitHandler,\n    render: ({\n      handleSubmit\n    }) => /*#__PURE__*/_react.default.createElement(\"form\", {\n      className: \"contact__form\",\n      onSubmit: handleSubmit\n    }, renderInputs(), /*#__PURE__*/_react.default.createElement(_button.default, {\n      className: \"contact__btn\",\n      type: \"submit\",\n      stretch: true,\n      style: \"primary\",\n      clickHandler: () => {}\n    }, \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"))\n  })), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"contact-right\"\n  }, /*#__PURE__*/_react.default.createElement(_title.default, {\n    level: 3,\n    text: \"\\u041D\\u0430\\u0448\\u0438 \\u0441\\u043E\\u0446\\u0438\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0441\\u0435\\u0442\\u0438\"\n  }))), error !== null ? /*#__PURE__*/_react.default.createElement(_generalError.default, {\n    message: error.message,\n    errorCode: error.errorCode,\n    errorStatus: error.errorStatus\n  }) : null);\n};\n\nexports.ContactUs = ContactUs;\n\n//# sourceURL=webpack://our-game/./client/src/pages/contactUs/ContactUs.tsx?");

/***/ }),

/***/ "./client/src/pages/contactUs/index.ts":
/*!*********************************************!*\
  !*** ./client/src/pages/contactUs/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _ContactUs = __webpack_require__(/*! ./ContactUs */ \"./client/src/pages/contactUs/ContactUs.tsx\");\n\nvar _default = {\n  component: _ContactUs.ContactUs\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/contactUs/index.ts?");

/***/ }),

/***/ "./client/src/pages/forum/Forum.tsx":
/*!******************************************!*\
  !*** ./client/src/pages/forum/Forum.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Forum = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactFinalForm = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\nvar _inputField = _interopRequireDefault(__webpack_require__(/*! ../../components/inputField */ \"./client/src/components/inputField/index.ts\"));\n\nvar _leftsideButton = _interopRequireDefault(__webpack_require__(/*! ../../components/leftsideButton */ \"./client/src/components/leftsideButton/index.ts\"));\n\nvar _spinner = _interopRequireDefault(__webpack_require__(/*! ../../components/spinner */ \"./client/src/components/spinner/index.tsx\"));\n\nvar _title = _interopRequireDefault(__webpack_require__(/*! ../../components/title */ \"./client/src/components/title/index.ts\"));\n\nvar _papers = _interopRequireDefault(__webpack_require__(/*! ./components/papers */ \"./client/src/pages/forum/components/papers/index.ts\"));\n\n__webpack_require__(/*! ./forum.css */ \"./client/src/pages/forum/forum.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst mockThreads = [{\n  id: 1,\n  title: \"Lorem ipsum dolor sit amet\",\n  replies: 3\n}, {\n  id: 2,\n  title: \"Consectetur adipiscing elit\",\n  replies: 0\n}, {\n  id: 3,\n  title: \"Sed do eiusmod tempor incididunt\",\n  replies: 15\n}];\n\nconst getThreads = () => {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(mockThreads);\n    }, 1000);\n  });\n};\n\nconst Forum = () => {\n  const [threads, setThreads] = (0, _react.useState)(null);\n  const onNewThreadSubmit = (0, _react.useCallback)(() => {\n    console.log(\"Создали тред\");\n  }, []);\n  let threadList;\n\n  if (!threads) {\n    getThreads().then(threads => {\n      setThreads(threads);\n    });\n    threadList = /*#__PURE__*/_react.default.createElement(_spinner.default, {\n      color: \"light\"\n    });\n  } else {\n    if (!threads.length) {\n      threadList = /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: \"forum__no-threads\"\n      }, \"\\u0417\\u0434\\u0435\\u0441\\u044C \\u043F\\u043E\\u043A\\u0430 \\u043F\\u0443\\u0441\\u0442\\u043E...\");\n    } else {\n      threadList = threads.map(thread => {\n        return /*#__PURE__*/_react.default.createElement(_react.Fragment, {\n          key: thread.id\n        }, /*#__PURE__*/_react.default.createElement(\"li\", {\n          className: \"forum__thread\"\n        }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n          to: `/forum/thread/${thread.id}`,\n          className: \"forum__thread-title\"\n        }, thread.title), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n          to: `/forum/thread/${thread.id}`,\n          className: \"forum__thread-right\"\n        }, /*#__PURE__*/_react.default.createElement(\"span\", {\n          className: \"forum__thread-replies\"\n        }, thread.replies), /*#__PURE__*/_react.default.createElement(_papers.default, null))), /*#__PURE__*/_react.default.createElement(\"hr\", {\n          className: \"forum__thread-hr\"\n        }));\n      });\n    }\n  }\n\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_leftsideButton.default, {\n    className: \"leftside-button_fixed\"\n  }), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"forum\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"forum__container\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"forum__body\"\n  }, /*#__PURE__*/_react.default.createElement(_title.default, {\n    level: 1,\n    text: \"\\u0424\\u043E\\u0440\\u0443\\u043C\"\n  }), /*#__PURE__*/_react.default.createElement(\"ul\", {\n    className: \"forum__thread-list\"\n  }, threadList), /*#__PURE__*/_react.default.createElement(_title.default, {\n    level: 2,\n    text: \"\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u0442\\u0435\\u043C\\u0443\"\n  }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {\n    onSubmit: onNewThreadSubmit,\n    render: ({\n      handleSubmit\n    }) => /*#__PURE__*/_react.default.createElement(\"form\", {\n      onSubmit: handleSubmit\n    }, /*#__PURE__*/_react.default.createElement(_inputField.default, {\n      type: \"text\",\n      name: \"title\",\n      placeholder: \"\\u0417\\u0430\\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u043A\",\n      stretch: true\n    }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {\n      name: \"message\"\n    }, ({\n      textarea\n    }) => /*#__PURE__*/_react.default.createElement(\"textarea\", (0, _extends2.default)({}, textarea, {\n      className: \"forum__message-area\",\n      placeholder: \"\\u0421\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\",\n      rows: 3\n    }))), /*#__PURE__*/_react.default.createElement(_button.default, {\n      className: \"\",\n      type: \"submit\",\n      stretch: true,\n      style: \"primary\",\n      clickHandler: () => {}\n    }, \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"))\n  })))));\n};\n\nexports.Forum = Forum;\n\n//# sourceURL=webpack://our-game/./client/src/pages/forum/Forum.tsx?");

/***/ }),

/***/ "./client/src/pages/forum/components/papers/Papers.tsx":
/*!*************************************************************!*\
  !*** ./client/src/pages/forum/components/papers/Papers.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Papers = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nconst Papers = () => {\n  return /*#__PURE__*/_react.default.createElement(\"svg\", {\n    width: \"45\",\n    height: \"40\",\n    viewBox: \"0 0 45 40\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/_react.default.createElement(\"g\", {\n    clipPath: \"url(#clip0)\"\n  }, /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M44.6336 5.0485C44.6074 5.02615 39.4309 0.545293 39.4309 0.545293C39.233 0.372949 39.0283 0.194824 38.6461 0.194824H17.806C17.1972 0.194824 16.702 0.644277 16.702 1.19678V4.27357L9.35686 5.41639C8.76812 5.51014 8.37218 6.02154 8.47417 6.55537L8.84696 8.52818C6.45953 9.2574 4.00841 10.0091 1.64215 10.7806C1.08302 10.9662 0.78959 11.5304 0.989109 12.041L5.69605 23.9172C5.79074 24.1562 6.03889 24.3051 6.30356 24.3051C6.37604 24.3051 6.44989 24.2939 6.52202 24.2703C6.85754 24.1608 7.03166 23.8251 6.91099 23.5206L2.27367 11.82C4.50299 11.0955 6.81166 10.3865 9.06791 9.69717L11.2861 21.4351L13.8386 34.9532C13.9307 35.4304 14.3929 35.7699 14.9145 35.7699C14.9735 35.7699 15.0334 35.7655 15.0935 35.7565L22.0066 34.6797L27.4086 33.8393L19.284 36.4898L12.8771 38.5807L7.90135 26.019C7.78076 25.7145 7.41108 25.5565 7.07547 25.6659C6.73996 25.7754 6.56583 26.111 6.68642 26.4155L11.7328 39.1557C11.8941 39.5563 12.3123 39.8054 12.7543 39.8054C12.8764 39.8054 13.0005 39.7863 13.1213 39.7462L19.7207 37.5926L34.7056 32.704L37.5683 32.2586H43.8923C44.501 32.2586 44.9962 31.8082 44.9962 31.2544V5.70873C44.9963 5.35803 44.7866 5.17912 44.6336 5.0485ZM42.9232 5.18725H39.6929L39.6128 5.18756C39.4582 5.1885 39.0961 5.19092 39.0042 5.10811C38.983 5.08896 38.9582 5.02506 38.9582 4.90639L38.9508 1.74896L42.9232 5.18725ZM43.7052 31.0866H17.9931V19.6673C17.9931 19.3437 17.704 19.0814 17.3475 19.0814C16.991 19.0814 16.702 19.3437 16.702 19.6673V31.2543C16.702 31.8079 17.1972 32.2585 17.806 32.2585H29.9262L21.7883 33.5246L15.0761 34.5701L12.5586 21.2369L9.78112 6.53928L16.7019 5.46248V16.9486C16.7019 17.2722 16.9909 17.5345 17.3474 17.5345C17.704 17.5345 17.993 17.2722 17.993 16.9486V1.36662H37.6587L37.6671 4.90771C37.6671 5.33693 37.811 5.68412 38.0946 5.93975C38.5304 6.33248 39.1464 6.35982 39.5288 6.35982C39.5617 6.35982 39.5929 6.35959 39.622 6.35943L43.7052 6.3592V31.0866Z\",\n    fill: \"#F9F6F6\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M21.1047 9.29297C21.1047 9.61656 21.3938 9.87891 21.7503 9.87891H40.2076C40.5641 9.87891 40.8532 9.61656 40.8532 9.29297C40.8532 8.96937 40.5641 8.70703 40.2076 8.70703H21.7503C21.3938 8.70703 21.1047 8.96937 21.1047 9.29297Z\",\n    fill: \"#F9F6F6\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M40.2076 12.8696H21.7503C21.3938 12.8696 21.1047 13.132 21.1047 13.4556C21.1047 13.7792 21.3938 14.0415 21.7503 14.0415H40.2076C40.5641 14.0415 40.8532 13.7792 40.8532 13.4556C40.8532 13.132 40.5641 12.8696 40.2076 12.8696Z\",\n    fill: \"#F9F6F6\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M40.2076 17.0322H21.7503C21.3938 17.0322 21.1047 17.2946 21.1047 17.6182C21.1047 17.9418 21.3938 18.2041 21.7503 18.2041H40.2076C40.5641 18.2041 40.8532 17.9418 40.8532 17.6182C40.8532 17.2946 40.5641 17.0322 40.2076 17.0322Z\",\n    fill: \"#F9F6F6\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M40.2076 21.1949H21.7503C21.3938 21.1949 21.1047 21.4573 21.1047 21.7809C21.1047 22.1045 21.3938 22.3668 21.7503 22.3668H40.2076C40.5641 22.3668 40.8532 22.1045 40.8532 21.7809C40.8532 21.4573 40.5641 21.1949 40.2076 21.1949Z\",\n    fill: \"#F9F6F6\"\n  }), /*#__PURE__*/_react.default.createElement(\"path\", {\n    d: \"M40.2076 25.3577H21.7503C21.3938 25.3577 21.1047 25.62 21.1047 25.9436C21.1047 26.2672 21.3938 26.5295 21.7503 26.5295H40.2076C40.5641 26.5295 40.8532 26.2672 40.8532 25.9436C40.8532 25.62 40.5641 25.3577 40.2076 25.3577Z\",\n    fill: \"#F9F6F6\"\n  })), /*#__PURE__*/_react.default.createElement(\"defs\", null, /*#__PURE__*/_react.default.createElement(\"clipPath\", {\n    id: \"clip0\"\n  }, /*#__PURE__*/_react.default.createElement(\"rect\", {\n    width: \"44.0698\",\n    height: \"40\",\n    fill: \"white\",\n    transform: \"translate(0.926514)\"\n  }))));\n};\n\nexports.Papers = Papers;\n\n//# sourceURL=webpack://our-game/./client/src/pages/forum/components/papers/Papers.tsx?");

/***/ }),

/***/ "./client/src/pages/forum/components/papers/index.ts":
/*!***********************************************************!*\
  !*** ./client/src/pages/forum/components/papers/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _Papers.Papers;\n  }\n}));\n\nvar _Papers = __webpack_require__(/*! ./Papers */ \"./client/src/pages/forum/components/papers/Papers.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/pages/forum/components/papers/index.ts?");

/***/ }),

/***/ "./client/src/pages/forum/index.ts":
/*!*****************************************!*\
  !*** ./client/src/pages/forum/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Forum = __webpack_require__(/*! ./Forum */ \"./client/src/pages/forum/Forum.tsx\");\n\nvar _default = {\n  component: _Forum.Forum\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/forum/index.ts?");

/***/ }),

/***/ "./client/src/pages/game/Game.tsx":
/*!****************************************!*\
  !*** ./client/src/pages/game/Game.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Game = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _Board = _interopRequireDefault(__webpack_require__(/*! ../../gameEngine/Board */ \"./client/src/gameEngine/Board/index.ts\"));\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst Game = () => {\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Board.default, null));\n};\n\nexports.Game = Game;\n\n//# sourceURL=webpack://our-game/./client/src/pages/game/Game.tsx?");

/***/ }),

/***/ "./client/src/pages/game/index.ts":
/*!****************************************!*\
  !*** ./client/src/pages/game/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Game = __webpack_require__(/*! ./Game */ \"./client/src/pages/game/Game.tsx\");\n\nvar _default = {\n  component: _Game.Game\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/game/index.ts?");

/***/ }),

/***/ "./client/src/pages/homepage/Homepage.tsx":
/*!************************************************!*\
  !*** ./client/src/pages/homepage/Homepage.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Homepage = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\n__webpack_require__(/*! ./homepage.css */ \"./client/src/pages/homepage/homepage.css\");\n\nvar _GameMedia = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/GameMedia.png */ \"./client/src/assets/images/GameMedia.png\"));\n\nvar _SiteLayout = __webpack_require__(/*! ../../layouts/SiteLayout/SiteLayout */ \"./client/src/layouts/SiteLayout/SiteLayout.tsx\");\n\nvar _Logo = __webpack_require__(/*! ../../components/logos/Logo */ \"./client/src/components/logos/Logo.tsx\");\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\nvar _content = __webpack_require__(/*! ../../data/content */ \"./client/src/data/content.ts\");\n\nconst Homepage = () => {\n  const history = (0, _reactRouterDom.useHistory)();\n\n  const contactUsHandler = () => {\n    history.push(\"/contact\");\n  };\n\n  const donateHandler = () => {\n    history.push(\"/donate\");\n  };\n\n  return /*#__PURE__*/_react.default.createElement(_SiteLayout.SiteLayout, {\n    bgColor: \"important\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"home-content\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"home-content__image\"\n  }, /*#__PURE__*/_react.default.createElement(\"img\", {\n    src: _GameMedia.default,\n    alt: \"home-cards-display\"\n  })), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"home-content__description\"\n  }, /*#__PURE__*/_react.default.createElement(_Logo.LogoHome, null), /*#__PURE__*/_react.default.createElement(\"p\", null, _content.homeDescription), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"home-content__button\"\n  }, /*#__PURE__*/_react.default.createElement(_button.default, {\n    type: \"button\",\n    style: \"dark\",\n    stretch: false,\n    clickHandler: contactUsHandler\n  }, _content.darkButtonHomeLabel), /*#__PURE__*/_react.default.createElement(_button.default, {\n    type: \"button\",\n    style: \"light\",\n    stretch: false,\n    clickHandler: donateHandler\n  }, _content.lightButtonHomeLabel)))));\n};\n\nexports.Homepage = Homepage;\n\n//# sourceURL=webpack://our-game/./client/src/pages/homepage/Homepage.tsx?");

/***/ }),

/***/ "./client/src/pages/homepage/index.ts":
/*!********************************************!*\
  !*** ./client/src/pages/homepage/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Homepage = __webpack_require__(/*! ./Homepage */ \"./client/src/pages/homepage/Homepage.tsx\");\n\nvar _default = {\n  component: _Homepage.Homepage\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/homepage/index.ts?");

/***/ }),

/***/ "./client/src/pages/login/Login.tsx":
/*!******************************************!*\
  !*** ./client/src/pages/login/Login.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Login = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactFinalForm = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n\nvar _boxwrapper = _interopRequireDefault(__webpack_require__(/*! ../../components/boxwrapper */ \"./client/src/components/boxwrapper/index.ts\"));\n\nvar _gamelayout = _interopRequireDefault(__webpack_require__(/*! ../../layouts/gamelayout */ \"./client/src/layouts/gamelayout/index.ts\"));\n\nvar _inputList = _interopRequireDefault(__webpack_require__(/*! ../../components/inputList */ \"./client/src/components/inputList/index.ts\"));\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\n__webpack_require__(/*! ../../css/page.css */ \"./client/src/css/page.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst formValues = [{\n  placeholder: \"Логин\",\n  name: \"login\",\n  type: \"text\"\n}, {\n  placeholder: \"Пароль\",\n  name: \"password\",\n  type: \"password\"\n}];\n\nconst onFormSubmit = data => {\n  console.log(data);\n  /* Здесь отправляем форму */\n};\n\nconst validate = data => {\n  const errors = {};\n\n  if (!data.login) {\n    errors.login = \"Введите логин\";\n  }\n\n  if (!data.password) {\n    errors.password = \"Введите пароль\";\n  }\n\n  return errors;\n};\n\nconst Login = () => {\n  const history = (0, _reactRouterDom.useHistory)();\n  const onRegisterClick = (0, _react.useCallback)(() => {\n    history.push(\"/register\");\n  }, []);\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_gamelayout.default, null, /*#__PURE__*/_react.default.createElement(_boxwrapper.default, {\n    className: \"auth\"\n  }, /*#__PURE__*/_react.default.createElement(\"h1\", {\n    className: \"page__title\"\n  }, \"\\u0412\\u0445\\u043E\\u0434\"), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {\n    validate: validate,\n    onSubmit: onFormSubmit,\n    render: ({\n      handleSubmit\n    }) => /*#__PURE__*/_react.default.createElement(\"form\", {\n      className: \"page__form\",\n      onSubmit: handleSubmit\n    }, (0, _inputList.default)(formValues, \"page__input\", true), /*#__PURE__*/_react.default.createElement(_button.default, {\n      className: \"page__btn\",\n      type: \"submit\",\n      stretch: true,\n      style: \"primary\",\n      clickHandler: () => {}\n    }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\"))\n  }), /*#__PURE__*/_react.default.createElement(_button.default, {\n    className: \"page__btn\",\n    type: \"button\",\n    stretch: true,\n    style: \"secondary\",\n    clickHandler: onRegisterClick\n  }, \"\\u0417\\u0430\\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\n};\n\nexports.Login = Login;\n\n//# sourceURL=webpack://our-game/./client/src/pages/login/Login.tsx?");

/***/ }),

/***/ "./client/src/pages/login/index.ts":
/*!*****************************************!*\
  !*** ./client/src/pages/login/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Login = __webpack_require__(/*! ./Login */ \"./client/src/pages/login/Login.tsx\");\n\nvar _default = {\n  component: _Login.Login\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/login/index.ts?");

/***/ }),

/***/ "./client/src/pages/profile/Profile.tsx":
/*!**********************************************!*\
  !*** ./client/src/pages/profile/Profile.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = exports.Profile = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _user = __webpack_require__(/*! ../../redux/selectors/widgets/user */ \"./client/src/redux/selectors/widgets/user/index.ts\");\n\nvar _userInfo = __webpack_require__(/*! ../../redux/thunks/user/userInfo */ \"./client/src/redux/thunks/user/userInfo.ts\");\n\nvar _reactFinalForm = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n\nvar _avatar = _interopRequireDefault(__webpack_require__(/*! ../../components/avatar */ \"./client/src/components/avatar/index.ts\"));\n\nvar _gamelayout = _interopRequireDefault(__webpack_require__(/*! ../../layouts/gamelayout */ \"./client/src/layouts/gamelayout/index.ts\"));\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\nvar _profilefield = _interopRequireDefault(__webpack_require__(/*! ./components/profilefield */ \"./client/src/pages/profile/components/profilefield/index.ts\"));\n\nvar _modal = _interopRequireDefault(__webpack_require__(/*! ../../components/modal */ \"./client/src/components/modal/index.ts\"));\n\nvar _title = _interopRequireDefault(__webpack_require__(/*! ../../components/title */ \"./client/src/components/title/index.ts\"));\n\nvar _inputField = _interopRequireDefault(__webpack_require__(/*! ../../components/inputField */ \"./client/src/components/inputField/index.ts\"));\n\nvar _leftsideButton = _interopRequireDefault(__webpack_require__(/*! ../../components/leftsideButton */ \"./client/src/components/leftsideButton/index.ts\"));\n\nvar _finalForm = __webpack_require__(/*! final-form */ \"final-form\");\n\nvar _content = __webpack_require__(/*! ../../data/content */ \"./client/src/data/content.ts\");\n\n__webpack_require__(/*! ./profile.css */ \"./client/src/pages/profile/profile.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst fields = {\n  login: /^[a-zA-Z\\d_]{2,12}$/,\n  email: /^([a-z\\d.-]+)@([a-z\\d-]+)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$/,\n  phone: /^[8\\d]{11}$/\n};\n\nconst prepareProfileFields = ({\n  firstName,\n  secondName,\n  login,\n  email,\n  phone,\n  displayName\n}) => {\n  return [{\n    fieldKey: \"Имя\",\n    name: \"firstName\",\n    value: firstName\n  }, {\n    fieldKey: \"Фамилия\",\n    name: \"secondName\",\n    value: secondName\n  }, {\n    fieldKey: \"Логин\",\n    name: \"login\",\n    value: login\n  }, {\n    fieldKey: \"Почта\",\n    name: \"email\",\n    value: email\n  }, {\n    fieldKey: \"Телефон\",\n    name: \"phone\",\n    value: phone\n  }, {\n    fieldKey: \"Имя в чате\",\n    name: \"displayName\",\n    value: displayName\n  }];\n};\n\nconst Profile = ({\n  userInfo,\n  fetchUserInfo\n}) => {\n  const [changeAvatarOpen, setChangeAvatarOpen] = (0, _react.useState)(false);\n  const [changePassOpen, setChangePassOpen] = (0, _react.useState)(false);\n  const [profileFields, setProfileFields] = (0, _react.useState)([]);\n  (0, _react.useEffect)(() => {\n    fetchUserInfo();\n  }, []);\n  (0, _react.useEffect)(() => {\n    if (userInfo.isAuth) {\n      const preparedProfileFields = prepareProfileFields({\n        firstName: userInfo.firstName,\n        secondName: userInfo.secondName,\n        login: userInfo.login,\n        email: userInfo.email,\n        phone: userInfo.phone,\n        displayName: userInfo.displayName\n      });\n      setProfileFields(preparedProfileFields);\n    }\n  }, [userInfo]);\n  console.log(userInfo);\n  const onChangeAvatarClick = (0, _react.useCallback)(() => {\n    setChangeAvatarOpen(true);\n  }, []);\n  const onChangeAvatarClose = (0, _react.useCallback)(() => {\n    setChangeAvatarOpen(false);\n  }, []);\n  const onChangePassClick = (0, _react.useCallback)(() => {\n    setChangePassOpen(true);\n  }, []);\n  const onChangePassClose = (0, _react.useCallback)(() => {\n    setChangePassOpen(false);\n  }, []);\n  const onChangeAvatarSubmit = (0, _react.useCallback)(data => {\n    if (!data.avatar) {\n      return {\n        [_finalForm.FORM_ERROR]: _content.noAvatarError\n      };\n    }\n\n    const file = data.avatar[0];\n\n    if (!file.name.match(/^.*\\.(?:png|jpg|jpeg)$/gi)) {\n      return {\n        [_finalForm.FORM_ERROR]: _content.invalidImageResError\n      };\n    }\n    /* Здесь отправляем форму нового аватара */\n\n  }, []);\n  const onChangePassSubmit = (0, _react.useCallback)(data => {\n    if (data.new_pass === data.old_pass) {\n      return {\n        [_finalForm.FORM_ERROR]: _content.newPasswordMatchError\n      };\n    }\n    /* Здесь отправляем форму нового пароля */\n\n  }, []);\n  const onFormSubmit = (0, _react.useCallback)(data => {\n    if (!data.email || !fields.email.test(data.email)) {\n      return {\n        [_finalForm.FORM_ERROR]: _content.emailError\n      };\n    }\n\n    if (!data.login || !fields.login.test(data.login)) {\n      return {\n        [_finalForm.FORM_ERROR]: _content.loginError\n      };\n    }\n\n    if (!data.phone || !fields.phone.test(data.phone)) {\n      return {\n        [_finalForm.FORM_ERROR]: _content.phoneError\n      };\n    }\n    /* Здесь отправляем форму профиля */\n\n  }, []);\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_leftsideButton.default, {\n    className: \"leftside-button_fixed\"\n  }), /*#__PURE__*/_react.default.createElement(_gamelayout.default, null, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"profile\"\n  }, /*#__PURE__*/_react.default.createElement(_avatar.default, {\n    src: \"#\",\n    size: \"large\",\n    className: \"profile__avatar\"\n  }), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"profile__btns-top\"\n  }, /*#__PURE__*/_react.default.createElement(_button.default, {\n    type: \"button\",\n    style: \"secondary\",\n    clickHandler: onChangeAvatarClick\n  }, \"\\u0418\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u0430\\u0432\\u0430\\u0442\\u0430\\u0440\"), /*#__PURE__*/_react.default.createElement(_button.default, {\n    type: \"button\",\n    style: \"secondary\",\n    clickHandler: onChangePassClick\n  }, \"\\u0418\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\")), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {\n    onSubmit: onFormSubmit,\n    render: ({\n      submitError,\n      handleSubmit,\n      pristine\n    }) => /*#__PURE__*/_react.default.createElement(\"form\", {\n      className: \"profile__form\",\n      onSubmit: handleSubmit\n    }, /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"profile__fields-container\"\n    }, profileFields.map(field => {\n      return /*#__PURE__*/_react.default.createElement(_profilefield.default, {\n        key: field.name,\n        fieldKey: field.fieldKey,\n        name: field.name,\n        value: field.value\n      });\n    })), /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"profile__error\"\n    }, submitError), /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"profile__btns-bottom\"\n    }, pristine ? null : /*#__PURE__*/_react.default.createElement(_button.default, {\n      type: \"submit\",\n      style: \"primary\",\n      clickHandler: () => {}\n    }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F\")))\n  }))), /*#__PURE__*/_react.default.createElement(_modal.default, {\n    className: \"profile__modal\",\n    isOpen: changeAvatarOpen,\n    closeModalHandler: onChangeAvatarClose\n  }, /*#__PURE__*/_react.default.createElement(_title.default, {\n    text: \"\\u0418\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u0430\\u0432\\u0430\\u0442\\u0430\\u0440\",\n    level: 3\n  }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {\n    onSubmit: onChangeAvatarSubmit,\n    render: ({\n      submitError,\n      handleSubmit\n    }) => /*#__PURE__*/_react.default.createElement(\"form\", {\n      onSubmit: handleSubmit\n    }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {\n      name: \"avatar\"\n    }, ({\n      input: {\n        value,\n        onChange,\n        ...input\n      }\n    }) => /*#__PURE__*/_react.default.createElement(\"input\", (0, _extends2.default)({}, input, {\n      type: \"file\",\n      onChange: ({\n        target\n      }) => onChange(target.files)\n    }))), submitError ? /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"profile__error\"\n    }, submitError) : null, /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"profile__modal-submit-container\"\n    }, /*#__PURE__*/_react.default.createElement(_button.default, {\n      type: \"submit\",\n      style: \"primary\",\n      clickHandler: () => {}\n    }, \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\")))\n  })), /*#__PURE__*/_react.default.createElement(_modal.default, {\n    className: \"profile__modal\",\n    isOpen: changePassOpen,\n    closeModalHandler: onChangePassClose\n  }, /*#__PURE__*/_react.default.createElement(_title.default, {\n    text: \"\\u0418\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\",\n    level: 3\n  }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {\n    onSubmit: onChangePassSubmit,\n    render: ({\n      submitError,\n      handleSubmit\n    }) => /*#__PURE__*/_react.default.createElement(\"form\", {\n      onSubmit: handleSubmit\n    }, /*#__PURE__*/_react.default.createElement(_inputField.default, {\n      className: \"profile__text-input\",\n      type: \"password\",\n      name: \"old_pass\",\n      placeholder: \"\\u0421\\u0442\\u0430\\u0440\\u044B\\u0439 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\"\n    }), /*#__PURE__*/_react.default.createElement(_inputField.default, {\n      className: \"profile__text-input\",\n      type: \"password\",\n      name: \"new_pass\",\n      placeholder: \"\\u041D\\u043E\\u0432\\u044B\\u0439 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\"\n    }), submitError ? /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"profile__error\"\n    }, submitError) : null, /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"profile__modal-submit-container\"\n    }, /*#__PURE__*/_react.default.createElement(_button.default, {\n      type: \"submit\",\n      style: \"primary\",\n      clickHandler: () => {}\n    }, \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\")))\n  })));\n};\n\nexports.Profile = Profile;\n\nconst mapStateToProps = state => ({\n  userInfo: (0, _user.getUserInfo)(state)\n}); // function loadData(store) {\n//     return store.dispatch(fetchUserInfo);\n// }\n// export default connect(mapStateToProps, { fetchUserInfo })(Profile);\n\n\nvar _default = {\n  component: (0, _reactRedux.connect)(mapStateToProps, {\n    fetchUserInfo: _userInfo.fetchUserInfo\n  })(Profile),\n  loadData: ({\n    dispatch\n  }) => dispatch((0, _userInfo.fetchUserInfo)())\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/profile/Profile.tsx?");

/***/ }),

/***/ "./client/src/pages/profile/components/profilefield/ProfileField.tsx":
/*!***************************************************************************!*\
  !*** ./client/src/pages/profile/components/profilefield/ProfileField.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ProfileField = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _inputField = _interopRequireDefault(__webpack_require__(/*! ../../../../components/inputField */ \"./client/src/components/inputField/index.ts\"));\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst ProfileField = ({\n  fieldKey,\n  value,\n  name\n}) => {\n  const [isActive, setActiveState] = (0, _react.useState)(false);\n  const [currentValue, setCurrentValue] = (0, _react.useState)(value);\n  const inputRef = /*#__PURE__*/(0, _react.createRef)();\n  (0, _react.useEffect)(() => {\n    if (inputRef.current) {\n      if (isActive) {\n        inputRef.current.focus();\n      } else {\n        setCurrentValue(inputRef.current.value);\n      }\n    }\n  }, [isActive]);\n  const onValueClick = (0, _react.useCallback)(() => {\n    setActiveState(true);\n  }, []);\n  const onInputBlur = (0, _react.useCallback)(() => {\n    setActiveState(false);\n  }, []);\n  const valueClassNames = (0, _classnames.default)(\"profile__field-value\", {\n    \"profile__field-value_hidden\": isActive\n  });\n  const inputClassNames = (0, _classnames.default)(\"profile__input\", {\n    profile__input_hidden: !isActive\n  });\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"profile__field\"\n  }, /*#__PURE__*/_react.default.createElement(\"span\", {\n    className: \"profile__field-key\"\n  }, fieldKey), /*#__PURE__*/_react.default.createElement(\"span\", {\n    className: valueClassNames,\n    onClick: onValueClick\n  }, currentValue), /*#__PURE__*/_react.default.createElement(_inputField.default, {\n    className: inputClassNames,\n    type: \"text\",\n    name: name,\n    placeholder: fieldKey,\n    initialValue: value,\n    inputRef: inputRef,\n    onBlur: onInputBlur\n  })), /*#__PURE__*/_react.default.createElement(\"hr\", {\n    className: \"profile__hr\"\n  }));\n};\n\nexports.ProfileField = ProfileField;\n\n//# sourceURL=webpack://our-game/./client/src/pages/profile/components/profilefield/ProfileField.tsx?");

/***/ }),

/***/ "./client/src/pages/profile/components/profilefield/index.ts":
/*!*******************************************************************!*\
  !*** ./client/src/pages/profile/components/profilefield/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function () {\n    return _ProfileField.ProfileField;\n  }\n}));\n\nvar _ProfileField = __webpack_require__(/*! ./ProfileField */ \"./client/src/pages/profile/components/profilefield/ProfileField.tsx\");\n\n//# sourceURL=webpack://our-game/./client/src/pages/profile/components/profilefield/index.ts?");

/***/ }),

/***/ "./client/src/pages/register/Register.tsx":
/*!************************************************!*\
  !*** ./client/src/pages/register/Register.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Register = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactFinalForm = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n\nvar _boxwrapper = _interopRequireDefault(__webpack_require__(/*! ../../components/boxwrapper */ \"./client/src/components/boxwrapper/index.ts\"));\n\nvar _gamelayout = _interopRequireDefault(__webpack_require__(/*! ../../layouts/gamelayout */ \"./client/src/layouts/gamelayout/index.ts\"));\n\nvar _inputList = _interopRequireDefault(__webpack_require__(/*! ../../components/inputList */ \"./client/src/components/inputList/index.ts\"));\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\nvar _content = __webpack_require__(/*! ../../data/content */ \"./client/src/data/content.ts\");\n\n__webpack_require__(/*! ../../css/page.css */ \"./client/src/css/page.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst formValues = [{\n  placeholder: \"Почта\",\n  name: \"email\",\n  type: \"email\"\n}, {\n  placeholder: \"Телефон\",\n  name: \"phone\",\n  type: \"text\"\n}, {\n  placeholder: \"Логин\",\n  name: \"login\",\n  type: \"text\"\n}, {\n  placeholder: \"Пароль\",\n  name: \"password\",\n  type: \"password\"\n}];\n\nconst validate = data => {\n  const errors = {};\n  const fields = {\n    login: /^[a-zA-Z\\d_]{2,12}$/,\n    password: /^[a-zA-Z\\d]{6,}$/,\n    email: /^([a-z\\d.-]+)@([a-z\\d-]+)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$/,\n    phone: /^[8\\d]{11}$/\n  };\n\n  if (!data.login || !fields.login.test(data.login)) {\n    errors.login = _content.loginError;\n  }\n\n  if (!data.password || !fields.password.test(data.password)) {\n    errors.password = _content.passwordError;\n  }\n\n  if (!data.email || !fields.email.test(data.email)) {\n    errors.email = _content.emailError;\n  }\n\n  if (!data.phone || !fields.phone.test(data.phone)) {\n    errors.phone = _content.phoneError;\n  }\n\n  return errors;\n};\n\nconst onFormSubmit = data => {\n  console.log(data);\n  /* Здесь отправляем форму */\n};\n\nconst Register = () => {\n  const history = (0, _reactRouterDom.useHistory)();\n  const onLoginClick = (0, _react.useCallback)(() => {\n    history.push(\"/login\");\n  }, []);\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_gamelayout.default, null, /*#__PURE__*/_react.default.createElement(_boxwrapper.default, {\n    className: \"page\"\n  }, /*#__PURE__*/_react.default.createElement(\"h1\", {\n    className: \"page__title\"\n  }, \"\\u0420\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0430\\u0446\\u0438\\u044F\"), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {\n    validate: validate,\n    onSubmit: onFormSubmit,\n    render: ({\n      handleSubmit\n    }) => /*#__PURE__*/_react.default.createElement(\"form\", {\n      className: \"page__form\",\n      onSubmit: handleSubmit\n    }, (0, _inputList.default)(formValues, \"page__input\", true), /*#__PURE__*/_react.default.createElement(_button.default, {\n      className: \"page__btn\",\n      type: \"submit\",\n      stretch: true,\n      style: \"primary\",\n      clickHandler: () => {}\n    }, \"\\u0417\\u0430\\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))\n  }), /*#__PURE__*/_react.default.createElement(_button.default, {\n    className: \"page__btn\",\n    type: \"button\",\n    stretch: true,\n    style: \"secondary\",\n    clickHandler: onLoginClick\n  }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\"))));\n};\n\nexports.Register = Register;\n\n//# sourceURL=webpack://our-game/./client/src/pages/register/Register.tsx?");

/***/ }),

/***/ "./client/src/pages/register/index.ts":
/*!********************************************!*\
  !*** ./client/src/pages/register/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Register = __webpack_require__(/*! ./Register */ \"./client/src/pages/register/Register.tsx\");\n\nvar _default = {\n  component: _Register.Register\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/register/index.ts?");

/***/ }),

/***/ "./client/src/pages/score-dashboard/ScoreDashboard.tsx":
/*!*************************************************************!*\
  !*** ./client/src/pages/score-dashboard/ScoreDashboard.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ScoreDashboardPage = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _infoLine = _interopRequireDefault(__webpack_require__(/*! ../../components/infoLine */ \"./client/src/components/infoLine/index.ts\"));\n\nvar _leftsideButton = _interopRequireDefault(__webpack_require__(/*! ../../components/leftsideButton */ \"./client/src/components/leftsideButton/index.ts\"));\n\nvar _title = _interopRequireDefault(__webpack_require__(/*! ../../components/title */ \"./client/src/components/title/index.ts\"));\n\nvar _modal = _interopRequireDefault(__webpack_require__(/*! ../../components/modal */ \"./client/src/components/modal/index.ts\"));\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\n__webpack_require__(/*! ../../css/info-page.css */ \"./client/src/css/info-page.css\");\n\n__webpack_require__(/*! ./scoreDashboard.css */ \"./client/src/pages/score-dashboard/scoreDashboard.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst scoreData = [{\n  name: \"Kripparian\",\n  results: 1105\n}, {\n  name: \"TrumpSC\",\n  results: 763\n}, {\n  name: \"Kibler\",\n  results: 444\n}, {\n  name: \"RDU\",\n  results: 356\n}, {\n  name: \"Thijs\",\n  results: 355\n}, {\n  name: \"SilverName\",\n  results: 297\n}, {\n  name: \"Dog\",\n  results: 183\n}, {\n  name: \"Firebat\",\n  results: 101\n}, {\n  name: \"Shadybunny\",\n  results: 54\n}, {\n  name: \"H3ll0W0R1D\",\n  results: 1\n}];\nconst scoreList = scoreData.map((item, idx) => {\n  let name = \"\";\n  const value = `${item.results}`;\n\n  switch (idx) {\n    case 0:\n      name = `${idx + 1}. 🥇 ${item.name}`;\n      break;\n\n    case 1:\n      name = `${idx + 1}. 🥈 ${item.name}`;\n      break;\n\n    case 2:\n      name = `${idx + 1}. 🥉 ${item.name}`;\n      break;\n\n    default:\n      name = `${idx + 1}. ${item.name}`;\n  }\n\n  return /*#__PURE__*/_react.default.createElement(_infoLine.default, {\n    name: name,\n    value: value\n  });\n});\n\nconst ScoreDashboardPage = () => {\n  const [isModalOpen, setIsModalOpen] = (0, _react.useState)(false);\n\n  function closeModalHandler() {\n    setIsModalOpen(false);\n  }\n\n  function openModalHandler() {\n    setIsModalOpen(true);\n  }\n\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"info-page\"\n  }, /*#__PURE__*/_react.default.createElement(_leftsideButton.default, null), /*#__PURE__*/_react.default.createElement(\"main\", {\n    className: \"info-page__main\"\n  }, /*#__PURE__*/_react.default.createElement(_button.default, {\n    type: \"button\",\n    style: \"dark\",\n    clickHandler: openModalHandler\n  }, \"Open modal\"), /*#__PURE__*/_react.default.createElement(_title.default, {\n    text: \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435 \\u0440\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u044B\",\n    level: 1\n  }), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"score-dashboard\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"score-dashboard__head\"\n  }, /*#__PURE__*/_react.default.createElement(\"span\", null, \"\\u0418\\u043C\\u044F\"), /*#__PURE__*/_react.default.createElement(\"span\", null, \"\\u0427\\u0438\\u0441\\u043B\\u043E \\u043F\\u043E\\u0431\\u0435\\u0434\")), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"score-dashboard__body\"\n  }, scoreList))), /*#__PURE__*/_react.default.createElement(_modal.default, {\n    isOpen: isModalOpen,\n    closeModalHandler: closeModalHandler\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus eligendi fugit nesciunt dolorem rem veniam perferendis cupiditate, officia praesentium et corporis placeat. Debitis commodi harum perspiciatis illum vel pariatur!\"));\n};\n\nexports.ScoreDashboardPage = ScoreDashboardPage;\n\n//# sourceURL=webpack://our-game/./client/src/pages/score-dashboard/ScoreDashboard.tsx?");

/***/ }),

/***/ "./client/src/pages/score-dashboard/index.ts":
/*!***************************************************!*\
  !*** ./client/src/pages/score-dashboard/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _ScoreDashboard = __webpack_require__(/*! ./ScoreDashboard */ \"./client/src/pages/score-dashboard/ScoreDashboard.tsx\");\n\nvar _default = {\n  component: _ScoreDashboard.ScoreDashboardPage\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/score-dashboard/index.ts?");

/***/ }),

/***/ "./client/src/pages/start/Start.tsx":
/*!******************************************!*\
  !*** ./client/src/pages/start/Start.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Start = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _boxwrapper = _interopRequireDefault(__webpack_require__(/*! ../../components/boxwrapper */ \"./client/src/components/boxwrapper/index.ts\"));\n\nvar _gamelayout = _interopRequireDefault(__webpack_require__(/*! ../../layouts/gamelayout */ \"./client/src/layouts/gamelayout/index.ts\"));\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\n__webpack_require__(/*! ../../css/page.css */ \"./client/src/css/page.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst Start = () => {\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_gamelayout.default, null, /*#__PURE__*/_react.default.createElement(_boxwrapper.default, {\n    className: \"page\"\n  }, /*#__PURE__*/_react.default.createElement(\"h1\", {\n    className: \"page__title\"\n  }, \"DwarfthStone\"), /*#__PURE__*/_react.default.createElement(_button.default, {\n    className: \"page__btn\",\n    type: \"submit\",\n    stretch: true,\n    style: \"primary\",\n    clickHandler: () => {}\n  }, \"\\u0421\\u043E\\u0431\\u0440\\u0430\\u0442\\u044C \\u043A\\u043E\\u043B\\u043E\\u0434\\u0443\"), /*#__PURE__*/_react.default.createElement(_button.default, {\n    className: \"page__btn\",\n    type: \"submit\",\n    stretch: true,\n    style: \"primary\",\n    clickHandler: () => {}\n  }, \"\\u041D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0438\\u0433\\u0440\\u0443\"), /*#__PURE__*/_react.default.createElement(_button.default, {\n    className: \"page__btn\",\n    type: \"button\",\n    stretch: true,\n    style: \"secondary\",\n    clickHandler: () => {}\n  }, \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435 \\u0440\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u044B\"), /*#__PURE__*/_react.default.createElement(_button.default, {\n    className: \"page__btn\",\n    type: \"button\",\n    stretch: true,\n    style: \"secondary\",\n    clickHandler: () => {}\n  }, \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\"))));\n};\n\nexports.Start = Start;\n\n//# sourceURL=webpack://our-game/./client/src/pages/start/Start.tsx?");

/***/ }),

/***/ "./client/src/pages/start/index.ts":
/*!*****************************************!*\
  !*** ./client/src/pages/start/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Start = __webpack_require__(/*! ./Start */ \"./client/src/pages/start/Start.tsx\");\n\nvar _default = {\n  component: _Start.Start\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/start/index.ts?");

/***/ }),

/***/ "./client/src/pages/threadPage/ThreadPage.tsx":
/*!****************************************************!*\
  !*** ./client/src/pages/threadPage/ThreadPage.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ThreadPage = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactFinalForm = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n\nvar _avatar = _interopRequireDefault(__webpack_require__(/*! ../../components/avatar */ \"./client/src/components/avatar/index.ts\"));\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../components/button */ \"./client/src/components/button/index.tsx\"));\n\nvar _leftsideButton = _interopRequireDefault(__webpack_require__(/*! ../../components/leftsideButton */ \"./client/src/components/leftsideButton/index.ts\"));\n\nvar _spinner = _interopRequireDefault(__webpack_require__(/*! ../../components/spinner */ \"./client/src/components/spinner/index.tsx\"));\n\nvar _title = _interopRequireDefault(__webpack_require__(/*! ../../components/title */ \"./client/src/components/title/index.ts\"));\n\n__webpack_require__(/*! ./threadPage.css */ \"./client/src/pages/threadPage/threadPage.css\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst mockThread = {\n  id: \"1\",\n  title: \"Lorem ipsum dolor sit amet\",\n  posts: [{\n    id: \"123\",\n    author: {\n      id: \"1\",\n      name: \"F0rum_P0st3r\",\n      avatar: \"path/to/avatar_1\"\n    },\n    text: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n                consectetur, adipisci velit.`\n  }, {\n    id: \"324\",\n    author: {\n      id: \"2\",\n      name: \"H3ll0W0R1D\",\n      avatar: \"path/to/avatar_2\"\n    },\n    text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n                accusantium doloremque laudantium, totam rem aperiam, eaque\n                ipsa quae ab illo inventore veritatis.`\n  }]\n};\n\nconst getThread = () => {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(mockThread);\n    }, 1000);\n  });\n};\n\nconst ThreadPage = () => {\n  const [thread, setThread] = (0, _react.useState)(null);\n  const onReplySubmit = (0, _react.useCallback)(() => {\n    console.log(\"Ответили в тред\");\n  }, []);\n  let threadComponent;\n\n  if (!thread) {\n    getThread().then(thread => {\n      setThread(thread);\n    });\n    threadComponent = /*#__PURE__*/_react.default.createElement(_spinner.default, {\n      color: \"light\"\n    });\n  } else {\n    threadComponent = /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"thread\"\n    }, /*#__PURE__*/_react.default.createElement(_title.default, {\n      level: 4,\n      className: \"thread__title\",\n      text: thread.title\n    }), /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"thread__posts\"\n    }, thread.posts.map(post => {\n      return /*#__PURE__*/_react.default.createElement(\"div\", {\n        key: post.id,\n        className: \"post\"\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: \"post__author\"\n      }, /*#__PURE__*/_react.default.createElement(_avatar.default, {\n        src: post.author.avatar,\n        size: \"small\"\n      }), /*#__PURE__*/_react.default.createElement(\"span\", {\n        className: \"post__author-name\"\n      }, post.author.name)), /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: \"post__text\"\n      }, post.text), /*#__PURE__*/_react.default.createElement(\"hr\", {\n        className: \"post__hr\"\n      }));\n    })));\n  }\n\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_leftsideButton.default, {\n    className: \"leftside-button_fixed\"\n  }), /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"thread-page\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"thread-page__container\"\n  }, /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"thread-page__body\"\n  }, /*#__PURE__*/_react.default.createElement(_title.default, {\n    level: 1,\n    text: \"\\u0424\\u043E\\u0440\\u0443\\u043C\"\n  }), threadComponent, /*#__PURE__*/_react.default.createElement(_title.default, {\n    className: \"thread-page__reply-title\",\n    level: 2,\n    text: \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"\n  }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {\n    onSubmit: onReplySubmit,\n    render: ({\n      handleSubmit\n    }) => /*#__PURE__*/_react.default.createElement(\"form\", {\n      onSubmit: handleSubmit\n    }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {\n      name: \"message\"\n    }, ({\n      textarea\n    }) => /*#__PURE__*/_react.default.createElement(\"textarea\", (0, _extends2.default)({}, textarea, {\n      className: \"forum__message-area\",\n      placeholder: \"\\u0421\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\",\n      rows: 3\n    }))), /*#__PURE__*/_react.default.createElement(_button.default, {\n      className: \"\",\n      type: \"submit\",\n      stretch: true,\n      style: \"primary\",\n      clickHandler: () => {}\n    }, \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"))\n  })))));\n};\n\nexports.ThreadPage = ThreadPage;\n\n//# sourceURL=webpack://our-game/./client/src/pages/threadPage/ThreadPage.tsx?");

/***/ }),

/***/ "./client/src/pages/threadPage/index.ts":
/*!**********************************************!*\
  !*** ./client/src/pages/threadPage/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _ThreadPage = __webpack_require__(/*! ./ThreadPage */ \"./client/src/pages/threadPage/ThreadPage.tsx\");\n\nvar _default = {\n  component: _ThreadPage.ThreadPage\n};\nexports.default = _default;\n\n//# sourceURL=webpack://our-game/./client/src/pages/threadPage/index.ts?");

/***/ }),

/***/ "./client/src/redux/actions/user/userInfo.ts":
/*!***************************************************!*\
  !*** ./client/src/redux/actions/user/userInfo.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.fetchFailed = exports.fetchFulfilled = exports.fetch = exports.FETCH_USER_INFO_FAILED = exports.FETCH_USER_INFO_FULFILLED = exports.FETCH_USER_INFO = void 0;\nconst FETCH_USER_INFO = \"userInfo/FETCH\";\nexports.FETCH_USER_INFO = FETCH_USER_INFO;\nconst FETCH_USER_INFO_FULFILLED = \"userInfo/FETCH_FULFILLED\";\nexports.FETCH_USER_INFO_FULFILLED = FETCH_USER_INFO_FULFILLED;\nconst FETCH_USER_INFO_FAILED = \"userInfo/FETCH_FAILED\";\nexports.FETCH_USER_INFO_FAILED = FETCH_USER_INFO_FAILED;\n\nconst fetch = () => ({\n  type: FETCH_USER_INFO\n});\n\nexports.fetch = fetch;\n\nconst fetchFulfilled = payload => ({\n  type: FETCH_USER_INFO_FULFILLED,\n  payload\n});\n\nexports.fetchFulfilled = fetchFulfilled;\n\nconst fetchFailed = payload => ({\n  type: FETCH_USER_INFO_FAILED,\n  payload\n});\n\nexports.fetchFailed = fetchFailed;\n\n//# sourceURL=webpack://our-game/./client/src/redux/actions/user/userInfo.ts?");

/***/ }),

/***/ "./client/src/redux/reducers/collections/index.ts":
/*!********************************************************!*\
  !*** ./client/src/redux/reducers/collections/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.collections = void 0;\n\nvar _reduxImmer = __webpack_require__(/*! redux-immer */ \"redux-immer\");\n\nvar _immer = _interopRequireDefault(__webpack_require__(/*! immer */ \"immer\"));\n\nconst collections = (0, _reduxImmer.combineReducers)(_immer.default, {});\nexports.collections = collections;\n\n//# sourceURL=webpack://our-game/./client/src/redux/reducers/collections/index.ts?");

/***/ }),

/***/ "./client/src/redux/reducers/index.ts":
/*!********************************************!*\
  !*** ./client/src/redux/reducers/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.rootReducer = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _collections = __webpack_require__(/*! ./collections */ \"./client/src/redux/reducers/collections/index.ts\");\n\nvar _widgets = __webpack_require__(/*! ./widgets */ \"./client/src/redux/reducers/widgets/index.ts\");\n\nconst rootReducer = (0, _redux.combineReducers)({\n  collections: _collections.collections,\n  widgets: _widgets.widgets\n});\nexports.rootReducer = rootReducer;\n\n//# sourceURL=webpack://our-game/./client/src/redux/reducers/index.ts?");

/***/ }),

/***/ "./client/src/redux/reducers/widgets/index.ts":
/*!****************************************************!*\
  !*** ./client/src/redux/reducers/widgets/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.widgets = void 0;\n\nvar _reduxImmer = __webpack_require__(/*! redux-immer */ \"redux-immer\");\n\nvar _immer = _interopRequireDefault(__webpack_require__(/*! immer */ \"immer\"));\n\nvar _user = __webpack_require__(/*! ./user */ \"./client/src/redux/reducers/widgets/user/index.ts\");\n\nconst widgets = (0, _reduxImmer.combineReducers)(_immer.default, {\n  user: _user.user\n});\nexports.widgets = widgets;\n\n//# sourceURL=webpack://our-game/./client/src/redux/reducers/widgets/index.ts?");

/***/ }),

/***/ "./client/src/redux/reducers/widgets/user/index.ts":
/*!*********************************************************!*\
  !*** ./client/src/redux/reducers/widgets/user/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.user = void 0;\n\nvar _userInfo = __webpack_require__(/*! ../../../actions/user/userInfo */ \"./client/src/redux/actions/user/userInfo.ts\");\n\nconst initialState = {\n  loading: false,\n  isAuth: false,\n  id: 0,\n  firstName: \"\",\n  secondName: \"\",\n  displayName: \"\",\n  login: \"\",\n  avatar: \"\",\n  email: \"\",\n  phone: \"\"\n};\n\nconst user = (state = initialState, action) => {\n  switch (action.type) {\n    case _userInfo.FETCH_USER_INFO:\n      {\n        state.loading = true;\n        return state;\n      }\n\n    case _userInfo.FETCH_USER_INFO_FULFILLED:\n      {\n        state.loading = false;\n        const {\n          id,\n          firstName,\n          secondName,\n          displayName,\n          login,\n          avatar,\n          email,\n          phone\n        } = action.payload;\n        state.id = id;\n        state.firstName = firstName;\n        state.secondName = secondName;\n        state.displayName = displayName;\n        state.login = login;\n        state.avatar = avatar;\n        state.email = email;\n        state.phone = phone;\n        state.isAuth = true;\n        return state;\n      }\n\n    case _userInfo.FETCH_USER_INFO_FAILED:\n      {\n        state.loading = false;\n        return state;\n      }\n  }\n\n  return state;\n};\n\nexports.user = user;\n\n//# sourceURL=webpack://our-game/./client/src/redux/reducers/widgets/user/index.ts?");

/***/ }),

/***/ "./client/src/redux/selectors/widgets/user/index.ts":
/*!**********************************************************!*\
  !*** ./client/src/redux/selectors/widgets/user/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getUserIsLoading = exports.getIsAuth = exports.getUserInfo = void 0;\n\nconst getUserInfo = state => state.widgets.user;\n\nexports.getUserInfo = getUserInfo;\n\nconst getIsAuth = state => getUserInfo(state).isAuth;\n\nexports.getIsAuth = getIsAuth;\n\nconst getUserIsLoading = state => getUserInfo(state).loading;\n\nexports.getUserIsLoading = getUserIsLoading;\n\n//# sourceURL=webpack://our-game/./client/src/redux/selectors/widgets/user/index.ts?");

/***/ }),

/***/ "./client/src/redux/thunks/user/userInfo.ts":
/*!**************************************************!*\
  !*** ./client/src/redux/thunks/user/userInfo.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.fetchUserInfo = void 0;\n\nvar _userInfo = __webpack_require__(/*! ../../../../app/resolvers/user/userInfo */ \"./client/app/resolvers/user/userInfo.ts\");\n\nvar _userInfo2 = __webpack_require__(/*! ../../actions/user/userInfo */ \"./client/src/redux/actions/user/userInfo.ts\");\n\nconst fetchUserInfo = () => dispatch => {\n  dispatch((0, _userInfo2.fetch)());\n  return (0, _userInfo.resolveUserInfo)().then(res => dispatch((0, _userInfo2.fetchFulfilled)(res))).catch(err => dispatch((0, _userInfo2.fetchFailed)(err)));\n};\n\nexports.fetchUserInfo = fetchUserInfo;\n\n//# sourceURL=webpack://our-game/./client/src/redux/thunks/user/userInfo.ts?");

/***/ }),

/***/ "./client/src/router.ts":
/*!******************************!*\
  !*** ./client/src/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Routes = void 0;\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ \"./client/src/App.tsx\"));\n\nvar _homepage = _interopRequireDefault(__webpack_require__(/*! ./pages/homepage */ \"./client/src/pages/homepage/index.ts\"));\n\nvar _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login */ \"./client/src/pages/login/index.ts\"));\n\nvar _contactUs = _interopRequireDefault(__webpack_require__(/*! ./pages/contactUs */ \"./client/src/pages/contactUs/index.ts\"));\n\nvar _register = _interopRequireDefault(__webpack_require__(/*! ./pages/register */ \"./client/src/pages/register/index.ts\"));\n\nvar _forum = _interopRequireDefault(__webpack_require__(/*! ./pages/forum */ \"./client/src/pages/forum/index.ts\"));\n\nvar _threadPage = _interopRequireDefault(__webpack_require__(/*! ./pages/threadPage */ \"./client/src/pages/threadPage/index.ts\"));\n\nvar _scoreDashboard = _interopRequireDefault(__webpack_require__(/*! ./pages/score-dashboard */ \"./client/src/pages/score-dashboard/index.ts\"));\n\nvar _start = _interopRequireDefault(__webpack_require__(/*! ./pages/start */ \"./client/src/pages/start/index.ts\"));\n\nvar _Profile = _interopRequireDefault(__webpack_require__(/*! ./pages/profile/Profile */ \"./client/src/pages/profile/Profile.tsx\"));\n\nvar _ = _interopRequireDefault(__webpack_require__(/*! ./pages/404 */ \"./client/src/pages/404/index.tsx\"));\n\nvar _game = _interopRequireDefault(__webpack_require__(/*! ./pages/game */ \"./client/src/pages/game/index.ts\"));\n\n// import Auth from \"./pages/auth\";\nconst Routes = [{ ..._App.default,\n  routes: [{ ..._homepage.default,\n    path: '/',\n    exact: true\n  }, { ..._game.default,\n    path: '/game/',\n    exact: true\n  }, { ..._threadPage.default,\n    path: '/forum/thread/:id'\n  }, { ..._scoreDashboard.default,\n    path: '/score-dashboard'\n  }, { ..._Profile.default,\n    path: '/profile'\n  }, { ..._start.default,\n    path: '/start'\n  }, { ..._login.default,\n    path: '/login'\n  }, { ..._register.default,\n    path: '/register'\n  }, { ..._forum.default,\n    path: '/forum'\n  }, { ..._contactUs.default,\n    path: '/contact-us'\n  }, { ..._.default\n  }]\n}];\nexports.Routes = Routes;\n\n//# sourceURL=webpack://our-game/./client/src/router.ts?");

/***/ }),

/***/ "./client/src/utils/validate.ts":
/*!**************************************!*\
  !*** ./client/src/utils/validate.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.validateContact = void 0;\n\nvar _content = __webpack_require__(/*! ../data/content */ \"./client/src/data/content.ts\");\n\nconst validateEmail = email => {\n  const emailRegex = /^([a-z\\d.-]+)@([a-z\\d-]+)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$/;\n\n  if (!emailRegex.test(email)) {\n    return _content.emailIsNotValid;\n  }\n\n  return false;\n};\n\nconst minLength = input => {\n  const minLengthRegex = /^[a-zA-Z\\d]{6,}$/;\n\n  if (!minLengthRegex.test(input)) {\n    return _content.minLengthField;\n  }\n\n  return false;\n};\n\nconst validateContact = data => {\n  const errors = {};\n\n  if (!data.name) {\n    errors.name = _content.isEmptyField;\n  }\n\n  if (!data.title) {\n    errors.title = _content.isEmptyField;\n  }\n\n  if (!data.message) {\n    errors.message = _content.isEmptyField;\n  }\n\n  if (!data.email) {\n    errors.email = _content.isEmptyField;\n  }\n\n  const validName = minLength(data.name);\n  const validTitle = minLength(data.title);\n  const validMessage = minLength(data.message);\n  const validEmail = validateEmail(data.email);\n\n  if (validName) {\n    errors.name = validName;\n  }\n\n  if (validTitle) {\n    errors.title = validTitle;\n  }\n\n  if (validMessage) {\n    errors.message = validMessage;\n  }\n\n  if (validEmail) {\n    errors.email = validEmail;\n  }\n\n  return errors;\n};\n\nexports.validateContact = validateContact;\n\n//# sourceURL=webpack://our-game/./client/src/utils/validate.ts?");

/***/ }),

/***/ "./server/helpers/createStore.ts":
/*!***************************************!*\
  !*** ./server/helpers/createStore.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.createStoreServer = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nvar _reducers = __webpack_require__(/*! ../../client/src/redux/reducers */ \"./client/src/redux/reducers/index.ts\");\n\nconst createStoreServer = req => {\n  const axiosInstance = _axios.default.create({\n    baseURL: 'https://ya-praktikum.tech/api/v2/' // headers: { cookie: req.cookie || '' },\n\n  });\n\n  const store = (0, _redux.createStore)(_reducers.rootReducer, {}, (0, _redux.applyMiddleware)(_reduxThunk.default.withExtraArgument(axiosInstance)));\n  return store;\n};\n\nexports.createStoreServer = createStoreServer;\n\n//# sourceURL=webpack://our-game/./server/helpers/createStore.ts?");

/***/ }),

/***/ "./server/helpers/renderer.tsx":
/*!*************************************!*\
  !*** ./server/helpers/renderer.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.renderer = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _router = __webpack_require__(/*! ../../client/src/router */ \"./client/src/router.ts\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = _interopRequireDefault(__webpack_require__(/*! serialize-javascript */ \"serialize-javascript\"));\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nconst renderer = (req, store, context) => {\n  const content = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {\n    store: store\n  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {\n    location: req.path,\n    context: context\n  }, /*#__PURE__*/_react.default.createElement(\"div\", null, (0, _reactRouterConfig.renderRoutes)(_router.Routes)))));\n\n  const helmet = _reactHelmet.Helmet.renderStatic();\n\n  return `\n\t<html>\n\t\t<head>\n\t\t${helmet.title.toString()}\n\t\t${helmet.meta.toString()}\n\n\t\t</head>\n\t\t<body>\n\t\t<div id=\"root\">${content}</div>\n\t\t<script>window.INITIAL_STATE=${(0, _serializeJavascript.default)(store.getState())}</script>\n\t\t<script src=\"bundle.js\"></script>\n\t\t</body>\n\n\t</html>\n\t`;\n};\n\nexports.renderer = renderer;\n\n//# sourceURL=webpack://our-game/./server/helpers/renderer.tsx?");

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = _interopRequireDefault(__webpack_require__(/*! express-http-proxy */ \"express-http-proxy\"));\n\nvar _router = __webpack_require__(/*! ../client/src/router */ \"./client/src/router.ts\");\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./server/helpers/renderer.tsx\");\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./server/helpers/createStore.ts\");\n\n// const express = require('express');\n// const React = require('react');\n// const renderToString = require('react-dom/server').renderToString;\n// const Home = require('./client/components/Home').default;\n// import 'babel-polyfill';\nconst {\n  createProxyMiddleware\n} = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n\nconst app = (0, _express.default)();\napp.use(_express.default.static('public')); // app.use('/api/v2/auth/user', createProxyMiddleware({ target: 'https://ya-praktikum.tech/api/v2/auth/user', changeOrigin: true }));\n\napp.use('/api/v2', (0, _expressHttpProxy.default)('https://ya-praktikum.tech/api/v2/', {\n  https: true,\n\n  proxyReqOptDecorator(opts) {\n    opts.headers[\"Content-Type\"] = \"application/json\"; //withCredentials: true,\n    // opts.headers['x-forwarded-host'] = 'localhost:3010';\n\n    opts.method = 'GET';\n    return opts;\n  }\n\n}));\napp.get('*', (req, res) => {\n  console.log('console.log path', req.path);\n  const store = (0, _createStore.createStoreServer)(req); //Some logic to init and load data into store\n\n  const promises = (0, _reactRouterConfig.matchRoutes)(_router.Routes, req.path).map(({\n    route\n  }) => {\n    console.dir(route.loadData);\n    return route.loadData ? route.loadData(store) : null;\n  }).map(promise => {\n    if (promise) {\n      return new Promise((resolve, reject) => {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n\n  const render = () => {\n    const context = {};\n    const content = (0, _renderer.renderer)(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n\n    if (context.notFound) {\n      res.status(404);\n    } else {\n      res.send(content);\n    }\n  };\n\n  Promise.all(promises).then(render).catch(render);\n});\napp.listen(3010, () => {\n  console.log('Listening');\n});\n\n//# sourceURL=webpack://our-game/./server/index.ts?");

/***/ }),

/***/ "./client/src/assets/images/GameMedia.png":
/*!************************************************!*\
  !*** ./client/src/assets/images/GameMedia.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/GameMedia.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/GameMedia.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-0.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-0.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-0.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-0.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-1.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-1.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-1.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-1.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-10.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-10.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-10.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-10.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-11.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-11.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-11.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-11.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-12.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-12.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-12.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-12.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-13.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-13.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-13.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-13.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-14.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-14.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-14.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-14.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-15.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-15.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-15.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-15.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-16.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-16.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-16.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-16.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-17.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-17.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-17.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-17.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-18.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-18.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-18.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-18.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-19.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-19.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-19.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-19.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-2.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-2.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-2.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-2.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-20.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-20.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-20.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-20.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-21.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-21.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-21.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-21.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-22.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-22.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-22.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-22.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-23.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-23.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-23.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-23.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-24.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-24.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-24.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-24.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-25.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-25.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-25.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-25.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-26.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-26.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-26.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-26.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-27.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-27.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-27.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-27.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-28.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-28.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-28.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-28.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-29.png":
/*!******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-29.png ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-29.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-29.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-3.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-3.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-3.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-3.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-4.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-4.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-4.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-4.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-5.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-5.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-5.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-5.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-6.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-6.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-6.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-6.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-7.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-7.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-7.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-7.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-8.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-8.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-8.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-8.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health-9.png":
/*!*****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health-9.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health-9.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health-9.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/health/card-health.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/health/card-health.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-health.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/health/card-health.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-0.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-0.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-0.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-0.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-1.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-1.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-1.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-1.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-10.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-10.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-10.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-10.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-11.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-11.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-11.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-11.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-12.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-12.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-12.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-12.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-13.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-13.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-13.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-13.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-14.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-14.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-14.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-14.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-15.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-15.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-15.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-15.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-16.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-16.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-16.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-16.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-17.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-17.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-17.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-17.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-18.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-18.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-18.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-18.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-19.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-19.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-19.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-19.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-2.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-2.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-2.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-2.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-20.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-20.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-20.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-20.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-21.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-21.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-21.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-21.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-22.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-22.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-22.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-22.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-23.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-23.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-23.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-23.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-24.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-24.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-24.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-24.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-25.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-25.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-25.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-25.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-26.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-26.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-26.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-26.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-27.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-27.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-27.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-27.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-28.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-28.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-28.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-28.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-29.png":
/*!****************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-29.png ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-29.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-29.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-3.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-3.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-3.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-3.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-4.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-4.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-4.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-4.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-5.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-5.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-5.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-5.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-6.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-6.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-6.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-6.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-7.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-7.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-7.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-7.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-8.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-8.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-8.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-8.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health-9.png":
/*!***************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health-9.png ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health-9.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health-9.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/life-user/health.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/life-user/health.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/health.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/life-user/health.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-0.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-0.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-0.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-0.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-1.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-1.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-1.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-1.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-10.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-10.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-10.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-10.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-11.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-11.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-11.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-11.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-12.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-12.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-12.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-12.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-13.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-13.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-13.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-13.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-14.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-14.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-14.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-14.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-15.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-15.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-15.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-15.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-16.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-16.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-16.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-16.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-17.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-17.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-17.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-17.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-18.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-18.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-18.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-18.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-19.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-19.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-19.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-19.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-2.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-2.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-2.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-2.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-20.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-20.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-20.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-20.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-21.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-21.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-21.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-21.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-22.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-22.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-22.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-22.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-23.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-23.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-23.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-23.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-24.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-24.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-24.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-24.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-25.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-25.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-25.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-25.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-26.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-26.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-26.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-26.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-27.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-27.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-27.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-27.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-28.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-28.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-28.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-28.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-29.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-29.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-29.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-29.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-3.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-3.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-3.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-3.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-4.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-4.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-4.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-4.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-5.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-5.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-5.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-5.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-6.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-6.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-6.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-6.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-7.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-7.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-7.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-7.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-8.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-8.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-8.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-8.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana-9.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana-9.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana-9.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana-9.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana-user/mana.png":
/*!***********************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana-user/mana.png ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mana.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana-user/mana.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-1.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-1.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-1.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-1.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-10.png":
/*!**************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-10.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-10.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-10.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-2.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-2.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-2.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-2.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-3.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-3.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-3.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-3.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-4.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-4.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-4.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-4.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-5.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-5.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-5.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-5.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-6.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-6.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-6.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-6.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-7.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-7.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-7.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-7.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-8.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-8.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-8.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-8.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/mana/card-mana-9.png":
/*!*************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/mana/card-mana-9.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-mana-9.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/mana/card-mana-9.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-1.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-1.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-1.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-1.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-10.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-10.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-10.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-10.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-11.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-11.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-11.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-11.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-12.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-12.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-12.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-12.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-13.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-13.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-13.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-13.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-14.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-14.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-14.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-14.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-15.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-15.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-15.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-15.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-16.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-16.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-16.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-16.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-17.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-17.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-17.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-17.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-18.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-18.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-18.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-18.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-19.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-19.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-19.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-19.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-2.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-2.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-2.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-2.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-20.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-20.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-20.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-20.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-21.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-21.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-21.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-21.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-22.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-22.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-22.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-22.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-23.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-23.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-23.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-23.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-24.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-24.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-24.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-24.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-25.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-25.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-25.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-25.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-26.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-26.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-26.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-26.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-27.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-27.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-27.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-27.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-28.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-28.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-28.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-28.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-29.png":
/*!**********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-29.png ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-29.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-29.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-3.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-3.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-3.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-3.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-4.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-4.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-4.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-4.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-5.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-5.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-5.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-5.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-6.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-6.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-6.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-6.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-7.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-7.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-7.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-7.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-8.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-8.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-8.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-8.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength-9.png":
/*!*********************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength-9.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength-9.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength-9.png?");

/***/ }),

/***/ "./client/src/assets/images/game/card-numbers/strength/card-strength.png":
/*!*******************************************************************************!*\
  !*** ./client/src/assets/images/game/card-numbers/strength/card-strength.png ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card-strength.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/card-numbers/strength/card-strength.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_10_dead.png":
/*!******************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_10_dead.png ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_10_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_10_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_1_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_1_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_1_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_1_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_2_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_2_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_2_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_2_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_3_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_3_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_3_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_3_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_4_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_4_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_4_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_4_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_5_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_5_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_5_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_5_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_6_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_6_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_6_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_6_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_7_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_7_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_7_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_7_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_8_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_8_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_8_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_8_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/dead-card/card_9_dead.png":
/*!*****************************************************************!*\
  !*** ./client/src/assets/images/game/dead-card/card_9_dead.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_9_dead.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/dead-card/card_9_dead.png?");

/***/ }),

/***/ "./client/src/assets/images/game/deck.jpg":
/*!************************************************!*\
  !*** ./client/src/assets/images/game/deck.jpg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/deck.jpg\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/deck.jpg?");

/***/ }),

/***/ "./client/src/assets/images/game/default-user.png":
/*!********************************************************!*\
  !*** ./client/src/assets/images/game/default-user.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/default-user.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/default-user.png?");

/***/ }),

/***/ "./client/src/assets/images/game/end-turn.png":
/*!****************************************************!*\
  !*** ./client/src/assets/images/game/end-turn.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/end-turn.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/end-turn.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_10_fight.png":
/*!********************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_10_fight.png ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_10_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_10_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_1_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_1_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_1_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_1_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_2_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_2_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_2_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_2_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_3_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_3_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_3_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_3_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_4_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_4_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_4_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_4_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_5_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_5_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_5_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_5_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_6_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_6_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_6_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_6_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_7_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_7_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_7_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_7_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_8_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_8_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_8_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_8_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/fight-card/card_9_fight.png":
/*!*******************************************************************!*\
  !*** ./client/src/assets/images/game/fight-card/card_9_fight.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_9_fight.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/fight-card/card_9_fight.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_1.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_1.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_1.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_1.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_10.png":
/*!*************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_10.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_10.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_10.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_2.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_2.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_2.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_2.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_3.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_3.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_3.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_3.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_4.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_4.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_4.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_4.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_5.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_5.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_5.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_5.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_6.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_6.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_6.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_6.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_7.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_7.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_7.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_7.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_8.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_8.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_8.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_8.png?");

/***/ }),

/***/ "./client/src/assets/images/game/full-card/card_9.png":
/*!************************************************************!*\
  !*** ./client/src/assets/images/game/full-card/card_9.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/card_9.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/full-card/card_9.png?");

/***/ }),

/***/ "./client/src/assets/images/game/green-bg.png":
/*!****************************************************!*\
  !*** ./client/src/assets/images/game/green-bg.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/green-bg.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/green-bg.png?");

/***/ }),

/***/ "./client/src/assets/images/game/left-decor.png":
/*!******************************************************!*\
  !*** ./client/src/assets/images/game/left-decor.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/left-decor.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/left-decor.png?");

/***/ }),

/***/ "./client/src/assets/images/game/profile-pic-wrapper.png":
/*!***************************************************************!*\
  !*** ./client/src/assets/images/game/profile-pic-wrapper.png ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/profile-pic-wrapper.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/profile-pic-wrapper.png?");

/***/ }),

/***/ "./client/src/assets/images/game/right-decor.png":
/*!*******************************************************!*\
  !*** ./client/src/assets/images/game/right-decor.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/right-decor.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/right-decor.png?");

/***/ }),

/***/ "./client/src/assets/images/game/sword.png":
/*!*************************************************!*\
  !*** ./client/src/assets/images/game/sword.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/sword.png\");\n\n//# sourceURL=webpack://our-game/./client/src/assets/images/game/sword.png?");

/***/ }),

/***/ "./client/src/assets/css/fonts.css":
/*!*****************************************!*\
  !*** ./client/src/assets/css/fonts.css ***!
  \*****************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/assets/css/fonts.css?");

/***/ }),

/***/ "./client/src/common.css":
/*!*******************************!*\
  !*** ./client/src/common.css ***!
  \*******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/common.css?");

/***/ }),

/***/ "./client/src/components/avatar/avatar.css":
/*!*************************************************!*\
  !*** ./client/src/components/avatar/avatar.css ***!
  \*************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/avatar/avatar.css?");

/***/ }),

/***/ "./client/src/components/boxwrapper/boxwrapper.css":
/*!*********************************************************!*\
  !*** ./client/src/components/boxwrapper/boxwrapper.css ***!
  \*********************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/boxwrapper/boxwrapper.css?");

/***/ }),

/***/ "./client/src/components/button/button.css":
/*!*************************************************!*\
  !*** ./client/src/components/button/button.css ***!
  \*************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/button/button.css?");

/***/ }),

/***/ "./client/src/components/footer/footer.css":
/*!*************************************************!*\
  !*** ./client/src/components/footer/footer.css ***!
  \*************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/footer/footer.css?");

/***/ }),

/***/ "./client/src/components/generalError/generalError.css":
/*!*************************************************************!*\
  !*** ./client/src/components/generalError/generalError.css ***!
  \*************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/generalError/generalError.css?");

/***/ }),

/***/ "./client/src/components/header/header.css":
/*!*************************************************!*\
  !*** ./client/src/components/header/header.css ***!
  \*************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/header/header.css?");

/***/ }),

/***/ "./client/src/components/infoLine/infoLine.css":
/*!*****************************************************!*\
  !*** ./client/src/components/infoLine/infoLine.css ***!
  \*****************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/infoLine/infoLine.css?");

/***/ }),

/***/ "./client/src/components/inputField/inputfield.css":
/*!*********************************************************!*\
  !*** ./client/src/components/inputField/inputfield.css ***!
  \*********************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/inputField/inputfield.css?");

/***/ }),

/***/ "./client/src/components/leftsideButton/leftsideButton.css":
/*!*****************************************************************!*\
  !*** ./client/src/components/leftsideButton/leftsideButton.css ***!
  \*****************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/leftsideButton/leftsideButton.css?");

/***/ }),

/***/ "./client/src/components/menu/menu.css":
/*!*********************************************!*\
  !*** ./client/src/components/menu/menu.css ***!
  \*********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/menu/menu.css?");

/***/ }),

/***/ "./client/src/components/modal/modal.css":
/*!***********************************************!*\
  !*** ./client/src/components/modal/modal.css ***!
  \***********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/modal/modal.css?");

/***/ }),

/***/ "./client/src/components/spinner/spinner.css":
/*!***************************************************!*\
  !*** ./client/src/components/spinner/spinner.css ***!
  \***************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/spinner/spinner.css?");

/***/ }),

/***/ "./client/src/components/textareaField/textareafield.css":
/*!***************************************************************!*\
  !*** ./client/src/components/textareaField/textareafield.css ***!
  \***************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/textareaField/textareafield.css?");

/***/ }),

/***/ "./client/src/components/title/title.css":
/*!***********************************************!*\
  !*** ./client/src/components/title/title.css ***!
  \***********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/components/title/title.css?");

/***/ }),

/***/ "./client/src/css/info-page.css":
/*!**************************************!*\
  !*** ./client/src/css/info-page.css ***!
  \**************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/css/info-page.css?");

/***/ }),

/***/ "./client/src/css/page.css":
/*!*********************************!*\
  !*** ./client/src/css/page.css ***!
  \*********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/css/page.css?");

/***/ }),

/***/ "./client/src/gameEngine/Board/board.css":
/*!***********************************************!*\
  !*** ./client/src/gameEngine/Board/board.css ***!
  \***********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/Board/board.css?");

/***/ }),

/***/ "./client/src/gameEngine/BoardActivities/boardActivities.css":
/*!*******************************************************************!*\
  !*** ./client/src/gameEngine/BoardActivities/boardActivities.css ***!
  \*******************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/BoardActivities/boardActivities.css?");

/***/ }),

/***/ "./client/src/gameEngine/EndGame/endGame.css":
/*!***************************************************!*\
  !*** ./client/src/gameEngine/EndGame/endGame.css ***!
  \***************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/EndGame/endGame.css?");

/***/ }),

/***/ "./client/src/gameEngine/Sword/sword.css":
/*!***********************************************!*\
  !*** ./client/src/gameEngine/Sword/sword.css ***!
  \***********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/gameEngine/Sword/sword.css?");

/***/ }),

/***/ "./client/src/layouts/SiteLayout/siteLayout.css":
/*!******************************************************!*\
  !*** ./client/src/layouts/SiteLayout/siteLayout.css ***!
  \******************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/layouts/SiteLayout/siteLayout.css?");

/***/ }),

/***/ "./client/src/layouts/gamelayout/gamelayout.css":
/*!******************************************************!*\
  !*** ./client/src/layouts/gamelayout/gamelayout.css ***!
  \******************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/layouts/gamelayout/gamelayout.css?");

/***/ }),

/***/ "./client/src/pages/404/page404.css":
/*!******************************************!*\
  !*** ./client/src/pages/404/page404.css ***!
  \******************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/pages/404/page404.css?");

/***/ }),

/***/ "./client/src/pages/contactUs/contactUs.css":
/*!**************************************************!*\
  !*** ./client/src/pages/contactUs/contactUs.css ***!
  \**************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/pages/contactUs/contactUs.css?");

/***/ }),

/***/ "./client/src/pages/forum/forum.css":
/*!******************************************!*\
  !*** ./client/src/pages/forum/forum.css ***!
  \******************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/pages/forum/forum.css?");

/***/ }),

/***/ "./client/src/pages/homepage/homepage.css":
/*!************************************************!*\
  !*** ./client/src/pages/homepage/homepage.css ***!
  \************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/pages/homepage/homepage.css?");

/***/ }),

/***/ "./client/src/pages/profile/profile.css":
/*!**********************************************!*\
  !*** ./client/src/pages/profile/profile.css ***!
  \**********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/pages/profile/profile.css?");

/***/ }),

/***/ "./client/src/pages/score-dashboard/scoreDashboard.css":
/*!*************************************************************!*\
  !*** ./client/src/pages/score-dashboard/scoreDashboard.css ***!
  \*************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/pages/score-dashboard/scoreDashboard.css?");

/***/ }),

/***/ "./client/src/pages/threadPage/threadPage.css":
/*!****************************************************!*\
  !*** ./client/src/pages/threadPage/threadPage.css ***!
  \****************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://our-game/./client/src/pages/threadPage/threadPage.css?");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/extends");;

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/interopRequireDefault");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-http-proxy");;

/***/ }),

/***/ "final-form":
/*!*****************************!*\
  !*** external "final-form" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("final-form");;

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-proxy-middleware");;

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("immer");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-final-form");;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-immer":
/*!******************************!*\
  !*** external "redux-immer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-immer");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.ts");
/******/ 	
/******/ })()
;