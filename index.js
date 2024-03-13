
document.addEventListener("scroll", function() {
    var section = document.getElementById("white-section");
    var sectionTop = section.getBoundingClientRect().top;
    var sectionHeight = section.clientHeight;

    if (sectionTop <= window.innerHeight && sectionTop >= -sectionHeight) {
        var list = document.querySelector("#langages ul");
        list.style.opacity = "1";
        list.style.transform = "translateX(0)";
    }
});

let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

function prevSlide() {
  showSlide(--slideIndex);
}

function nextSlide() {
  showSlide(++slideIndex);
}

showSlide(slideIndex);


