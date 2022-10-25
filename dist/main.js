/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homeTab */ \"./src/modules/homeTab.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_menuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menuTab */ \"./src/modules/menuTab.js\");\n/* harmony import */ var _modules_contactTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contactTab */ \"./src/modules/contactTab.js\");\n\n\n\n\n\n//------------------functions for startup--------------\nfunction generatePageDiv(){\n  let content = document.getElementById('content');\n  let page = document.createElement('div');\n  page.className = \"company-motto-container\";\n  page.id = \"pageContainer\";\n  content.appendChild(page);\n}\n\nfunction createEventListeners(){\n  const homeBttn = document.getElementById('Home');\n  const menuBttn = document.getElementById('Menu');\n  const contactBttn = document.getElementById('Contact');\n\n  homeBttn.addEventListener('click', ()=> (0,_modules_homeTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById(\"pageContainer\")));\n  menuBttn.addEventListener('click' , ()=> (0,_modules_menuTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(document.getElementById(\"pageContainer\")));\n  contactBttn.addEventListener('click', ()=> (0,_modules_contactTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(document.getElementById(\"pageContainer\")));\n}\n\n\nfunction init(){\n  (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.getElementById(\"content\"));\n  generatePageDiv();\n  (0,_modules_homeTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById(\"pageContainer\"));\n  createEventListeners();\n}\n\ninit();\n\n//# sourceURL=webpack://rest-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contactTab.js":
/*!***********************************!*\
  !*** ./src/modules/contactTab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//functions for creating contact page-----------------------------------------------------\nfunction generateContactPage(parentDiv){\n    eraseContent(parentDiv);\n    let menuItem = document.createElement('div');\n    menuItem.className = \"menu-item-container\";\n     //create div class menu-item-container\n    let hours = generateHoursDiv(); //create hours div\n    let map = generateMapDiv(); //create map div\n    let contact = generateContactDiv(); //create contact div\n    //append divs to menuItem\n    menuItem.appendChild(hours);\n    menuItem.appendChild(map);\n    menuItem.appendChild(contact);\n    //append menuItem to parentDiv\n    parentDiv.appendChild(menuItem);\n}\n\nfunction generateHoursDiv(){\n    let hoursDiv = document.createElement('div');\n    hoursDiv.className = \"contact-container\";\n    hoursDiv.innerHTML = \"Monday: Closed <br>Tuesday - Friday: 8am-4pm <br>Saturday & Sunday: 8am-2pm <br>\";\n    return hoursDiv;\n}\n\nfunction generateMapDiv(){\n    let mapDiv = document.createElement('div');\n    mapDiv.className = 'map';\n    mapDiv.innerHTML = \"<div class='mapouter'><div class='gmap_canvas'><iframe width='100%' height='100%' id='gmap_canvas' src='https://maps.google.com/maps?q=canmore&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe><a href='https://123movies-to.org'>123movies</a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href='https://www.embedgooglemap.net'>google map plugin html</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>\"\n    return mapDiv;\n}\n\n\nfunction generateContactDiv(){\n    let contactDiv = document.createElement('div');\n    contactDiv.className = \"contact-container\";\n    contactDiv.innerHTML = \"Email: contact@sunrisedonuts.com <br>Phone: 222-333-4444\"\n    return contactDiv;\n}\n\nfunction eraseContent(parentDiv){\n    parentDiv.innerHTML=\"\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContactPage);\n\n//# sourceURL=webpack://rest-page/./src/modules/contactTab.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction generateHeader(parentDiv){\n    let headerContainer = document.createElement('div');\n    headerContainer.className = 'header-container';\n    headerContainer.append(generateTitleDiv());\n    headerContainer.append(generateTabsDiv());\n    parentDiv.appendChild(headerContainer);\n}\n\n\nfunction generateTitleDiv(){\n    let titleContainer = document.createElement('div');\n    titleContainer.className ='title-container';\n    let title = document.createElement('div');\n    title.className = 'title';\n    title.innerHTML = \"Sunrise Donuts\";\n    titleContainer.appendChild(title);\n    return titleContainer;\n}\n\nfunction generateTabsDiv(){\n    let tabscontainer = document.createElement('div');\n    tabscontainer.className = 'title-container';\n    tabscontainer.appendChild(generateButtonsDiv());\n    return tabscontainer;\n}\n\nfunction generateButtonsDiv(){\n    let buttonContainer = document.createElement('div');\n    buttonContainer.className = 'title-container';\n    let homeButton = createHeaderButton('Home');\n    let menuButton = createHeaderButton('Menu');\n    let contactButton = createHeaderButton('Contact');\n    buttonContainer.appendChild(homeButton);\n    buttonContainer.appendChild(menuButton);\n    buttonContainer.appendChild(contactButton);\n    return buttonContainer;\n}\n\nfunction createHeaderButton(name){\n    let button = document.createElement('button');\n    button.className = 'menu-button';\n    let buttonText = document.createElement('div');\n    buttonText.className = 'menu-button-text';\n    buttonText.id = name;\n    buttonText.innerHTML = name;\n    let buttonUnderLine = document.createElement('div');\n    buttonUnderLine.className = 'menu-under-line';\n    button.appendChild(buttonText);\n    button.appendChild(buttonUnderLine);\n    return button;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHeader);\n\n//# sourceURL=webpack://rest-page/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/homeTab.js":
/*!********************************!*\
  !*** ./src/modules/homeTab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//functions for creating Home page-----------------------------------------------------------\nfunction generateHomePage(parentDiv){\n    eraseContent(parentDiv);\n    let motto = generateMottoDiv();\n    let image = generateImageDiv();\n    let slogan = generateSloganDiv();\n    //append divs to parentDiv\n    parentDiv.appendChild(motto);\n    parentDiv.appendChild(image);\n    parentDiv.appendChild(slogan);\n}\n\nfunction generateMottoDiv(){\n    let motto = document.createElement('div');\n    motto.className = \"company-motto\";\n    motto.innerHTML = \"Welcome! Order your favourite sweet treats today!\";\n    return motto;\n}\nfunction generateImageDiv(){\n    let image = document.createElement('div');\n    image.className = \"company-motto-img\";\n    return image;\n}\nfunction generateSloganDiv(){\n    let slogan = document.createElement('div');\n    slogan.className = \"company-motto\";\n    slogan.innerHTML = \"Made to order!\";\n    return slogan;\n}\n\n//erase content function \n\nfunction eraseContent(parentDiv){\n    console.log(parentDiv);\n    parentDiv.innerHTML=\"\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomePage);\n\n//# sourceURL=webpack://rest-page/./src/modules/homeTab.js?");

/***/ }),

