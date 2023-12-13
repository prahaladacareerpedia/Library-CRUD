document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    const books = [];
  
    bookForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const bookName = document.getElementById('bookName').value;
      const author = document.getElementById('author').value;
      const price = document.getElementById('price').value;
  
      if (bookName && author && price) {
        const book = {
          name: bookName,
          author: author,
          price: parseFloat(price).toFixed(2)
        };
  
        books.push(book);
        displayBooks();
        bookForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  
    function displayBooks() {
      bookList.innerHTML = '';
      books.forEach(function(book, index) {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
          <p><strong>Book Name:</strong> ${book.name}</p>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Price:</strong> $${book.price}</p>
          <button onclick="editBook(${index})">Edit</button>
          <button onclick="deleteBook(${index})">Delete</button>
          <hr>
        `;
        bookList.appendChild(listItem);
      });
    }
  
    window.editBook = function(index) {
      const newName = prompt('Enter new book name:');
      const newAuthor = prompt('Enter new author:');
      const newPrice = parseFloat(prompt('Enter new price:')).toFixed(2);
  
      if (newName && newAuthor && newPrice) {
        books[index].name = newName;
        books[index].author = newAuthor;
        books[index].price = newPrice;
        displayBooks();
      } else {
        alert('Invalid input. Please try again.');
      }
    };
  
    window.deleteBook = function(index) {
      if (confirm('Are you sure you want to delete this book?')) {
        books.splice(index, 1);
        displayBooks();
      }
    };
  });
  