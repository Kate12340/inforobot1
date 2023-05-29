var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(window).on('scroll', function () {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 800;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    } else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

$('#scrollUpArrow').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 700);
});