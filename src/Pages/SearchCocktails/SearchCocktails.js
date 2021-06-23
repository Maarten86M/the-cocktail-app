import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import SearchInput from "../../Components/Inputs/SearchField/SearchInput";
import SearchButton from "../../Components/Buttons/SearchButton/SearchButton";
import search from '../../Assets/Icons/NavIcons/search.png';
import {useCocktailContext} from "../../Context/CocktailContext";

function SearchCocktails() {
    const history = useHistory();
    const { searchText} = useCocktailContext();
    const [searchErrors , setSearchErrors] = useState('');

    function searchHandle() {
        if (searchText === "" || searchText === "Search Cocktails"){
            setSearchErrors("Please fill in a ingredient");
        }else {
            history.push(`/searchresult/${searchText}`)
        }
    }

    return (
        <div className="pagina">
            <h1>Search Cocktails</h1>
            <p>{searchErrors}</p>
            <SearchInput placeholder="Search Cocktails"/>
            <SearchButton name="Search" icon={search} onClick={searchHandle} />
        </div>
    )
}

export default SearchCocktails;