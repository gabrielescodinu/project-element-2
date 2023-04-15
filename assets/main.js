tailwind.config = {
  theme: {
    extend: {
      screens: {
        '4xl': '2559px',
      },
      colors: {
        template: {
          aqua: '#72F3ED',
          dark: '#050b11',
          brown: '#452B2F',
          orange: '#F6611D',
          white: '#E2E4E8',
        },
      },
    }
  }
}

// load header and footer
$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// counter
$(function ($, win) {
  $.fn.inViewport = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        var H = $(this).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
      }
      visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));
jQuery(function ($) {
  $(".count").inViewport(function (px) {
    if (px > 0 && !this.initNumAnim) {
      this.initNumAnim = true;
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    }
  });
});


// hamburger mobile menu animation
$('#hamburger').click(() => {
  $('#hamburger').toggleClass('not-active');
  $('#hamburger').toggleClass('is-active');
  $('#menu').toggleClass('swipe-right');
  $('html').toggleClass('block-scroll');
});


// loader
$(document).ready(function () {

  setTimeout(function () {
    $('#loader').addClass('swipe-left ');
    $('html').removeClass('block-scroll');
    setTimeout(() => {
      // initialize aos
      AOS.init();
    }, 500);
  }, 2000);

});


// scroll to top with progress bar
$(document).ready(function () {

  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });
  jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })


});



















