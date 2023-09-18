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

/***/ "./src/js/jsModuls/addDelBookBasketScrip.js":
/*!**************************************************!*\
  !*** ./src/js/jsModuls/addDelBookBasketScrip.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDelBookBasket: () => (/* binding */ addDelBookBasket)\n/* harmony export */ });\n/* harmony import */ var _getClickAddDelScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClickAddDelScrip */ \"./src/js/jsModuls/getClickAddDelScrip.js\");\n/* harmony import */ var _recordIdArrayScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recordIdArrayScrip */ \"./src/js/jsModuls/recordIdArrayScrip.js\");\n\r\n\r\n\r\nfunction addDelBookBasket() {\r\n  (0,_getClickAddDelScrip__WEBPACK_IMPORTED_MODULE_0__.getClickAddDel)();\r\n  (0,_recordIdArrayScrip__WEBPACK_IMPORTED_MODULE_1__.recordIdArray)();\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/addDelBookBasketScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/closeScrip.js":
/*!***************************************!*\
  !*** ./src/js/jsModuls/closeScrip.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   close: () => (/* binding */ close)\n/* harmony export */ });\n/* harmony import */ var _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultAnimationScrip */ \"./src/js/jsModuls/defaultAnimationScrip.js\");\n\r\n\r\nfunction close() {\r\n    _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__.container.classList.remove('nav__containermenu--block');\r\n    _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__.btnClose.classList.add('dnone');\r\n    _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__.btnOpen.classList.remove('dnone');\r\n    _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__.imgOpen.classList.remove('dnone'); // Удаляем класс dnone у изображения с классом open\r\n  }\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/closeScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/createSpanScrip.js":
/*!********************************************!*\
  !*** ./src/js/jsModuls/createSpanScrip.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSpan: () => (/* binding */ createSpan)\n/* harmony export */ });\n/* harmony import */ var _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultSliderScrip */ \"./src/js/jsModuls/defaultSliderScrip.js\");\n/* harmony import */ var _updateSliderScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSliderScrip */ \"./src/js/jsModuls/updateSliderScrip.js\");\n\r\n\r\n\r\nfunction createSpan() {\r\n    for (let i = 0; i < _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.images.length; i++) {\r\n      const span = document.createElement('span');\r\n      span.className = 'banners__coorusel-span';\r\n      span.id = i;\r\n      _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.spans.appendChild(span);\r\n    }\r\n\r\n    (0,_updateSliderScrip__WEBPACK_IMPORTED_MODULE_1__.updateSlider)(); // Вызываем updateSlider после создания спанов\r\n  }\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/createSpanScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/defaultAnimationScrip.js":
/*!**************************************************!*\
  !*** ./src/js/jsModuls/defaultAnimationScrip.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnClose: () => (/* binding */ btnClose),\n/* harmony export */   btnOpen: () => (/* binding */ btnOpen),\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   defaultAnimation: () => (/* binding */ defaultAnimation),\n/* harmony export */   imgClose: () => (/* binding */ imgClose),\n/* harmony export */   imgOpen: () => (/* binding */ imgOpen)\n/* harmony export */ });\n/* harmony import */ var _openScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openScrip */ \"./src/js/jsModuls/openScrip.js\");\n/* harmony import */ var _closeScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeScrip */ \"./src/js/jsModuls/closeScrip.js\");\nconst btnOpen = document.querySelector('.nav__containermenu__btniconopen__button');\nconst btnClose = document.querySelector('.nav__containermenu__btniconclose__button');\nconst container = document.querySelector('.nav__containermenu');\nconst imgOpen = document.querySelector('.open');\nconst imgClose = document.querySelector('.close');\n\n\n\n\nfunction defaultAnimation() {\n  btnOpen.addEventListener('click', _openScrip__WEBPACK_IMPORTED_MODULE_0__.open);\n  btnClose.addEventListener('click', _closeScrip__WEBPACK_IMPORTED_MODULE_1__.close);\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/defaultAnimationScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/defaultScrip.js":
