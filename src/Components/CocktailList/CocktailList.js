import {Link, useHistory} from 'react-router-dom';
import './CocktailList.css';

function CocktailList({id, cocktailName}) {
    const history = useHistory();

    function listHandle() {
        history.push(`/cocktailpage/${id}`)
    }

    return (
        <div>
            <Link style={{textDecoration: 'none', color: 'white'}}>
                <button onClick={() => (listHandle)}> {cocktailName}</button>
            </Link>
        </div>
    )
}

export default CocktailList