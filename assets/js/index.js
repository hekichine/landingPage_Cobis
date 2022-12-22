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

  // paralax layer
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  // isotope
  var $grid = $(".t4s-isotope-grid").isotope({
    itemSelector: ".t4s-col-item",
    layoutMode: "fitRows",
  });
  // bind filter button click
  $(".t4s-filters-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $(".t4s-button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
});
