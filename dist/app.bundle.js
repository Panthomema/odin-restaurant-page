(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["app"],{

/***/ "./assets/images/plates lazy recursive ^\\.\\/.*$":
/*!**************************************************************!*\
  !*** ./assets/images/plates/ lazy ^\.\/.*$ namespace object ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./chrono-braised-lamb.jpg": [
		"./assets/images/plates/chrono-braised-lamb.jpg",
		"assets_images_plates_chrono-braised-lamb_jpg"
	],
	"./dreamscapes-pasta.jpg": [
		"./assets/images/plates/dreamscapes-pasta.jpg",
		"assets_images_plates_dreamscapes-pasta_jpg"
	],
	"./elemental-soup.jpg": [
		"./assets/images/plates/elemental-soup.jpg",
		"assets_images_plates_elemental-soup_jpg"
	],
	"./ephemeral-dessert.jpg": [
		"./assets/images/plates/ephemeral-dessert.jpg",
		"assets_images_plates_ephemeral-dessert_jpg"
	],
	"./eternal-flame-steak.jpg": [
		"./assets/images/plates/eternal-flame-steak.jpg",
		"assets_images_plates_eternal-flame-steak_jpg"
	],
	"./galactic-shushi.png": [
		"./assets/images/plates/galactic-shushi.png",
		"assets_images_plates_galactic-shushi_png"
	],
	"./infinity-pizza.jpg": [
		"./assets/images/plates/infinity-pizza.jpg",
		"assets_images_plates_infinity-pizza_jpg"
	],
	"./phoenix-ramen.jpg": [
		"./assets/images/plates/phoenix-ramen.jpg",
		"assets_images_plates_phoenix-ramen_jpg"
	],
	"./quantum-quiche.jpg": [
		"./assets/images/plates/quantum-quiche.jpg",
		"assets_images_plates_quantum-quiche_jpg"
	],
	"./rainbow-cloud-salad.jpg": [
		"./assets/images/plates/rainbow-cloud-salad.jpg",
		"assets_images_plates_rainbow-cloud-salad_jpg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./assets/images/plates lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/3dumb_regular_macroman/3Dumb-webfont.woff */ "./assets/fonts/3dumb_regular_macroman/3Dumb-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/2dumb_regular_macroman/2Dumb-webfont.woff */ "./assets/fonts/2dumb_regular_macroman/2Dumb-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/background.jpg */ "./assets/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@layer reset {
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: unset;
    min-height: 100dvh;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
    color: unset;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  fieldset,
  button {
    border: none;
  }

  :focus {
    outline: 0;
  }

  img,
  picture,
  svg,
  canvas {
    display: block;
    max-inline-size: 100%;
    block-size: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@font-face {
  font-family: "3dumbregular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "2dumbregular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___})
    format("woff");
  font-weight: normal;
  font-style: normal;
}

:root {
  --color-header: #99627a;
  --color-btn-actual: #4b2e5a;
  --color-text: #2f4f4f;
  --color-link-hover: #4f6f6f;
  --color-link-active: #1f3f3f;
  --color-link-visited: #505050;
}

html {
  font-size: clamp(12px, calc(10px + 0.5vw), 24px);
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2em;

  text-align: center;
  user-select: none;

  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-attachment: fixed;

  font-family: "2dumbregular";
  color: var(--color-text);
}

header,
footer {
  padding: 0.75em;
}

header {
  width: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.75em;
  font-family: "3dumbregular";
  font-weight: 700;
  color: var(--color-header);
}

nav {
  display: flex;
  justify-content: center;
  font-size: 2em;
  gap: 1em;
}

button {
  background: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(0.9);
}

.actual {
  color: var(--color-btn-actual);
}

header h1 {
  font-size: 3em;
}

img {
  border: 2px solid #ffffffc4;
  /*
  mask-image: radial-gradient(ellipse, #ffffff 80%, #ffffff00 100%);
  */
}

#content {
  width: 90%;
  max-width: 600px;
  padding: 2em;

  background: #ffffff;
  background: radial-gradient(
    ellipse,
    #ffffffcc 0%,
    #ffffff99 50%,
    #ffffff80 75%,
    #ffffff4d 90%,
    #ffffff00 100%
  );

  backdrop-filter: blur(0.3em);
  box-shadow: 0 0.2em 0.8em #0000001a;
}

#content > * {
  view-transition-name: content;
}

::view-transition-group(root) {
  animation: none;
}

::view-transition-group(content) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}

::view-transition-new(content) {
  animation-delay: 0.5s;
}

#content > div {
  display: flex;
  flex-direction: column;
  gap: 3em;
}

#plates {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2em;
}

#plates > div {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.image-container {
  position: relative;
  cursor: pointer;
}

.opacity-0 {
  opacity: 0;
}

.caption {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 1em;
  background: #ffffffcc;
  transition: opacity 0.2s ease;
}

.icon-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.icon-text svg {
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
}

footer {
  font-size: 0.75rem;
}

footer a {
  text-decoration: underline;
}

footer a:hover {
  color: var(--color-link-hover);
}

footer a:active {
  color: var(--color-link-active);
}