/*!*****************************************!*\
  !*** ./src/js/jsModuls/defaultScrip.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HtmlElementbasket: () => (/* binding */ HtmlElementbasket),\n/* harmony export */   HtmlElementbasketTitle: () => (/* binding */ HtmlElementbasketTitle),\n/* harmony export */   btnArchitecture: () => (/* binding */ btnArchitecture),\n/* harmony export */   containerResultBooks: () => (/* binding */ containerResultBooks),\n/* harmony export */   dataInfo: () => (/* binding */ dataInfo),\n/* harmony export */   index: () => (/* binding */ index),\n/* harmony export */   moreResultBtn: () => (/* binding */ moreResultBtn),\n/* harmony export */   recordIdArray: () => (/* binding */ recordIdArray),\n/* harmony export */   updateIndex: () => (/* binding */ updateIndex),\n/* harmony export */   valueslocalStorage: () => (/* binding */ valueslocalStorage)\n/* harmony export */ });\n/* harmony import */ var _moreResulScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moreResulScrip */ \"./src/js/jsModuls/moreResulScrip.js\");\n/* harmony import */ var _getClickAddDelScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getClickAddDelScrip */ \"./src/js/jsModuls/getClickAddDelScrip.js\");\n/* harmony import */ var _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultAnimationScrip */ \"./src/js/jsModuls/defaultAnimationScrip.js\");\n/* harmony import */ var _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultSliderScrip */ \"./src/js/jsModuls/defaultSliderScrip.js\");\n/* harmony import */ var _getClickGetNameKategoryScrip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getClickGetNameKategoryScrip */ \"./src/js/jsModuls/getClickGetNameKategoryScrip.js\");\n/* harmony import */ var _getClickMoreResulScrip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getClickMoreResulScrip */ \"./src/js/jsModuls/getClickMoreResulScrip.js\");\n/* harmony import */ var _requestBookScrip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestBookScrip */ \"./src/js/jsModuls/requestBookScrip.js\");\n/* harmony import */ var _doSomethingWithDataInfoScrip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doSomethingWithDataInfoScrip */ \"./src/js/jsModuls/doSomethingWithDataInfoScrip.js\");\n/* harmony import */ var _updateBasketDisplayScrip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateBasketDisplayScrip */ \"./src/js/jsModuls/updateBasketDisplayScrip.js\");\n/* harmony import */ var _addDelBookBasketScrip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addDelBookBasketScrip */ \"./src/js/jsModuls/addDelBookBasketScrip.js\");\n// Получение элементов DOM\r\nconst btnArchitecture = document.querySelectorAll('.book__katalog__categories__container ul li h1');\r\nconst moreResultBtn = document.querySelector('.book__katalog__result__moreBtn');\r\nconst containerResultBooks = document.querySelector('.book__katalog__result__books');\r\n\r\nconst HtmlElementbasket = document.querySelector('.nav__functional-basket');\r\nconst HtmlElementbasketTitle = document.querySelector('.basket');\r\n\r\n\r\n\r\n// Дефолтные значения\r\nlet index = 0;\r\nfunction updateIndex(newIndex) {\r\n  index = newIndex;\r\n}\r\n\r\nlet dataInfo = \"Architecture\";\r\nlet valueslocalStorage = JSON.parse(localStorage.getItem('Basket')) || [];\r\nlet recordIdArray;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Функция, которая будет выполняться при загрузке страницы\r\nasync function defaultScript() {\r\n  (0,_defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_2__.defaultAnimation)();\r\n  (0,_defaultSliderScrip__WEBPACK_IMPORTED_MODULE_3__.defaultSlider)();\r\n  (0,_getClickGetNameKategoryScrip__WEBPACK_IMPORTED_MODULE_4__.getClickGetNameKategory)();\r\n  (0,_getClickMoreResulScrip__WEBPACK_IMPORTED_MODULE_5__.getClickMoreResul)();\r\n  await (0,_requestBookScrip__WEBPACK_IMPORTED_MODULE_6__.requestBook)(dataInfo, index);\r\n  (0,_doSomethingWithDataInfoScrip__WEBPACK_IMPORTED_MODULE_7__.doSomethingWithDataInfo)(dataInfo);\r\n  (0,_updateBasketDisplayScrip__WEBPACK_IMPORTED_MODULE_8__.updateBasketDisplay)();\r\n  (0,_addDelBookBasketScrip__WEBPACK_IMPORTED_MODULE_9__.addDelBookBasket)();\r\n}\r\n\r\n// Запуск дефолтных функций\r\ndefaultScript();\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/defaultScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/defaultSliderScrip.js":
