/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_yellow_flower_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_yellow_flower_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Noto Sans\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  font-variation-settings: \"wdth\" 100;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  margin: 0;\n  height: 100vh;\n  background-color: #048096;\n}\n\n.login-box {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  width: 50vh;\n  height: 40vh;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(255, 255, 255, 0.95);\n  border-radius: 6px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.login-box h1 {\n  font-weight: 900;\n  font-size: xx-large;\n  color: rgb(34, 34, 34);\n  margin-bottom: 30px;\n}\n.login-box div {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  color: rgb(105, 105, 105);\n  font-size: small;\n}\n.login-box button {\n  border: none;\n  font-size: large;\n  font-weight: 700;\n  color: white;\n  background-color: #048096;\n  padding: 8px 50px;\n  border-radius: 6px;\n  margin: 30px 40px;\n}\n\n.login-input {\n  border: none;\n  border-bottom: 1px solid rgb(105, 105, 105);\n  background-color: rgba(255, 255, 255, 0);\n  margin-bottom: 10px;\n  width: 200px;\n}\n.login-input:focus {\n  outline: 2px solid #FAC000;\n}\n\n.dashboard {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.dashboard h2 {\n  font-weight: 900;\n  color: white;\n  margin-bottom: 5px;\n}\n.dashboard .butt {\n  border: 1px solid white;\n  font-size: large;\n  color: white;\n  background-color: rgba(4, 128, 150, 0.8);\n  width: 50px;\n  height: 50px;\n  border-radius: 6px;\n  margin: 10px;\n}\n.dashboard .butt svg {\n  margin-top: 3px;\n  fill: white;\n  height: 24px;\n}\n.dashboard div {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  align-items: flex-start;\n  width: 50vh;\n  height: 40vh;\n  background-color: rgba(255, 255, 255, 0.95);\n  border-radius: 6px;\n  margin-top: 10px;\n  padding: 20px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow-y: auto;\n}\n.dashboard div ul {\n  margin: 10px;\n}\n.dashboard h3 {\n  font-weight: 900;\n  color: white;\n  margin-bottom: 0;\n}\n.dashboard h1 {\n  font-size: xx-large;\n  font-weight: 900;\n  color: white;\n  margin-top: 0;\n}\n.dashboard .add-trips {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard .add-trips div {\n  justify-content: center;\n  flex-direction: column;\n  background-color: rgba(255, 255, 255, 0);\n  align-items: center;\n  overflow-y: none;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0);\n  padding: 0;\n  height: auto;\n}\n.dashboard .add-trips .input-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin: 0;\n}\n.dashboard .add-trips .trip-start-input {\n  border: none;\n  border-bottom: 1px solid rgb(105, 105, 105);\n  background-color: rgba(255, 255, 255, 0);\n  margin-bottom: 10px;\n  width: 110px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 70px;\n}\n.dashboard .add-trips .trip-start-input:focus {\n  outline: 2px solid #FAC000;\n}\n.dashboard .add-trips .trip-duration-input {\n  border: none;\n  border-bottom: 1px solid rgb(105, 105, 105);\n  background-color: rgba(255, 255, 255, 0);\n  margin-bottom: 10px;\n  width: 110px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 70px;\n  text-align: center;\n}\n.dashboard .add-trips .trip-duration-input:focus {\n  outline: 2px solid #FAC000;\n}\n.dashboard .add-trips .num-travelers-input {\n  border: none;\n  border-bottom: 1px solid rgb(105, 105, 105);\n  background-color: rgba(255, 255, 255, 0);\n  margin-bottom: 10px;\n  width: 110px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 70px;\n  text-align: center;\n}\n.dashboard .add-trips .num-travelers-input:focus {\n  outline: 2px solid #FAC000;\n}\n.dashboard .add-trips .destination-select {\n  border: none;\n  border-bottom: 1px solid rgb(105, 105, 105);\n  background-color: rgba(255, 255, 255, 0);\n  margin-bottom: 10px;\n  width: 114px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 70px;\n  text-align: center;\n}\n.dashboard .add-trips .destination-select:focus {\n  outline: 2px solid #FAC000;\n}\n.dashboard .add-trips .confirm-trip-btn {\n  border: none;\n  font-size: large;\n  font-weight: 700;\n  color: white;\n  background-color: #048096;\n  padding: 8px 50px;\n  border-radius: 6px;\n  margin: 30px 40px;\n  margin-bottom: 0px;\n}\n.dashboard .add-trip-buttons {\n  justify-content: center;\n  flex-direction: column;\n  background-color: rgba(255, 255, 255, 0);\n  align-items: center;\n  overflow-y: none;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0);\n  height: auto;\n  overflow-y: visible;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n.dashboard .add-trip-buttons .add-trip-btn {\n  border: none;\n  font-size: large;\n  font-weight: 700;\n  color: white;\n  background-color: #048096;\n  padding: 8px 50px;\n  border-radius: 6px;\n  margin: 30px 40px;\n  margin: 5px;\n}\n.dashboard .add-trip-buttons .go-back-btn {\n  border: none;\n  font-size: large;\n  font-weight: 700;\n  color: white;\n  background-color: #048096;\n  padding: 8px 50px;\n  border-radius: 6px;\n  margin: 30px 40px;\n  border: 3px solid #048096;\n  font-size: large;\n  font-weight: 700;\n  color: #048096;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 6px 48px;\n  margin: 5px;\n}\n\n.upcoming-trips {\n  align-items: center !important;\n}\n\n.add-trips {\n  align-items: center !important;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.selected-button {\n  background-color: white !important;\n}\n.selected-button svg {\n  fill: #048096 !important;\n}\n\n.error {\n  color: #fa0053 !important;\n}\n\n.fetch-error {\n  background-color: #fa0053;\n  font-weight: 900;\n  width: 100%;\n  padding: 300px;\n  text-align: center;\n  border-radius: 6px;\n  z-index: 10 !important;\n  position: absolute;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'variables';\n\n* {\n  font-family: \"Noto Sans\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  font-variation-settings:\n    \"wdth\" 100;\n\n}\n\nbody {\n  @include flex-center;\n  background-image: url('../images/yellow-flower.jpg');\n  background-position: center top; \n  background-repeat: no-repeat;\n  background-size: cover; \n  position: relative;\n  margin: 0;\n  height: 100vh;\n  background-color: $main-color;\n}\n\n.login-box {\n  @include flex-center;\n\n  position: absolute;\n  width: 50vh;\n  height: 40vh;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(255, 255, 255, 0.95);\n  border-radius: 6px;\n  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);\n\n  h1 {\n    font-weight: 900;\n    font-size: xx-large;\n    color: $black-text;\n    margin-bottom: 30px;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    color: rgb(105, 105, 105);\n    font-size: small;\n  }\n  \n  button {\n    @include main-button\n  } \n}\n\n.login-input {\n  border: none;\n  border-bottom: 1px solid rgb(105, 105, 105);\n  background-color: rgba(255, 255, 255, 0);\n  margin-bottom: 10px;\n  width: 200px;\n  \n  &:focus {\n    outline: 2px solid $accent-color;\n  }\n}\n\n.dashboard {\n  @include flex-center;\n\n  h2 {\n    font-weight: 900;\n    color: white;\n    margin-bottom: 5px;\n  }\n\n  .butt {\n    border: 1px solid white;\n    font-size: large;\n    color: white;\n    background-color: rgba(4,128,150,0.8);\n    width: 50px;\n    height: 50px;\n    border-radius: 6px;\n    margin: 10px;\n\n    svg {\n      margin-top: 3px;\n      fill: white;\n      height: 24px;\n    }\n\n  }\n\n  div {\n    @include flex-center;\n    align-items: flex-start;\n    width: 50vh;\n    height: 40vh;\n    background-color: rgba(255, 255, 255, 0.95);\n    border-radius: 6px;\n    margin-top: 10px;\n    padding: 20px;\n\n    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);\n    overflow-y: auto;  \n\n    ul {\n      margin: 10px;\n    }\n  }\n\n  h3 {\n    font-weight: 900;\n    color: white;\n    margin-bottom: 0;\n  }\n\n  h1 {\n    font-size: xx-large;\n    font-weight: 900;\n    color: white;\n    margin-top: 0;\n  }\n\n  .add-trips {\n    display: flex;\n    flex-direction: column;\n    \n    div {\n      @include remove-div-styling;\n      padding: 0;\n      height: auto;\n    }\n\n    .input-flex {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n      margin: 0;\n      \n    }\n    \n    .trip-start-input {\n    @include main-input-styling;\n    width: 110px;\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-right: 70px;\n    }\n  \n    .trip-duration-input {\n    @include main-input-styling;\n    width: 110px;\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-right: 70px;\n    text-align: center;\n    }\n  \n    .num-travelers-input {\n    @include main-input-styling;\n    width: 110px;\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-right: 70px;\n    text-align: center;\n    }\n  \n    .destination-select {\n    @include main-input-styling;\n    width: 114px;\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-right: 70px;\n    text-align: center;\n    }\n  \n    .confirm-trip-btn {\n      @include main-button;\n      margin-bottom: 0px\n    }\n  }\n  \n  .add-trip-buttons {\n    @include remove-div-styling;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0);\n    height: auto;\n    overflow-y: visible;\n    padding: 0;\n    display: flex;\n    flex-direction: row;\n  \n    .add-trip-btn {\n      @include main-button;\n      margin: 5px;\n    }\n  \n    .go-back-btn {\n      @include main-button;\n      border: 3px solid $main-color;\n      font-size: large;\n      font-weight: 700;\n      color: $main-color;\n      background-color: rgba(0, 0, 0, 0);\n      padding: 6px 48px;\n      margin: 5px;\n    }\n  }\n}\n\n.upcoming-trips {\n  align-items: center !important;\n}\n\n.add-trips {\n  align-items: center !important;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.selected-button {\n  background-color: white !important;\n\n  svg {\n    fill: $main-color !important;\n  }\n}\n\n.error {\n  color: $error-color !important;\n}\n\n.fetch-error {\n  background-color: $error-color;\n  font-weight: 900;\n  width: 100%;\n  padding: 300px;\n  text-align: center;\n  border-radius: 6px;\n  z-index: 10 !important;\n  position: absolute;\n}\n","$main-color: #048096;\n\n$accent-color: #FAC000;\n\n$error-color: #fa0053;\n\n$black-text: rgb(34, 34, 34);\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n@mixin main-button {\n  border: none;\n  font-size: large;\n  font-weight: 700;\n  color: white;\n  background-color: $main-color;\n  padding: 8px 50px;\n  border-radius: 6px;\n  margin: 30px 40px;\n}\n\n@mixin main-input-styling {\n  border: none;\n  border-bottom: 1px solid rgb(105, 105, 105);\n  background-color: rgba(255, 255, 255, 0);\n  margin-bottom: 10px;\n  \n  &:focus {\n    outline: 2px solid $accent-color;\n  }\n}\n\n@mixin remove-div-styling {\n  // display: none;\n  justify-content: center;\n  flex-direction: column;\n  background-color: rgba(255, 255, 255, 0);\n  align-items: center;\n  overflow-y: none;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/yellow-flower.jpg");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDefaultButtonStyling: () => (/* binding */ addDefaultButtonStyling),
/* harmony export */   addTrips: () => (/* binding */ addTrips),
/* harmony export */   changePageTitle: () => (/* binding */ changePageTitle),
/* harmony export */   displayDash: () => (/* binding */ displayDash),
/* harmony export */   displayDestinationsInList: () => (/* binding */ displayDestinationsInList),
/* harmony export */   displayErrorMessage: () => (/* binding */ displayErrorMessage),
/* harmony export */   displayFetchError: () => (/* binding */ displayFetchError),
/* harmony export */   displayFinalCost: () => (/* binding */ displayFinalCost),
/* harmony export */   displayLoginError: () => (/* binding */ displayLoginError),
/* harmony export */   displayNewTripConfirm: () => (/* binding */ displayNewTripConfirm),
/* harmony export */   displayPastTrips: () => (/* binding */ displayPastTrips),
/* harmony export */   displayPendingTrips: () => (/* binding */ displayPendingTrips),
/* harmony export */   goBackAddTrip: () => (/* binding */ goBackAddTrip),
/* harmony export */   hideTripsDiv: () => (/* binding */ hideTripsDiv),
/* harmony export */   pastTrips: () => (/* binding */ pastTrips),
/* harmony export */   pendingTrips: () => (/* binding */ pendingTrips),
/* harmony export */   populateConfirmTripRequest: () => (/* binding */ populateConfirmTripRequest),
/* harmony export */   switchToPendingTrips: () => (/* binding */ switchToPendingTrips),
/* harmony export */   upcomingTrips: () => (/* binding */ upcomingTrips)
/* harmony export */ });
var username = document.getElementById('username')
var password = document.getElementById('pass')
const navButtons = document.getElementById('navButtons')
const pastTrips = document.getElementById('pastTrips')
const pendingTrips = document.getElementById('pendingTrips')
const upcomingTrips = document.getElementById('upcomingTrips')
const addTrips = document.getElementById('addTrips')
const costThisYear = document.getElementById('costThisYear')
const finalCostDiv = document.getElementById('finalCost')
const destSelect = document.getElementById('destinationSelect')
const errorAddTrips = document.getElementById('errorAddTrips')
const addTripInputs = {
    startDate: document.getElementById('tripStartInput'),
    tripDuration: document.getElementById('tripDurationInput'),
    travelers: document.getElementById('numTravelersInput'),
    destinations: document.getElementById('destinationSelect'),
}
const confirmTrips = document.getElementById('confirmTrips')
const confirmTripInfo = {
    startDate: document.getElementById('startDateConfirm'),
    tripDuration: document.getElementById('durationComfirm'),
    travelers: document.getElementById('travelersConfirm'),
    destinations: document.getElementById('destinationConfirm'),
    travelAgent: document.getElementById('travelAgentConfirm'),
    finalCostThisTrip: document.getElementById('finalCostThisTrip'),
}
const costThisTrip = document.getElementById('costThisTrip')
const finalCostThisTrip = document.getElementById('finalCostThisTrip')
const usernameDiv = document.querySelector('#usernameDiv label')
const passwordDiv = document.querySelector('#passwordDiv label')
const fetchError = document.getElementById('fetchError')


