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
import CocktailName from "../../Components/Titles/CocktailName/CocktailName";
import '../../App.css';

function RandomCocktails() {
    const {
        setCocktail,
        errors,
        setErrors,
        randomizeButton,
        loading,
        setLoading
    } = useCocktailContext();

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
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    {errors && (<CocktailLoaderOops />)}
                    {loading ? (
                        <CocktailLoader />
                    ):(<CocktailCardHeader/>)}

                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">
                    <div>
                    <HelpButton content={6}/>
                    </div>
                    <RandomizeButton/>
                    <CocktailName />
                    <div>
                        <CocktailCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomCocktails;