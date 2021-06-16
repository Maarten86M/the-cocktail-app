import React, {useEffect, useState, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const apiKey = '9973533';

function CocktailByIngredientList() {
    const params = useParams();
    const [ingredientlist, setIngredientlist] = useState([])

    useEffect(() => {
        async function fetchIngredientCocktail() {
            try {
                const ingredientResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${params.result}`);
                setIngredientlist(ingredientResult.data.drinks);
            } catch (e) {
                console.error(e)
            }
        }
        fetchIngredientCocktail()
    }, []);


    return (
        <>
            <div className="pagina">
                <div className="Cocktaillist">
                    <h1>Cocktails with: {params.result} </h1>
                    <div>
                        {ingredientlist === "None Found" ? (
                            <h1>Sorry, nothing Found</h1>
                        ) : (
                            <div className="Cocktaillist">
                                {ingredientlist.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                    <p>{cocktail.strDrink}</p></Link>)}
                            </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CocktailByIngredientList;