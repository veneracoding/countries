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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://country/./src/css/main.css?\n}");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\nconst searchFormEl = document.querySelector('.search')\r\n\r\nsearchFormEl.search.addEventListener(\"input\", () => {\r\n  const searchValue = searchFormEl.search.value.toLowerCase()\r\n  const cardsTitles = document.querySelectorAll('.cards__title')\r\n  const cardsItem = document.querySelectorAll('.cards_item')\r\n  cardsTitles.forEach((title, i) =>{\r\n    if(title.textContent.toLowerCase().includes(searchValue)){\r\n        cardsItem[i].style.display = 'block'\r\n    }else {\r\n        cardsItem[i].style.display = 'none' \r\n    }\r\n  })\r\n})\r\n\r\nconst searchSelect = document.querySelectorAll('.search__select-list li')\r\nconst searchSelectSpan =document.querySelector('.search__select span')\r\n\r\n;\r\n\r\n\r\nsearchSelect.forEach((li) => {\r\n    li.addEventListener('click', () => {\r\n        searchSelectSpan.textContent = li.textContent\r\n        let filterAPI\r\n\r\n        if(li.textContent == 'All') {\r\n          filterAPI = 'https://restcountries.com/v3.1/all'  \r\n        }else {\r\n            filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`\r\n        }\r\n        \r\n        (0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filterAPI).then((data) => {\r\n            (0,_updateUI__WEBPACK_IMPORTED_MODULE_0__.createCountries)(data)\r\n        }).catch((err) => {\r\n            alert(err.message)\r\n        })\r\n    })\r\n})\n\n//# sourceURL=webpack://country/./src/js/filter.js?\n}");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loaderEl = document.querySelector('.loader')\r\n\r\nconst loaderToggle = (info) => {\r\n\r\n   if (info) {\r\n       loaderEl.classList.remove('hidden')\r\n   } else {\r\n       loaderEl.classList.add('hidden')\r\n   }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\r\n\n\n//# sourceURL=webpack://country/./src/js/loader.js?\n}");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n// console.log('hello webpack !!!')\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst API = 'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags';\r\n\r\n(0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API)\r\n  .then(data => {\r\n    (0,_updateUI__WEBPACK_IMPORTED_MODULE_2__.createCountries)(data)\r\n  })\r\n  .catch((err) => {\r\n    alert(err.message)\r\n  })\r\n\r\n\r\n//   agar data length: 250 yoki shunga o'xshash chiqsa -> API ishlaydi\r\n  ;(0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API)\r\n  .then(data => {\r\n    console.log(\"DATA LENGTH:\", data.length)\r\n    console.log(data)\r\n  })\r\n  .catch(err => console.error(\"API ERROR:\", err))\r\n\n\n//# sourceURL=webpack://country/./src/js/main.js?\n}");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("{const modeBtn = document.querySelector('.header__dark-mode')\r\nconst body = document.querySelector(\"body\")\r\nconst modeFormLocal = localStorage.getItem('mode')? localStorage.getItem('mode'): null\r\n\r\nif (modeFormLocal) {\r\n    body.classList.add('dark-mode')\r\n}\r\n\r\nmodeBtn.addEventListener('click', () => {\r\n    body.classList.toggle('dark-mode')\r\n    modeFormLocal ? localStorage. setItem('mode', '') : localStorage.setItem('mode', 'dark')\r\n})\n\n//# sourceURL=webpack://country/./src/js/mode.js?\n}");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\r\n\r\nconst request = async (resource) => {\r\n        (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true)\r\n        const req = await fetch(resource)\r\n        if(!req.ok) {\r\n            (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false)\r\n            throw new Error(\"Something went wrong :(\")\r\n        }\r\n\r\n        const data = await req.json()\r\n        ;(0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false)\r\n\r\n        return data \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\r\n\n\n//# sourceURL=webpack://country/./src/js/request.js?\n}");

/***/ }),

/***/ "./src/js/updateUI.js":
/*!****************************!*\
  !*** ./src/js/updateUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCountries: () => (/* binding */ createCountries),\n/* harmony export */   createCountryInfo: () => (/* binding */ createCountryInfo)\n/* harmony export */ });\n\r\nconst cardsEl = document.querySelector('.cards')\r\nconst createCountries = (countries) => {\r\n    cardsEl.innerHTML = ''\r\n    \r\n    // if(!cardsEl) {\r\n    //     console.error(\"cards element not found in DOM\")\r\n    //     return\r\n    // }\r\n\r\n    countries.forEach((country) => {\r\n        const commonName = country.name.common \r\n        const population = country.population.toLocaleString()\r\n        const region = country.region\r\n        const capital = country.capital ? country.capital[0] : \"No Capital\"\r\n        const flag = country.flags?.svg || country.flags?.png\r\n\r\n        //li \r\n        const li = document.createElement('li')\r\n        li.classList.add('cards_item')\r\n        li.innerHTML = `\r\n         <a href=\"./about.html\">\r\n           <img src=\"${flag}\" alt=\"${commonName}-flag\" width=\"267\" height=\"160\">\r\n            <div class=\"cards__item-inner\">\r\n                <h3 class=\"cards__title\">${commonName}</h3>\r\n                <p class=\"population\">Population: <span>${population}</span></p>\r\n                <p class=\"region\">Region: <span>${region}</span></p>\r\n                <p class=\"capital\">Capital: <span>${capital}</span></p>\r\n            </div>\r\n         </a>\r\n        `\r\n \r\n        //ul \r\n        cardsEl.appendChild(li)\r\n\r\n    })\r\n}\r\n\r\n\r\n    /* <a href=\"./about.html\">\r\n    <img src=\"./images/jpg/germany-flag.jpg\" alt=\"germany-flag\" width=\"267\" height=\"160\">\r\n    <div class=\"cards__item-inner\">\r\n        <h3 class=\"cards__title\">Germany</h3>\r\n        <p class=\"population\">Population: <span>81,770,900</span></p>\r\n        <p class=\"region\">Region: <span>Europe</span></p>\r\n        <p class=\"capital\">Capital: <span>Berlin</span></p>\r\n    </div>\r\n    </a> */\r\n\r\n\r\n    //ABOUT UI\r\n\r\n    const createCountryInfo = (country) => {\r\n        console.log(country)\r\n    }\r\n\r\n\n\n//# sourceURL=webpack://country/./src/js/updateUI.js?\n}");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;