/*!***********************************************!*\
  !*** ./src/js/jsModuls/defaultSliderScrip.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultSlider: () => (/* binding */ defaultSlider),\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   num: () => (/* binding */ num),\n/* harmony export */   spans: () => (/* binding */ spans)\n/* harmony export */ });\n/* harmony import */ var _createSpanScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSpanScrip */ \"./src/js/jsModuls/createSpanScrip.js\");\n/* harmony import */ var _updateSliderScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSliderScrip */ \"./src/js/jsModuls/updateSliderScrip.js\");\n/* harmony import */ var _updateNumScrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateNumScrip */ \"./src/js/jsModuls/updateNumScrip.js\");\n\n\n\n\nconst images = document.querySelectorAll('.banner');\nconst spans = document.querySelector('.banners__coorusel-spans');\nlet num = 0;\nconsole.log(num);\n\nfunction defaultSlider() {\n  (0,_createSpanScrip__WEBPACK_IMPORTED_MODULE_0__.createSpan)();\n\n  spans.addEventListener('click', event => {\n    const clickedSpan = event.target;\n    if (clickedSpan.classList.contains('banners__coorusel-span')) {\n      num = parseInt(clickedSpan.id, 10); // Преобразуем id спана в число\n      (0,_updateSliderScrip__WEBPACK_IMPORTED_MODULE_1__.updateSlider)(); // Вызываем updateSlider после клика на спан\n    }\n  });\n\n  setInterval(() => {\n    num = (num + 1) % images.length;\n    (0,_updateSliderScrip__WEBPACK_IMPORTED_MODULE_1__.updateSlider)();\n    (0,_updateNumScrip__WEBPACK_IMPORTED_MODULE_2__.updateNum)();\n  }, 5000);\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/defaultSliderScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/displayResultScrip.js":