footer a:visited {
  color: var(--color-link-visited);
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE;;;IAGE,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,kBAAkB;EACpB;;EAEA;;;;IAIE,aAAa;IACb,YAAY;EACd;;EAEA;;IAEE,cAAc;IACd,qBAAqB;EACvB;;EAEA;;IAEE,YAAY;EACd;;EAEA;IACE,UAAU;EACZ;;EAEA;;;;IAIE,cAAc;IACd,qBAAqB;IACrB,gBAAgB;EAClB;;EAEA;IACE;;;MAGE,qCAAqC;MACrC,uCAAuC;MACvC,sCAAsC;MACtC,gCAAgC;IAClC;EACF;AACF;;AAEA;EACE,2BAA2B;EAC3B;kBACgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B;kBACgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,2BAA2B;EAC3B,qBAAqB;EACrB,2BAA2B;EAC3B,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,QAAQ;;EAER,kBAAkB;EAClB,iBAAiB;;EAEjB,yDAA2D;EAC3D,sBAAsB;EACtB,4BAA4B;;EAE5B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,2BAA2B;EAC3B,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B;;GAEC;AACH;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,YAAY;;EAEZ,mBAAmB;EACnB;;;;;;;GAOC;;EAED,4BAA4B;EAC5B,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["@layer reset {\n  *,\n  *::before,\n  *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: unset;\n    min-height: 100dvh;\n  }\n\n  button,\n  input,\n  textarea,\n  select {\n    font: inherit;\n    color: unset;\n  }\n\n  a,\n  a:visited {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  fieldset,\n  button {\n    border: none;\n  }\n\n  :focus {\n    outline: 0;\n  }\n\n  img,\n  picture,\n  svg,\n  canvas {\n    display: block;\n    max-inline-size: 100%;\n    block-size: auto;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n}\n\n@font-face {\n  font-family: \"3dumbregular\";\n  src: url(\"../../assets/fonts/3dumb_regular_macroman/3Dumb-webfont.woff\")\n    format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"2dumbregular\";\n  src: url(\"../../assets/fonts/2dumb_regular_macroman/2Dumb-webfont.woff\")\n    format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --color-header: #99627a;\n  --color-btn-actual: #4b2e5a;\n  --color-text: #2f4f4f;\n  --color-link-hover: #4f6f6f;\n  --color-link-active: #1f3f3f;\n  --color-link-visited: #505050;\n}\n\nhtml {\n  font-size: clamp(12px, calc(10px + 0.5vw), 24px);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2em;\n\n  text-align: center;\n  user-select: none;\n\n  background-image: url(\"../../assets/images/background.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n\n  font-family: \"2dumbregular\";\n  color: var(--color-text);\n}\n\nheader,\nfooter {\n  padding: 0.75em;\n}\n\nheader {\n  width: 100%;\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.75em;\n  font-family: \"3dumbregular\";\n  font-weight: 700;\n  color: var(--color-header);\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  font-size: 2em;\n  gap: 1em;\n}\n\nbutton {\n  background: none;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n\nbutton:hover {\n  transform: scale(0.9);\n}\n\n.actual {\n  color: var(--color-btn-actual);\n}\n\nheader h1 {\n  font-size: 3em;\n}\n\nimg {\n  border: 2px solid #ffffffc4;\n  /*\n  mask-image: radial-gradient(ellipse, #ffffff 80%, #ffffff00 100%);\n  */\n}\n\n#content {\n  width: 90%;\n  max-width: 600px;\n  padding: 2em;\n\n  background: #ffffff;\n  background: radial-gradient(\n    ellipse,\n    #ffffffcc 0%,\n    #ffffff99 50%,\n    #ffffff80 75%,\n    #ffffff4d 90%,\n    #ffffff00 100%\n  );\n\n  backdrop-filter: blur(0.3em);\n  box-shadow: 0 0.2em 0.8em #0000001a;\n}\n\n#content > * {\n  view-transition-name: content;\n}\n\n::view-transition-group(root) {\n  animation: none;\n}\n\n::view-transition-group(content) {\n  animation-duration: 0.5s;\n  animation-timing-function: ease-in-out;\n}\n\n::view-transition-new(content) {\n  animation-delay: 0.5s;\n}\n\n#content > div {\n  display: flex;\n  flex-direction: column;\n  gap: 3em;\n}\n\n#plates {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 2em;\n}\n\n#plates > div {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\n.image-container {\n  position: relative;\n  cursor: pointer;\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.caption {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  place-items: center;\n  padding: 1em;\n  background: #ffffffcc;\n  transition: opacity 0.2s ease;\n}\n\n.icon-text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n}\n\n.icon-text svg {\n  width: 1.5em;\n  height: 1.5em;\n  fill: currentColor;\n}\n\nfooter {\n  font-size: 0.75rem;\n}\n\nfooter a {\n  text-decoration: underline;\n}\n\nfooter a:hover {\n  color: var(--color-link-hover);\n}\n\nfooter a:active {\n  color: var(--color-link-active);\n}\n\nfooter a:visited {\n  color: var(--color-link-visited);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./assets/icons/address.svg":
/*!**********************************!*\
  !*** ./assets/icons/address.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z\"/></svg>");

/***/ }),

/***/ "./assets/icons/mail.svg":
/*!*******************************!*\
  !*** ./assets/icons/mail.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480-522 140-740v55l340 223Z\"/></svg>");

/***/ }),

/***/ "./assets/icons/phone.svg":
/*!********************************!*\
  !*** ./assets/icons/phone.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\" width=\"24px\"><path d=\"M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z\"/></svg>");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _parts_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/about */ "./src/parts/about.js");
/* harmony import */ var _parts_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/menu */ "./src/parts/menu.js");
/* harmony import */ var _parts_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/contact */ "./src/parts/contact.js");





const content = document.querySelector("#content");

const aboutContent = (0,_parts_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
const menuContent = (0,_parts_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
const contactContent = (0,_parts_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();

content.replaceChildren(aboutContent);

document.querySelector("#about-btn").addEventListener("click", (event) => {
  handleMenuClick(event, aboutContent);
});

document.querySelector("#menu-btn").addEventListener("click", (event) => {
  handleMenuClick(event, menuContent);
});

document.querySelector("#contact-btn").addEventListener("click", (event) => {
  handleMenuClick(event, contactContent);
});

function clearActualStyles() {
  [...document.querySelectorAll("button")].forEach((btn) => {
    btn.classList.remove("actual");
  });
}

function handleViewTransition(newContent) {
  if (! document.startViewTransition) {
    content.replaceChildren(newContent);
    return;
  }

  document.startViewTransition(() => {
    content.replaceChildren(newContent);
  });
}

function handleMenuClick(event, newContent) {
  clearActualStyles();
  event.currentTarget.classList.add("actual");
  handleViewTransition(newContent);
}


/***/ }),

/***/ "./src/parts/about.js":
/*!****************************!*\
  !*** ./src/parts/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateAboutContent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _assets_images_about_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/about.png */ "./assets/images/about.png");



