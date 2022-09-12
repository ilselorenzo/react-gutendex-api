import React, { useEffect, useState } from 'react';
import Card from "./Card";

  // Por defecto, los libros están ordenados por popularidad, determinado por sus números de downloads desde el Proyecto Gutenberg. 
const getBooks = async () => {
  try {
    const response = await fetch('https://gutendex.com/books');
    const books = await response.json();
    return books;
  } catch (error) {
    console.error(error);
  }
};

const getUpdatedBooks = async (route) => {
  try {
    const response = await fetch(route);
    const books = await response.json();
    return books;
  } catch (error) {
    console.error(error);
  }
};

function Main() {
  // aqui tenemos el estado donde se guarda los libros (books)
  // estoy anadendo estado para guardar en 'prev' y 'next' del api
  const [books, setBooks] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();

      //console.log(data.results);

      setBooks(data.results);
      setPrevious(data.previous);
      setNext(data.next);
    } catch (error) {}
  };

  const fetchNewBooks = async () => {
    try {
      const data = await getUpdatedBooks(next);
      
      // Mueve el scroll a la parte superior
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      setBooks(data.results);
      setPrevious(data.previous);
      setNext(data.next);
    } catch (error) {}
  };

  const fetchPreviousBooks = async () => {
    try {
      const data = await getUpdatedBooks(previous);

      // Mueve el scroll a la parte superior
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      setBooks(data.results);
      setPrevious(data.previous);
      setNext(data.next);
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
        <img className="row2" src="./images/bg2.png" alt="" />
      </header>

      <section>
        <button class="button previous" onClick={fetchPreviousBooks}><span>Previous</span></button>
        <button class="button next" onClick={fetchNewBooks}><span>Next</span></button>
      </section>

      <Card book={books}/>
      
      <section>
        <button class="button previous" onClick={fetchPreviousBooks}><span>Previous</span></button>
        <button class="button next" onClick={fetchNewBooks}><span>Next</span></button>
      </section>

      <footer>
        <p>Fundación Adecco y General Assembly</p>
        <p>Desarrollado por Ilse Lorenzo</p>
      </footer>
    </>
    // </React.Fragment>
  );
}

export default Main;