import React from "react";
import Book from "./Book"
import "./Books.css"

function Books(props){
    return(
        <div className="books-container">
            <div className="books-inner-container">
                {props.books.map((book) => <Book key={book.id} id={book.id} title={book.title}/>)}
            </div>
        </div>
    );
}

export default Books