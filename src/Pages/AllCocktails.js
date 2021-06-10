import React,{useEffect, useContext} from "react";
import axios from "axios";
import {CocktailContext} from "../Context/CocktailContext";
import SelectButton from "../Components/Buttons/SelectButton/SelectButton";
import CocktailList from "../Components/CocktailList/CocktailList";
import HelpButton from "../Components/Buttons/HelpButton/HelpButton";

function AllCocktails() {
    const {letter, allCocktails, setAllCocktails} = useContext(CocktailContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
                setAllCocktails(result.data.drinks);
            }catch (e){
                console.error(e);
            }
        }
            fetchData()
    },[letter]);

console.log("Wat zijn alle cocktails?:",allCocktails)

    return(
        <div className="pagina">

            <h1>All Cocktails</h1>
            <button> d </button>
            <SelectButton />
            <button> > </button>
            {allCocktails ? (
                <div className="Cocktaillist">
                    {allCocktails.map((cocktail) => {
                    return <CocktailList cocktailName={cocktail.strDrink}
                    />;
                    })}
                </div>
                    ) : (<h3>loading</h3>
            )}
        </div>
    )
}
export default AllCocktails;