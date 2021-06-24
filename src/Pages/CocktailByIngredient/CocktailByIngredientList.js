import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderOops";
import cocktailIcon from '../../Assets/Icons/ListIcons/cocktail-icon.png';
import '../pageStyling.css';
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";


function CocktailByIngredientList() {
    const params = useParams();
    const [ingredientlist, setIngredientlist] = useState([])

    useEffect(() => {
        async function fetchIngredientCocktail() {
            try {
                const ingredientResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${params.result}`);
                setIngredientlist(ingredientResult.data.drinks);
            } catch (e) {
                console.error(e)
            }
        }

        fetchIngredientCocktail()
    }, []);


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
                        <div className="Cocktaillist">
                            <h1>Cocktails with: {params.result} </h1>
                            <div>
                                <HelpButton content={9}/>
                            </div>
                            <div>
                                {ingredientlist === "None Found" ? (
                                    <div>
                                        <h1>Sorry, nothing Found</h1>
                                    </div>
                                ) : (
                                    <div className="Cocktaillist">
                                        {ingredientlist.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                            <p><img src={cocktailIcon} alt="Cocktail Icon"/>{cocktail.strDrink}</p>
                                        </Link>)}
                                    </div>)}
                            </div>
                            <MainBackButton/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CocktailByIngredientList;