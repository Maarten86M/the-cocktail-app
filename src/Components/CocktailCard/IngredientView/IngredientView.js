import './IngredientView.css';

function IngredientView({IngredientName}) {
    return(
        <div className="ingredient-view">
            <img className="ingredient-img" src={`https:www.thecocktaildb.com/images/ingredients/${IngredientName}-Small.png`} alt=""/>
            <p>{IngredientName}</p>
        </div>
    )
}
export default IngredientView;