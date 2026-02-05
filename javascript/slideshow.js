// Slideshow logic
let currentSlide = 1;
showSlides(currentSlide);

function newSlide(n)
{
    showSlides(currentSlide += n);
}

function showSlides(n)
{
    let slides = document.getElementsByClassName("slide");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {currentSlide = 1}
    if (n < 1) {currentSlide = slides.length}
    for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[currentSlide-1].style.display = "block";
}
