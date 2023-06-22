//for modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("openBookForm");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
  
span.onclick = function() {
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

//for books functions

let myLib = [];

function Book(id,title, author, pages){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(){
    let bookTitle = document.getElementById("bookTitle").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let bookPages = document.getElementById("bookPageCount").value;

    //to make a unique name for each book
    let assignedNum = myLib.length;
    let id = assignedNum.toString();

    myLib.push(new Book(id,bookTitle,bookAuthor,bookPages));
    
    for(let i = 0; i < myLib.length; i++){
        console.log("ID: " + myLib[i].id);
        console.log("Book Title: " + myLib[i].title);
        console.log("Book Author: " + myLib[i].author);
        console.log("Book Page: " + myLib[i].pages);
    }

    modal.style.display = "none";

    let div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute('id',`${id}`);
    div.innerHTML = "<div class='bookInfo'>Title: " + bookTitle + "<br>"
                    + "Author: " + bookAuthor + "<br>"
                    + "Pages: " + bookPages + "</div>"
                    + `<div class='bookButtons'><button class='delButton' onclick='deleteBook(${id})'>DELETE</button>`
                    + `<button id ='readStatus${id}' class='readButton' onclick='readBook(${id})'>READ</button></div>`;

    document.getElementById("content").appendChild(div);

    //clear input field after submitting
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');

}

function deleteBook(id){
    console.log(id);
    cards = document.getElementById(id).remove();
    myLib = myLib.filter(book => book.id != id);

}

function readBook(id){
    readButton = document.getElementById("readStatus"+id);

    if (readButton.textContent == "READ"){
        readButton.textContent = "UNREAD";
        readButton.style.background = "#FF4FFF";
    }else{
        readButton.textContent = "READ";
        readButton.style.background = "";
    }
    
}

