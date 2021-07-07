import {useHistory} from "react-router-dom";
import {useCocktailContext} from "../../Context/CocktailContext";
import './SearchInput.css';

function SearchInput({placeholder}) {
    const history = useHistory();
    const {setSearchText, searchText} = useCocktailContext();

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            history.push(`/searchresult/${searchText}`);
        }
    }

    return (
        <div className='searchInput'>
            <input type="text"
                   placeholder={placeholder}
                   onChange={(event) => setSearchText(event.target.value)}
                   onKeyDown={keyPressCheck}
            />
        </div>
    )
}

export default SearchInput;