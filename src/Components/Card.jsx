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

      </main>

        </>
    )
}
export default Card;


