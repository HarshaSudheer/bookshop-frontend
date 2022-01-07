import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return(
        <div>
            <Link to="/add"><button type="button" className="add-btn">Add Book</button></Link>
        </div>
    );
}

export default NavBar;