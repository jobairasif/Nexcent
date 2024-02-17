$(document).ready(function () {
  $(".hamburger-menu-open-btn").on("click", function () {
    $(".hamburger-menu-component").addClass("active");
  });

  $(".hamburger-menu-close-btn").on("click", function () {
    $(".hamburger-menu-component").removeClass("active");
  });
});
