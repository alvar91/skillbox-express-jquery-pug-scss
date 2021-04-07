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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/dropdown-nav/dropdown-nav.js":
/*!************************************************!*\
  !*** ./assets/js/dropdown-nav/dropdown-nav.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var menuList = $(".header-menu__list");
  $(menuList).click(function () {
    if (menuList.css("height") != "0px") {
      menuList.removeClass("show-mobile-menu");
    }
  });
  $("#burger-menu").click(function () {
    menuList.addClass("show-mobile-menu");
  });
  $(window).resize(function () {
    menuList.removeClass("show-mobile-menu");
  });
});

/***/ }),

/***/ "./assets/js/fly-tags/fly-tags.js":
/*!****************************************!*\
  !*** ./assets/js/fly-tags/fly-tags.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $(".decorative__brace").addClass("about-me__decorative--brace");
  $(".decorative__hash").addClass("about-me__decorative--hash");
  $(".decorative__tag-1").addClass("about-me__decorative--tag-1");
  $(".decorative__tag-2").addClass("about-me__decorative--tag-2");
  $(".decorative__div-1").addClass("about-me__decorative--div-1");
  $(".decorative__div-2").addClass("about-me__decorative--div-2");
});

/***/ }),

/***/ "./assets/js/input-mask/input-mask.js":
/*!********************************************!*\
  !*** ./assets/js/input-mask/input-mask.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $("input[name=phone]").usPhoneFormat({
    format: "(xxx) xxx-xxxx"
  });
});

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smooth_scroll_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth-scroll/smooth-scroll */ "./assets/js/smooth-scroll/smooth-scroll.js");
/* harmony import */ var _smooth_scroll_smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smooth_scroll_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dropdown_nav_dropdown_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-nav/dropdown-nav */ "./assets/js/dropdown-nav/dropdown-nav.js");
/* harmony import */ var _dropdown_nav_dropdown_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_nav_dropdown_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fly_tags_fly_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fly-tags/fly-tags */ "./assets/js/fly-tags/fly-tags.js");
/* harmony import */ var _fly_tags_fly_tags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fly_tags_fly_tags__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slick_slider_slick_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slick-slider/slick-slider */ "./assets/js/slick-slider/slick-slider.js");
/* harmony import */ var _slick_slider_slick_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slick_slider_slick_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popup_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup/popup */ "./assets/js/popup/popup.js");
/* harmony import */ var _popup_popup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_popup_popup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _popup_popup_call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup/popup-call */ "./assets/js/popup/popup-call.js");
/* harmony import */ var _popup_popup_call__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_popup_popup_call__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _popup_popup_thanks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup/popup-thanks */ "./assets/js/popup/popup-thanks.js");
/* harmony import */ var _popup_popup_thanks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_popup_popup_thanks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _input_mask_input_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-mask/input-mask */ "./assets/js/input-mask/input-mask.js");
/* harmony import */ var _input_mask_input_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_input_mask_input_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _send_send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send/send */ "./assets/js/send/send.js");
/* harmony import */ var _send_send__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_send_send__WEBPACK_IMPORTED_MODULE_8__);










/***/ }),

/***/ "./assets/js/popup/popup-call.js":
/*!***************************************!*\
  !*** ./assets/js/popup/popup-call.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var jsForm = $(".js-form-call");
  $(".js-popup-call").click(function () {
    document.body.style.overflowY = "hidden";
    jsForm.fadeIn(300);
  });
  $(".js-form-close-call").click(function () {
    document.body.style.overflowY = "auto";
    jsForm.fadeOut(300);
  });
  jsForm.click(function (event) {
    if (!event.target.closest(".js-content-call")) {
      document.body.style.overflowY = "auto";
      jsForm.fadeOut(300);
    }
  });
});

/***/ }),

/***/ "./assets/js/popup/popup-thanks.js":
/*!*****************************************!*\
  !*** ./assets/js/popup/popup-thanks.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var thanksModal = $("#thanks");
  $(".js-thanks-close").click(function () {
    thanksModal.fadeOut(300);
  });
  thanksModal.click(function (event) {
    if (!event.target.closest(".js-content-thanks")) {
      thanksModal.fadeOut(300);
    }
  });
});

/***/ }),

/***/ "./assets/js/popup/popup.js":
/*!**********************************!*\
  !*** ./assets/js/popup/popup.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var jsForm = $(".js-form");
  $(".js-popup").click(function () {
    document.body.style.overflowY = "hidden";
    jsForm.fadeIn(300);
  });
  $(".js-form-close").click(function () {
    document.body.style.overflowY = "auto";
    jsForm.fadeOut(300);
  });
  jsForm.click(function (event) {
    if (!event.target.closest(".js-content")) {
      document.body.style.overflowY = "auto";
      jsForm.fadeOut(300);
    }
  });
});

/***/ }),

/***/ "./assets/js/send/send.js":
/*!********************************!*\
  !*** ./assets/js/send/send.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $("form").each(function () {
    $(this).submit(function (e) {
      e.preventDefault();
    }).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        },
        checkbox: {
          required: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите минимум {0} символов")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        },
        checkbox: {
          required: "Пожалуйста, дайте согласие"
        }
      },
      submitHandler: function submitHandler(form) {
        $.ajax({
          type: "POST",
          // url: "http://localhost:4000/order",
          url: "http://localhost:4000/order",
          data: $(form).serialize()
        }).done(function () {
          $("#thanks").fadeIn(300);
          $("form").trigger("reset");
        }).fail(function (jqXHR, textStatus) {
          alert("Request failed: " + textStatus);
        });
        return false;
      }
    });
  });
});

/***/ }),

/***/ "./assets/js/slick-slider/slick-slider.js":
/*!************************************************!*\
  !*** ./assets/js/slick-slider/slick-slider.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(".slider__list").slick({
  infinite: true,
  arrows: true,
  prevArrow: $(".slider__nav--left"),
  nextArrow: $(".slider__nav--right"),
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1370,
    settings: {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: "nav-circle__list",
      appendDots: $(".nav-circle")
    }
  }, {
    breakpoint: 1024,
    settings: {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: "nav-circle__list",
      appendDots: $(".nav-circle")
    }
  }, {
    breakpoint: 600,
    settings: {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      arrows: false,
      dots: true,
      dotsClass: "nav-circle__list",
      appendDots: $(".nav-circle")
    }
  }]
});

/***/ }),

/***/ "./assets/js/smooth-scroll/smooth-scroll.js":
/*!**************************************************!*\
  !*** ./assets/js/smooth-scroll/smooth-scroll.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $("html, body").stop().animate({
      scrollTop: $target.offset().top
    }, 900, "swing", function () {// window.location.hash = target;
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map