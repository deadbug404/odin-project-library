let library = [];
let openBookModal = document.getElementById('openBookModal');
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let submitButton = document.querySelector('.submit-button');
let container = document.querySelector('.container');

openBookModal.addEventListener('click',() => modal.style.display = "block");
span.addEventListener('click', () => modal.style.display = "none");
submitButton.addEventListener('click',addBookToLibrary);

function Book(id,title,author,yearPublished){
    return {
        id,
        title,
        author,
        yearPublished,
    };
}

function addBookToLibrary(){
    let id = library.length;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let yearPublished = document.getElementById('yearPublished').value;

    if(title == '' || author == '' || yearPublished == ''){
        alert('Give all the details');
    }else if(title.length > 40 || author.length > 40 || yearPublished.length > 40){
        alert('Only accepting 40 characters below');
    }
    else{
        library.push(Book(id,title,author,yearPublished));    
        createCard(id,title,author,yearPublished);
        clear();
    }
}

function createCard(id,title,author,yearPublished,){
    mainDiv = document.createElement('div');
    titleDiv = document.createElement('div');
    authorYearDiv = document.createElement('div');
    buttonsDiv = document.createElement('div');
    deleteButton = document.createElement('button');
    readButton = document.createElement('button');

    mainDiv.setAttribute('id',id);
    mainDiv.classList.add('card');
    mainDiv.classList.add('card-flex');
    titleDiv.innerHTML = "Title: " + title;
    authorYearDiv.classList.add('card-flex');
    buttonsDiv.classList.add('buttons-flex');

    deleteButton.classList.add(id);
    deleteButton.setAttribute('id','delete-button');
    deleteButton.innerHTML = "DELETE";
    deleteButton.addEventListener('click', (e)=>{
        removeCard(e);
    })

    readButton.setAttribute('id','read-button');
    readButton.innerHTML = 'NOT READ';
    readButton.addEventListener('click',(e) => {
        currText = e.target.innerHTML;
        (currText == 'NOT READ') ? e.target.innerHTML = 'READ' : e.target.innerHTML = 'NOT READ';
    });

    authorYearDiv.innerHTML = `<center>Author: ${author}<br>Year Published: ${yearPublished}</center>`;

    buttonsDiv.append(deleteButton,readButton);
    mainDiv.append(titleDiv,authorYearDiv,buttonsDiv);
    container.appendChild(mainDiv);
    modal.style.display = "none"
}

function removeCard(e){
    let curr = document.getElementById(e.target.className);
    curr.parentNode.removeChild(curr);
    library.splice(e.target.className,1);
}

function clear(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('yearPublished').value = '';
}