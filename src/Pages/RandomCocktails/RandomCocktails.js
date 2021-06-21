import React, {useEffect} from "react";
import axios from "axios";
import '../paginatijdelijkaanpassenperpagina.css';
import CocktailCard from "../../Components/CocktailCard/CocktailCard";
import CocktailCardHeader from "../../Components/CocktailCardHeader/CocktailCardHeader";
import RandomizeButton from "../../Components/Buttons/RandomizeButton/RandomizeButton";
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailLoader from "../../Components/CocktailLoader/CocktailLoader";

function RandomCocktails() {
    const {
        cocktail,
        setCocktail,
        errors,
        setErrors,
        randomizeButton,
        loading,
        setLoading
    } = useCocktailContext();

    console.log("What are the Errors:", errors);
    console.log("Dit is de cocktail",cocktail)

    useEffect(() => {
        async function fetchRandomCocktail() {
            setErrors(false);
            setLoading(true);
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/random.php`
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
            <RandomizeButton/>
            <div>

                {/*Hier komt de cocktail logo img loader*/}
                {loading && <CocktailLoader/>}
                {errors && (<span>Oops, something went wrong</span>)}
                            <CocktailCardHeader/>
                            <CocktailCard/>
            </div>
        </div>
    )
}

export default RandomCocktails;