/*!***********************************************!*\
  !*** ./src/js/jsModuls/displayResultScrip.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayResult: () => (/* binding */ displayResult)\n/* harmony export */ });\n/* harmony import */ var _defaultScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultScrip */ \"./src/js/jsModuls/defaultScrip.js\");\n/* harmony import */ var _requestBookScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestBookScrip */ \"./src/js/jsModuls/requestBookScrip.js\");\n\r\n\r\n\r\nfunction displayResult(apiData) {\r\n    const apiDataLength = apiData.items.length;\r\n    for (let i = 0; i < apiDataLength; i++) {\r\n      const book = apiData.items[i];\r\n\r\n            let bookId;\r\n            if (book.id.length >= 2 && book.id[0] === book.id[1]) {\r\n              bookId = book.id.substring(1);\r\n              bookId = bookId.replace(/[\\s?/.,-/_]/g, '').toUpperCase();\r\n              book.id = bookId;\r\n            } else {\r\n              bookId = book.id.replace(/[\\s?/.,-/_]/g, '').toUpperCase();\r\n            }\r\n\r\n            const bookKatalogResultAboutBook = document.createElement('div');\r\n            bookKatalogResultAboutBook.className = 'book__katalog__result__aboutBook';\r\n            bookKatalogResultAboutBook.id = bookId;\r\n\r\n\r\n            // Создание дочернего элемента .book__katalog__result__aboutBook__img\r\n            const imgDiv = document.createElement('div');\r\n            imgDiv.className = 'book__katalog__result__aboutBook__img';\r\n\r\n            const img = document.createElement('img');\r\n\r\n            if (book.volumeInfo.imageLinks != null) {\r\n              if (book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail) {\r\n                img.src = book.volumeInfo.imageLinks.smallThumbnail;\r\n              } else {\r\n                img.src = \"./src/images/plaseholder.jpg\";\r\n              }\r\n            } else {\r\n              img.src = \"./src/images/plaseholder.jpg\";\r\n            }\r\n\r\n            img.alt = `Обложка Книги - ${book.volumeInfo.title}`;\r\n            imgDiv.appendChild(img);\r\n\r\n            // Создание дочернего элемента .book__katalog__result__aboutBook__info\r\n            const infoDiv = document.createElement('div');\r\n            infoDiv.className = 'book__katalog__result__aboutBook__info';\r\n\r\n            const authorP = document.createElement('p');\r\n            authorP.className = 'book__katalog__result__aboutBook__info__Author';\r\n            if (book.volumeInfo.authors != null) {\r\n              const authors = book.volumeInfo.authors;\r\n              if (authors.length > 2) {\r\n                // const dataAuthors = authors;\r\n                console.log(book.volumeInfo.authors[0] + \",\" + book.volumeInfo.authors[1] + \"...\");\r\n                const pAuthors = book.volumeInfo.authors[0] + \",\" + book.volumeInfo.authors[1] + \"...\";\r\n                console.log(pAuthors);\r\n                authorP.textContent = pAuthors;\r\n                authorP.title = authors;\r\n              } else {\r\n                authorP.textContent = authors;\r\n                authorP.title = authors;\r\n              }\r\n            } else {}\r\n            infoDiv.appendChild(authorP);\r\n\r\n            const nameH1 = document.createElement('h1');\r\n            nameH1.className = 'book__katalog__result__aboutBook__info__Name';\r\n            //console.log(book.volumeInfo.title.length);\r\n            if (book.volumeInfo.title != null) {\r\n              if (book.volumeInfo.title.length < 25) {\r\n                nameH1.textContent = book.volumeInfo.title;\r\n              } else {\r\n                const dataTitle = book.volumeInfo.title;\r\n                const h1Title = dataTitle.slice(0, 25) + \"...\"\r\n                nameH1.textContent = h1Title;\r\n                nameH1.title = dataTitle;\r\n              }\r\n            } else {\r\n\r\n            }\r\n            infoDiv.appendChild(nameH1);\r\n\r\n\r\n\r\n\r\n            const ratingDiv = document.createElement('div');\r\n            ratingDiv.className = 'book__katalog__result__aboutBook__info__Rating';\r\n            const ratingContainer = document.createElement('div');\r\n            const ratingP = document.createElement('p');\r\n            ratingContainer.className = 'rating';\r\n            if (book.volumeInfo.averageRating === undefined) {\r\n              //const stars = [];\r\n              //const maxRating = 5;\r\n              //const ratingPercentage = book.volumeInfo.averageRating * 20;\r\n              //for (let i = 1; i <= maxRating; i++) {\r\n              //const star = document.createElement('span');\r\n              //star.className = 'star';\r\n              //star.innerHTML = '&#9733;';\r\n              //stars.push(star);\r\n              //ratingContainer.appendChild(star);\r\n              //}\r\n              //const fillStars = (percentage) => {\r\n              //const activeStars = (percentage / 100) * maxRating;\r\n              //for (let i = 0; i < maxRating; i++) {\r\n              //  if (i < activeStars) {\r\n              //    stars[i].classList.add('active');\r\n              //  } else {\r\n              //    stars[i].classList.remove('active');\r\n              //  }\r\n              //}\r\n              //};\r\n              //fillStars(ratingPercentage);\r\n              //const ratingP = document.createElement('p');\r\n              //ratingP.className = 'book__katalog__result__aboutBook__info__Rating__p';\r\n              //ratingP.textContent = '252 review';\r\n            } else {\r\n                const stars = [];\r\n                const maxRating = 5;\r\n                const ratingPercentage = book.volumeInfo.averageRating * 20;\r\n                for (let i = 1; i <= maxRating; i++) {\r\n                  const star = document.createElement('span');\r\n                  star.className = 'star';\r\n                  star.innerHTML = '&#9733;';\r\n                  stars.push(star);\r\n                  ratingContainer.appendChild(star);\r\n                }\r\n                const fillStars = (percentage) => {\r\n                const activeStars = (percentage / 100) * maxRating;\r\n                for (let i = 0; i < maxRating; i++) {\r\n                  if (i < activeStars) {\r\n                    stars[i].classList.add('active');\r\n                  } else {\r\n                    stars[i].classList.remove('active');\r\n                  }\r\n                }\r\n\r\n                if (book.volumeInfo.ratingsCount > 1000) {\r\n                  let reduce = book.volumeInfo.ratingsCount;\r\n                  reduce = (reduce / 1000).toString().slice(0, 3) + \"M\" + \" review\";\r\n                  const ratingText = document.createElement('p');\r\n                  ratingText.className = 'book__katalog__result__aboutBook__info__Rating__p';\r\n                  ratingText.textContent = reduce;\r\n                  ratingP.appendChild(ratingText);\r\n                } else {\r\n                  const ratingText = document.createElement('p');\r\n                  ratingText.className = 'book__katalog__result__aboutBook__info__Rating__p';\r\n                  ratingText.textContent = book.volumeInfo.ratingsCount + \"review\";\r\n                  ratingP.appendChild(ratingText);\r\n                }\r\n\r\n            };\r\n            fillStars(ratingPercentage);\r\n            }\r\n            \r\n\r\n            ratingDiv.appendChild(ratingContainer);\r\n            ratingDiv.appendChild(ratingP);\r\n\r\n            infoDiv.appendChild(ratingDiv)\r\n\r\n\r\n\r\n\r\n\r\n          const descriptionP = document.createElement('p');\r\n          descriptionP.className = 'book__katalog__result__aboutBook__info__Description';\r\n          if (book.volumeInfo.description != null) {\r\n            if (book.volumeInfo.description.length < 75) {\r\n              descriptionP.textContent = book.volumeInfo.description;\r\n            } else {\r\n              const pDescription = book.volumeInfo.description;\r\n              const description = pDescription.slice(0, 76) + \"...\";\r\n              descriptionP.textContent = description;\r\n              descriptionP.title = pDescription\r\n            }\r\n          } else {\r\n\r\n          }\r\n          infoDiv.appendChild(descriptionP);\r\n\r\n          const priceH1 = document.createElement('h1');\r\n          if (book.saleInfo && book.saleInfo.retailPrice) {\r\n            priceH1.textContent = book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : '';\r\n            if (book.saleInfo.retailPrice.currencyCode === \"KZT\") {\r\n              priceH1.className = 'book__katalog__result__aboutBook__info__Price book__katalog__result__aboutBook__info__Price__kzt';\r\n            } else if (book.saleInfo.retailPrice.currencyCode === \"USD\") {\r\n              priceH1.className = 'book__katalog__result__aboutBook__info__Price book__katalog__result__aboutBook__info__Price__usd';\r\n            } else if (book.saleInfo.retailPrice.currencyCode === \"RUB\") {\r\n              priceH1.className = 'book__katalog__result__aboutBook__info__Price book__katalog__result__aboutBook__info__Price__rub';\r\n            }\r\n          }\r\n\r\n          // const btnDiv = document.createElement('div');\r\n          const buyButton = document.createElement('button');\r\n          buyButton.className = `book__katalog__result__btn book__katalog__result__btn__btnadddellbasket id${bookId}`;\r\n          buyButton.dataset.info = bookId;\r\n          buyButton.title = 'Добавить в Корзину';\r\n          buyButton.textContent = 'buy now';\r\n          infoDiv.appendChild(buyButton);\r\n\r\n          infoDiv.appendChild(ratingDiv);\r\n          infoDiv.appendChild(descriptionP);\r\n          infoDiv.appendChild(priceH1);\r\n          infoDiv.appendChild(buyButton);\r\n\r\n          // Добавление дочерних элементов в корневой элемент\r\n          bookKatalogResultAboutBook.appendChild(imgDiv);\r\n          bookKatalogResultAboutBook.appendChild(infoDiv);\r\n\r\n          // Добавление корневого элемента в контейнер containerResultBooks\r\n        _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.containerResultBooks.appendChild(bookKatalogResultAboutBook);\r\n    };\r\n  }\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/displayResultScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/doSomethingWithDataInfoScrip.js":
