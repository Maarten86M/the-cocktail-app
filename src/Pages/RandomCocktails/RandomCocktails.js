import React, {useEffect} from "react";
import axios from "axios";
import CocktailCard from "../../Components/CocktailCard/CocktailCard";
import CocktailCardHeader from "../../Components/CocktailCardHeader/CocktailCardHeader";
import RandomizeButton from "../../Components/Buttons/RandomizeButton/RandomizeButton";
import {useCocktailContext} from "../../Context/CocktailContext";
import CocktailLoader from "../../Components/CocktailLoader/CocktailLoader";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderOops";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import CocktailName from "../../Components/CocktailName/CocktailName";
import '../../App.css';
import './RandomCocktails.css';
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";

function RandomCocktails() {
    const {
        setCocktail,
        errorMessage,
        setErrorMessage,
        errors,
        setErrors,
        randomizeButton,
        loading,
        setLoading
    } = useCocktailContext();

    useEffect(() => {
        async function fetchRandomCocktail() {
            setErrorMessage("")
            setLoading(true);
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/random.php`
                );
                setCocktail(response.data.drinks);
            } catch (e) {
                console.error(e);
                setErrorMessage("Oops! Something went Wrong")
            }
            setLoading(false);

        }

        fetchRandomCocktail()


    }, [randomizeButton]);


    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    {errors && (<CocktailLoaderOops/>)}
                    {loading ? (
                        <CocktailLoader/>
                    ) : (<CocktailCardHeader/>)}

                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">
                    <div className="help-container">
                        <HelpButton content={6}/>
                    </div>
                    <RandomizeButton/>
                    <ErrorMessage />
                    <div className="name-and-ingredient-container">
                        <CocktailName/>
                        <CocktailCard/>
                    </div>
                </div>
                <MainBackButton/>
            </div>
        </div>
    )
}

export default RandomCocktails;