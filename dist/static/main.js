"use strict";

!function (e) {
  var t = {};

  function o(n) {
    if (t[n]) return t[n].exports;
    var i = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
  }

  o.m = e, o.c = t, o.d = function (e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) o.d(n, i, function (t) {
      return e[t];
    }.bind(null, i));
    return n;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o(o.s = 0);
}([function (e, t, o) {
  "use strict";

  o.r(t);
  o(1), o(2), o(3), o(4), o(5), o(6), o(7), o(8), o(9);
}, function (e, t) {
  $(document).ready(function () {
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      var t = this.hash,
          o = $(t);
      $("html, body").stop().animate({
        scrollTop: o.offset().top
      }, 900, "swing", function () {});
    });
  });
}, function (e, t) {
  $(document).ready(function () {
    var e = $(".header-menu__list");
    $(e).click(function () {
      "0px" != e.css("height") && e.removeClass("show-mobile-menu");
    }), $("#burger-menu").click(function () {
      e.addClass("show-mobile-menu");
    }), $(window).resize(function () {
      e.removeClass("show-mobile-menu");
    });
  });
}, function (e, t) {
  $(document).ready(function () {
    $(".decorative__brace").addClass("about-me__decorative--brace"), $(".decorative__hash").addClass("about-me__decorative--hash"), $(".decorative__tag-1").addClass("about-me__decorative--tag-1"), $(".decorative__tag-2").addClass("about-me__decorative--tag-2"), $(".decorative__div-1").addClass("about-me__decorative--div-1"), $(".decorative__div-2").addClass("about-me__decorative--div-2");
  });
}, function (e, t) {
  $(".slider__list").slick({
    infinite: !0,
    arrows: !0,
    prevArrow: $(".slider__nav--left"),
    nextArrow: $(".slider__nav--right"),
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1370,
      settings: {
        infinite: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0,
        dotsClass: "nav-circle__list",
        appendDots: $(".nav-circle")
      }
    }, {
      breakpoint: 1024,
      settings: {
        infinite: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0,
        dotsClass: "nav-circle__list",
        appendDots: $(".nav-circle")
      }
    }, {
      breakpoint: 600,
      settings: {
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: !1,
        dots: !0,
        dotsClass: "nav-circle__list",
        appendDots: $(".nav-circle")
      }
    }]
  });
}, function (e, t) {
  $(document).ready(function () {
    var e = $(".js-form");
    $(".js-popup").click(function () {
      document.body.style.overflowY = "hidden", e.fadeIn(300);
    }), $(".js-form-close").click(function () {
      document.body.style.overflowY = "auto", e.fadeOut(300);
    }), e.click(function (t) {
      t.target.closest(".js-content") || (document.body.style.overflowY = "auto", e.fadeOut(300));
    });
  });
}, function (e, t) {
  $(document).ready(function () {
    var e = $(".js-form-call");
    $(".js-popup-call").click(function () {
      document.body.style.overflowY = "hidden", e.fadeIn(300);
    }), $(".js-form-close-call").click(function () {
      document.body.style.overflowY = "auto", e.fadeOut(300);
    }), e.click(function (t) {
      t.target.closest(".js-content-call") || (document.body.style.overflowY = "auto", e.fadeOut(300));
    });
  });
}, function (e, t) {
  $(document).ready(function () {
    var e = $("#thanks");
    $(".js-thanks-close").click(function () {
      e.fadeOut(300);
    }), e.click(function (t) {
      t.target.closest(".js-content-thanks") || e.fadeOut(300);
    });
  });
}, function (e, t) {
  $(document).ready(function () {
    $("input[name=phone]").usPhoneFormat({
      format: "(xxx) xxx-xxxx"
    });
  });
}, function (e, t) {
  $(document).ready(function () {
    $("form").each(function () {
      $(this).submit(function (e) {
        e.preventDefault();
      }).validate({
        rules: {
          name: {
            required: !0,
            minlength: 2
          },
          phone: "required",
          email: {
            required: !0,
            email: !0
          },
          checkbox: {
            required: !0
          }
        },
        messages: {
          name: {
            required: "????????????????????, ?????????????? ???????? ??????",
            minlength: jQuery.validator.format("?????????????? ?????????????? {0} ????????????????")
          },
          phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
          email: {
            required: "????????????????????, ?????????????? ???????? ??????????",
            email: "?????????????????????? ???????????? ?????????? ??????????"
          },
          checkbox: {
            required: "????????????????????, ?????????? ????????????????"
          }
        },
        submitHandler: function (e) {
          return $.ajax({
            type: "POST",
            url: "https://calm-earth-01166.herokuapp.com/order",
            data: $(e).serialize()
          }).done(function () {
            $("#thanks").fadeIn(300), $("form").trigger("reset");
          }).fail(function (e, t) {
            alert("Request failed: " + t);
          }), !1;
        }
      });
    });
  });
}]);