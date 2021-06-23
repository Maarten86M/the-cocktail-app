import React from "react";
import './SearchInput.css';
import{useCocktailContext} from "../../../Context/CocktailContext";
import {useForm} from "react-hook-form";

function SearchInput(props) {

    const { setSearchText} = useCocktailContext();
    const {register, formState:{errors} } = useForm();

    return (
        <div className='searchInput'>
            {errors.searchtext && <p>{errors.searchtext.message}</p>}
            <input type="text"
                   placeholder={props.placeholder}
                   {...register('searchtext',{required:{value:true, message: "Please fill in a ingredient of type of alcohol!"}})}
                   onChange={(event) => setSearchText(event.target.value)}
            />
        </div>
    )
}

export default SearchInput;