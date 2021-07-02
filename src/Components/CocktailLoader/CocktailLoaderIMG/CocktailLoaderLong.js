import longLoader from '../../../Assets/Loader/Long-loader.gif';
import './CocktailLoader.css';

function CocktailLoaderLong() {
    return (
            <div className="loader-border">
                <div className="logo-container">
                    <img className="loader-img" src={longLoader} alt="loader"/>
                </div>
            </div>
    )
}

export default CocktailLoaderLong;