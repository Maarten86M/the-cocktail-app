import failed from '../../../Assets/Loader/oops.png';
import './CocktailLoader.css';

function CocktailLoaderOops() {
    return (
            <div className="loader-border">
                <div className="logo-container">
                    <img className="loader-img" src={failed} alt="loader"/>
                </div>
            </div>
    )
}

export default CocktailLoaderOops;