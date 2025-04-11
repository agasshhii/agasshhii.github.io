document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    loadThemePreference(); 
});

function setupThemeToggle() {
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', handleThemeToggle);

    if (document.body.classList.contains('light')) {
        themeToggleButton.textContent = 'Dead Inside';
    } else {
        themeToggleButton.textContent = 'Angel theme';
    }
}

function handleThemeToggle() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const cards = document.querySelectorAll('.card');
    const footer = document.querySelector('footer');
    const themeToggleButton = document.getElementById('theme-toggle');

    body.classList.toggle('light');
    navbar.classList.toggle('light');
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('navbar-light');

    cards.forEach(card => card.classList.toggle('light'));
    footer.classList.toggle('light');

    if (body.classList.contains('light')) {
        themeToggleButton.textContent = 'Dead Inside';
    } else {
        themeToggleButton.textContent = 'Angel theme';
    }

    saveThemePreference();
}

function saveThemePreference() {
    const isLightTheme = document.body.classList.contains('light');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        document.querySelector('.navbar').classList.add('light', 'navbar-light');
        document.querySelector('.navbar').classList.remove('navbar-dark');
        document.querySelectorAll('.card').forEach(card => card.classList.add('light'));
        document.querySelector('footer').classList.add('light');

        document.getElementById('theme-toggle').textContent = 'Dead Inside';
    } else {
        document.querySelector('.navbar').classList.add('navbar-dark');
        document.querySelector('.navbar').classList.remove('navbar-light');

        document.getElementById('theme-toggle').textContent = 'Angel theme';
    }
}
