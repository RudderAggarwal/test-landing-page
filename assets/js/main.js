document.addEventListener("DOMContentLoaded", function(){

    const slideParagraphs = document.querySelectorAll(".slide-paragraph");
    
    slideParagraphs.forEach((slideParagraphs) => {
        const textLimit = 100;
        const fullText = slideParagraphs.innerText;
        const aTag = document.querySelector(".paragraph-anchor-tag");

        if(slideParagraphs.innerText.length > textLimit){
            slideParagraphs.innerHTML = fullText.substring(0, textLimit) + "... " + aTag.innerHTML;
        }
    });

    const videoParagraphs = document.querySelectorAll(".video-paragraph");
    videoParagraphs.forEach((videoParagraphs) => {
        const textLimit = 100;
        const fullText = videoParagraphs.innerText;
        const aTag = document.querySelector(".video-anchor-tag");

        if(videoParagraphs.innerText.length > textLimit){
            videoParagraphs.innerHTML = fullText.substring(0, textLimit) + "... " + aTag.innerHTML;
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const firstSlide = document.querySelector(".first-slide");
    const firstSlideBtn = document.querySelector(".first-slide-btn");
    const firstIndicatorBar = document.querySelector(".first-indicator-bar");

    setTimeout(() => {
        firstSlide.classList.add("active");
        firstSlideBtn.classList.add("active");
        firstIndicatorBar.classList.add("active");
    }, 300);
});

const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const numberOfSlides = slides.length;
const slideBtns = document.querySelectorAll(".slide-btn");
const slideIndicatorBars = document.querySelectorAll(".indicator-bar");
var slideNumber = 0;

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideBtns.forEach((slideBtns) => {
        slideBtns.classList.remove("active");
    });
    slideIndicatorBars.forEach((slideIndicatorBars) => {
        slideIndicatorBars.classList.remove("active");
    });
    slideNumber++;
    if(slideNumber > numberOfSlides - 1){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideBtns[slideNumber].classList.add("active");
    slideIndicatorBars[slideNumber].classList.add("active");

    clearInterval(playSlider);
    repeater();
});

prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideBtns.forEach((slideBtns) => {
        slideBtns.classList.remove("active");
    });
    slideIndicatorBars.forEach((slideIndicatorBars) => {
        slideIndicatorBars.classList.remove("active");
    });
    if(slideNumber == 0){
        slideNumber = numberOfSlides-1;
    }
    else{
        slideNumber--;
    }
    slides[slideNumber].classList.add("active");
    slideBtns[slideNumber].classList.add("active");
    slideIndicatorBars[slideNumber].classList.add("active");

    clearInterval(playSlider);
    repeater();
});

var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideBtns.forEach((slideBtns) => {
            slideBtns.classList.remove("active");
        });
        slideIndicatorBars.forEach((slideIndicatorBars) => {
            slideIndicatorBars.classList.remove("active");
        });
        slideNumber++;
        if(slideNumber > numberOfSlides - 1){
            slideNumber = 0;
        }
        slides[slideNumber].classList.add("active");
        slideBtns[slideNumber].classList.add("active");
        slideIndicatorBars[slideNumber].classList.add("active");
    }, 20600);
}

repeater();

var slideButtonNav = function(slideBtnClick){
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideBtns.forEach((slideBtns) => {
        slideBtns.classList.remove("active");
    });
    slideIndicatorBars.forEach((slideIndicatorBars) => {
        slideIndicatorBars.classList.remove("active");
    });
    
    slides[slideBtnClick].classList.add("active");
    slideBtns[slideBtnClick].classList.add("active");
    slideIndicatorBars[slideBtnClick].classList.add("active");
}

slides.forEach((slide, i) => {
    let watchVideoBtn = slide.querySelector(".watch-video-btn");
    let slideVideoModal = slide. querySelector(".slide-video-modal");
    let videoModalContent = slide.querySelector(".video-modal-content");
    let videoCloseBtn = slide.querySelector(".video-close-btn");
    let animalVideo = slide.querySelector(".animal-video");

    watchVideoBtn.addEventListener("click", () => {
        slideVideoModal.classList.add("active");
        videoModalContent.classList.add("active");
        animalVideo.play();
    })
    slideVideoModal.addEventListener("mouseover", () => {
        clearInterval(playSlider);
        slideIndicatorBars[i].classList.remove("active");
    });
    videoCloseBtn.addEventListener("click", () => {
        slideVideoModal.classList.remove("active");
        videoModalContent.classList.remove("active");
        animalVideo.pause();
        slideIndicatorBars[i].classList.add("active");
        repeater();
    });
});