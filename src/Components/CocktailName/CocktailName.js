import './CocktailName.css';
import {useCocktailContext} from "../../Context/CocktailContext";

function CocktailName() {

    const {cocktail} = useCocktailContext();
    const [id] = cocktail;

    return(
     <>
        {cocktail && (<h1 className="cocktailname">{id.strDrink}</h1>)}
     </>
    )
}

export default CocktailName;