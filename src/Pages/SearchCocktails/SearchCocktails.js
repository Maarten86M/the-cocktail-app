import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useCocktailContext} from "../../Context/CocktailContext";
import SearchInput from "../../Components/SearchField/SearchInput";
import SearchButton from "../../Components/Buttons/SearchButton/SearchButton";
import CocktailCardLogo from "../../Components/CocktailCardLogo/CocktailCardLogo";
import HelpButton from "../../Components/Buttons/HelpButton/HelpButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import search from '../../Assets/Icons/NavIcons/search.png';
import '../../App.css';
import './SearchCocktails.css';

function SearchCocktails() {
    const history = useHistory();
    const {searchText, setPageTitle} = useCocktailContext();
    const [searchErrors, setSearchErrors] = useState('');

    function searchHandle() {
        if (searchText === "" || searchText === "Search Cocktails") {
            setSearchErrors("Please fill in a ingredient.");
        } else {
            history.push(`/searchresult/${searchText}`)
        }
    }

    useEffect(() => {
        setPageTitle('Search Cocktails');
    }, [])


    return (
        <div className="fullpage-container">
            <div className="left-section-container">
                <div className="CocktailCard-container">
                    <CocktailCardLogo/>
                </div>
            </div>
            <div className="right-section-container">
                <div className="right-box-container">
                    <div className="search-container">
                        <HelpButton content={3}/>
                        <PageTitle title="Search Cocktails"/>
                        <SearchInput placeholder="Search Cocktails" icon={search}/>
                        <SearchButton name="Search" icon={search} onClick={searchHandle}/>
                        <p className="error">{searchErrors}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCocktails;