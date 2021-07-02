import {useCocktailContext} from "../../Context/CocktailContext";
import IngredientView from "./IngredientView/IngredientView";
import InstructionView from "./InstructionView/InstructionView";
import './CocktailCard.css';

function CocktailCard() {
    const {cocktail} = useCocktailContext();
    const [id] = cocktail;

    return (
        <div>
            <div className="cocktailcard-container">
                {cocktail ? (
                    <div>
                        <div className="ingredient-scrollbar">
                            <b className="header">Ingredients</b>
                            <section className="ingredient-container">
                                {id.strIngredient1 && (<IngredientView IngredientName={id.strIngredient1}/>)}
                                {id.strIngredient2 && (<IngredientView IngredientName={id.strIngredient2}/>)}
                                {id.strIngredient3 && (<IngredientView IngredientName={id.strIngredient3}/>)}
                                {id.strIngredient4 && (<IngredientView IngredientName={id.strIngredient4}/>)}
                                {id.strIngredient5 && (<IngredientView IngredientName={id.strIngredient5}/>)}
                                {id.strIngredient6 && (<IngredientView IngredientName={id.strIngredient6}/>)}
                                {id.strIngredient7 && (<IngredientView IngredientName={id.strIngredient7}/>)}
                                {id.strIngredient8 && (<IngredientView IngredientName={id.strIngredient8}/>)}
                                {id.strIngredient9 && (<IngredientView IngredientName={id.strIngredient9}/>)}
                                {id.strIngredient10 && (<IngredientView IngredientName={id.strIngredient10}/>)}
                            </section>
                            <InstructionView Instruction={id.strInstructions}/>
                        </div>
                    </div>
                ) : (<h1> Loading </h1>)}
            </div>
        </div>
    )
}

export default CocktailCard;