function displayPastTrips(tripDates, tripLocations) {
    pastTrips.innerHTML = ''
    tripDates.forEach((date, i) => {
        pastTrips.innerHTML += `<ul>${i+1}. ${tripLocations[i].destination} // ${date}</ul>`
    })
}

function displayFinalCost(finalCost) {    
    finalCostDiv.innerText = `$${finalCost}` 
}

function changePageTitle(page) {
    dashTitle.innerText = `//${page} trips//`
}

function addDefaultButtonStyling() {
    document.querySelectorAll('.nav-buttons .butt').forEach(butt => {
        butt.classList.remove('selected-button');
    });
}

function hideTripsDiv() {
    document.querySelectorAll('.dashboard .trips').forEach(dashboard => {
        dashboard.classList.add('hidden');
    });
}

function displayDestinationsInList(destData) {

    let sortedDests = destData.destinations.sort((a, b) => a.destination.localeCompare(b.destination))
    sortedDests.forEach(dest => {
        destSelect.innerHTML += `<option value="${dest.id}">${dest.destination}</option>`
    })
}

function populateConfirmTripRequest(startDate, tripCost, destName) {
    let travelAgentFee = tripCost * 0.1
    let finalCost = tripCost * 1.1
    confirmTripInfo.startDate.innerText = `start date: ${startDate}`
    confirmTripInfo.tripDuration.innerText = `duration: ${addTripInputs.tripDuration.value} days`
    confirmTripInfo.travelers.innerText = `travelers: ${addTripInputs.travelers.value}`
    confirmTripInfo.destinations.innerText = `destination: ${destName}`
    confirmTripInfo.travelAgent.innerText = `travel agent fee (10%): $${travelAgentFee.toFixed(2)}`
    confirmTripInfo.finalCostThisTrip.innerText = `$${finalCost.toFixed(2)}`
}

