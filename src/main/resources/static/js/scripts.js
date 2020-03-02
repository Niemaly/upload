/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/build.js":
/*!*************************!*\
  !*** ./src/js/build.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_init_user_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/init-user-gallery */ \"./src/js/components/init-user-gallery.js\");\n\n\nObject(_components_init_user_gallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/js/build.js?");

/***/ }),

/***/ "./src/js/components/Request.js":
/*!**************************************!*\
  !*** ./src/js/components/Request.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Request; });\n/* harmony import */ var _is_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-json */ \"./src/js/components/is-json.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Request =\n/*#__PURE__*/\nfunction () {\n  function Request(method, url, requestName, data) {\n    _classCallCheck(this, Request);\n\n    this.method = method;\n    this.url = url;\n    this.requestName = requestName;\n    this.data = data;\n    this.logging = true;\n  }\n\n  _createClass(Request, [{\n    key: \"init\",\n    value: function init(callback) {\n      var _this = this;\n\n      var xhr = new XMLHttpRequest();\n      xhr.open(this.method, this.url, true);\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState == 4 && xhr.status == 200) {\n          if (_this.logging) {\n            _this.log('success', xhr.status);\n\n            console.log(_this.requestName + ' - RESPONSE:');\n            console.log(xhr.response);\n          }\n\n          callback(Object(_is_json__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(xhr.response));\n        } else if (xhr.status >= 500) {\n          if (_this.logging) {\n            _this.log('internal server error', xhr.status);\n          }\n\n          callback(false);\n        } else if (xhr.status >= 402 && xhr.status <= 420) {\n          if (_this.logging) {\n            _this.log('error', xhr.status);\n          }\n\n          callback(false);\n        } else if (xhr.status == 400 || xhr.status == 401) {\n          if (_this.logging) {\n            _this.log('bad request & unauthorized error', xhr.status);\n          }\n\n          callback(false);\n        }\n      };\n\n      if (this.logging) {\n        console.log(this.requestName + ' - sending');\n        console.log(this.url);\n      }\n\n      xhr.send(this.data);\n    }\n  }, {\n    key: \"log\",\n    value: function log(info, status) {\n      console.log(this.requestName + ' - ' + info + ' (status: ' + status + ')');\n    }\n  }]);\n\n  return Request;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/components/Request.js?");

/***/ }),

/***/ "./src/js/components/add-image-to-gallery.js":
/*!***************************************************!*\
  !*** ./src/js/components/add-image-to-gallery.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _delete_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-image */ \"./src/js/components/delete-image.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./src/js/components/user.js\");\n\n\n\nfunction addImageToGallery(imageArray, galleryType) {\n  var imagesType = galleryType == 'user gallery' ? '.images.-user' : '.images.-all';\n  var images = document.querySelector(imagesType);\n  var fragment = new DocumentFragment();\n  imageArray.forEach(function (el) {\n    var item = document.createElement('div');\n    item.classList.add('images_item');\n\n    if (_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loggedIn && (_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name == el.user || galleryType == 'user gallery')) {\n      var button = document.createElement('button');\n      button.classList.add('images_deleteBtn');\n      button.addEventListener('click', _delete_image__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      item.appendChild(button);\n    }\n\n    var img = document.createElement('img');\n    img.classList.add('images_img');\n    img.src = el.src;\n    item.appendChild(img);\n    fragment.appendChild(item);\n  });\n  images.appendChild(fragment);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addImageToGallery);\n\n//# sourceURL=webpack:///./src/js/components/add-image-to-gallery.js?");

/***/ }),

/***/ "./src/js/components/delete-image.js":
/*!*******************************************!*\
  !*** ./src/js/components/delete-image.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ \"./src/js/components/Request.js\");\n/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ \"./src/js/components/endpoints.js\");\n\n\n\nfunction deleteImage(event) {\n  var src = event.target.parentNode.querySelector('img').src;\n  removeImageFromServer(src);\n  removeGalleryItem(event.target.parentNode);\n\n  function removeImageFromServer(src) {\n    var imageToDelete = new FormData();\n    imageToDelete.append('url', src);\n    var deleteOldImage = new _Request__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('DELETE', _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteImage, 'Delete image', imageToDelete);\n    deleteOldImage.init();\n  }\n\n  function removeGalleryItem(item) {\n    item.classList.add('-hiding');\n    setTimeout(function () {\n      item.remove();\n    }, 400);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deleteImage);\n\n//# sourceURL=webpack:///./src/js/components/delete-image.js?");

/***/ }),

/***/ "./src/js/components/endpoints.js":
/*!****************************************!*\
  !*** ./src/js/components/endpoints.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar url = window.location.href; // const url = 'http://192.168.8.109:8080/'\n// const endpoints = {\n//     default: url,\n//     gallery: url + 'query-test/images.json',\n//     userGallery: url + 'query-test/userImages.json',\n//     login: url + 'login',\n//     logout: url + 'logout',\n//     deleteImage: url + 'deleteImage'\n// }\n\nvar endpoints = {\n  default: url,\n  gallery: url + 'gallery',\n  userGallery: url + 'userGallery',\n  login: url + 'login',\n  logout: url + 'logout',\n  deleteImage: url + 'deletePhoto'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (endpoints);\n\n//# sourceURL=webpack:///./src/js/components/endpoints.js?");

/***/ }),

