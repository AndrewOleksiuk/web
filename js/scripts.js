$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflow':'visible'});
})

function slowScroll(id) {
    $('html, body').animate( {
        scrollTop: $(id).offset().top
    }, 500);
}

$(document).on("scroll", function () {
    if($(window).scrollTop() === 0)
      $("header").removeClass("fixed");
    else
      $("header").attr("class", "fixed");
  });

  var isScrolling = false;
  window.addEventListener("scroll", throttleScroll, false);

  function throttleScroll(e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }

  document.addEventListener("DOMContentLoaded", scrolling, false);
  var firstBox = document.querySelector("#main");
  var secondBox = document.querySelector("#team");
  var thirdBox = document.querySelector("#footer");

  function scrolling(e) {

    if (isPartiallyVisible(firstBox)) {
      firstBox.classList.add("active");
    } else {
      firstBox.classList.remove("active");
    }
    if (isFullyVisible(secondBox)) {
      secondBox.classList.add("active");
    } else {
      secondBox.classList.remove("active");
    }
    if (isPartiallyVisible(thirdBox)) {
      thirdBox.classList.add("active");
    } else {
      thirdBox.classList.remove("active");
    }
  }

  function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
  }

  function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
  }