function displayErrorMessage() {
    let noErrors = true
    if (addTripInputs.startDate.value.slice(0, 4) < 2024 || addTripInputs.startDate.value.slice(0, 4) > 2099) {
        errorAddTrips.innerText = 'please enter a valid date'
        errorAddTrips.classList.remove('hidden')
        addTripInputs.startDate.classList.add('error')
        noErrors = false
    } else if (/[a-zA-Z]/.test(addTripInputs.tripDuration.value) || !addTripInputs.tripDuration.value) {
        errorAddTrips.innerText = 'please enter a valid duration'
        errorAddTrips.classList.remove('hidden')
        addTripInputs.tripDuration.classList.add('error')
        noErrors = false
    } else if (/[a-zA-Z]/.test(addTripInputs.travelers.value) || !addTripInputs.travelers.value) {
        errorAddTrips.innerText = 'please enter a valid traveler amount'
        errorAddTrips.classList.remove('hidden')
        addTripInputs.travelers.classList.add('error')
        noErrors = false
    } else if (!addTripInputs.destinations.value) {
        errorAddTrips.innerText = 'please enter a valid destination'
        errorAddTrips.classList.remove('hidden')
        addTripInputs.destinations.classList.add('error')
        noErrors = false
    } 
    return noErrors
}

function displayNewTripConfirm() {
    addTrips.classList.add('hidden')
    navButtons.classList.add('hidden')
    confirmTrips.classList.remove('hidden')
    costThisTrip.classList.remove('hidden')
    finalCostThisTrip.classList.remove('hidden')
    costThisYear.classList.add('hidden')
    finalCostDiv.classList.add('hidden')
}

