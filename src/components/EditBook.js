import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate, useLocation} from "react-router-dom";
import api from "../api/base-url.js";
import "./EditBook.css";

function EditBook(){
    const location = useLocation()
    const { id, title, price, firstname, lastname, email } = location.state

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          title: title,
          price: price,
          firstname: firstname,
          lastname: lastname,
          email: email
        }
      }
    );

    const onSubmit = async (data) => {
        const requestBody =
            {
                "title" : data.title,
                "price" : data.price,
                "author" : {
                        "first_name" : data.firstname,
                        "last_name" : data.lastname,
                        "email" : data.email
                }
            };
        try{
            const response = await api.put(`/books/${id}`,requestBody);
            alert(response.data);
        }
        catch(err){
          console.log(err.response.data);
        }
        navigate('/');

    }
    return(
        <div>
            <div className="header-container">
                <div className="header">
                    <h1>Book Shop</h1>
                </div>
            </div>
            <div className="edit-book-form">
                <h2>Edit Book</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        {...register('title', { required: { value: true, message: "Title is required." } })} /><br />
                    {errors.title && <p className="error-message"> &#9888; {errors.title.message}</p>}
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        {...register('price', { required: { value: true, message: "Price is required." } })} /><br />
                    {errors.price && <p className="error-message"> &#9888; {errors.price.message}</p>}
                     <input
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        {...register('firstname', { required: { value: true, message: "Firstname is required." } })} /><br />
                    {errors.firstname && <p className="error-message"> &#9888; {errors.firstname.message}</p>}
 		     <input
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        {...register('lastname', { required: { value: true, message: "Title is required." } })} /><br />
                    {errors.lastname && <p className="error-message"> &#9888; {errors.lastname.message}</p>}
 		    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        {...register('email',
                            {
                                required: { value: true, message: "Email is required." },
                                pattern: { value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, message: "Enter valid email" }
                            })} /><br />
                    {errors.email && <p className="error-message"> &#9888; {errors.email.message}</p>}

                    <input type="submit" value="Edit Book" />
                </form>
            </div>
        </div>
    );
}

export default EditBook;