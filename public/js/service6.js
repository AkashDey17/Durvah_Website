let slideIndex5 = 1;
showSlides(slideIndex5);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex5 += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex5 = n));
}

function showSlides(n) {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  let dots = document.getElementsByClassName("dot5");
  if (n > slides5.length) {
    slideIndex5 = 1;
  }
  if (n < 1) {
    slideIndex5 = slides5.length;
  }
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active5", "");
  }
  slides5[slideIndex5 - 1].style.display = "block";
  dots[slideIndex5 - 1].className += " active5";
}
