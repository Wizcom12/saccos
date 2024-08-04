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
