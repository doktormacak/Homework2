const imgList = document.querySelector('.sliderPath'); //track
const slides = Array.from(imgList.children);

const nextBtn = document.querySelector('.sliderBtn--right');
const prevBtn = document.querySelector('.sliderBtn--left');


const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (imgList, currentSlide, targetSlide) => {
    imgList.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');

}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('currentSlide');
    currentDot.classList.add('currentSlide');
}

prevBtn.addEventListener('click', e=> {
    const currentSlide = imgList.querySelector('.currentSlide');
    const prevSlide = currentSlide.previousElementSibling;
    
    moveToSlide(imgList, currentSlide, prevSlide);
  


})

nextBtn.addEventListener('click', e => {
    const currentSlide = imgList.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    
    
    moveToSlide(imgList, currentSlide, nextSlide);
    
})

