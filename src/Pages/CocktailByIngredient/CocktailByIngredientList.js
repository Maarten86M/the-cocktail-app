import React, {useEffect} from "react";
import {useCocktailContext} from "../../Context/CocktailContext";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoaderOops";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import cocktailIcon from '../../Assets/Icons/ListIcons/cocktail-icon.png';
import '../../App.css';

import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import CocktailLoaderText from "../../Components/CocktailLoader/CocktailLoaderText/CocktailLoaderText";

function CocktailByIngredientList() {
    const {
        setPageTitle,
        ingredientlist,
        setIngredientlist,
        setErrorMessage,
        loading,
        setLoading,
    } = useCocktailContext();
    const params = useParams();

    useEffect(() => {
        async function fetchIngredientCocktail() {
            setLoading(true);
            try {
                const ingredientResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${params.result}`);
                setIngredientlist(ingredientResult.data.drinks);
            } catch (e) {
                console.error(e);
                setErrorMessage("Oops, something went wrong!");
            }
            setLoading(false);
        }

        fetchIngredientCocktail();
    }, []);

    useEffect(() => {
        setPageTitle(params.result + ' Cocktails');
    }, [])

    return (
        <>
            <div className="fullpage-container">

                <div className="left-section-container">
                    <div className="CocktailCard-container">
                        {ingredientlist === "None Found" ? (
                            <CocktailLoaderOops/>
                        ) : (<CocktailCardLogo/>)}
                    </div>
                </div>

                <div className="right-section-container">
                    <div className="right-box-container">
                        <div className="cocktaillist">
                            <div>
                                <HelpButton content={9}/>
                            </div>
                            <h1 className="list-title">Cocktails with: {params.result} </h1>
                            <div>
                                {loading && (<CocktailLoaderText />)}
                                {ingredientlist === "None Found" ? (<ErrorMessage/>) : (
                                    <div className="scrollbar">
                                        {ingredientlist.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                            <p><img src={cocktailIcon} alt="Cocktail Icon"/>{cocktail.strDrink}</p>
                                        </Link>)}
                                    </div>)}
                            </div>
                        </div>
                        <MainBackButton/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CocktailByIngredientList;