import React,{useContext} from "react";
import './SearchInput.css';
import {CocktailContext} from "../../../Context/CocktailContext";

function SearchInput(props) {

    const { setSearchText} = useContext(CocktailContext);

    return (
        <div className='searchInput'>
            <input type="text" placeholder={props.placeholder}
                   onChange={(event) => setSearchText(event.target.value)}/>
        </div>
    )
}

export default SearchInput;