/*!*********************************************************!*\
  !*** ./src/js/jsModuls/doSomethingWithDataInfoScrip.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   doSomethingWithDataInfo: () => (/* binding */ doSomethingWithDataInfo)\n/* harmony export */ });\n/* harmony import */ var _getClickGetNameKategoryScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClickGetNameKategoryScrip */ \"./src/js/jsModuls/getClickGetNameKategoryScrip.js\");\n\r\n\r\nfunction doSomethingWithDataInfo(info) {\r\n  info = info.replace(/\\s/g, '');\r\n  info = info.replace(/&/g, '');\r\n\r\n  const allSpans = document.querySelectorAll('.book__katalog__categories__container ul li span');\r\n  allSpans.forEach(span => {\r\n    span.classList.remove('book__katalog__categories__h1__span--active');\r\n  });\r\n\r\n  const allHeadings = document.querySelectorAll('.book__katalog__categories__container ul li h1');\r\n  allHeadings.forEach(heading => {\r\n    heading.classList.remove('book__katalog__categories__h1--active');\r\n  });\r\n\r\n  const span = document.querySelector(`.${info}`);\r\n  if (span) {\r\n    span.classList.add('book__katalog__categories__h1__span--active');\r\n  }\r\n\r\n  const heading = document.querySelector(\".h1__\" + `${info}`);\r\n  if (heading) {\r\n    heading.classList.add('book__katalog__categories__h1--active');\r\n  }\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/doSomethingWithDataInfoScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/getClickAddDelScrip.js":
