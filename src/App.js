import React, { useEffect, useState } from 'react';
import Main from './Components/Main';
import './Components/styles.css';

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
              subjects,
              title,
              authors,
              formats: { jpeg },
            } = book;
            
            //console.log(subjects);


            return (

                <>
                  <Main/>
                </>

            );
          })}
        </article>
      </main>
    </>
    // </React.Fragment>
  );
}

export default App;
/*
              <section key={id}>
                <h3>{title}</h3>
                <p>{authors[0].name}</p>
                <picture>
                  <img src={jpeg} alt={Image} />
                </picture>

              </section>
*/

/*
return (
  <section key={id}>
    <p>{book.id}</p>
    <p>{book.title}</p>
    <p>{book.subjects}</p>
  </section>*/