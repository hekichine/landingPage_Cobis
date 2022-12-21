$(document).ready(function () {
  // toggle menu nav
  $(".t4s-mobile-menu_inner").click(function () {
    $(".t4s-overlay").toggle();
    $(".t4s-menu-nav_inner").toggleClass("active");
  });
  $(".t4s-overlay").click(function () {
    $(".t4s-menu-nav_inner").toggleClass("active");
    $(this).toggle();
  });
  $(".t4s-btn-close_menu").click(function () {
    $(".t4s-menu-nav_inner").toggleClass("active");
    $(".t4s-overlay").toggle();
  });
});
