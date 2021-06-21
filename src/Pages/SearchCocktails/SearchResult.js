import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import search from '../../Assets/Icons/NavIcons/search.png';
import axios from "axios";
import {Link} from 'react-router-dom';
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderOops";

function SearchResult() {
    const params = useParams();
    const {
        searchText,
        setSearchText,
        setErrors,
        searchResult,
        setSearchResult

    } = useCocktailContext();

    useEffect(() => {
        async function fetchSearchData() {
            try {
                const searchResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${searchText}`);
                setSearchResult(searchResult.data.drinks);
            } catch (e) {
                setErrors(true)
                console.error(e);
            }
        }

        fetchSearchData();
    }, []);

    return (
        <div className="pagina">
            <h1>{params.result}</h1>
            <MainButton name="Search Again" icon={search} link="/searchcocktails"
                        onClick={setSearchText("Search Cocktails")}/>
            <div>
                {searchResult === "None Found" ? (
                        <div>
                            <CocktailLoaderOops/>
                            <h1>Nothing Found</h1>
                        </div>

                    ) : (<div className="Cocktaillist">
                {searchResult.map((cocktail) =>
                    <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                    <p>{cocktail.strDrink}</p></Link>)}
                    </div>)}
            </div>
        </div>
    )
}

export default SearchResult;