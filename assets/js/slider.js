/* TGBTG - slider js, based off reference: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp */

var slideIndex = 1;
showsSlides(slideIndex);

function plusSlides(n) {
    showsSlides(slideIndex += n);
}

function currentSlide(n) {
    showsSlides(slideIndex = n);
}

function showsSlides(n) {
   console.log("here inside function")
    var i;
    var slides = document.getElementsByClassName("quotesSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}
