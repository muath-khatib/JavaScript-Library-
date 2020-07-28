const container = document.querySelector('.container');
let titleBook,
    authorBook,
    imgBookSrc;
let books = [
    {   titleBook : "book1",
        authorBook : "Jhon Doe",
        imgBook : "./img/book1.jpg"
    },
    {   titleBook : "book2",
        authorBook : "Jhon Doe",
        imgBook : "./img/book2.jpg"
    },
    {   titleBook : "book3",
        authorBook : "Jhon Doe",
        imgBook : "./img/book3.jpg"
    },
    {   titleBook : "book4",
        authorBook : "Jhon Doe",
        imgBook : "./img/book4.jpg"
    },
    {   titleBook : "book5",
        authorBook : "Jhon Doe",
        imgBook : "./img/book5.jpg"
    },
    {   titleBook : "book6",
        authorBook : "Jhon Doe",
        imgBook : "./img/book6.jpg"
    },
    {   titleBook : "book7",
        authorBook : "Jhon Doe",
        imgBook : "./img/book7.jpg"
    },
    {   titleBook : "book8",
        authorBook : "Jhon Doe",
        imgBook : "./img/book8.jpg"
    },
    {   titleBook : "book9",
        authorBook : "Jhon Doe",
        imgBook : "./img/book9.jpg"
    },
    {   titleBook : "book10",
        authorBook : "Jhon Doe",
        imgBook : "./img/book10.jpg"
    }    
];

function buildGrid(){
    let list = document.createElement("ul");
    container.appendChild(list);
        for(let i = 0; i < books.length; i++){
            titleBook = books[i].titleBook;
            authorBook = books[i].authorBook;
            imgBookSrc = books[i].imgBook;
        let listItem = document.createElement('li');
                list.appendChild(listItem);
                list.className = 'list-books';
                listItem.className = 'book';
        let bookImg = document.createElement('img');
                listItem.appendChild(bookImg);
                bookImg.className = 'book-img';
                bookImg.src = imgBookSrc;
        let creatTitleBox = document.createElement('div');
                listItem.appendChild(creatTitleBox);
                creatTitleBox.className = "title-box";
                creatTitleBox.textContent = titleBook;
                
                
    }
}

buildGrid()
let newBookButton = document.querySelector('#button-new-book');
                newBookButton.addEventListener('click', (e)=> {
                    let inputs = document.querySelectorAll('.form-new-book input'),
                                 obj = {};
                        for(let i = 0; i < inputs.length; i++){
                            obj[inputs[i].name] = inputs[i].value;
                            inputs[i].value = "";
                        }
                        
                        books.push(obj)
                        e.preventDefault();
                        container.querySelectorAll('*').forEach(n => n.remove());
                        buildGrid()

                        
                });