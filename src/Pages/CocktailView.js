import React, { useEffect} from "react";
import axios from "axios";
import CocktailCard from "../Components/CocktailCard/CocktailCard";
import MainButton from "../Components/Buttons/MainButton/MainButton";
import CocktailCardHeader from "../Components/CocktailCardHeader/CocktailCardHeader";
import {useParams} from 'react-router-dom';
import {useCocktailContext} from "../Context/CocktailContext";

const apiKey = '9973533';

function CocktailView() {

    const params = useParams();
    const {cocktail, setCocktail} = useCocktailContext();

    useEffect(() => {
        async function fetchCocktailView() {
            try {
                const viewResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${params.id}`);
                setCocktail(viewResult.data.drinks);
            } catch (e) {
                console.error(e);
            }
        }

        fetchCocktailView();
    }, []);

    return (
        <div className="pagina">
            <h1>bla bla</h1>
            <div>

                    <CocktailCardHeader/>
                    <CocktailCard/>

            </div>
            <button >Terug</button>
            {/*<MainButton/>*/}
        </div>
    )
}

export default CocktailView;