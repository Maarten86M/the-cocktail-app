import React, { useEffect, useState} from "react";

import {Link, useParams} from "react-router-dom";
import axios from "axios";

const apiKey = '9973533';

function CocktailByAlcoholList() {
    const params = useParams();
    const [alcohollist, setAlcohollist] = useState(null)

    const refactorParams = params.result.replace(" ","_");
    console.log("Wat is de uitkomst refactor:",refactorParams);

    useEffect(() => {
        async function fetchAlcoholCocktail() {
            try {
                const alcoholResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${params.result}`);
                setAlcohollist(alcoholResult.data.drinks);
            } catch (e) {
                console.error(e)
            }
        }

        fetchAlcoholCocktail()
    }, []);

    console.log(alcohollist,"zit hier iets in?")

    return (
        <>
            <div className="pagina">
                <div className="Cocktaillist">
                    <h1>Cocktails with {params.result.replace("+"," ")} </h1>

                    <div>
                    {alcohollist ? (
                        <div className="Cocktaillist">
                            {alcohollist.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                <p>{cocktail.strDrink}</p></Link>)}
                        </div>
                    ) : (<h1>Loading</h1>)}
                    </div>

                </div>
            </div>
        </>
    )
}

export default CocktailByAlcoholList;