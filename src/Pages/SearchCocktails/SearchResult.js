import React,{useContext, useEffect} from "react";
import {useParams} from 'react-router-dom';
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import search from '../../Assets/Icons/NavIcons/search.png';
import {CocktailContext} from "../../Context/CocktailContext";
import axios from "axios";
import {Link} from 'react-router-dom';

function SearchResult() {
    const params = useParams();
    const { searchText,
        setSearchText,
        searchCocktail,
        setSearchCocktail} = useContext(CocktailContext);

    console.log(searchCocktail);

    useEffect(() => {

        async function fetchSearhData(){
            try{
                const searchResult = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`);
                setSearchCocktail(searchResult.data.drinks);
            }catch (e) {
                console.error(e);
            }
        }
        fetchSearhData();
    },[]);

    return (
        <div className="pagina">
            <h1>{params.result}</h1>
            <MainButton name="Search Again" icon={search} link="/searchcocktails" onClick={setSearchText("Search Cocktails")}/>
            <div>
                {searchCocktail ? (
                    <div className="Cocktaillist">
                        {searchCocktail.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}> <p>{cocktail.strDrink}</p></Link>)}
                    </div>
                ): (<h1>Wrong Search Term</h1>)}
            </div>
        </div>
    )
}

export default SearchResult;