function goBackAddTrip() {
    addTrips.classList.remove('hidden')
    navButtons.classList.remove('hidden')
    confirmTrips.classList.add('hidden')
    costThisTrip.classList.add('hidden')
    finalCostThisTrip.classList.add('hidden')
    costThisYear.classList.remove('hidden')
    finalCostDiv.classList.remove('hidden')
}

function displayPendingTrips(pendTrips, tripLocations) {
    if (pendTrips && tripLocations) {
        pendingTrips.innerText = ''
        pendTrips.forEach((trip, i) => {
            pendingTrips.innerHTML += `<ul>${i+1}. ${tripLocations[i].destination} // ${trip.date}</ul>`
        })
    }
}

function switchToPendingTrips() {
    navButtons.classList.remove('hidden')
    pendingTrips.classList.remove('hidden')
    costThisYear.classList.remove('hidden')
    finalCostDiv.classList.remove('hidden')
    costThisTrip.classList.add('hidden')
    finalCostThisTrip.classList.add('hidden')
    confirmTrips.classList.add('hidden')
    changePageTitle('pending')
    
    addButton.classList.remove('selected-button')
    pendingButton.classList.add('selected-button')
}

function displayDash() {
    loginBox.classList.add('hidden')
    navButtons.classList.remove('hidden')
    dashTitle.classList.remove('hidden')
    costThisYear.classList.remove('hidden')
    finalCostDiv.classList.remove('hidden')
    pastTrips.classList.remove('hidden')
}