/***/ "./src/js/components/init-gallery.js":
/*!*******************************************!*\
  !*** ./src/js/components/init-gallery.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ \"./src/js/components/Request.js\");\n/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ \"./src/js/components/endpoints.js\");\n/* harmony import */ var _add_image_to_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-image-to-gallery */ \"./src/js/components/add-image-to-gallery.js\");\n\n\n\n\nfunction initGallery() {\n  var gallery = new _Request__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('GET', _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gallery, 'show gallery');\n  gallery.init(function (response) {\n    Object(_add_image_to_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(response.images);\n  });\n\n  function setNick(nickName) {\n    var nickNameContainer = document.querySelector('.nav_nick');\n    nickNameContainer.textContent = nickName[0];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initGallery);\n\n//# sourceURL=webpack:///./src/js/components/init-gallery.js?");

/***/ }),

/***/ "./src/js/components/init-user-gallery.js":
/*!************************************************!*\
  !*** ./src/js/components/init-user-gallery.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ \"./src/js/components/Request.js\");\n/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ \"./src/js/components/endpoints.js\");\n/* harmony import */ var _add_image_to_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-image-to-gallery */ \"./src/js/components/add-image-to-gallery.js\");\n/* harmony import */ var _set_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-view */ \"./src/js/components/set-view.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ \"./src/js/components/user.js\");\n\n\n\n\n\n\nfunction initUserGallery() {\n  var gallery = new _Request__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('GET', _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userGallery, 'show user gallery');\n  gallery.init(function (response) {\n    if (response) {\n      if (response.user) {\n        _user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].loggedIn = true;\n        _user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].name = response.user;\n        Object(_set_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        Object(_add_image_to_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(response.images, 'user gallery');\n      } else {\n        Object(_set_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n      }\n    } else {\n      Object(_set_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n  });\n\n  function setNick(nickName) {\n    var nickNameContainer = document.querySelector('.nav_nick');\n    nickNameContainer.textContent = nickName[0];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initUserGallery);\n\n//# sourceURL=webpack:///./src/js/components/init-user-gallery.js?");

/***/ }),

/***/ "./src/js/components/is-json.js":
/*!**************************************!*\
  !*** ./src/js/components/is-json.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction isJson(item) {\n  try {\n    var test = JSON.parse(item);\n\n    if (test && _typeof(test) === \"object\") {\n      return test;\n    }\n  } catch (e) {}\n\n  return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isJson);\n\n//# sourceURL=webpack:///./src/js/components/is-json.js?");

/***/ }),

/***/ "./src/js/components/set-view.js":
/*!***************************************!*\
  !*** ./src/js/components/set-view.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/js/components/user.js\");\n/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ \"./src/js/components/endpoints.js\");\n/* harmony import */ var _upload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image */ \"./src/js/components/upload-image.js\");\n/* harmony import */ var _init_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-gallery */ \"./src/js/components/init-gallery.js\");\n/* harmony import */ var _toggle_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle-gallery */ \"./src/js/components/toggle-gallery.js\");\n\n\n\n\n\n\nfunction setView() {\n  var nav = document.querySelector('.nav');\n  var main = document.querySelector('.main');\n  var heading = document.querySelector('.heading span');\n\n  if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loggedIn) {\n    heading.textContent = 'Upload your images for free';\n    nav.innerHTML = \"<p class=\\\"nav_nick\\\">\".concat(_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, \"</p>\\n                         <a class=\\\"nav_logoutBtn\\\" href=\\\"\").concat(_endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logout, \"\\\">logout</a>\");\n    main.innerHTML = \"<form action=\\\"test/test.php\\\" class=\\\"form js_uploadImageForm\\\">\\n                            <div class=\\\"upload\\\">\\n                                <button class=\\\"upload_setImage js_setImageTrigger\\\">\\n                                    <span class=\\\"upload_setImageText -n1\\\">click to add an image</span>\\n                                    <span class=\\\"upload_setImageText -n2\\\">max size 5 MB</span>\\n                                </button>\\n                                <button class=\\\"upload_sendImage js_sendImageTrigger\\\">\\n                                    <span class=\\\"upload_sendImageText -n1\\\">upload image</span>\\n                                    <span class=\\\"upload_sendImageText -n2 js_sendImageName\\\">image-name.png</span>\\n                                </button>\\n                            </div>\\n                            \\n                            <input class=\\\"form_element js_setImage\\\" type=\\\"file\\\" name=\\\"\\\" id=\\\"\\\" accept=\\\"image/png, image/jpeg\\\" required>\\n                            <input class=\\\"form_element js_sendImage\\\" type=\\\"submit\\\" value=\\\"wy\\u015Blij\\\">\\n                        </form>\\n\\n                        <section class=\\\"gallery\\\">\\n                            <button class=\\\"gallery_button -user -active\\\">your images</button>\\n                            <button class=\\\"gallery_button -user\\\">all images</button>\\n                            <div class=\\\"gallery_box\\\">\\n                                <div class=\\\"gallery_images images -user -active\\\"></div>\\n                                <div class=\\\"gallery_images images -all\\\"></div>\\n                            </div>\\n                        </section>\";\n    Object(_upload_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    Object(_init_gallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    Object(_toggle_gallery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  } else {\n    heading.textContent = 'Login to upload images for free';\n    nav.innerHTML = \"<a class=\\\"nav_loginBtn\\\" href=\\\"\".concat(_endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].login, \"\\\">login</a>\");\n    main.innerHTML = \"<section class=\\\"gallery\\\">\\n                            <h2 class=\\\"gallery_heading\\\">all images</h2>\\n                            <div class=\\\"gallery_box\\\">\\n                                <div class=\\\"gallery_images images -all -active\\\"></div>\\n                            </div>\\n                        </section>\";\n    Object(_init_gallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setView);\n\n//# sourceURL=webpack:///./src/js/components/set-view.js?");

