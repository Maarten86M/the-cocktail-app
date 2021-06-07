import React from "react";
import {useHistory} from "react-router-dom";

function SearchCocktails(props) {
    const history = useHistory();

    function searchHandle() {
        history.push(`/searchresult/${props.searchText}`)
    }

    return (
        <div className="pagina">
            <h1>Search Cocktails</h1>
            <input
                type="text"
                onChange={(event) => props.setSearchText(event.target.value)}/>
            <button onClick={searchHandle} type="submit">Search</button>
        </div>
    )
}

export default SearchCocktails;