$(document).ready(function() {
    $("#hm__menu__btn").click(function(event) {
        event.preventDefault();
        $('.hm__nav').toggleClass('hm__nav__triggered');
        $('.fa-bars').toggleClass('fa-times');
        $('.hm__menu__btn').toggleClass('hm__menu__btn__trig');

    })

    $("#hm__wedo__lnk").click(function(event) {
        $('.hm__nav').removeClass('hm__nav__triggered');
        $('.fa-bars').toggleClass('fa-times');
        $('.hm__menu__btn__trig').toggleClass('hm__menu__btn');

    })
    $("#hm__aboutus__link").click(function(event) {
        $('.hm__nav').removeClass('hm__nav__triggered');
        $('.fa-bars').toggleClass('fa-times');
        $('.hm__menu__btn__trig').toggleClass('hm__menu__btn');

    })
    $("#hm__contactus__link").click(function(event) {
        $('.hm__nav').removeClass('hm__nav__triggered');
        $('.fa-bars').toggleClass('fa-times');
        $('.hm__menu__btn__trig').toggleClass('hm__menu__btn');

    })
    currentSlide();


});
let slideIndex = 0;

function plusSlides(n) {

    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (n >= slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slideIndex += n;
    console.log(slideIndex)
    slideIndex++;



    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "grid";
    // showSlides();

}

function currentSlide() {
    showSlides();
}

function showSlides() {
    // console.log(slideIndex)
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;



    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "grid";
    setTimeout(showSlides, 7000);

}