/***/ "./src/modules/menuTab.js":
/*!********************************!*\
  !*** ./src/modules/menuTab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateMenuPage(parentDiv){\n    eraseContent(parentDiv);\n    let menuItemContainer = document.createElement('div');\n    menuItemContainer.className = 'menu-item-container';\n    let menuItem1 = createMenuItem('Mini Donuts', 'img/miniDonuts.png', '10pc $5');\n    let menuItem2 = createMenuItem('Honey Glazed', 'img/honeyGlazed.jpg', '1pc $4');\n    let menuItem3 = createMenuItem('Chocolate Glazed', 'img/chocolateGlazed.jpg', '1pc $4');\n    let menuItem4 = createMenuItem('Jelly Donuts', 'img/jellyDonuts.png', '1pc $5');\n    let menuItem5 = createMenuItem('Double Chocolate', 'img/doubleChocolate.png', '1pc $5');\n    let menuItem6 = createMenuItem('Vanilla cream', 'img/vanillaCream.jpg', '1pc $4');\n    menuItemContainer.appendChild(menuItem1);\n    menuItemContainer.appendChild(menuItem2);\n    menuItemContainer.appendChild(menuItem3);\n    menuItemContainer.appendChild(menuItem4);\n    menuItemContainer.appendChild(menuItem5);\n    menuItemContainer.appendChild(menuItem6);\n    parentDiv.appendChild(menuItemContainer);\n}\n\nfunction createMenuItem(name, image, price){\n    let menuItem = document.createElement('div');\n    menuItem.className = 'menu-item';\n    let nameDiv = generateNameDiv(name);\n    let imageDiv = generateItemImageDiv(image);\n    let priceDiv = generatePriceDiv(price);\n    menuItem.appendChild(nameDiv);\n    menuItem.appendChild(imageDiv);\n    menuItem.appendChild(priceDiv);\n    return menuItem;\n}\n\nfunction generateNameDiv(name){\n    let nameDiv = document.createElement('div');\n    nameDiv.className = 'item-name';\n    nameDiv.innerHTML = name;\n    return nameDiv;\n}\n\nfunction generateItemImageDiv(image){\n    let imageDiv = document.createElement('div');\n    imageDiv.className = 'item-image-container';\n    let menuImage = document.createElement('img');\n    menuImage.src = image;\n    menuImage.className = 'item-image';\n    imageDiv.appendChild(menuImage);\n    return imageDiv;\n}\n\nfunction generatePriceDiv(price){\n    let priceDiv = document.createElement('div');\n    priceDiv.className = 'item-price';\n    priceDiv.innerHTML = price;\n    return priceDiv;\n}\n\nfunction eraseContent(parentDiv){\n    parentDiv.innerHTML=\"\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenuPage);\n\n//# sourceURL=webpack://rest-page/./src/modules/menuTab.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;