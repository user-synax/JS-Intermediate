const slides = document.querySelectorAll(".slider .slides img");
let slideIndex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded", initSlider());

function initSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 3000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex -= 1;
    showSlide(slideIndex);
    clearInterval(intervalID);
}

function nextSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
}
