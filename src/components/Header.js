import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import "./Header.css";

function Header (props){
    return(
        <div className='header-container'>
            <div className='header'>
                <h1>Book Shop</h1>
                <SearchBar handleSearchClick={props.handleSearchClick}/>
                <NavBar/>
            </div>
        </div>
    );
}

export default Header;