function displayLoginError(field) {
    if (field === 'username') {
        usernameDiv.classList.add('error')
        usernameDiv.innerText = 'please enter a valid username'
    } else if (field === 'password') {
        passwordDiv.classList.add('error')
        passwordDiv.innerText = 'please enter a valid password'
    }
}

function displayFetchError(error) {
    fetchError.classList.remove('hidden')
    fetchError.innerText = error
}



/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


function fetchData(endpoint) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => {
        if (!response.ok) {
            (0,_domUpdates__WEBPACK_IMPORTED_MODULE_0__.displayFetchError)(`//woops, fetch ${endpoint} broke//`)
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => {
        console.log(`Error fetching ${endpoint}:`, error);
        throw error; 
    });
}

function postData(endpoint, content) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`, {
        method: "POST",
		headers: {"Content-Type": "application/json"},
        body: JSON.stringify(content)
    })
    .then(response => {
        if (!response.ok) {
            (0,_domUpdates__WEBPACK_IMPORTED_MODULE_0__.displayFetchError)(`//woops, fetch ${endpoint} broke//`)
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => console.log(`Error fetching ${endpoint}:`, error))
}




/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);






var username = document.getElementById('username')
var password = document.getElementById('pass')
var login = document.getElementById('login')
const loginBox = document.getElementById('loginBox')
const pastButton = document.getElementById('pastButton')
const pendingButton = document.getElementById('pendingButton')
const upcomingButton = document.getElementById('upcomingButton')
const addButton = document.getElementById('addButton')
const navButtons = document.querySelector('.nav-buttons')
const dashTitle = document.getElementById('dashTitle')
const confirmTripBtn = document.getElementById('confirmTripBtn')
const addTripInputs = {
    startDate: document.getElementById('tripStartInput'),
    tripDuration: document.getElementById('tripDurationInput'),
    travelers: document.getElementById('numTravelersInput'),
    destinations: document.getElementById('destinationSelect'),
}
const goBackBtn = document.getElementById('goBackBtn')
const addTripBtn = document.getElementById('addTripBtn')

