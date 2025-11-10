// Themes Slideshow functionality
let currentThemeSlideIndex = 0;
const themeSlides = document.querySelectorAll('.themes-slide');
const themeDots = document.querySelectorAll('.theme-dot');

function showThemeSlide(index) {
    // Wrap around if index is out of bounds
    if (index >= themeSlides.length) {
        currentThemeSlideIndex = 0;
    } else if (index < 0) {
        currentThemeSlideIndex = themeSlides.length - 1;
    } else {
        currentThemeSlideIndex = index;
    }

    // Hide all slides and remove active class from dots
    themeSlides.forEach(slide => slide.classList.remove('active'));
    themeDots.forEach(dot => dot.classList.remove('active'));

    // Show current slide and activate corresponding dot
    themeSlides[currentThemeSlideIndex].classList.add('active');
    themeDots[currentThemeSlideIndex].classList.add('active');
}

function changeThemeSlide(direction) {
    showThemeSlide(currentThemeSlideIndex + direction);
}

function currentThemeSlide(index) {
    showThemeSlide(index);
}

// No auto-advance for themes slideshow - manual navigation only
