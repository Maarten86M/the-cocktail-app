import React, {useEffect} from "react";
import axios from "axios";
import CocktailCard from "../../Components/CocktailCard/CocktailCard";
import CocktailCardHeader from "../../Components/CocktailCardHeader/CocktailCardHeader";
import RandomizeButton from "../../Components/Buttons/RandomizeButton/RandomizeButton";
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailLoader from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoader";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderIMG/CocktailLoaderOops";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import CocktailName from "../../Components/CocktailName/CocktailName";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import '../../App.css';
import './RandomCocktails.css';

function RandomCocktails() {
    const {
        setCocktail,
        setErrorMessage,
        errorMessage,
        randomizeButton,
        loading,
        setLoading,
        setPageTitle,
    } = useCocktailContext();

    useEffect(() => {
        async function fetchRandomCocktail() {
            setErrorMessage("")
            setLoading(true);
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/random.php`
                );
                setCocktail(response.data.drinks);
                setPageTitle(response.data.drinks[0].strDrink)
            } catch (e) {
                console.error(e);
                setErrorMessage("Oops! Something went Wrong");
            }
            setLoading(false);
        }

        fetchRandomCocktail()
    }, [randomizeButton]);

    return (
        <main className="fullpage-container">
            <section className="left-section-container">
                <figure className="CocktailCard-container">
                    {errorMessage && (<CocktailLoaderOops/>)}
                    {loading ? (
                        <CocktailLoader/>
                    ) : (<CocktailCardHeader/>)}
                </figure>
            </section>
            <section className="right-section-container">
                <article className="right-box-container">
                    <div className="help-container">
                        <HelpButton content={6}/>
                    </div>
                    <RandomizeButton/>
                    <div className="name-and-ingredient-container">
                        {errorMessage && (<ErrorMessage/>)}
                        <CocktailName/>
                        <CocktailCard/>
                    </div>
                </article>
                <MainBackButton/>
            </section>
        </main>
    )
}

export default RandomCocktails;