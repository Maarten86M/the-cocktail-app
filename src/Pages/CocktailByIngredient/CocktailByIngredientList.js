import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


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