import React, {useEffect} from "react";
import axios from "axios";
import CocktailCard from "../../Components/CocktailCard/CocktailCard";
import CocktailCardHeader from "../../Components/CocktailCardHeader/CocktailCardHeader";
import {useParams} from 'react-router-dom';
import {useCocktailContext} from "../../Context/CocktailContext";
import '../../App.css';
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import CocktailLoaderOops from "../../Components/CocktailLoader/CocktailLoaderOops";
import CocktailName from "../../Components/Titles/CocktailName/CocktailName";

function CocktailView() {

    const params = useParams();
    const {cocktail, setCocktail} = useCocktailContext();

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
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    {cocktail ? (
                        <CocktailCardHeader/>
                    ):(<CocktailLoaderOops/>)}
                </div>
            </div>

            <div className="right-section-container">
                <div className="right-box-container">
                    <h1>bla bla</h1>
                    <div>
                        <HelpButton content={9}/>
                    </div>
                    <CocktailName />
                    <CocktailCard/>
                </div>
            </div>
        </div>
    )
}

export default CocktailView;