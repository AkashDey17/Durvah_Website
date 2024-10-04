let slideIndex3 = 1;
showSlides(slideIndex3);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex3 += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex3 = n));
}

function showSlides(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots = document.getElementsByClassName("dot3");
  if (n > slides3.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides3.length;
  }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active3", "");
  }
  slides3[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active3";
}
