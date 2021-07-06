import shortloader from '../../../Assets/Loader/Short-loader.gif';
import './CocktailLoader.css';

function CocktailLoader() {
    return (
            <figure className="loader-border">
                <div className="logo-container">
                    <img className="loader-img" src={shortloader} alt="loader"/>
                </div>
            </figure>
    )
}

export default CocktailLoader;