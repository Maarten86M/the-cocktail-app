import React, {useContext, useEffect} from "react";
import axios from "axios";
import {CocktailContext} from "../Context/CocktailContext";
import CocktailCard from "../Components/CocktailCard/CocktailCard";
import MainButton from "../Components/Buttons/MainButton/MainButton";
import CocktailCardHeader from "../Components/CocktailCardHeader/CocktailCardHeader";
import {useParams} from 'react-router-dom';


function CocktailView() {
    const params = useParams();
    const {cocktail, setCocktail} = useContext(CocktailContext);

    useEffect(() => {
        async function fetchCocktailView() {
            try {
                const viewResult = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`);
                setCocktail(viewResult.data.drinks);
            } catch (e) {
                console.error(e);
            }
        }

        fetchCocktailView();
    }, []);

    console.log(cocktail,"Dit is opgehaald vanuit de id")
    console.log(params, "Dit is params")

    return (
        <div className="pagina">
            <h1>bla bla</h1>
            <div>
            {cocktail && cocktail.map((cocktail) => {
                return <>
                    <CocktailCardHeader
                        cocktailImg={cocktail.strDrinkThumb} alt={cocktail.strDrink}
                    />
                    <CocktailCard
                        name={cocktail.strDrink}
                        ingredientOne={cocktail.strIngredient1}
                        ingredientTwo={cocktail.strIngredient2}
                        ingredientThree={cocktail.strIngredient3}
                        ingredientFour={cocktail.strIngredient4}
                        ingredientFive={cocktail.strIngredient5}
                        ingredientSix={cocktail.strIngredient6}
                        ingredientSeven={cocktail.strIngredient7}
                        ingredientEight={cocktail.strIngredient8}
                    />
                </>
            })}
            </div>

            {/*<MainButton/>*/}
        </div>
    )
}

export default CocktailView;