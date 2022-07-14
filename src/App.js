//import logo from './logo.svg';
//import './App.css';

import React, { useEffect, useState } from 'react';

const getBooks = async () => {
  try {
    const response = await fetch('https://gutendex.com/books');
    const books = await response.json();
    return books;
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();

console.log(data.results);

      setBooks(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    // <React.Fragment>
    <>
      <header>
        <h1>Project Gutenberg ebook</h1>
      </header>
      <main>
        <article className="books">
          {books.map((book) => {


            return (
              <section>
                <h2>{book.title}</h2>

              </section>
            );
          })}
        </article>
      </main>
    </>
    // </React.Fragment>
  );
}

export default App;

