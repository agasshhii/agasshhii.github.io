document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    

    cards.forEach(card => {
        card.classList.add('visible');
    });


    window.addEventListener('scroll', () => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                card.classList.add('visible');
            }
        });
    });
});
