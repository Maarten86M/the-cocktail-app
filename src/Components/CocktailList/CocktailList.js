import {Link, useHistory} from 'react-router-dom';
import './CocktailList.css';

function CocktailList({id, cocktailName}) {
    const history = useHistory();

    function listHandle() {
        history.push(`/cocktailpage/${id}`)
    }

    return (
            <Link style={{textDecoration: 'none', color: 'white'}}>
                <button onClick={() => (listHandle)}> {cocktailName}</button>
            </Link>
    )
}

export default CocktailList