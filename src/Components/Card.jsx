import React from "react";


const Card = ({ book }) => {


    
    return (
        <>
      <main>
        <article className="books">
          
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
        </article>
      </main>

        </>
    )
}
export default Card;
/*
return(
    <section className='card' key={id}>
    <h3>{title}</h3>
    <p>{authors[0].name}</p>
    <picture>
      <img src={formats["image/jpeg"]} alt={Image} />
    </picture>

  </section>
  )
  */
 /*
import React, { useState, useEffect } from "react";
//import { useState } from "react/cjs/react.development";
import Modal from "./Modal";
const Card = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();

    console.log(book)


    
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default Card;

 */