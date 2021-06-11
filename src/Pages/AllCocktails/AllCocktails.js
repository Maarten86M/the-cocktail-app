import React, {useEffect, useContext} from "react";
import axios from "axios";
import {CocktailContext} from "../../Context/CocktailContext";
import SelectButton from "../../Components/Buttons/SelectButton/SelectButton";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import NextBackButton from "../../Components/Buttons/NextBackButton/NextBackButton";
import nextIcon from '../../Assets/Icons/ButtonIcons/Next.png';
import backIcon from '../../Assets/Icons/ButtonIcons/Back.png';
import './AllCocktails.css';
import {Link} from "react-router-dom";

function AllCocktails() {
    const {letter, allCocktails, setAllCocktails} = useContext(CocktailContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
                setAllCocktails(result.data.drinks);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
    }, [letter]);

    console.log("Wat zijn alle cocktails?:", allCocktails)

    return (
        <div className="pagina">

            <h1>All Cocktails</h1>
            <div className="button-header">
                <NextBackButton icon={backIcon} name="back"/>
                <SelectButton/>
                <NextBackButton icon={nextIcon} name="next"/>
            </div>
            {allCocktails ? (
                <div className="Cocktaillist">
                    {allCocktails.map(cocktail => <Link to={`/cocktailpage/${cocktail.idDrink}`}>
                        <p>{cocktail.strDrink}</p></Link>)}
                </div>
            ) : (<h1>Loading</h1>)}
        </div>
    )
}

export default AllCocktails;