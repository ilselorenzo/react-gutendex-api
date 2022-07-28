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
/*
        <section className="container">
              {
                <Card book={bookData}/>
              } 
        </section>
*/

/*
import React,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://gutendex.com/books'+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=33')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Project Gutenberg ebook<br/></h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;

*/
