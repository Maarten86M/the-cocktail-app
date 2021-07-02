import React, {useEffect} from "react";
import axios from "axios";
import {useParams, Link} from 'react-router-dom';
import {useCocktailContext} from "../../Context/CocktailContext";
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoaderOops";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import cocktailIcon from '../../Assets/Icons/ListIcons/cocktail-icon.png';
import search from '../../Assets/Icons/NavIcons/search.png';
import '../../App.css';

function SearchResult() {
    const params = useParams();
    const {
        searchText,
        setSearchText,
        searchResult,
        setSearchResult,
        setErrorMessage
    } = useCocktailContext();

    useEffect(() => {
        async function fetchSearchData() {
            try {
                const searchResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${searchText}`);
                setSearchResult(searchResult.data.drinks);
            } catch (e) {
                console.error(e);
                setErrorMessage("Oops, something went wrong!");
            }
        }

        fetchSearchData();
    }, []);

    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    {searchResult === "None Found" ? (
                        <CocktailLoaderOops/>
                    ) : (<CocktailCardLogo/>)}
                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">

                    <div>
                        <HelpButton content={3}/>
                    </div>
                    <h1>{params.result}</h1>
                    <MainButton name="Search Again" icon={search} link="/searchcocktails"
                                onClick={setSearchText("Search Cocktails")}/>
                    <div>
                        {searchResult === "None Found" ? (
                            <div>
                                <ErrorMessage/>
                            </div>
                        ) : (<div className="cocktaillist">
                            {searchResult.map((cocktail) =>
                                <Link to={`/cocktailpage/${cocktail.idDrink}`} className="link">
                                    <p><img src={cocktailIcon} alt="Cocktail Icon"/>{cocktail.strDrink}</p></Link>)}
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;