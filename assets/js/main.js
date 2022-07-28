$(document).ready(function() {
    $("#hm__menu__btn").click(function(event) {
        event.preventDefault();
        $('.hm__nav').toggleClass('hm__nav__triggered');
        $('.fa-bars').toggleClass('fa-times');
        $('.hm__menu__btn').toggleClass('hm__menu__btn__trig');
        // $('.menu_wrd').toggleClass('menu_wrd_trigg');

    })

    // let slideIndex = 0;
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


// function showSlidesB(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");

//     console.log(slides.length, n)

//     if (n >= slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     console.log(slideIndex)
//     showSlides()

// }


// function showSlidesB(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");

//     // console.log(slides.length, n)

//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex++;

//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     slides[slideIndex - 1].style.display = "grid";
//     setTimeout(showSlides(slideIndex), 5000);

// }