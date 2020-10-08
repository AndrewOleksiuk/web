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
    if (isPartiallyVisible(secondBox)) {
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

  var slide_index = 1;  
  displaySlides(slide_index);  

  function nextSlide(n) {  
      displaySlides(slide_index += n);  
  }  

  function currentSlide(n) {  
      displaySlides(slide_index = n);  
  }  

  function displaySlides(n) {  
      var i;  
      var slides = document.getElementsByClassName("showSlide");  
      if (n > slides.length) { slide_index = 1 }  
      if (n < 1) { slide_index = slides.length }  
      for (i = 0; i < slides.length; i++) {  
          slides[i].style.display = "none";  
      }  
      slides[slide_index - 1].style.display = "block";  
      setTimeout(nextSlide, 5000, 1);
  }  