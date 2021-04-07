$(document).ready(function () {
  $("form").each(function () {
    $(this)
      .submit(function (e) {
        e.preventDefault();
      })
      .validate({
        rules: {
          name: {
            required: true,
            minlength: 2,
          },
          phone: "required",
          email: {
            required: true,
            email: true,
          },
          checkbox: {
            required: true,
          },
        },
        messages: {
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите минимум {0} символов"),
          },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адрес почты",
          },
          checkbox: {
            required: "Пожалуйста, дайте согласие",
          },
        },
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            // url: "http://localhost:4000/order",
            url: "https://calm-earth-01166.herokuapp.com/order",
            data: $(form).serialize(),
          })
            .done(function () {
              $("#thanks").fadeIn(300);
              $("form").trigger("reset");
            })
            .fail(function (jqXHR, textStatus) {
              alert("Request failed: " + textStatus);
            });
          return false;
        },
      });
  });
});
