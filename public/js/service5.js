let slideIndex4 = 1;
showSlides(slideIndex4);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex4 += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex4 = n));
}

function showSlides(n) {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  let dots = document.getElementsByClassName("dot4");
  if (n > slides4.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = slides4.length;
  }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active4", "");
  }
  slides4[slideIndex4 - 1].style.display = "block";
  dots[slideIndex4 - 1].className += " active4";
}
