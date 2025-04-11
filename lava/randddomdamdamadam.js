document.addEventListener('DOMContentLoaded', () => {
    setupRandomFactDisplay();
});

function setupRandomFactDisplay() {
    const showFactButton = document.getElementById('show-fact');
    const randomFactDisplay = document.getElementById('random-fact');
    const facts = [
        "Haruki Murakami ran a jazz bar in Tokyo before becoming a writer.",
        "Murakami has completed over 30 marathons, including an ultra-marathon of 100 kilometers.",
        "He wrote his first novel, 'Hear the Wind Sing,' while managing his jazz club.",
        "Murakami's works have been translated into over 50 languages.",
        "His favorite author is Franz Kafka, who has influenced much of his work."
    ];

    showFactButton.addEventListener('click', () => {
        displayRandomFact(facts, randomFactDisplay); 
    });
}

function displayRandomFact(facts, displayElement) {
    const randomIndex = Math.floor(Math.random() * facts.length); 
    displayElement.textContent = facts[randomIndex]; 
}