function generateAboutContent() {
  const content = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div");

  const firstParagraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    `At <strong>Whatever</strong>, you can eat <strong>anything</strong>,
    cause we have <strong>everything</strong>`
  );
    
  const imgElement = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img");
  imgElement.src = _assets_images_about_png__WEBPACK_IMPORTED_MODULE_1__;
  imgElement.alt =
    `A surreal restaurant with a mix of futuristic and organic design elements, 
    featuring multiple culinary stations, floating tables, dynamic lighting, 
    and imaginative dishes like glowing desserts and 
    color-based soups`;

  const secondParagraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    `Step into a world where culinary limits disappear and imagination thrives 
    - At <strong>Whatever</strong>, each dish is a journey—whether classic or 
    cosmic. Our chefs craft extraordinary meals that delight and inspire - 
    We invite you to experience the <strong>extraordinary</strong>`
  );
  
  const lastParagraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    `<strong>Important!</strong> If you ask for <strong>something</strong> we 
    can't serve, your meal is on the house!`
  );

  const greeting = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", _utils__WEBPACK_IMPORTED_MODULE_0__.greetingContent);
 
  content.append(
    firstParagraph,
    imgElement,
    secondParagraph,
    lastParagraph,
    greeting
  );

  return content;
}


/***/ }),

/***/ "./src/parts/contact.js":
/*!******************************!*\
  !*** ./src/parts/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/phone.svg */ "./assets/icons/phone.svg");
/* harmony import */ var _assets_icons_address_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/address.svg */ "./assets/icons/address.svg");
/* harmony import */ var _assets_icons_mail_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/mail.svg */ "./assets/icons/mail.svg");
/* harmony import */ var _assets_images_location_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/location.png */ "./assets/images/location.png");






function contact() {
  const content = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div");

  const phoneText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    `${_assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_1__["default"]} Infinity (TON) 618-0000`,
    "icon-text"
  );
  
  const mailText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    `${_assets_icons_mail_svg__WEBPACK_IMPORTED_MODULE_3__["default"]} contact@whatever.com`,
    "icon-text"
  );

  const addressText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    `${_assets_icons_address_svg__WEBPACK_IMPORTED_MODULE_2__["default"]} Event Horizon Plaza, TON-618, Core Sector`,
    "icon-text"
  );

  const imgElement = document.createElement("img");
  imgElement.src = _assets_images_location_png__WEBPACK_IMPORTED_MODULE_4__;
  imgElement.alt = 
    `Artistic depiction of the quasar TON-618 with a massive black hole, bright 
    light emissions, and cosmic surroundings`;

  const paragraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    `Located at the <strong>singularity</strong> — please account for time 
    dilation and gravitational lensing during your visit`
  );

  const greeting = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", _utils__WEBPACK_IMPORTED_MODULE_0__.greetingContent);

  content.append(
    phoneText,
    mailText,
    addressText,
    imgElement,
    paragraph,
    greeting
  );

  return content;
}


/***/ }),

/***/ "./src/parts/menu.js":
/*!***************************!*\
  !*** ./src/parts/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMenuContent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _data_menu_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/menu-data.json */ "./src/data/menu-data.json");



function generateMenuContent() {
  const content = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div");

  const firstParagraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    "You can choose between our <strong>most popular</strong> creations:"
  );

  const plates = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div");
  plates.setAttribute("id", "plates");

  // Create a card for each item in the menu
  const cards = _data_menu_data_json__WEBPACK_IMPORTED_MODULE_1__.map((item) => {
    const card = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div");

    // Create an image container so the caption can be displayed on the image
    const imageContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "", "image-container");

    const image = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img");
    // Dynamically import the image (lazy loading)
    __webpack_require__("./assets/images/plates lazy recursive ^\\.\\/.*$")(`./${item.image.fileName}`).then(
      ({ default: src }) => (image.src = src)
    );
    image.alt = item.image.alt;

    const caption = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
      "p",
      item.caption,
      "caption",
      "opacity-0" // Hide the caption by default
    );

    caption.addEventListener("click", () => {
      caption.classList.toggle("opacity-0");
    });

    imageContainer.append(image, caption);

    const name = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", item.name);

    card.append(imageContainer, name);

    return card;
  });

  plates.append(...cards);

  const lastParagraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    "<strong>Or</strong> whatever that goes beyond your imagination..."
  );

  const greeting = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", _utils__WEBPACK_IMPORTED_MODULE_0__.greetingContent);

  content.append(firstParagraph, plates, lastParagraph, greeting);

  return content;
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement),
/* harmony export */   greetingContent: () => (/* binding */ greetingContent)
/* harmony export */ });
function createHtmlElement(tag, innerHTML = '', ...classes) {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  element.classList.add(...classes);
  return element;
}

const greetingContent = "(◠‿◠)";

/***/ }),

/***/ "./assets/fonts/2dumb_regular_macroman/2Dumb-webfont.woff":
/*!****************************************************************!*\
  !*** ./assets/fonts/2dumb_regular_macroman/2Dumb-webfont.woff ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05feda24069d65a86031.woff";

/***/ }),

/***/ "./assets/fonts/3dumb_regular_macroman/3Dumb-webfont.woff":
/*!****************************************************************!*\
  !*** ./assets/fonts/3dumb_regular_macroman/3Dumb-webfont.woff ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d0caf2fec5d66be292c.woff";

/***/ }),

/***/ "./assets/images/about.png":
/*!*********************************!*\
  !*** ./assets/images/about.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fb9dac0a74f2fa669a2c.png";

/***/ }),

/***/ "./assets/images/background.jpg":
/*!**************************************!*\
  !*** ./assets/images/background.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6eb3af5904870aedaa70.jpg";

/***/ }),

/***/ "./assets/images/location.png":
/*!************************************!*\
  !*** ./assets/images/location.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2554e20a740d335d3f67.png";

/***/ }),