/*!************************************************!*\
  !*** ./src/js/jsModuls/getClickAddDelScrip.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getClickAddDel: () => (/* binding */ getClickAddDel)\n/* harmony export */ });\n/* harmony import */ var _defaultScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultScrip */ \"./src/js/jsModuls/defaultScrip.js\");\n/* harmony import */ var _updateButtonStateScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateButtonStateScrip */ \"./src/js/jsModuls/updateButtonStateScrip.js\");\n/* harmony import */ var _updateBasketDisplayScrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateBasketDisplayScrip */ \"./src/js/jsModuls/updateBasketDisplayScrip.js\");\n/* harmony import */ var _recordIdArrayScrip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recordIdArrayScrip */ \"./src/js/jsModuls/recordIdArrayScrip.js\");\n\r\n\r\n\r\n\r\n\r\nfunction getClickAddDel () {\r\n  const containerResultBooks = document.querySelector('.book__katalog__result__books');\r\n  containerResultBooks.addEventListener('click', (event) => {\r\n    const target = event.target;\r\n    if (target.classList.contains('book__katalog__result__btn__btnadddellbasket')) {\r\n      const id = target.getAttribute('data-info');\r\n      const isAdded = _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.some(item => item.id === id);\r\n      if (isAdded) {\r\n        _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage = _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.filter(item => item.id !== id);\r\n        (0,_updateButtonStateScrip__WEBPACK_IMPORTED_MODULE_1__.updateButtonState)(target, false);\r\n      } else {\r\n        _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.push({ id });\r\n        (0,_updateButtonStateScrip__WEBPACK_IMPORTED_MODULE_1__.updateButtonState)(target, true);\r\n      }\r\n      // Обновляем LocalStorage и отображение корзины\r\n      localStorage.setItem('Basket', JSON.stringify(_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage));\r\n      (0,_updateBasketDisplayScrip__WEBPACK_IMPORTED_MODULE_2__.updateBasketDisplay)();\r\n      (0,_recordIdArrayScrip__WEBPACK_IMPORTED_MODULE_3__.recordIdArray)();\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/getClickAddDelScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/getClickGetNameKategoryScrip.js":
/*!*********************************************************!*\
  !*** ./src/js/jsModuls/getClickGetNameKategoryScrip.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getClickGetNameKategory: () => (/* binding */ getClickGetNameKategory)\n/* harmony export */ });\n/* harmony import */ var _defaultScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultScrip */ \"./src/js/jsModuls/defaultScrip.js\");\n\r\n\r\nfunction getClickGetNameKategory () {\r\n  _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.btnArchitecture.forEach(li => {\r\n    li.addEventListener('click', event => {\r\n      (0,_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.updateIndex)(0);\r\n      while (_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.containerResultBooks.firstChild) {\r\n        _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.containerResultBooks.removeChild(_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.containerResultBooks.firstChild);\r\n      }\r\n      _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.dataInfo = li.getAttribute('data-info');\r\n      doSomethingWithDataInfo(_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.dataInfo);\r\n      requestBook(_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.dataInfo, index);\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/getClickGetNameKategoryScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/getClickMoreResulScrip.js":
/*!***************************************************!*\
  !*** ./src/js/jsModuls/getClickMoreResulScrip.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getClickMoreResul: () => (/* binding */ getClickMoreResul)\n/* harmony export */ });\n/* harmony import */ var _defaultScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultScrip */ \"./src/js/jsModuls/defaultScrip.js\");\n/* harmony import */ var _moreResulScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moreResulScrip */ \"./src/js/jsModuls/moreResulScrip.js\");\n\r\n\r\n// Обработчики кликов\r\nfunction getClickMoreResul () {\r\n  _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.moreResultBtn.addEventListener('click', _moreResulScrip__WEBPACK_IMPORTED_MODULE_1__.moreResul);\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/getClickMoreResulScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/moreResulScrip.js":
/*!*******************************************!*\
  !*** ./src/js/jsModuls/moreResulScrip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moreResul: () => (/* binding */ moreResul)\n/* harmony export */ });\n/* harmony import */ var _getClickMoreResulScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClickMoreResulScrip */ \"./src/js/jsModuls/getClickMoreResulScrip.js\");\n/* harmony import */ var _defaultScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultScrip */ \"./src/js/jsModuls/defaultScrip.js\");\n/* harmony import */ var _recordIdArrayScrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recordIdArrayScrip */ \"./src/js/jsModuls/recordIdArrayScrip.js\");\n\r\n\r\n\r\n\r\nasync function moreResul() {\r\n  _defaultScrip__WEBPACK_IMPORTED_MODULE_1__.index += 6;\r\n  await requestBook(_defaultScrip__WEBPACK_IMPORTED_MODULE_1__.dataInfo, _defaultScrip__WEBPACK_IMPORTED_MODULE_1__.index);\r\n  (0,_recordIdArrayScrip__WEBPACK_IMPORTED_MODULE_2__.recordIdArray)();\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/moreResulScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/openScrip.js":
