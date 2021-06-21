import React, {useEffect} from "react";
import axios from "axios";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import NextButton from "../../Components/Buttons/NextBackButton/NextButton/NextButton";
import './AllCocktails.css';
import {Link} from "react-router-dom";
import {useCocktailContext} from "../../Context/CocktailContext";
import BackButton from "../../Components/Buttons/NextBackButton/BackButton/BackButton";
import LetterView from "../../Components/Titles/LetterView/LetterView";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";


function AllCocktails() {
    const {letter, cocktail, setCocktail} = useCocktailContext();

    console.log("Wat is de beginwaarde", letter)

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/search.php?f=${letter}`);
                console.log(result,"wat is result?")
                setCocktail(result.data.drinks);

            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
    }, [letter]);

    console.log("Wat zijn alle cocktails?:", cocktail)

    return (
        <div className="pagina">

            <h1>All Cocktails</h1>
            <div className="button-header">
                <BackButton />
                <LetterView/>
                <NextButton />
            </div>
            {cocktail ? (
                <div className="list-scrollbar">
                    {cocktail.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                        <p>{cocktail.strDrink}</p></Link>)}
                </div>
            ) : (<h1>Oeps, Something went wrong,Click again on the Next or Back Button</h1>)}

            <MainBackButton/>
        </div>
    )
}

export default AllCocktails;