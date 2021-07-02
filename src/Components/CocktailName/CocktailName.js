import {useCocktailContext} from "../../Context/CocktailContext";
import './CocktailName.css';

function CocktailName() {

    const {cocktail} = useCocktailContext();
    const [id] = cocktail;

    return (
        <>
            {cocktail && (<h1 className="cocktailname">{id.strDrink}</h1>)}
        </>
    )
}

export default CocktailName;