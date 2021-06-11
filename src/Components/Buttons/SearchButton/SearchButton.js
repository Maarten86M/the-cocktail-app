import React,{useContext} from "react";
import {CocktailContext} from "../../../Context/CocktailContext";
import './SearchButton.css';


function SearchButton(props) {

    const { searchText} = useContext(CocktailContext);

    return(
        <button className="searchButton" onClick={props.onClick}>
            <img src={props.icon} alt={props.name}/>{props.name}
        </button>
    )
}

export default SearchButton;