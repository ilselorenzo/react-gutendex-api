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
            const {
              id,
              title,
              authors: {name},
              formats: {object},
              subjects,
            } = book;
            


            return (
              <section>
                <p>{book.id}</p>
                <p>{book.title}</p>
                <p>{book.subjects}</p>
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

