const addBookButton = document.querySelector('.add-book-button');
const bookContainer = document.querySelector('.book-container');
let bookForm = document.querySelector('.book-form');
let openFormButton = document.querySelector('.open-form-button');

let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let haveReadInput = document.getElementById('haveRead');

bookForm.style.display = 'none';

const myLibrary = [];

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.returnBookDescription = function(){
        return `${author}, ${pages} pages, ${haveRead}`;
    }
}

function addBookToLibrary(){
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, haveReadInput.value);
    if(newBook.title && newBook.author && newBook.pages && newBook.haveRead){
        myLibrary.push(newBook);
        displayBook(newBook);
    }
}

function openBookForm(){
    bookForm.style.display = 'block';
}


function closeBookForm(){
    bookForm.style.display = 'none';
}


function displayBook(book){
    let bookElement = document.createElement('div')
    bookElement.className = "book-card";
    let bookTitle = document.createElement('h2');
    let bookDescription = document.createElement('p');

    bookDescription.innerHTML = book.returnBookDescription();
    bookTitle.innerHTML = book.title;

    bookElement.appendChild(bookTitle);
    bookElement.appendChild(bookDescription);
    bookContainer.appendChild(bookElement);
}

addBookButton.addEventListener("click", () => {addBookToLibrary()});
openFormButton.addEventListener("click", function(){openBookForm()});
