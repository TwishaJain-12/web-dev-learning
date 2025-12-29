// Add animation effect on input focus
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.8)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
});

// Optional: show greeting on load
window.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Zomato Clone!");
});