let travelersList = []
let destList = []
let newTrip = {
    id: `<number>`, 
    userID: `<number>`, 
    destinationID: `<number>`, 
    travelers: `<number>`, 
    date: `<string 'YYYY/MM/DD'>`, 
    duration: `<number>`, 
    status: "pending", 
    suggestedActivities: []
}

function getTripData(userId) {
    Promise.all([(0,_apiCalls__WEBPACK_IMPORTED_MODULE_3__.fetchData)('trips'), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_3__.fetchData)('destinations')])
    .then(([trips, destinations]) => {
        // --- past trips 
        let chronologicalDates = sortDataById(trips, userId).map(trip => trip.date).sort((a, b) => new Date(b) - new Date(a))
        let tripList = sortDataById(trips, userId).sort((a, b) => a.destinationID - b.destinationID)
        let tripLocations = getDestinationsByIds(destinations, tripList)
        let tripsThisYear = getTripsThisYear(tripList)
        let finalCost = getFinalCost(destinations, tripsThisYear)
        let pendingTrips = sortTripsByPending(trips, userId).sort((a, b) => a.destinationID - b.destinationID)
        let pendingDestinations = sortDestinationsByPending(pendingTrips, destinations)

        // --- new trips object
        newTrip.id = getMostRecentTripId(trips) + 1
        newTrip.userID = userId

        // --- add trips
        populateDestList(destinations)
        
        // --- dom updates
        ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayPastTrips)(chronologicalDates, tripLocations)
        ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayFinalCost)(finalCost)
        ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayDestinationsInList)(destinations)
        ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayPendingTrips)(pendingTrips, pendingDestinations)
    })
    .catch(error => {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayFetchError)(`//woops, server is down//`)
        console.error("Error in fetching trips and destinations:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    username.value = ''
    password.value = ''
    addTripInputs.tripDuration.value = ''
    addTripInputs.travelers.value = ''
    ;(0,_apiCalls__WEBPACK_IMPORTED_MODULE_3__.fetchData)('travelers')
        .then(data => {
            travelersList = data;
        })
        .catch(error => {
            (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayFetchError)(`//woops, server is down//`)
            console.error("Error in finding travelers:", error);
        });
})


login.addEventListener("click", () => {
    if (verifyLogin()) {
        getTripData(parseUserId(username.value))
        ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayDash)()
        username.value = ''
        password.value = '' 
    }
})

confirmTripBtn.addEventListener("click", (e) => {
    getDestListFromSession()
    
    if ((0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayErrorMessage)()) {
        let dateValue = replaceDashes(addTripInputs.startDate.value)
        let destName = getDestinationNameById()
        let finalCostValue = calculateNewTrip()
        ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.populateConfirmTripRequest)(dateValue, finalCostValue, destName)
        ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayNewTripConfirm)()
    }
})

goBackBtn.addEventListener("click", () => {
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.goBackAddTrip)()
})

addTripBtn.addEventListener("click", () => {
    populateNewTrip()
    ;(0,_apiCalls__WEBPACK_IMPORTED_MODULE_3__.postData)('trips', newTrip) 
        .then(response => {
            ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.switchToPendingTrips)();
            getTripData(newTrip.userID);
        })
        .catch(error => {
            (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayFetchError)(`//woops, server is down//`)
            console.error("Error in posting trips:", error);
        });
})

pastButton.addEventListener("click", () => {
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.addDefaultButtonStyling)()
    pastButton.classList.add('selected-button')
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.hideTripsDiv)()
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.changePageTitle)('past')
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__.pastTrips.classList.remove('hidden')
})

