$(document).ready(function () {
  $("body").addClass("intro");
});

$(document).ready(function () {
  $(".single_ingre_1").hover(function () {
    // $(".main_img1").toggleClass("hide-img");
  });
  $(".single_ingre_2").hover(function () {
    $(".main_img2").toggleClass("hide-img");
    $(".main_img1").toggleClass("hide-img");
  });
  $(".single_ingre_3").hover(function () {
    $(".main_img3").toggleClass("hide-img");
    $(".main_img1").toggleClass("hide-img");
  });
});

$(document).ready(function () {
  $(".btn_ingredients").click(function () {
    $(".ingredients_content").toggleClass("hide-div");
    $(".ingredients_images").toggleClass("hide-div");
  });
});

$(document).ready(function () {
  $(".your-class").slick({
    dots: false,
    autoplaySpeed: 2000,
    autoplay: true,
  });
});
