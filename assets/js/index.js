$(document).ready(function () {
  // toggle menu nav
  $(".bee-mobile-menu_inner").click(function () {
    $(".bee-overlay").toggle();
    $(".bee-menu-nav_inner").toggleClass("active");
  });
  $(".bee-overlay").click(function () {
    $(".bee-menu-nav_inner").toggleClass("active");
    $(this).toggle();
  });
  $(".bee-btn-close_menu").click(function () {
    $(".bee-menu-nav_inner").toggleClass("active");
    $(".bee-overlay").toggle();
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
  var $grid = $(".bee-isotope-grid").isotope({
    itemSelector: ".bee-col-item",
    layoutMode: "fitRows",
  });
  // bind filter button click
  $(".bee-filters-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $(".bee-button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });

  // slide show product+page
  let btn_review = this.querySelectorAll(".bee-btn-review");
  let slide_review = this.querySelectorAll(".bee-slide-review");

  btn_review.forEach((btn, index) => {
    let slide = slide_review[index];
    btn.onclick = function () {
      document
        .querySelector(".bee-btn-review.is-active")
        .classList.remove("is-active");
      document
        .querySelector(".bee-slide-review.is-active")
        .classList.remove("is-active");
      this.classList.add("is-active");
      slide.classList.add("is-active");
    };
  });
  // video popup
  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
  // sort slider
  // let dataArr = [];
  // let getHeight = document.querySelectorAll("[data-slide]");
  // getHeight.forEach((item, index) => {
  //   dataArr.push(item.offsetHeight);
  // });
  // let newHeight = dataArr.sort(function (a, b) {
  //   return b - a;
  // });
  // let h = newHeight[0] + "px";
  // getHeight.forEach((item, index) => {
  //   item.style.height = h;
  //   console.log(h);
  // });
  let backtop = $(".bee-back-to-top");
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 300) {
      backtop.addClass("is-active");
    } else {
      backtop.removeClass("is-active");
    }
  });
  backtop.click(function () {
    $(window).scrollTop(0);
  });

  // header sticky

  // popup maginific
  $(document).on("click", ".link_demo_password", function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    $(".bee_popup_password").addClass("active");
    $(".bee_oveflow").addClass("visible_password");
    $(".btn_popup_password").attr("href", `${href}`);
    $(".btn-show-popup").removeClass("active");
    $(".link_demo_password").removeClass("link_demo_password");
  });

  $(".bee_oveflow").click(function (e) {
    e.preventDefault();
    $(".bee_popup_password").removeClass("active");
    $(".bee_oveflow").removeClass("visible_password");
    $(".btn-show-popup").addClass("active");
  });
  $(".btn-show-popup").click(function () {
    $(".bee_popup_password").addClass("active");
    $(".bee_oveflow").addClass("visible_password");
    $(".btn_popup_password").attr(
      "href",
      `https://demo-zonex.myshopify.com/?preview_theme_id=136130756856`
    );
    $(this).removeClass("active");
  });
  $(".btn_popup_password").click(function () {
    $(".bee_popup_password").removeClass("active");
    $(".bee_oveflow").removeClass("visible_password");
    $(".btn-show-popup").addClass("active");
  });
  $(".btn-minisize").click(function () {
    $(".bee_popup_password").removeClass("active");
    $(".bee_oveflow").removeClass("visible_password");
    $(".btn-show-popup").addClass("active");
  });
});
