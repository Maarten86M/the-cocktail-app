import longLoader from '../../../Assets/Loader/Long-loader.gif';
import './CocktailLoader.css';

function CocktailLoaderLong() {
    return (
            <figure className="loader-border">
                <div className="logo-container">
                    <img className="loader-img" src={longLoader} alt="loader"/>
                </div>
            </figure>
    )
}

export default CocktailLoaderLong;