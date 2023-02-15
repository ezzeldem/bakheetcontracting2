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
    // on: {
    //   slideChangeTransitionEnd: function () {
    //     let swiper = this,
    //       captions = swiper.el.querySelectorAll(".caption");
    //     // for (let i = 0; i < captions.length; ++i) {
    //     //   captions[i].classList.remove('show');
    //     // }
    //     //swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
    //   },
    //   progress: function (data) {
    //     let swiper = this;
    //     for (let i = 0; i < swiper.slides.length; i++) {
    //       let slideProgress = swiper.slides[i].progress,
    //         innerOffset = swiper.width * interleaveOffset,
    //         innerTranslate = slideProgress * innerOffset;
    //       swiper.slides[i].querySelector(".slide-bgimg").style.transform =
    //         "translateX(" + innerTranslate + "px)";
    //     }
    //   },
    //   touchStart: function () {
    //     let swiper = this;
    //     for (let i = 0; i < swiper.slides.length; i++) {
    //       swiper.slides[i].style.transition = "";
    //     }
    //   },
    //   setTransition: function (speed) {
    //     let swiper = this;
    //     for (let i = 0; i < swiper.slides.length; i++) {
    //       swiper.slides[i].style.transition = speed + "ms";
    //       swiper.slides[i].querySelector(".slide-bgimg").style.transition =
    //         speed + "ms";
    //     }
    //   },
    // },
  });
});
