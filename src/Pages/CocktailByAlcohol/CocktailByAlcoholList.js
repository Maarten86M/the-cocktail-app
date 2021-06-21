import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import './CocktailByAlcohol.css';

function CocktailByAlcoholList() {
    const params = useParams();
    const [alcohollist, setAlcohollist] = useState([])

    useEffect(() => {
        async function fetchAlcoholCocktail() {
            try {
                const alcoholResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${params.result}`);
                setAlcohollist(alcoholResult.data.drinks);
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
                        {alcohollist === "None Found" ? (
                            <h1>sorry, nothing found</h1>
                        ) : (
                            <div className="alcohol-scrollbar">
                                {alcohollist.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                                    <p>{cocktail.strDrink}</p></Link>)}
                            </div>)}
                    </div>
                    <MainBackButton />
                </div>
            </div>
        </>
    )
}

export default CocktailByAlcoholList;