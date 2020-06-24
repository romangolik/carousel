let slidesBox = document.querySelector(".carousel-slides");
let slides = document.querySelectorAll(".slide");

let slideWidth = parseFloat(getComputedStyle(slides[0]).width);
let windowWidth = window.innerWidth;
let index = 1;
slides[index].style.transform = 'scale(1)';
slides[index+2].style.transform = 'scale(1)';
slides[index + 1].style.transform = 'scale(1.5)';
slides[index + 1].style.zIndex = '1';

window.addEventListener('resize',function(){
    slidesBox.style.transition = "none";
    windowWidth = window.innerWidth;
    slideWidth = parseFloat(getComputedStyle(slides[0]).width);
    slidesBox.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
});

function moveRight() {
    slidesBox.style.transition = "transform .5s ease";
    for (let i = 0; i < 3; i++) {
        if (slides[i].style.transition === 'none 0s ease 0s') {
            slides[i].style.transition = 'transform .5s ease';
        }
    }
    for (let i = slides.length - 3; i < slides.length; i++) {
        if (slides[i].style.transition === 'none 0s ease 0s') {
            slides[i].style.transition = 'transform .5s ease';
        }
    }
    index >= slides.length - 4 ? false : slides[index + 4].style.transform = 'scale(0.5)';
    index >= slides.length - 4 ? false : slides[index + 4].style.zIndex = '-1';
    index >= slides.length - 3 ? false : slides[index].style.transform = 'scale(0.5)';
    index >= slides.length - 3 ? false : slides[index + 3].style.transform = 'scale(1)';
    slides[index + 1].style.transform = 'scale(1)';
    slides[index + 1].style.zIndex = '-1';
    index >= slides.length - 3 ? false : index++;
    slides[index + 1].style.transform = 'scale(1.5)';
    slides[index + 1].style.zIndex = '1';
    slidesBox.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
}

function handleRight() {
    slides[slides.length - 3].addEventListener("transitionend", function () {
        if (index == slides.length - 3) {
            slidesBox.style.transition = "none";
            index = 0;
            slides[index + 2].style.transform = 'scale(1)';
            slides[index].style.transform = 'scale(1)';
            slides[index + 1].style.transform = 'scale(1.5)';
            slides[index + 1].style.zIndex = '1';
            slidesBox.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
            for (let i = 0; i < 3; i++) {
                slides[i].style.transition = 'none';
            }
        }
    })
    if (index >= slides.length - 3) {
        slidesBox.style.transition = "none";
        index = 0;
        slidesBox.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
    }
}

function handle() {
    slides[1].addEventListener("transitionend", function () {
        if (index == 0) {
            slidesBox.style.transition = "none";
            index = slides.length - 3;
            slides[index + 2].style.transform = 'scale(1)';
            slides[index].style.transform = 'scale(1)';
            slides[index + 1].style.transform = 'scale(1.5)';
            slides[index + 1].style.zIndex = '1';
            slidesBox.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
            for (let i = slides.length - 3; i < slides.length; i++) {
                slides[i].style.transition = 'none';
            }
        }
    })
    if (index == 0) {
        slidesBox.style.transition = "none";
        index = slides.length - 3;
        slidesBox.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
    }
}

function moveLeft() {
    slidesBox.style.transition = "transform .5s ease";
    for (let i = 0; i < 3; i++) {
        if (slides[i].style.transition === 'none 0s ease 0s') {
            slides[i].style.transition = 'transform .5s ease';
        }
    }
    for (let i = slides.length - 3; i < slides.length; i++) {
        if (slides[i].style.transition === 'none 0s ease 0s') {
            slides[i].style.transition = 'transform .5s ease';
        }
    }
    index <= 0 ? false : slides[index - 1].style.transform = 'scale(1)';
    index <= 0 ? false : slides[index + 2].style.transform = 'scale(0.5)';
    index <= 1 ? false : slides[index - 2].style.transform = 'scale(0.5)';
    index <= 1 ? false : slides[index - 2].style.zIndex = '-1';
    slides[index + 1].style.transform = 'scale(1)';
    slides[index + 1].style.zIndex = '-1';
    slides[index + 2].style.zIndex = '-2';
    index <= 0 ? false : index--;
    slides[index + 1].style.transform = 'scale(1.5)';
    slides[index + 1].style.zIndex = '1';
    slidesBox.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
}