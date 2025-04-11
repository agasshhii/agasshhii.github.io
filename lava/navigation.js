document.addEventListener('DOMContentLoaded', () => {
    setupKeyboardNavigation();
});

function setupKeyboardNavigation() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link'); 
    let currentIndex = 0; 

    updateFocus(currentIndex, navLinks);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % navLinks.length; 
            updateFocus(currentIndex, navLinks);
            event.preventDefault(); 
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length; 
            updateFocus(currentIndex, navLinks);
            event.preventDefault(); 
        }
    });
}

function updateFocus(index, links) {
    links.forEach((link, i) => {
        if (i === index) {
            link.classList.add('active'); 
            link.focus(); 
        } else {
            link.classList.remove('active'); 
        }
    });
}
