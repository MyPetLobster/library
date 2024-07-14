const myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


function displayBooks() {
    const booksContainer = document.querySelector('.books-container');
    booksContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.index = index;
        
        const title = document.createElement('h2');
        title.textContent = book.title;
        bookCard.appendChild(title);

        const author = document.createElement('p');
        author.textContent = book.author;
        bookCard.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = book.pages;
        bookCard.appendChild(pages);

        const read = document.createElement('button');
        read.textContent = book.read ? 'Read' : 'Not Read';
        read.addEventListener('click', () => {
            myLibrary[index].read = !myLibrary[index].read;
            displayBooks();
        });
        bookCard.appendChild(read);

        const remove = document.createElement('button');
        remove.textContent = 'Remove';
        remove.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
        bookCard.appendChild(remove);

        booksContainer.appendChild(bookCard);
    });
}