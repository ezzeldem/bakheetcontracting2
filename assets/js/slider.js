$(document).ready(function () {
  let interleaveOffset = 0.5;
  new Swiper(".intro-slider", {
    loop: true,
    speed: 2000,
    // autoplay: {
    //   delay: 4000,
    // },
    loopAdditionalSlides: 10,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        function numberAppend(d) {
          return d < 10 ? "0" + d.toString() : d.toString();
        }
        return (
          '<span class="swiper-pagination-current">' +
          numberAppend(current) +
          '</span><span class="swiper-pagination-line"></span> <span class="swiper-pagination-total">' +
          numberAppend(total) +
          "</span>"
        );
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".projects-slider", {
    grabCursor: true,
    slidesPerView: 2,
    loop: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  });
});
