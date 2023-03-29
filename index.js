function fetchBooks() {
  // Fetch data from the API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Convert response to JSON
      return response.json();
    })
    .then(data => {
      // Render the book titles
      renderBooks(data);
      // Return the fetch() to allow the tests to access it
      return fetch('https://anapioficeandfire.com/api/books');
    })
    .catch(error => {
      console.log(error);
    });
}

function renderBooks(books) {
  const bookList = document.getElementById('bookList');
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.innerText = book.name;
    bookList.appendChild(listItem);
  });
}

fetchBooks();