pendingButton.addEventListener("click", () => {
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.addDefaultButtonStyling)()
    pendingButton.classList.add('selected-button')
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.hideTripsDiv)()
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.changePageTitle)('pending')
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__.pendingTrips.classList.remove('hidden')
})

upcomingButton.addEventListener("click", () => {
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.addDefaultButtonStyling)()
    upcomingButton.classList.add('selected-button')
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.hideTripsDiv)()
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.changePageTitle)('upcoming')
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__.upcomingTrips.classList.remove('hidden')
})

addButton.addEventListener("click", () => {
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.addDefaultButtonStyling)()
    addButton.classList.add('selected-button')
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.hideTripsDiv)()
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.changePageTitle)('add')
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__.addTrips.classList.remove('hidden')
})

function parseUserId(username) {
    return Number(username.replace('traveler', ''))
}

function sortDataById(data, userId) {
    return data.trips.filter(data => data.userID === userId && data.status === "approved")
}

function sortTripsByPending(data, userId) {
    return data.trips.filter(data => data.userID === userId && data.status === "pending")
}

function sortDestinationsByPending(tripsData, destData) {
    let dest = []
    tripsData.forEach(trip => {
        dest.push(destData.destinations.find(dest => dest.id === trip.destinationID))
    })
    return dest
}

function getDestinationsByIds(data, destIds) {
    let destArray = []
    destIds.forEach(id => {
        data.destinations.forEach(dest => {
         if (dest.id === id.destinationID) {
            destArray.push(dest)
         }
        })
    })
    return destArray
}

function getTripsThisYear(tripList) {
    let tripsThisYear = []
    tripList.forEach(trip => {
        if (trip.date.includes(tripList[0].date.slice(0, 4))) {
            tripsThisYear.push(trip)
        }
    })
    return tripsThisYear
}

function getFinalCost(data, tripsThisYear) {
    let finalCost = 0
    tripsThisYear.forEach(id => {
        data.destinations.forEach(dest => {
            if (dest.id === id.destinationID) {
                let tripTotal = ((id.travelers) + dest.estimatedLodgingCostPerDay) * 1.1
                finalCost += tripTotal
            }
        })
    })
    return finalCost.toFixed(2)
}

function replaceDashes(date) {
    return date.replace(/-/g, '/')
  }

function calculateNewTrip() {
    let tripToal = 0
    let destId = parseInt(addTripInputs.destinations.value)
    let tripDuration = parseInt(addTripInputs.tripDuration.value) 
    let travelers = parseInt(addTripInputs.travelers.value) 
    let selectDest = destList.find(dest => dest.id === destId);
    
    tripToal += selectDest.estimatedLodgingCostPerDay * tripDuration
    tripToal += selectDest.estimatedFlightCostPerPerson * travelers
    return tripToal
}

function getDestinationNameById() {
    let destId = parseInt(addTripInputs.destinations.value)
    let destination = destList.find(dest => dest.id == destId);
    return destination.destination
}

function populateDestList(destData) {
    destList = destData.destinations;
    sessionStorage.setItem('destList', JSON.stringify(destList));
}

function getDestListFromSession() {
    const storedDestList = sessionStorage.getItem('destList');
    if (storedDestList) {
        destList = JSON.parse(storedDestList);
    } else {
        console.log('No destList found in sessionStorage.');
    }
}

function getMostRecentTripId(tripsData) {
    return tripsData.trips.length
}

function populateNewTrip() {
    newTrip.destinationID = parseInt(addTripInputs.destinations.value)
    newTrip.travelers = parseInt(addTripInputs.travelers.value)
    newTrip.date = replaceDashes(addTripInputs.startDate.value)
    newTrip.duration = parseInt(addTripInputs.tripDuration.value)
}

function verifyLogin() {
    let verified = true
    let travelerAmount = travelersList.travelers.length
    if (!username.value.includes('traveler')) {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayLoginError)('username')
        verified = false
    } else if (!/\d/.test(username.value)) {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayLoginError)('username')
        verified = false
    } else if (parseInt(username.value.replace('traveler', '')) > travelerAmount) {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayLoginError)('username')
        verified = false
    } else if (!password.value.includes('traveler')) {
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayLoginError)('password')
        verified = false
    }
    return verified
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map