let slideIndex2 = 1;
showSlides(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex2 += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex2 = n));
}

function showSlides(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active2";
}
