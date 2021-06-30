import React from "react";
import './SearchButton.css';

function SearchButton({onClick, icon, name}) {

    return(
        <button className="searchButton" onClick={onClick}>
            <img src={icon} alt={name}/>{name}
        </button>
    )
}

export default SearchButton;