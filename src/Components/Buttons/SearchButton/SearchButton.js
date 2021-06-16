import React from "react";
import {useCocktailContext} from "../../../Context/CocktailContext";
import './SearchButton.css';


function SearchButton(props) {

    const { searchText} = useCocktailContext();

    return(
        <button className="searchButton" onClick={props.onClick}>
            <img src={props.icon} alt={props.name}/>{props.name}
        </button>
    )
}

export default SearchButton;