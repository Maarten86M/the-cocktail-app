import React, {useEffect} from "react";
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
    const {searchText, setSearchText, setPageTitle} = useCocktailContext();

    function searchHandle() {
        history.push(`/searchresult/${searchText}`);
    }

    useEffect(() => {
        setPageTitle('Search Cocktails');
        setSearchText('');
    }, []);


    return (
        <main className="fullpage-container">
            <section className="left-section-container">
                <figure className="CocktailCard-container">
                    <CocktailCardLogo/>
                </figure>
            </section>
            <section className="right-section-container">
                <article className="right-box-container">
                    <div className="search-container">
                        <HelpButton content={3}/>
                        <PageTitle title="Search Cocktails"/>
                        <SearchInput placeholder="Search Cocktails" icon={search}/>
                        <SearchButton name="Search" icon={search} onClick={searchHandle} disabled={searchText === ""}/>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default SearchCocktails;