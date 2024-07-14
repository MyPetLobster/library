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


function Book(title, author, pages, read, image) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


function displayBooks() {
    const booksContainer = document.querySelector('.books-container');
    booksContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookBox = document.createElement('div');
        bookBox.classList.add('book-box');
        bookBox.dataset.index = index;



        // set img alt
    });
}

// document.addEventListener('DOMContentLoaded', () => {
//     displayBooks();
// });