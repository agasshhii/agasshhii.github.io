document.addEventListener('DOMContentLoaded', () => {
    setupRatingStars();
    loadRatings();  
});

function setupRatingStars() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', handleStarClick);
    });
}

function handleStarClick() {
    const rating = parseInt(this.dataset.value); 
    const bookRating = this.parentNode; 
    const bookId = bookRating.dataset.book; 
    const messageElement = document.getElementById(`rating-message-${bookId}`); 
    const allStars = bookRating.querySelectorAll('.star');
    

    allStars.forEach(star => {
        star.style.color = 'gray'; 
        star.classList.remove('selected'); 
    });


    for (let i = 0; i < rating; i++) {
        allStars[i].style.color = 'gold'; 
        allStars[i].classList.add('selected'); 
    }

    const message = `You rated this book ${rating} star(s) ^^`;
    messageElement.textContent = message; 


    saveRating(bookId, rating);
}

function saveRating(bookId, rating) {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    ratings[bookId] = rating;  
    localStorage.setItem('ratings', JSON.stringify(ratings));
}

function loadRatings() {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    

    document.querySelectorAll('.card').forEach(card => {
        const bookId = card.querySelector('.rating').dataset.book;
        const savedRating = ratings[bookId];

        if (savedRating) {
            const allStars = card.querySelectorAll('.star');
            for (let i = 0; i < savedRating; i++) {
                allStars[i].style.color = 'gold';
                allStars[i].classList.add('selected');
            }

            const messageElement = document.getElementById(`rating-message-${bookId}`);
            messageElement.textContent = `You rated this book ${savedRating} star(s) ^^`;
        }
    });
}
