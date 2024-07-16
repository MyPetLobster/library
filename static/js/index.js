// Sample Library
const myLibrary = [
    {
        title: 'Setting Free the Bears',
        author: 'John Irving',
        pages: 352,
        read: true,
        image: 'static/images/book_covers/setting_free_the_bears.jpeg'
    },
    {
        title: 'Elizabeth Costello',
        author: 'J.M. Coetzee',
        pages: 231,
        read: true,
        image: 'static/images/book_covers/elizabeth_costello.jpeg'
    },
    {
        title: 'The Terror',
        author: 'Dan Simmons',
        pages: 769,
        read: true,
        image: 'static/images/book_covers/the_terror.jpeg'
    },
    {
        title: 'The Brief Wondrous Life of Oscar Wao',
        author: 'Junot Diaz',
        pages: 335,
        read: false,
        image: 'static/images/book_covers/the_brief_wondrous_life_of_oscar_wao.jpeg'
    },
    {
        title: 'The Golem and the Jinni',
        author: 'Helene Wecker',
        pages: 486,
        read: true,
        image: 'static/images/book_covers/the_golem_and_the_jinni.jpeg'
    }
];


// Book constructor function & prototype method
function Book(title, author, pages, read, image) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
}


// Prototype method to toggle read status
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}


// Convert sample objects to instances of Book
myLibrary.forEach((book, index) => {
    myLibrary[index] = new Book(book.title, book.author, book.pages, book.read, book.image);
});


// Add book to library function
function addBookToLibrary(book) {
    myLibrary.push(book);
}


// Display books in library function
function displayBooks() {
    const booksContainer = document.querySelector('.books-container');
    booksContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookBox = document.createElement('div');
        bookBox.classList.add('book-box');
        bookBox.dataset.index = index; // Add index to parent element "book-box"
        const coverImageBox = document.createElement('div');
        coverImageBox.classList.add('cover-image-box');
        const coverImage = document.createElement('img');
        coverImage.src = book.image;
        coverImage.alt = book.title;

        coverImageBox.appendChild(coverImage);
        bookBox.appendChild(coverImageBox);

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        const title = document.createElement('h2');
        title.textContent = book.title;
        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = `By: ${book.author}`;
        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;
        const read = document.createElement('p');
        read.textContent = book.read ? 'Status: Read' : 'Status: Not Read';

        bookInfo.appendChild(title);
        bookInfo.appendChild(author);
        bookInfo.appendChild(pages);
        bookInfo.appendChild(read);

        // Show/hide book-info on hover
        bookBox.addEventListener('mouseenter', () => {
            bookInfo.style.transform = 'translateY(0)';
        });
        bookBox.addEventListener('mouseleave', () => {
            bookInfo.style.transform = 'translateY(-100%)';
        });
        bookBox.appendChild(bookInfo);

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.classList.add('toggle-read-btn');
        toggleReadBtn.textContent = 'Toggle Read/Unread';
        toggleReadBtn.addEventListener('click', () => {
            myLibrary[index].toggleRead();
            displayBooks();
        });

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        bookInfo.appendChild(toggleReadBtn);
        bookInfo.appendChild(removeBtn);

        booksContainer.appendChild(bookBox);
    });
}


// ADD BOOK FORM
// Expand/collapse add book form
const expandBookFormButton = document.querySelector('.add-book-button');
const addBookForm = document.querySelector('.add-book-form');
const headerTitleDivH1 = document.querySelector('.header-title-div>h1');
const headerTitleDivImg = document.querySelector('.header-title-div>img');
expandBookFormButton.addEventListener('click', () => {
    addBookForm.style.display = 'flex';
    expandBookFormButton.style.display = 'none';
    headerTitleDivH1.style.fontSize = '0.8em';
    headerTitleDivImg.style.width = '40px';

    addBookForm.querySelector('.cancel-button').addEventListener('click', () => {
        addBookForm.style.display = 'none';
        expandBookFormButton.style.display = 'block';
        headerTitleDivH1.style.fontSize = '2em';
        headerTitleDivImg.style.width = '120px';
    });
});

// Add book to library
const addBookButton = document.querySelector('.add-book-form button[type="submit"]');
addBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = addBookForm.querySelector('input[name="title"]').value;
    const author = addBookForm.querySelector('input[name="author"]').value;
    const pages = addBookForm.querySelector('input[name="pages"]').value;
    const read = addBookForm.querySelector('input[name="read"]').checked;
    const fileInput = addBookForm.querySelector('input[name="cover"]');
    const file = fileInput.files[0];

    if (!file) {
        // Use default image if no file is selected
        const image = 'static/images/book_covers/default.jpeg';
        const newBook = new Book(title, author, pages, read, image);
        addBookToLibrary(newBook);
        displayBooks();
        addBookForm.reset();
        addBookForm.style.display = 'none';
        expandBookFormButton.style.display = 'block';
        return;
    }

    // Read file as data URL to bypass "fakepath" for demo purposes
    const reader = new FileReader();
    reader.onload = function(event) {
        const image = event.target.result;
        const newBook = new Book(title, author, pages, read, image);
        addBookToLibrary(newBook);
        displayBooks();
        addBookForm.reset();
        addBookForm.style.display = 'none';
        expandBookFormButton.style.display = 'block';
    };
    reader.readAsDataURL(file);
});


document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
});