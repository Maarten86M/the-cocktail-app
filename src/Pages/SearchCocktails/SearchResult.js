import React, {useEffect} from "react";
import axios from "axios";
import {useParams, Link} from 'react-router-dom';
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderOops";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import cocktailIcon from '../../Assets/Icons/ListIcons/cocktail-icon.png';
import search from '../../Assets/Icons/NavIcons/search.png';
import '../../App.css';

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
                    <h1>{params.result}</h1>
                    <div>
                    <HelpButton content={3}/>
                    </div>
                    <MainButton name="Search Again" icon={search} link="/searchcocktails"
                                onClick={setSearchText("Search Cocktails")}/>
                    <div>
                        {searchResult === "None Found" ? (
                            <div>
                                <h1>Nothing Found</h1>
                            </div>

                        ) : (<div className="Cocktaillist">
                            {searchResult.map((cocktail) =>
                                <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                    <p><img src={cocktailIcon} alt="Cocktail Icon"/>{cocktail.strDrink}</p></Link>)}
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;