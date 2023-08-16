const openForm = document.querySelector('.open-submitForm');
const form = document.querySelector('#form');
const closeForm = document.querySelector('.close-form');
const allBooks = [];
const addBook = document.querySelector('.add-book');
const submit = document.querySelector('.submit');

// Create Book
const createBook = (authorName, title, isRead) => {
  return {
    authorName,
    title,
    isRead,
    createGrid() {
      const buttonRead = document.createElement('button');
      const buttonDelete = document.createElement('button');
      buttonRead.innerHTML = 'Read'
      buttonDelete.innerHTML = 'Delete'
      const gridContainer = document.querySelector('.grid-container');
      const div = document.createElement('div');
      div.className = "grid-items"
      const readText = this.isRead === true? 'Read' : 'Not read';
      const isReadValue = this.isRead === true ? 'green' : 'red';
     
      div.innerHTML = `
        <h4>Author: ${this.authorName}</h4>
        <p >Title: ${this.title}</p>
        <p  class = "status" style = "color: ${isReadValue};"> ${readText}</p>
      `;

      //Toggle Read Status Function
      const toggleRead = ()=>{
        this.isRead = !this.isRead;
        const updateReadStatus = this.isRead === true? 'Read' : 'Not read';
        const updateReadValue = this.isRead === true ? 'green' : 'red';
        div.querySelector(".status").textContent = updateReadStatus;
        div.querySelector(".status").style.color = updateReadValue
      }
      buttonDelete.className = "deleteItems";
    
      buttonRead.className = "readItems";
      buttonRead.addEventListener('click',toggleRead);



      buttonDelete.addEventListener('click', () => {
        const index = allBooks.indexOf(this);
        index !== -1 && 
          allBooks.splice(index, 1);
          gridContainer.removeChild(div);
        
      });

      
      
      console.log(this.isRead);
      div.appendChild(buttonDelete);
      div.appendChild(buttonRead);
      gridContainer.appendChild(div);
      
    }
    
  };
};




// Submit Form

form.addEventListener('submit', ()=>{
  event.preventDefault();

  const title = document.querySelector('.book-name').value;
  const author = document.querySelector('.book-author').value;
  let isRead = document.querySelector('input[name="option"]:checked').value;
  isRead = isRead === 'option1'? true : false;

 const newBook = createBook(title,author,isRead);
  newBook.createGrid();
  allBooks.push(newBook);
  console.log(allBooks);



})


//Open Close form
openForm.addEventListener('click',()=>{
  form.show()})
closeForm.addEventListener('click',()=>{
  event.preventDefault();
  form.close()})