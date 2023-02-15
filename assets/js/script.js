$(document).ready(function () {
  $(document).click(function (e) {
    $(".child-box , .nav-section .search-box").hide();
    $(".nav-section .nav-box > ul > li a").removeClass("active");
  });

  $(" .nav-section ").click(function (e) {
    e.stopPropagation();
  });
  $(".nav-section .icon-box-container .icon-box.search-icon").click(function (
    e
  ) {
    e.preventDefault();
    $(".nav-section .search-box").show();
  });
  $(" .nav-section .nav-box > ul > li").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).children("a").addClass("active");
    $(this).children(".child-box").show();
    $(this).siblings("li").children(".child-box").hide();
    $(this).siblings("li").children("a").removeClass("active");
  });
});