/*!**************************************!*\
  !*** ./src/js/jsModuls/openScrip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   open: () => (/* binding */ open)\n/* harmony export */ });\n/* harmony import */ var _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultAnimationScrip */ \"./src/js/jsModuls/defaultAnimationScrip.js\");\n\r\n\r\nfunction open() {\r\n    _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__.container.classList.add('nav__containermenu--block');\r\n    _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__.btnClose.classList.remove('dnone');\r\n    _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__.btnOpen.classList.add('dnone');\r\n    _defaultAnimationScrip__WEBPACK_IMPORTED_MODULE_0__.imgOpen.classList.add('dnone'); // Добавляем класс dnone к изображению с классом open\r\n  }\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/openScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/recordIdArrayScrip.js":
/*!***********************************************!*\
  !*** ./src/js/jsModuls/recordIdArrayScrip.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   recordIdArray: () => (/* binding */ recordIdArray)\n/* harmony export */ });\n/* harmony import */ var _defaultScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultScrip */ \"./src/js/jsModuls/defaultScrip.js\");\n/* harmony import */ var _upgradeBtnScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgradeBtnScrip */ \"./src/js/jsModuls/upgradeBtnScrip.js\");\n\r\n\r\n// import { recordIdArray } from \"./defaultScrip\";\r\n\r\nfunction recordIdArray() {\r\n  const books = document.querySelectorAll('.book__katalog__result__aboutBook');\r\n  const arrayElementId = [];\r\n  for (let i = 0; i < books.length; i++) {\r\n    const newObj2 = {id: books[i].attributes?.id.value};\r\n    arrayElementId.push(newObj2);\r\n  }\r\n  const commonElement = _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.filter(item => {\r\n    return arrayElementId.some(obj => obj.id === item.id);\r\n  });\r\n  (0,_upgradeBtnScrip__WEBPACK_IMPORTED_MODULE_1__.upgradeBtn)(commonElement);\r\n  // this.recordIdArray = recordIdArray;\r\n}\r\n\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/recordIdArrayScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/requestBookScrip.js":
/*!*********************************************!*\
  !*** ./src/js/jsModuls/requestBookScrip.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   requestBook: () => (/* binding */ requestBook)\n/* harmony export */ });\n/* harmony import */ var _getClickGetNameKategoryScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClickGetNameKategoryScrip */ \"./src/js/jsModuls/getClickGetNameKategoryScrip.js\");\n/* harmony import */ var _displayResultScrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayResultScrip */ \"./src/js/jsModuls/displayResultScrip.js\");\n\r\n\r\n// import { info, index } from './moreResulScrip';\r\n\r\nasync function requestBook(info, index) {\r\n  try {\r\n    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${info}&key=AIzaSyDuBIEPKqZHXRToe7UuEqFy4V2yPlgXbVA&printType=books&startIndex=${index}&maxResults=6&langRestrict=en`);\r\n    \r\n    if (!response.ok) {\r\n      console.log('Статус ответа:', response.status);\r\n      return;\r\n    }\r\n\r\n    const data = await response.json();\r\n    (0,_displayResultScrip__WEBPACK_IMPORTED_MODULE_1__.displayResult)(data);\r\n  } catch (error) {\r\n    console.error('Ошибка:', error);\r\n  }\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/requestBookScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/updateBasketDisplayScrip.js":
