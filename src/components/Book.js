import React,{useState} from "react";
import {Link} from "react-router-dom";
import api from "../api/base-url.js"
import "./Book.css";

function Book(props){
    const [bookDetails, setBookDetails] = useState([]);
    const [view, setView] = useState(false);
    
    const handleViewClick = async () => {
        try{
            const response = await api.get(`/books/${props.id}`);
            setBookDetails(response.data);
            setView(true);
        }
        catch(err){
          console.log(err.response.data);
        }
    }

    const handleDeleteClick = async () => {
        try{
            const response = await api.delete(`/books/${props.id}`);
            alert(`Book named ${props.title} deleted successfully`);
            window.location.reload();
            console.log(response);
        }
        catch(err){
          console.log(err.response.data);
        }
    }

    return(
        <div className="book-container">
            <h2>{props.title}</h2>
            {view?
                <div className="book-details">
                    price:{bookDetails.price}<br/>
                    author:{`${bookDetails.author.first_name} ${bookDetails.author.last_name}`}<br/>
                    email:{bookDetails.author.email}<br/><br/>
                    <Link to="/edit" state={{ id: props.id, title:props.title, price:bookDetails.price, firstname:bookDetails.author.first_name, lastname:bookDetails.author.last_name, email:bookDetails.author.email }}><button type="button" className="edit-btn">Edit</button></Link>
                    <button type="button" onClick={handleDeleteClick} className="delete-btn">Delete</button>
                </div>
                :<button type="button" onClick={handleViewClick} className="view-btn">View</button>
            }
        </div>
    );
}

export default Book;