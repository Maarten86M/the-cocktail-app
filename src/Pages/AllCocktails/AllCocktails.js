import React, {useEffect} from "react";
import axios from "axios";
import SelectButton from "../../Components/Buttons/SelectButton/SelectButton";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import NextBackButton from "../../Components/Buttons/NextBackButton/NextBackButton";
import nextIcon from '../../Assets/Icons/ButtonIcons/Next.png';
import backIcon from '../../Assets/Icons/ButtonIcons/Back.png';
import './AllCocktails.css';
import {Link} from "react-router-dom";
import {useCocktailContext} from "../../Context/CocktailContext";

const apiKey = '9973533';

function AllCocktails() {
    const {letter, cocktail, setCocktail, setLetter} = useCocktailContext();


    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?f=${letter}`);
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
                <NextBackButton icon={backIcon} name="back"/>
                <SelectButton/>
                <NextBackButton icon={nextIcon} name="next"/>
            </div>
            {cocktail ? (
                <div className="Cocktaillist">
                    {cocktail.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                        <p>{cocktail.strDrink}</p></Link>)}
                </div>
            ) : (<h1>Loading</h1>)}
        </div>
    )
}

export default AllCocktails;