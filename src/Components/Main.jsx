import React, { useEffect, useState } from 'react';
import Card from "./Card"

  // By default, books are ordered by popularity, determined by their numbers of downloads from Project Gutenberg. 
const getBooks = async () => {
  try {
    const response = await fetch('https://gutendex.com/books');
    const books = await response.json();
    return books;
  } catch (error) {
    console.error(error);
  }
};

function Main() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();

      //console.log(data.results);

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
        <h1 className="row1">Project Gutenberg ebook</h1>
        <h2 className="row2">Populary Books</h2>
      </header>

      <main>
        <article className="books">
          
          {books.map((book) => {
            const {
              id,
              title,
              authors,
              formats
            } = book;
            
            console.log(id, title, authors, formats);

          return(
            <section className='container'>

              <section className='card' key={id}>
              <h3>{title}</h3>
              <p>{authors[0].name}</p>
              <picture>
                <img src={formats["image/jpeg"]} alt={Image} />
              </picture>



            </section>
 
          </section>
          )})}
        </article>
      </main>
    </>
    // </React.Fragment>
  );
}

export default Main;

/*
import React, { useState } from 'react';
import App from "../App";
//import Card from "../Card";


const Main = (props) => {


    return (
        <>
        <section>
          <form>
            <label htmlFor="subjects">Subjects</label>
            <select name="subjects" id="subjects" onChange={props.handleOnChange}>
              <option>Popularity</option>
              <option>Children's stories</option>
              <option>Science fiction</option>
            </select>
          </form>
        </section>

        </>
      );
    };

export default Main;
*/

/*
import React, { useEffect, useState } from 'react';
import Card from "./Card"

  // By default, books are ordered by popularity, determined by their numbers of downloads from Project Gutenberg. 
const getBooks = async () => {
  try {
    const response = await fetch('https://gutendex.com/books');
    const books = await response.json();
    return books;
  } catch (error) {
    console.error(error);
  }
};

function Main() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();

      //console.log(data.results);

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
        <h1 className="row1">Project Gutenberg ebook</h1>
        <h2 className="row2">Populary Books</h2>
      </header>

      <main>
        <article className="books">
          
          {books.map((book) => {
            const {
              id,
              title,
              authors,
              formats
            } = book;
            
            console.log(id, title, authors, formats);
          return(
            <section className='card' key={id}>
            <h3>{title}</h3>
            <p>{authors[0].name}</p>
            <picture>
              <img src={formats["image/jpeg"]} alt={Image} />
            </picture>

          </section>
          )})}
        </article>
      </main>
    </>
    // </React.Fragment>
  );
}

export default Main;

*/