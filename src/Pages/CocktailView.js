import React, { useEffect} from "react";
import axios from "axios";
import CocktailCard from "../Components/CocktailCard/CocktailCard";
import CocktailCardHeader from "../Components/CocktailCardHeader/CocktailCardHeader";
import {useParams} from 'react-router-dom';
import {useCocktailContext} from "../Context/CocktailContext";

function CocktailView() {

    const params = useParams();
    const {setCocktail} = useCocktailContext();

    useEffect(() => {
        async function fetchCocktailView() {
            try {
                const viewResult = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=${params.id}`);
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
        </div>
    )
}

export default CocktailView;