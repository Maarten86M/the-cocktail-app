import React, {useState, useEffect} from "react";
import axios from "axios";
import './paginatijdelijkaanpassenperpagina.css';
import CocktailCard from "../Components/CocktailCard/CocktailCard";
import CocktailCardHeader from "../Components/CocktailCardHeader/CocktailCardHeader";


function RandomCocktails() {

    const [randomCocktail, setRandomCocktail] = useState(null);
    const [errors, setErrors] = useState('');
    const [randomButton, setRandomButton] = useState(false)
    console.log("What are the Errors:", errors)

useEffect(() => {
    console.log("on mount")

    async function fetchRandomCocktail() {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`
            );
            console.log(response.data, "Dit is de data die eruit komt")
            setRandomCocktail(response.data.drinks)
        }catch (e) {
            console.error(e);
            setErrors("Oops, something went wrong")
        }
    }
    fetchRandomCocktail()

},[randomButton]);

    return (
        <div className="pagina">
            <h1>Random Cocktail</h1>
            <button onClick={(event) => setRandomButton(!randomButton)}>Randomize</button>
            <div>
                <div>
                {randomCocktail ? randomCocktail.map((cocktail) => {
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
                }): <h1>Loading</h1>}
                </div>
            </div>

        </div>
    )
}

export default RandomCocktails;