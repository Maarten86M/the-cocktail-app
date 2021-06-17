import React from "react";
import {useHistory} from "react-router-dom";
import SearchInput from "../../Components/Inputs/SearchField/SearchInput";
import SearchButton from "../../Components/Buttons/SearchButton/SearchButton";
import search from '../../Assets/Icons/NavIcons/search.png';
import {useCocktailContext} from "../../Context/CocktailContext";

function SearchCocktails() {
    const history = useHistory();
    const { searchText} = useCocktailContext();

    function searchHandle() {
        history.push(`/searchresult/${searchText}`)
    }

    return (
        <div className="pagina">
            <h1>Search Cocktails</h1>
            <SearchInput placeholder="Search Cocktails"/>
            <SearchButton name="Search" icon={search} onClick={searchHandle} />
        </div>
    )
}

export default SearchCocktails;