/***/ }),

/***/ "./src/js/components/toggle-gallery.js":
/*!*********************************************!*\
  !*** ./src/js/components/toggle-gallery.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction toggleGallery() {\n  var galleryButton = document.querySelectorAll('.gallery_button');\n  var galleryImages = document.querySelectorAll('.gallery_images');\n  galleryButton[0].addEventListener('click', function (el) {\n    galleryButton[0].classList.add('-active');\n    galleryButton[1].classList.remove('-active');\n    galleryImages[0].classList.add('-active');\n    galleryImages[1].classList.remove('-active');\n  });\n  galleryButton[1].addEventListener('click', function (el) {\n    galleryButton[1].classList.add('-active');\n    galleryButton[0].classList.remove('-active');\n    galleryImages[1].classList.add('-active');\n    galleryImages[0].classList.remove('-active');\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleGallery);\n\n//# sourceURL=webpack:///./src/js/components/toggle-gallery.js?");

/***/ }),

/***/ "./src/js/components/upload-image.js":
/*!*******************************************!*\
  !*** ./src/js/components/upload-image.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ \"./src/js/components/Request.js\");\n/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ \"./src/js/components/endpoints.js\");\n/* harmony import */ var _add_image_to_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-image-to-gallery */ \"./src/js/components/add-image-to-gallery.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./src/js/components/user.js\");\n\n\n\n\n\nfunction uploadImage() {\n  if (_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loggedIn) {\n    var uploadImageToServer = function uploadImageToServer() {\n      var image = setImage.files[0];\n      var formData = new FormData();\n      formData.append('newImage', image);\n      var addNewImage = new _Request__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('POST', _endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].default, 'add image', formData);\n      addNewImage.init(function (response) {\n        var newImage = {\n          \"src\": response.src,\n          \"data\": \"\",\n          \"user\": _user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].username\n        };\n        Object(_add_image_to_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([newImage], 'user gallery');\n        Object(_add_image_to_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([newImage], 'gallery');\n      });\n    };\n\n    var setImageTrigger = document.querySelector('.js_setImageTrigger');\n    var sendImageTrigger = document.querySelector('.js_sendImageTrigger');\n    var setImage = document.querySelector('.js_setImage'); // const sendImage = document.querySelector('.js_sendImage')\n\n    var sendImageName = document.querySelector('.js_sendImageName');\n    var form = {\n      validated: false,\n      imageSizeError: 'image is too big',\n      maxSize: 5242880,\n      // maxSize: 1042880,\n      validate: function validate(size) {\n        if (size <= form.maxSize) {\n          this.validated = true;\n          form.allowUpload();\n        } else {\n          this.validated = false;\n          form.showError();\n        }\n      },\n      showError: function showError() {\n        sendImageName.textContent = form.imageSizeError;\n        sendImageName.classList.remove('-active');\n        sendImageTrigger.classList.remove('-active');\n        sendImageTrigger.classList.add('-imageSizeError');\n        sendImageName.classList.add('-imageSizeError');\n      },\n      allowUpload: function allowUpload() {\n        sendImageName.textContent = setImage.files[0].name;\n        sendImageTrigger.classList.remove('-imageSizeError');\n        sendImageName.classList.remove('-imageSizeError');\n        sendImageName.classList.add('-active');\n        sendImageTrigger.classList.add('-active');\n      }\n    };\n    setImageTrigger.addEventListener('click', function (e) {\n      e.preventDefault();\n      setImage.click();\n    });\n    setImage.addEventListener('change', function (e) {\n      form.validate(setImage.files[0].size);\n    });\n    sendImageTrigger.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      if (form.validated) {\n        uploadImageToServer();\n      } else {\n        console.log('validation failed');\n      }\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uploadImage);\n\n//# sourceURL=webpack:///./src/js/components/upload-image.js?");

/***/ }),

/***/ "./src/js/components/user.js":
/*!***********************************!*\
  !*** ./src/js/components/user.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar user = {\n  loggedIn: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);\n\n//# sourceURL=webpack:///./src/js/components/user.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });