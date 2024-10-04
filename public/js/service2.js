let slideIndex1 = 1;
showSlides(slideIndex1);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex1 += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex1 = n));
}

function showSlides(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides1[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active1";
}
