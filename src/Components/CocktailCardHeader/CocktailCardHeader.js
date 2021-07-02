import {useCocktailContext} from "../../Context/CocktailContext";
import './CocktailCardHeader.css';

function CocktailCardHeader() {
    const {cocktail} = useCocktailContext();
    const [id] = cocktail;
    return (
        <div className="header-container">
            {cocktail ? (
                <img className="cocktailIMG" src={id.strDrinkThumb} alt={id.strDrink}/>
            ) : (<h1>Loading</h1>)}
        </div>
    )
}

export default CocktailCardHeader;