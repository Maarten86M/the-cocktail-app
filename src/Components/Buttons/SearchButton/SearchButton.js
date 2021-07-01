import React from "react";
import './SearchButton.css';

function SearchButton({onClick, icon, name, disabled}) {

    return(
        <button className="searchButton" onClick={onClick} disabled={disabled}>
            <img src={icon} alt={name}/>{name}
        </button>
    )
}

export default SearchButton;