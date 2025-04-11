const books = [
"Norwegian Forest",
"Kafka on the Beach",
"1Q84",
"Chronicles of a Clockwork Bird"
];

function transformBooks(bookArray, transformFunction) {
    return bookArray.map(transformFunction);
}

function makeUpperCase(book) {
    return book.toUpperCase(); 
}
function displayBooks() {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = ""; 

    const transformedBooks = transformBooks(books, makeUpperCase); 

    transformedBooks.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = book;
        bookListElement.appendChild(listItem);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
});
