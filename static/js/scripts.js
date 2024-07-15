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
    
    myLibrary.forEach((book, index) => {
        const bookBox = document.createElement('div');
        bookBox.classList.add('book-box');
        bookBox.dataset.index = index;

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
        author.textContent = book.author;
        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;
        const read = document.createElement('p');
        read.textContent = book.read ? 'Status: Read' : 'Status: Not Read';

        bookInfo.appendChild(title);
        bookInfo.appendChild(author);
        bookInfo.appendChild(pages);
        bookInfo.appendChild(read);

        bookInfo.style.position = 'absolute';
        bookInfo.style.top = '0';
        bookInfo.style.left = '0';
        bookInfo.style.right = '0';
        bookInfo.style.bottom = '0';
        bookInfo.style.transform = 'translateY(-100%)';
        bookInfo.style.transition = 'transform 250ms ease-in-out';
        bookInfo.style.color = 'white';
        bookInfo.style.backgroundColor = 'rgba(0, 0, 0, 0.295)';
        bookBox.addEventListener('mouseenter', () => {
            bookInfo.style.transform = 'translateY(0)';
        });
        bookBox.addEventListener('mouseleave', () => {
            bookInfo.style.transform = 'translateY(-100%)';
        });
        bookBox.appendChild(bookInfo);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        bookBox.appendChild(removeBtn);

        booksContainer.appendChild(bookBox);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
});