$(document).ready(function () {
  const thanksModal = $("#thanks");
  $(".js-thanks-close").click(function () {
    thanksModal.fadeOut(300);
  });
  thanksModal.click(function (event) {
    if (!event.target.closest(".js-content-thanks")) {
      thanksModal.fadeOut(300);
    }
  });
});
