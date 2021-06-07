import React, {useState, useEffect} from "react";
import axios from "axios";
import './paginatijdelijkaanpassenperpagina.css';


function RandomCocktails() {

    const [allCocktails, setAllCocktails] = useState(null);
    const [imgOne, setImgOne] = useState('');



    function GenerateCocktail(){
        fetchData();

    }

    const fetchData = async () => {
        try {
            const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
            setAllCocktails(result.data);
            setImgOne(result.data.drinks[0].strIngredient1.replace(/ /g,''));
            console.log(result.data);
            console.log(result.data.drinks[0].strIngredient1.replace(/ /g,''))
        } catch (e) {
            console.error(e);
        }
    }



    return (
        <div className="pagina">
            <h1>Random Cocktail</h1>
            <button onClick={GenerateCocktail}>klik hier</button>

            {allCocktails &&
            <>
                <b>{allCocktails.drinks[0].strDrink}</b>
                <br/>
                <img className="imggroote"src={allCocktails.drinks[0].strDrinkThumb+"/preview"}/>
                <br/>
                <i>{allCocktails.drinks[0].idDrink}</i>
                <p>{allCocktails.drinks[0].strIngredient1}</p>
                <img src={`https://www.thecocktaildb.com/images/ingredients/${imgOne}-Small.png`} alt={allCocktails.drinks[0].strDrink}/>
                <p>{allCocktails.drinks[0].strIngredient2}</p>
                <p>{allCocktails.drinks[0].strIngredient3}</p>
                <p>{allCocktails.drinks[0].strIngredient4}</p>
                <p>{allCocktails.drinks[0].strIngredient5}</p>
                <p>{allCocktails.drinks[0].strIngredient6}</p>
            </>
            }

        </div>
    )
}

export default RandomCocktails;