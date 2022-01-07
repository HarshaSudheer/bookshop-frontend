import React,{useState} from "react";
import "./SearchBar.css";

function SearchBar(props){
    const [title, setTitle] = useState("");

    const handleClearClick = () => {
        window.location.reload();
        sessionStorage.removeItem('search-key');
    }

    return(
        <div className="search-bar-container">
            <input type="text" value={title||sessionStorage.getItem('search-key')} onChange={(e) => setTitle(e.target.value)} className="input-field"></input>
            <button type="button" onClick={handleClearClick} className="cross-button">&#10060;</button>
            <button type="button" value={title} onClick = {(value)=>props.handleSearchClick(value)} className="search-button">Search</button>
            {/* <SearchIcon type="button" value={title} onClick = {(value)=>props.handleClick(value)} className="search-icon"/> */}
        </div>
    );
}

export default SearchBar;