/***/ "./src/data/menu-data.json":
/*!*********************************!*\
  !*** ./src/data/menu-data.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"name":"Galactic Shushi","image":{"fileName":"galactic-shushi.png","alt":"Sushi platter with glowing algae, meteorite rice, and stardust-infused fish on a black nebula-designed plate"},"caption":"Cosmic sushi with glowing ingredients and stardust"},{"name":"Eternal Flame Steak","image":{"fileName":"eternal-flame-steak.jpg","alt":"Seared steak with glowing vegetables, surrounded by small flames on a plate blending metal and stone"},"caption":"Steak with glowing vegetables and eternal flames"},{"name":"Elemental Soup","image":{"fileName":"elemental-soup.jpg","alt":"Elemental soup with water broth, fiery spices, earth vegetables, and misty air rising from a sleek bowl"},"caption":"Elemental soup blending water, fire, earth, air"},{"name":"Dreamscapes Pasta","image":{"fileName":"dreamscapes-pasta.jpg","alt":"Surreal pasta with color-changing noodles and swirling sauces, set on a dreamlike, ethereal plate"},"caption":"Pasta with shifting colors and dreamlike sauces"},{"name":"Rainbow Cloud Salad","image":{"fileName":"rainbow-cloud-salad.jpg","alt":"Colorful cloud salad with rainbow vinaigrette, floating above a translucent, ethereal plate"},"caption":"Floating cloud salad with rainbow drizzle"},{"name":"Chrono Braised Lamb","image":{"fileName":"chrono-braised-lamb.jpg","alt":"Tender lamb marinated in time, served with ancient spices and modern garnishes on an ornate plate"},"caption":"Time-marinated lamb with historic flavors"},{"name":"Quantum Quiche","image":{"fileName":"quantum-quiche.jpg","alt":"Quantum quiche with shifting flavors and textures, presented on a sleek plate with swirling patterns"},"caption":"Quiche with dynamic, shifting flavors"},{"name":"Infinity Pizza","image":{"fileName":"infinity-pizza.jpg","alt":"Infinity pizza with diverse, surreal toppings, served on an infinite-loop plate in a vibrant setting"},"caption":"Pizza with surreal, universe-inspired slices"},{"name":"Phoenix Ramen","image":{"fileName":"phoenix-ramen.jpg","alt":"Ramen with regenerating noodles, a phoenix egg, and flavor-changing broth in a magical, glowing bowl"},"caption":"Ramen with regenerating noodles and phoenix egg"},{"name":"Ephemeral Dessert","image":{"fileName":"ephemeral-dessert.jpg","alt":"Ephemeral dessert as a shimmering orb that dissolves into flavor, set on an elegant, glowing plate"},"caption":"Shimmering orb dessert that dissolves instantly"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw2TEFBK0U7QUFDM0gsNENBQTRDLDZMQUErRTtBQUMzSCw0Q0FBNEMseUlBQXFEO0FBQ2pHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZ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dHMvaW1hZ2VzL3BsYXRlcy8gbGF6eSBeXFwuXFwvLiokIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9hc3NldHMvaWNvbnMvYWRkcmVzcy5zdmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9hc3NldHMvaWNvbnMvbWFpbC5zdmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9hc3NldHMvaWNvbnMvcGhvbmUuc3ZnIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhcnRzL2Fib3V0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhcnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFydHMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vY2hyb25vLWJyYWlzZWQtbGFtYi5qcGdcIjogW1xuXHRcdFwiLi9hc3NldHMvaW1hZ2VzL3BsYXRlcy9jaHJvbm8tYnJhaXNlZC1sYW1iLmpwZ1wiLFxuXHRcdFwiYXNzZXRzX2ltYWdlc19wbGF0ZXNfY2hyb25vLWJyYWlzZWQtbGFtYl9qcGdcIlxuXHRdLFxuXHRcIi4vZHJlYW1zY2FwZXMtcGFzdGEuanBnXCI6IFtcblx0XHRcIi4vYXNzZXRzL2ltYWdlcy9wbGF0ZXMvZHJlYW1zY2FwZXMtcGFzdGEuanBnXCIsXG5cdFx0XCJhc3NldHNfaW1hZ2VzX3BsYXRlc19kcmVhbXNjYXBlcy1wYXN0YV9qcGdcIlxuXHRdLFxuXHRcIi4vZWxlbWVudGFsLXNvdXAuanBnXCI6IFtcblx0XHRcIi4vYXNzZXRzL2ltYWdlcy9wbGF0ZXMvZWxlbWVudGFsLXNvdXAuanBnXCIsXG5cdFx0XCJhc3NldHNfaW1hZ2VzX3BsYXRlc19lbGVtZW50YWwtc291cF9qcGdcIlxuXHRdLFxuXHRcIi4vZXBoZW1lcmFsLWRlc3NlcnQuanBnXCI6IFtcblx0XHRcIi4vYXNzZXRzL2ltYWdlcy9wbGF0ZXMvZXBoZW1lcmFsLWRlc3NlcnQuanBnXCIsXG5cdFx0XCJhc3NldHNfaW1hZ2VzX3BsYXRlc19lcGhlbWVyYWwtZGVzc2VydF9qcGdcIlxuXHRdLFxuXHRcIi4vZXRlcm5hbC1mbGFtZS1zdGVhay5qcGdcIjogW1xuXHRcdFwiLi9hc3NldHMvaW1hZ2VzL3BsYXRlcy9ldGVybmFsLWZsYW1lLXN0ZWFrLmpwZ1wiLFxuXHRcdFwiYXNzZXRzX2ltYWdlc19wbGF0ZXNfZXRlcm5hbC1mbGFtZS1zdGVha19qcGdcIlxuXHRdLFxuXHRcIi4vZ2FsYWN0aWMtc2h1c2hpLnBuZ1wiOiBbXG5cdFx0XCIuL2Fzc2V0cy9pbWFnZXMvcGxhdGVzL2dhbGFjdGljLXNodXNoaS5wbmdcIixcblx0XHRcImFzc2V0c19pbWFnZXNfcGxhdGVzX2dhbGFjdGljLXNodXNoaV9wbmdcIlxuXHRdLFxuXHRcIi4vaW5maW5pdHktcGl6emEuanBnXCI6IFtcblx0XHRcIi4vYXNzZXRzL2ltYWdlcy9wbGF0ZXMvaW5maW5pdHktcGl6emEuanBnXCIsXG5cdFx0XCJhc3NldHNfaW1hZ2VzX3BsYXRlc19pbmZpbml0eS1waXp6YV9qcGdcIlxuXHRdLFxuXHRcIi4vcGhvZW5peC1yYW1lbi5qcGdcIjogW1xuXHRcdFwiLi9hc3NldHMvaW1hZ2VzL3BsYXRlcy9waG9lbml4LXJhbWVuLmpwZ1wiLFxuXHRcdFwiYXNzZXRzX2ltYWdlc19wbGF0ZXNfcGhvZW5peC1yYW1lbl9qcGdcIlxuXHRdLFxuXHRcIi4vcXVhbnR1bS1xdWljaGUuanBnXCI6IFtcblx0XHRcIi4vYXNzZXRzL2ltYWdlcy9wbGF0ZXMvcXVhbnR1bS1xdWljaGUuanBnXCIsXG5cdFx0XCJhc3NldHNfaW1hZ2VzX3BsYXRlc19xdWFudHVtLXF1aWNoZV9qcGdcIlxuXHRdLFxuXHRcIi4vcmFpbmJvdy1jbG91ZC1zYWxhZC5qcGdcIjogW1xuXHRcdFwiLi9hc3NldHMvaW1hZ2VzL3BsYXRlcy9yYWluYm93LWNsb3VkLXNhbGFkLmpwZ1wiLFxuXHRcdFwiYXNzZXRzX2ltYWdlc19wbGF0ZXNfcmFpbmJvdy1jbG91ZC1zYWxhZF9qcGdcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDEgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvaW1hZ2VzL3BsYXRlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvZm9udHMvM2R1bWJfcmVndWxhcl9tYWNyb21hbi8zRHVtYi13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvZm9udHMvMmR1bWJfcmVndWxhcl9tYWNyb21hbi8yRHVtYi13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBsYXllciByZXNldCB7XG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5IHtcbiAgICBtYXJnaW46IHVuc2V0O1xuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgfVxuXG4gIGJ1dHRvbixcbiAgaW5wdXQsXG4gIHRleHRhcmVhLFxuICBzZWxlY3Qge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IHVuc2V0O1xuICB9XG5cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBmaWVsZHNldCxcbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICBpbWcsXG4gIHBpY3R1cmUsXG4gIHN2ZyxcbiAgY2FudmFzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYmxvY2stc2l6ZTogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgKixcbiAgICAqOjpiZWZvcmUsXG4gICAgKjo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCIzZHVtYnJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSlcbiAgICBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCIyZHVtYnJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSlcbiAgICBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgLS1jb2xvci1oZWFkZXI6ICM5OTYyN2E7XG4gIC0tY29sb3ItYnRuLWFjdHVhbDogIzRiMmU1YTtcbiAgLS1jb2xvci10ZXh0OiAjMmY0ZjRmO1xuICAtLWNvbG9yLWxpbmstaG92ZXI6ICM0ZjZmNmY7XG4gIC0tY29sb3ItbGluay1hY3RpdmU6ICMxZjNmM2Y7XG4gIC0tY29sb3ItbGluay12aXNpdGVkOiAjNTA1MDUwO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCBjYWxjKDEwcHggKyAwLjV2dyksIDI0cHgpO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJlbTtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblxuICBmb250LWZhbWlseTogXCIyZHVtYnJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG5oZWFkZXIsXG5mb290ZXIge1xuICBwYWRkaW5nOiAwLjc1ZW07XG59XG5cbmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS43NWVtO1xuICBmb250LWZhbWlseTogXCIzZHVtYnJlZ3VsYXJcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlcik7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDJlbTtcbiAgZ2FwOiAxZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4uYWN0dWFsIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJ0bi1hY3R1YWwpO1xufVxuXG5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZmM0O1xuICAvKlxuICBtYXNrLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSwgI2ZmZmZmZiA4MCUsICNmZmZmZmYwMCAxMDAlKTtcbiAgKi9cbn1cblxuI2NvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOiAyZW07XG5cbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGVsbGlwc2UsXG4gICAgI2ZmZmZmZmNjIDAlLFxuICAgICNmZmZmZmY5OSA1MCUsXG4gICAgI2ZmZmZmZjgwIDc1JSxcbiAgICAjZmZmZmZmNGQgOTAlLFxuICAgICNmZmZmZmYwMCAxMDAlXG4gICk7XG5cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuM2VtKTtcbiAgYm94LXNoYWRvdzogMCAwLjJlbSAwLjhlbSAjMDAwMDAwMWE7XG59XG5cbiNjb250ZW50ID4gKiB7XG4gIHZpZXctdHJhbnNpdGlvbi1uYW1lOiBjb250ZW50O1xufVxuXG46OnZpZXctdHJhbnNpdGlvbi1ncm91cChyb290KSB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cblxuOjp2aWV3LXRyYW5zaXRpb24tZ3JvdXAoY29udGVudCkge1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG46OnZpZXctdHJhbnNpdGlvbi1uZXcoY29udGVudCkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG59XG5cbiNjb250ZW50ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzZW07XG59XG5cbiNwbGF0ZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMmVtO1xufVxuXG4jcGxhdGVzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxZW07XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9wYWNpdHktMCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmNjO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbn1cblxuLmljb24tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMWVtO1xufVxuXG4uaWNvbi10ZXh0IHN2ZyB7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuXG5mb290ZXIge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmstaG92ZXIpO1xufVxuXG5mb290ZXIgYTphY3RpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGluay1hY3RpdmUpO1xufVxuXG5mb290ZXIgYTp2aXNpdGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmstdmlzaXRlZCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7OztJQUdFLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTs7OztJQUlFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7RUFFQTs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7Ozs7SUFJRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFOzs7TUFHRSxxQ0FBcUM7TUFDckMsdUNBQXVDO01BQ3ZDLHNDQUFzQztNQUN0QyxnQ0FBZ0M7SUFDbEM7RUFDRjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCO2tCQUNnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCO2tCQUNnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsUUFBUTs7RUFFUixrQkFBa0I7RUFDbEIsaUJBQWlCOztFQUVqQix5REFBMkQ7RUFDM0Qsc0JBQXNCO0VBQ3RCLDRCQUE0Qjs7RUFFNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQjs7R0FFQztBQUNIOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZOztFQUVaLG1CQUFtQjtFQUNuQjs7Ozs7OztHQU9DOztFQUVELDRCQUE0QjtFQUM1QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbGF5ZXIgcmVzZXQge1xcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogdW5zZXQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIH1cXG5cXG4gIGJ1dHRvbixcXG4gIGlucHV0LFxcbiAgdGV4dGFyZWEsXFxuICBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogdW5zZXQ7XFxuICB9XFxuXFxuICBhLFxcbiAgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIGZpZWxkc2V0LFxcbiAgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcblxcbiAgOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG4gIH1cXG5cXG4gIGltZyxcXG4gIHBpY3R1cmUsXFxuICBzdmcsXFxuICBjYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LWlubGluZS1zaXplOiAxMDAlO1xcbiAgICBibG9jay1zaXplOiBhdXRvO1xcbiAgfVxcblxcbiAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICAgKixcXG4gICAgKjo6YmVmb3JlLFxcbiAgICAqOjphZnRlciB7XFxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIjNkdW1icmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vLi4vYXNzZXRzL2ZvbnRzLzNkdW1iX3JlZ3VsYXJfbWFjcm9tYW4vM0R1bWItd2ViZm9udC53b2ZmXFxcIilcXG4gICAgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiMmR1bWJyZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi8uLi9hc3NldHMvZm9udHMvMmR1bWJfcmVndWxhcl9tYWNyb21hbi8yRHVtYi13ZWJmb250LndvZmZcXFwiKVxcbiAgICBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItaGVhZGVyOiAjOTk2MjdhO1xcbiAgLS1jb2xvci1idG4tYWN0dWFsOiAjNGIyZTVhO1xcbiAgLS1jb2xvci10ZXh0OiAjMmY0ZjRmO1xcbiAgLS1jb2xvci1saW5rLWhvdmVyOiAjNGY2ZjZmO1xcbiAgLS1jb2xvci1saW5rLWFjdGl2ZTogIzFmM2YzZjtcXG4gIC0tY29sb3ItbGluay12aXNpdGVkOiAjNTA1MDUwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwgY2FsYygxMHB4ICsgMC41dncpLCAyNHB4KTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJlbTtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiMmR1bWJyZWd1bGFyXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAwLjc1ZW07XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjc1ZW07XFxuICBmb250LWZhbWlseTogXFxcIjNkdW1icmVndWxhclxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlcik7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcblxcbi5hY3R1YWwge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJ0bi1hY3R1YWwpO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbmltZyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmYzQ7XFxuICAvKlxcbiAgbWFzay1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UsICNmZmZmZmYgODAlLCAjZmZmZmZmMDAgMTAwJSk7XFxuICAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIHBhZGRpbmc6IDJlbTtcXG5cXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGVsbGlwc2UsXFxuICAgICNmZmZmZmZjYyAwJSxcXG4gICAgI2ZmZmZmZjk5IDUwJSxcXG4gICAgI2ZmZmZmZjgwIDc1JSxcXG4gICAgI2ZmZmZmZjRkIDkwJSxcXG4gICAgI2ZmZmZmZjAwIDEwMCVcXG4gICk7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC4zZW0pO1xcbiAgYm94LXNoYWRvdzogMCAwLjJlbSAwLjhlbSAjMDAwMDAwMWE7XFxufVxcblxcbiNjb250ZW50ID4gKiB7XFxuICB2aWV3LXRyYW5zaXRpb24tbmFtZTogY29udGVudDtcXG59XFxuXFxuOjp2aWV3LXRyYW5zaXRpb24tZ3JvdXAocm9vdCkge1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG5cXG46OnZpZXctdHJhbnNpdGlvbi1ncm91cChjb250ZW50KSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuOjp2aWV3LXRyYW5zaXRpb24tbmV3KGNvbnRlbnQpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcXG59XFxuXFxuI2NvbnRlbnQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNlbTtcXG59XFxuXFxuI3BsYXRlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbiNwbGF0ZXMgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGFjaXR5LTAge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNhcHRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmZjYztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xcbn1cXG5cXG4uaWNvbi10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uaWNvbi10ZXh0IHN2ZyB7XFxuICB3aWR0aDogMS41ZW07XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmstaG92ZXIpO1xcbn1cXG5cXG5mb290ZXIgYTphY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmstYWN0aXZlKTtcXG59XFxuXFxuZm9vdGVyIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGluay12aXNpdGVkKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk0xNjAtMTIwdi00ODBsMzIwLTI0MCAzMjAgMjQwdjQ4MEg1NjB2LTI4MEg0MDB2MjgwSDE2MFpcXFwiLz48L3N2Zz5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTE0MC0xNjBxLTI0IDAtNDItMTh0LTE4LTQydi01MjBxMC0yNCAxOC00MnQ0Mi0xOGg2ODBxMjQgMCA0MiAxOHQxOCA0MnY1MjBxMCAyNC0xOCA0MnQtNDIgMThIMTQwWm0zNDAtMzAyIDM0MC0yMjN2LTU1TDQ4MC01MjIgMTQwLTc0MHY1NWwzNDAgMjIzWlxcXCIvPjwvc3ZnPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIiB3aWR0aD1cXFwiMjRweFxcXCI+PHBhdGggZD1cXFwiTTc5OC0xMjBxLTEyNSAwLTI0Ny01NC41VDMyOS0zMjlRMjI5LTQyOSAxNzQuNS01NTFUMTIwLTc5OHEwLTE4IDEyLTMwdDMwLTEyaDE2MnExNCAwIDI1IDkuNXQxMyAyMi41bDI2IDE0MHEyIDE2LTEgMjd0LTExIDE5bC05NyA5OHEyMCAzNyA0Ny41IDcxLjVUMzg3LTM4NnEzMSAzMSA2NSA1Ny41dDcyIDQ4LjVsOTQtOTRxOS05IDIzLjUtMTMuNVQ2NzAtMzkwbDEzOCAyOHExNCA0IDIzIDE0LjV0OSAyMy41djE2MnEwIDE4LTEyIDMwdC0zMCAxMlpcXFwiLz48L3N2Zz5cIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBnZW5lcmF0ZUFib3V0Q29udGVudCBmcm9tIFwiLi9wYXJ0cy9hYm91dFwiO1xuaW1wb3J0IGdlbmVyYXRlTWVudUNvbnRlbnQgZnJvbSBcIi4vcGFydHMvbWVudVwiO1xuaW1wb3J0IGdlbmVyYXRlQ29udGFjdENvbnRlbnQgZnJvbSBcIi4vcGFydHMvY29udGFjdFwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBhYm91dENvbnRlbnQgPSBnZW5lcmF0ZUFib3V0Q29udGVudCgpO1xuY29uc3QgbWVudUNvbnRlbnQgPSBnZW5lcmF0ZU1lbnVDb250ZW50KCk7XG5jb25zdCBjb250YWN0Q29udGVudCA9IGdlbmVyYXRlQ29udGFjdENvbnRlbnQoKTtcblxuY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oYWJvdXRDb250ZW50KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBoYW5kbGVNZW51Q2xpY2soZXZlbnQsIGFib3V0Q29udGVudCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGhhbmRsZU1lbnVDbGljayhldmVudCwgbWVudUNvbnRlbnQpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBoYW5kbGVNZW51Q2xpY2soZXZlbnQsIGNvbnRhY3RDb250ZW50KTtcbn0pO1xuXG5mdW5jdGlvbiBjbGVhckFjdHVhbFN0eWxlcygpIHtcbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIildLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0dWFsXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVmlld1RyYW5zaXRpb24obmV3Q29udGVudCkge1xuICBpZiAoISBkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKSB7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4obmV3Q29udGVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbigoKSA9PiB7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4obmV3Q29udGVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2soZXZlbnQsIG5ld0NvbnRlbnQpIHtcbiAgY2xlYXJBY3R1YWxTdHlsZXMoKTtcbiAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0dWFsXCIpO1xuICBoYW5kbGVWaWV3VHJhbnNpdGlvbihuZXdDb250ZW50KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50LCBncmVldGluZ0NvbnRlbnQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCBpbWFnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBYm91dENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBmaXJzdFBhcmFncmFwaCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIGBBdCA8c3Ryb25nPldoYXRldmVyPC9zdHJvbmc+LCB5b3UgY2FuIGVhdCA8c3Ryb25nPmFueXRoaW5nPC9zdHJvbmc+LFxuICAgIGNhdXNlIHdlIGhhdmUgPHN0cm9uZz5ldmVyeXRoaW5nPC9zdHJvbmc+YFxuICApO1xuICAgIFxuICBjb25zdCBpbWdFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJpbWdcIik7XG4gIGltZ0VsZW1lbnQuc3JjID0gaW1hZ2U7XG4gIGltZ0VsZW1lbnQuYWx0ID1cbiAgICBgQSBzdXJyZWFsIHJlc3RhdXJhbnQgd2l0aCBhIG1peCBvZiBmdXR1cmlzdGljIGFuZCBvcmdhbmljIGRlc2lnbiBlbGVtZW50cywgXG4gICAgZmVhdHVyaW5nIG11bHRpcGxlIGN1bGluYXJ5IHN0YXRpb25zLCBmbG9hdGluZyB0YWJsZXMsIGR5bmFtaWMgbGlnaHRpbmcsIFxuICAgIGFuZCBpbWFnaW5hdGl2ZSBkaXNoZXMgbGlrZSBnbG93aW5nIGRlc3NlcnRzIGFuZCBcbiAgICBjb2xvci1iYXNlZCBzb3Vwc2A7XG5cbiAgY29uc3Qgc2Vjb25kUGFyYWdyYXBoID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgYFN0ZXAgaW50byBhIHdvcmxkIHdoZXJlIGN1bGluYXJ5IGxpbWl0cyBkaXNhcHBlYXIgYW5kIGltYWdpbmF0aW9uIHRocml2ZXMgXG4gICAgLSBBdCA8c3Ryb25nPldoYXRldmVyPC9zdHJvbmc+LCBlYWNoIGRpc2ggaXMgYSBqb3VybmV54oCUd2hldGhlciBjbGFzc2ljIG9yIFxuICAgIGNvc21pYy4gT3VyIGNoZWZzIGNyYWZ0IGV4dHJhb3JkaW5hcnkgbWVhbHMgdGhhdCBkZWxpZ2h0IGFuZCBpbnNwaXJlIC0gXG4gICAgV2UgaW52aXRlIHlvdSB0byBleHBlcmllbmNlIHRoZSA8c3Ryb25nPmV4dHJhb3JkaW5hcnk8L3N0cm9uZz5gXG4gICk7XG4gIFxuICBjb25zdCBsYXN0UGFyYWdyYXBoID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgYDxzdHJvbmc+SW1wb3J0YW50ITwvc3Ryb25nPiBJZiB5b3UgYXNrIGZvciA8c3Ryb25nPnNvbWV0aGluZzwvc3Ryb25nPiB3ZSBcbiAgICBjYW4ndCBzZXJ2ZSwgeW91ciBtZWFsIGlzIG9uIHRoZSBob3VzZSFgXG4gICk7XG5cbiAgY29uc3QgZ3JlZXRpbmcgPSBjcmVhdGVIdG1sRWxlbWVudChcInBcIiwgZ3JlZXRpbmdDb250ZW50KTtcbiBcbiAgY29udGVudC5hcHBlbmQoXG4gICAgZmlyc3RQYXJhZ3JhcGgsXG4gICAgaW1nRWxlbWVudCxcbiAgICBzZWNvbmRQYXJhZ3JhcGgsXG4gICAgbGFzdFBhcmFncmFwaCxcbiAgICBncmVldGluZ1xuICApO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQsIGdyZWV0aW5nQ29udGVudCB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHBob25lSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL3Bob25lLnN2Z1wiO1xuaW1wb3J0IGFkZHJlc3NJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvYWRkcmVzcy5zdmdcIjtcbmltcG9ydCBtYWlsSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL21haWwuc3ZnXCI7XG5pbXBvcnQgaW1hZ2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9jYXRpb24ucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBwaG9uZVRleHQgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICBcInBcIixcbiAgICBgJHtwaG9uZUljb259IEluZmluaXR5IChUT04pIDYxOC0wMDAwYCxcbiAgICBcImljb24tdGV4dFwiXG4gICk7XG4gIFxuICBjb25zdCBtYWlsVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIGAke21haWxJY29ufSBjb250YWN0QHdoYXRldmVyLmNvbWAsXG4gICAgXCJpY29uLXRleHRcIlxuICApO1xuXG4gIGNvbnN0IGFkZHJlc3NUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgYCR7YWRkcmVzc0ljb259IEV2ZW50IEhvcml6b24gUGxhemEsIFRPTi02MTgsIENvcmUgU2VjdG9yYCxcbiAgICBcImljb24tdGV4dFwiXG4gICk7XG5cbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZ0VsZW1lbnQuc3JjID0gaW1hZ2U7XG4gIGltZ0VsZW1lbnQuYWx0ID0gXG4gICAgYEFydGlzdGljIGRlcGljdGlvbiBvZiB0aGUgcXVhc2FyIFRPTi02MTggd2l0aCBhIG1hc3NpdmUgYmxhY2sgaG9sZSwgYnJpZ2h0IFxuICAgIGxpZ2h0IGVtaXNzaW9ucywgYW5kIGNvc21pYyBzdXJyb3VuZGluZ3NgO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIGBMb2NhdGVkIGF0IHRoZSA8c3Ryb25nPnNpbmd1bGFyaXR5PC9zdHJvbmc+IOKAlCBwbGVhc2UgYWNjb3VudCBmb3IgdGltZSBcbiAgICBkaWxhdGlvbiBhbmQgZ3Jhdml0YXRpb25hbCBsZW5zaW5nIGR1cmluZyB5b3VyIHZpc2l0YFxuICApO1xuXG4gIGNvbnN0IGdyZWV0aW5nID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsIGdyZWV0aW5nQ29udGVudCk7XG5cbiAgY29udGVudC5hcHBlbmQoXG4gICAgcGhvbmVUZXh0LFxuICAgIG1haWxUZXh0LFxuICAgIGFkZHJlc3NUZXh0LFxuICAgIGltZ0VsZW1lbnQsXG4gICAgcGFyYWdyYXBoLFxuICAgIGdyZWV0aW5nXG4gICk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCwgZ3JlZXRpbmdDb250ZW50IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9tZW51LWRhdGEuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZU1lbnVDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgZmlyc3RQYXJhZ3JhcGggPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICBcInBcIixcbiAgICBcIllvdSBjYW4gY2hvb3NlIGJldHdlZW4gb3VyIDxzdHJvbmc+bW9zdCBwb3B1bGFyPC9zdHJvbmc+IGNyZWF0aW9uczpcIlxuICApO1xuXG4gIGNvbnN0IHBsYXRlcyA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF0ZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF0ZXNcIik7XG5cbiAgLy8gQ3JlYXRlIGEgY2FyZCBmb3IgZWFjaCBpdGVtIGluIHRoZSBtZW51XG4gIGNvbnN0IGNhcmRzID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBDcmVhdGUgYW4gaW1hZ2UgY29udGFpbmVyIHNvIHRoZSBjYXB0aW9uIGNhbiBiZSBkaXNwbGF5ZWQgb24gdGhlIGltYWdlXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiLCBcIlwiLCBcImltYWdlLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJpbWdcIik7XG4gICAgLy8gRHluYW1pY2FsbHkgaW1wb3J0IHRoZSBpbWFnZSAobGF6eSBsb2FkaW5nKVxuICAgIGltcG9ydChgLi4vLi4vYXNzZXRzL2ltYWdlcy9wbGF0ZXMvJHtpdGVtLmltYWdlLmZpbGVOYW1lfWApLnRoZW4oXG4gICAgICAoeyBkZWZhdWx0OiBzcmMgfSkgPT4gKGltYWdlLnNyYyA9IHNyYylcbiAgICApO1xuICAgIGltYWdlLmFsdCA9IGl0ZW0uaW1hZ2UuYWx0O1xuXG4gICAgY29uc3QgY2FwdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICBpdGVtLmNhcHRpb24sXG4gICAgICBcImNhcHRpb25cIixcbiAgICAgIFwib3BhY2l0eS0wXCIgLy8gSGlkZSB0aGUgY2FwdGlvbiBieSBkZWZhdWx0XG4gICAgKTtcblxuICAgIGNhcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNhcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcIm9wYWNpdHktMFwiKTtcbiAgICB9KTtcblxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZSwgY2FwdGlvbik7XG5cbiAgICBjb25zdCBuYW1lID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsIGl0ZW0ubmFtZSk7XG5cbiAgICBjYXJkLmFwcGVuZChpbWFnZUNvbnRhaW5lciwgbmFtZSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfSk7XG5cbiAgcGxhdGVzLmFwcGVuZCguLi5jYXJkcyk7XG5cbiAgY29uc3QgbGFzdFBhcmFncmFwaCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFwiPHN0cm9uZz5Pcjwvc3Ryb25nPiB3aGF0ZXZlciB0aGF0IGdvZXMgYmV5b25kIHlvdXIgaW1hZ2luYXRpb24uLi5cIlxuICApO1xuXG4gIGNvbnN0IGdyZWV0aW5nID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsIGdyZWV0aW5nQ29udGVudCk7XG5cbiAgY29udGVudC5hcHBlbmQoZmlyc3RQYXJhZ3JhcGgsIHBsYXRlcywgbGFzdFBhcmFncmFwaCwgZ3JlZXRpbmcpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KHRhZywgaW5uZXJIVE1MID0gJycsIC4uLmNsYXNzZXMpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBncmVldGluZ0NvbnRlbnQgPSBcIijil6DigL/il6ApXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9