import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const apiKey = '9973533';

function CocktailByIngredientList() {
    const params = useParams();
    const [ingredientlist, setIngredientlist] = useState(null)

    // const refactorParams = params.result.replace(" ","_");

    useEffect(() => {
        async function fetchAlcoholCocktail() {
            try {
                const alcoholResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${params.result}`);
                setIngredientlist(alcoholResult.data.drinks);
            } catch (e) {
                console.error(e)
            }
        }

        fetchAlcoholCocktail()
    }, []);

    return (
        <>
            <div className="pagina">
                <div className="Cocktaillist">
                    <h1>Cocktails with {params.result} </h1>

                    <div>
                        {ingredientlist ? (
                            <div className="Cocktaillist">
                                {ingredientlist.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                    <p>{cocktail.strDrink}</p></Link>)}
                            </div>
                        ) : (<h1>Loading</h1>)}
                    </div>

                </div>
            </div>
        </>
    )
}

export default CocktailByIngredientList;