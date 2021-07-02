import {useCocktailContext} from "../../Context/CocktailContext";
import './NavPageTitle.css';

function NavPageTitle() {
    const {pageTitle} = useCocktailContext();
    return (
        <h1 className="mobile-title">{pageTitle}</h1>
    )
}

export default NavPageTitle;