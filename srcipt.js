const addBookButton = document.querySelector('.add-book-button');
const bookContainer = document.querySelector('.book-container');
let bookForm = document.querySelector('.book-form');
let openFormButton = document.querySelector('.open-form-button');

let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let haveReadInput = document.getElementById('haveRead');

bookForm.style.display = 'none';
let bookFormFlag = false;

const myLibrary = [];

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.returnBookDescription = function(){
        return `${author}, ${pages} pages,`;
    }
}

function addBookToLibrary(){
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, haveReadInput.value);
    newBook.id = `book${myLibrary.length+1}`;
    if(newBook.title && newBook.author && newBook.pages && newBook.haveRead){
        myLibrary.push(newBook);
        displayBook(newBook);
    }
}

function removeBookFromLibrary(id){
    let rem = myLibrary.findIndex(book => book.id === id);
    if(rem !== -1) {
        myLibrary.splice(rem, 1);
    }
}

function openCloseBookForm(){
    bookForm.style.display = !bookFormFlag ? 'block' : 'none';
    bookFormFlag = !bookFormFlag;
}

function displayBook(book){
    let bookElement = document.createElement('div')
    bookElement.className = "book-card";
    bookElement.id = book.id;
    let bookTitle = document.createElement('h2');
    let bookDescription = document.createElement('p');
    let bookRemoveButton = document.createElement('button');
    bookRemoveButton.className = "book-remove-button";
    let bookReadSelect = document.createElement('select');
    let haveReadOption = document.createElement('option');
    let haveNotReadOption = document.createElement('option');

    haveReadOption.value = 'read';
    haveReadOption.text = 'Have Read';
    haveNotReadOption.value = 'not read';
    haveNotReadOption.text = 'Not Read';

    if(book.haveRead == 'read'){
        haveReadOption.selected = true;
    }
    else {
        haveNotReadOption.selected = true;
    }

    bookRemoveButton.addEventListener('click', () => {
        let parent = bookRemoveButton.parentElement;
        removeBookFromLibrary(parent.id);
        parent.remove();
    })

    bookDescription.innerHTML = book.returnBookDescription();
    bookTitle.innerHTML = book.title;
    bookRemoveButton.innerHTML = "X";

    bookElement.appendChild(bookTitle);
    bookElement.appendChild(bookDescription);
    bookReadSelect.appendChild(haveNotReadOption);
    bookReadSelect.appendChild(haveReadOption);
    bookElement.appendChild(bookReadSelect);
    bookElement.appendChild(bookRemoveButton);

    bookContainer.appendChild(bookElement);
}

addBookButton.addEventListener("click", () => {addBookToLibrary()});
openFormButton.addEventListener("click", function(){openCloseBookForm()});
