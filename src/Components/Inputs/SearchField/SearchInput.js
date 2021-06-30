import React from "react";
import {useHistory} from "react-router-dom";
import './SearchInput.css';
import {useCocktailContext} from "../../../Context/CocktailContext";
import {useForm} from "react-hook-form";

function SearchInput({placeholder}) {
    const history = useHistory();
    const {setSearchText, searchText} = useCocktailContext();
    const {register, formState: {errors}} = useForm();

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
                history.push(`/searchresult/${searchText}`)
        }
    }

    return (
        <div className='searchInput'>
            {errors.searchtext && <p>{errors.searchtext.message}</p>}
            <input type="text"
                   placeholder={placeholder}
                   {...register('searchtext', {
                       required: {
                           value: true,
                           message: "Please fill in a ingredient of type of alcohol!"
                       }
                   })}
                   onChange={(event) => setSearchText(event.target.value)}
                   onKeyDown={keyPressCheck}
            />
        </div>
    )
}

export default SearchInput;