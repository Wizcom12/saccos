// For slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// For manual sliding of highlights carousel
const highlightCarousel = document.querySelector('.highlight-carousel');
let startX;
let scrollLeft;

highlightCarousel.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startX = e.pageX - highlightCarousel.offsetLeft;
    scrollLeft = highlightCarousel.scrollLeft;
});

highlightCarousel.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!startX) return;
    const x = e.pageX - highlightCarousel.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the multiplier for sensitivity
    highlightCarousel.scrollLeft = scrollLeft - walk;
});

highlightCarousel.addEventListener('mouseup', () => {
    startX = null;
});

highlightCarousel.addEventListener('mouseleave', () => {
    startX = null;
});

// For sliding the highlights carousel with touch events on mobile devices
highlightCarousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - highlightCarousel.offsetLeft;
    scrollLeft = highlightCarousel.scrollLeft;
});

highlightCarousel.addEventListener('touchmove', (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - highlightCarousel.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the multiplier for sensitivity
    highlightCarousel.scrollLeft = scrollLeft - walk;
});

highlightCarousel.addEventListener('touchend', () => {
    startX = null;
});

// Toggle button functionality for small screens
const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Remove toggle functionality for larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // Adjust the breakpoint as needed
        navbar.classList.remove('active');
    }
});