/*!*****************************************************!*\
  !*** ./src/js/jsModuls/updateBasketDisplayScrip.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateBasketDisplay: () => (/* binding */ updateBasketDisplay)\n/* harmony export */ });\n/* harmony import */ var _defaultScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultScrip */ \"./src/js/jsModuls/defaultScrip.js\");\n\r\n\r\nfunction updateBasketDisplay() {\r\n    if (_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length > 0) {\r\n      _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.HtmlElementbasket.innerHTML = _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length;\r\n      _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.HtmlElementbasket.classList.remove('nav__functional-basket__none');\r\n\r\n      if (_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length === 1) {\r\n        _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.HtmlElementbasketTitle.title = `в Корзине ${_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length} товар`;\r\n      } else if (_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length > 1 && _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length < 5) {\r\n        _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.HtmlElementbasketTitle.title = `в Корзине ${_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length} товара`;\r\n      } else {\r\n        _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.HtmlElementbasketTitle.title = `в Корзине ${_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length} товаров`;\r\n      }\r\n    } else if (_defaultScrip__WEBPACK_IMPORTED_MODULE_0__.valueslocalStorage.length === 0) {\r\n      _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.HtmlElementbasket.classList.add('nav__functional-basket__none');\r\n      _defaultScrip__WEBPACK_IMPORTED_MODULE_0__.HtmlElementbasketTitle.title = ``;\r\n    }\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/updateBasketDisplayScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/updateButtonStateScrip.js":
/*!***************************************************!*\
  !*** ./src/js/jsModuls/updateButtonStateScrip.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateButtonState: () => (/* binding */ updateButtonState)\n/* harmony export */ });\n/* harmony import */ var _upgradeBtnScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgradeBtnScrip */ \"./src/js/jsModuls/upgradeBtnScrip.js\");\n\r\n\r\nfunction updateButtonState(button, isAdded) {\r\n  if (isAdded) {\r\n    button.textContent = \"IN THE CART\";\r\n    button.title = \"В корзине\";\r\n    button.classList.add('book__katalog__result__btn__btnadddellbasket-deactiv');\r\n  } else {\r\n    button.textContent = \"buy now\";\r\n    button.title = \"Добавить в корзину\";\r\n    button.classList.remove('book__katalog__result__btn__btnadddellbasket-deactiv');\r\n  }\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/updateButtonStateScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/updateNumScrip.js":
/*!*******************************************!*\
  !*** ./src/js/jsModuls/updateNumScrip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateNum: () => (/* binding */ updateNum)\n/* harmony export */ });\n/* harmony import */ var _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultSliderScrip */ \"./src/js/jsModuls/defaultSliderScrip.js\");\n\r\n\r\nfunction updateNum() {\r\n    if (_defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.num >= _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.images.length) {\r\n      _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.num = 0;\r\n    }\r\n  }\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/updateNumScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/updateSliderScrip.js":
/*!**********************************************!*\
  !*** ./src/js/jsModuls/updateSliderScrip.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateSlider: () => (/* binding */ updateSlider)\n/* harmony export */ });\n/* harmony import */ var _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultSliderScrip */ \"./src/js/jsModuls/defaultSliderScrip.js\");\n\r\n\r\nfunction updateSlider() {\r\n    _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.images.forEach(image => {\r\n      image.classList.remove('bannerActive'); // Удаляем класс у всех изображений\r\n    });\r\n\r\n    _defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.images[_defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.num].classList.add('bannerActive'); // Добавляем класс только выбранному изображению\r\n\r\n    const spanList = Array.from(_defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.spans.children); // Преобразуем HTMLCollection в массив\r\n    spanList.forEach(span => {\r\n      span.classList.remove('banners__coorusel-span--active');\r\n    });\r\n\r\n    spanList[_defaultSliderScrip__WEBPACK_IMPORTED_MODULE_0__.num].classList.add('banners__coorusel-span--active');\r\n  }\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/updateSliderScrip.js?");

/***/ }),

/***/ "./src/js/jsModuls/upgradeBtnScrip.js":
/*!********************************************!*\
  !*** ./src/js/jsModuls/upgradeBtnScrip.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   upgradeBtn: () => (/* binding */ upgradeBtn)\n/* harmony export */ });\n/* harmony import */ var _updateButtonStateScrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateButtonStateScrip */ \"./src/js/jsModuls/updateButtonStateScrip.js\");\n\r\n\r\nfunction upgradeBtn(commonElements) {\r\n  for (let i = 0; i < commonElements.length; i++) {\r\n    let btnElementID = commonElements[i].id;\r\n    const button = document.querySelector(`.id${btnElementID}`);\r\n    (0,_updateButtonStateScrip__WEBPACK_IMPORTED_MODULE_0__.updateButtonState)(button, true);\r\n  }\r\n}\n\n//# sourceURL=webpack://bookshop/./src/js/jsModuls/upgradeBtnScrip.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/jsModuls/defaultScrip.js");
/******/ 	
/******/ })()
;