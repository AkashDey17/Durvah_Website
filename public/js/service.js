//section 1 video container starts

document.querySelectorAll(".section1-video-container video").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".section1-popup-video").style.display = "block";
    document.querySelector(".section1-popup-video video").src =
      vid.getAttribute("src");
  };
});

document.querySelector(".section1-popup-video span").onclick = () => {
  document.querySelector(".section1-popup-video").style.display = "none";
};

//section 1 video container ends

//Section 2 logic
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// section 3 logic ends
