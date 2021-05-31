import React, {useState, useEffect} from "react";
import './Navbar.css';
import './icons/NavbarIcon.css';
import NavBarItem from "./NavbarItem";
import NavBarIcon from "./NavBarIcon";
import search from './icons/NavLinkIcons/search.png';
import random from './icons/NavLinkIcons/dice.png';
import alcohol from './icons/NavLinkIcons/alcohol.png';
import fruit from './icons/NavLinkIcons/fruit.png';
import cocktail from './icons/NavLinkIcons/cocktail.png';
import profile from './icons/NavLinkIcons/profile.png';
import help from './icons/NavLinkIcons/help.png';
import logout from './icons/NavLinkIcons/logout.png';


function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    function menuopener() {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, []);

    return (
        <nav>
            {(openMenu || screenWidth > 990) && (
                <ul className="navlist">
                    <NavBarItem
                        img={search}
                        tittle="Search Cocktails"
                        to="/searchcocktails"
                        onClick={menuopener}
                    />
                    <NavBarItem
                        img={random}
                        tittle="Random Cocktails"
                        to="/randomcocktails"
                        onClick={menuopener}
                    />
                    <NavBarItem
                        img={alcohol}
                        tittle="Cocktails by Alcohol"
                        to="/cocktailbyalcohol"
                        onClick={menuopener}
                    />
                    <NavBarItem
                        img={fruit}
                        tittle="Cocktails by Ingredient"
                        to="/cocktailbyingredient"
                        onClick={menuopener}
                    />
                    <NavBarItem
                        img={cocktail}
                        tittle="All Cocktails"
                        to="/allcocktails"
                        onClick={menuopener}
                    />
                    <NavBarItem
                        img={profile}
                        tittle="Profile"
                        to="/profile"
                        onClick={menuopener}
                    />
                    <NavBarItem
                        img={help}
                        tittle="Help"
                        to="/help"
                        onClick={menuopener}
                    />
                    <NavBarItem
                        img={logout}
                        tittle="Logout"
                        to="/logout"
                        onClick={menuopener}
                    />
                </ul>
            )}

            <div className="menu-icon-container">
                {openMenu &&
                <NavBarIcon
                    className="nav-menu-icon"
                    onClick={menuopener}/>
                }
                {!openMenu &&
                <NavBarIcon
                    className="nav-menu-icon-close"
                    onClick={menuopener}/>
                }
            </div>
        </nav>
    )
};

export default Navbar;