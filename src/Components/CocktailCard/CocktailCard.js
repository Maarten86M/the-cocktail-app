import React from "react";
import './CocktailCard.css';
import {useCocktailContext} from "../../Context/CocktailContext";
import IngredientView from "./IngredientView/IngredientView";

function CocktailCard() {
    const {cocktail} = useCocktailContext();
    const [id] = cocktail;

    return (
        <div>
            <div className="cocktailcard-container">

                {cocktail ? (
                    <div>
                <h2>{id.strDrink}</h2>
                <div>
                    <b>Ingredients</b>
                    <IngredientView IngredientName={id.strIngredient1}/>
                    <IngredientView IngredientName={id.strIngredient2}/>
                    <IngredientView IngredientName={id.strIngredient3}/>
                    <IngredientView IngredientName={id.strIngredient4}/>
                    <IngredientView IngredientName={id.strIngredient5}/>
                    <IngredientView IngredientName={id.strIngredient6}/>
                    <IngredientView IngredientName={id.strIngredient7}/>
                    <IngredientView IngredientName={id.strIngredient8}/>
                    <IngredientView IngredientName={id.strIngredient9}/>
                    <IngredientView IngredientName={id.strIngredient10}/>
                </div>
                    </div>
                    ):(<h1> Loading </h1>)}
            </div>
        </div>
    )
}

export default CocktailCard;