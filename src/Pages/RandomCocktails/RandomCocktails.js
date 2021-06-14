import React, {useEffect, useContext} from "react";
import {CocktailContext} from "../../Context/CocktailContext";
import axios from "axios";
import '../paginatijdelijkaanpassenperpagina.css';
import CocktailCard from "../../Components/CocktailCard/CocktailCard";
import CocktailCardHeader from "../../Components/CocktailCardHeader/CocktailCardHeader";
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import random from '../../Assets/Icons/NavIcons/dice.png';
import RandomizeButton from "../../Components/Buttons/RandomizeButton/RandomizeButton";

const apiKey = '9973533';

function RandomCocktails() {
    const {
        cocktail,
        setCocktail,
        errors,
        setErrors,
        randomizeButton,
        setRandomizeButton,
        loading,
        setLoading
    } = useContext(CocktailContext);

    console.log("What are the Errors:", errors);
    console.log("Dit is de cocktail",cocktail)

    useEffect(() => {
        async function fetchRandomCocktail() {

            setErrors(false);
            setLoading(true);
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/random.php`
                );
                setCocktail(response.data.drinks);
            } catch (e) {
                console.error(e);
                setErrors(true);
            }
            setLoading(false);

        }
        fetchRandomCocktail()


    }, [randomizeButton]);

    return (
        <div className="pagina">
            <h1>Random Cocktail</h1>

            <RandomizeButton
                loading={loading}
                randomizeButton={randomizeButton}
                setRandomizeButton={setRandomizeButton}
            />

            <div>
                {/*Hier komt de cocktail logo img loader*/}
                {loading && <span>Loading</span>}
                {errors && (<span>Oops, something went wrong</span>)}

                <div>
                    {cocktail && cocktail.map((cocktail) => {
                        return <>
                            <CocktailCardHeader cocktailImg={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
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
            </div>

        </div>
    )
}

export default RandomCocktails;