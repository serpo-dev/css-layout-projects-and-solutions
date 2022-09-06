const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        removeActiveSlide();
        slide.classList.add('active');
    });
};

function removeActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
};