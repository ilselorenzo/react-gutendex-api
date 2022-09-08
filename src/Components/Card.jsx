import React from "react";


const Card = ({ book }) => {
    
    return (
        <>
      <main>
        
          {book.map((book) => {
            const {
              id,
              title,
              authors,
              formats,
              download_count
            } = book;
            
            console.log(id, title, authors, formats);
          
            if (typeof authors[0] !== 'undefined') {
              // Ahora authors[0] está definido
            
          return(
            <section className='container'>
                <section className='card' key={id}>
                    <h3>{title}</h3>
                    <p>{authors[0].name}</p>
                    <p>{authors[0].birth_year} - {authors[0].death_year}</p>
                    <picture>
                        <img src={formats["image/jpeg"]} alt={Image} />
                    </picture>
                    <p>Popularity: {download_count}</p>
                </section>
            </section>
          )}})}

      </main>

        </>
    )
}
export default Card;


