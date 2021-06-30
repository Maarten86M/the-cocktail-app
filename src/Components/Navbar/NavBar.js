import React, {useState, useEffect} from "react";
import './Navbar.css';
import './icons/NavbarIcon.css';
import NavBarItem from "./NavbarItem";
import NavBarIcon from "./NavBarIcon";
import search from '../../Assets/Icons/NavIcons/search.png';
import random from '../../Assets/Icons/NavIcons/dice.png';
import alcohol from '../../Assets/Icons/NavIcons/alcohol.png';
import fruit from '../../Assets/Icons/NavIcons/fruit.png';
import cocktails from '../../Assets/Icons/NavIcons/cocktail.png';
import profile from '../../Assets/Icons/NavIcons/profile.png';
import help from '../../Assets/Icons/NavIcons/help.png';
import login from '../../Assets/Icons/NavIcons/login.png';
import register from '../../Assets/Icons/NavIcons/register.png';
import signout from '../../Assets/Icons/NavIcons/signout.png';
import {useAuth} from "../../Context/AuthContext";
import {useCocktailContext} from "../../Context/CocktailContext";

function Navbar() {
    const {logOut, user} = useAuth()
    const [openMenu, setOpenMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const {pageTitle} = useCocktailContext();

    function menuopener() {
        setOpenMenu(!openMenu);
    }

    function logout() {
        logOut();
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
            <div className="mobile-title-container">
                {!openMenu && (<h1 className="mobile-title">{pageTitle}</h1>)}
            </div>

            {(openMenu || screenWidth > 990) && (
                <ul className="navlist">

                    {!user && (
                        <>
                            <NavBarItem
                                icon={register}
                                tittle="Register"
                                to="/register"
                                onClick={menuopener}
                            />

                            <NavBarItem
                                icon={login}
                                tittle="Login"
                                to="/login"
                                onClick={menuopener}
                            />
                        </>
                    )}
                    {user && (
                        <>
                            <NavBarItem
                                icon={search}
                                tittle="Search Cocktails"
                                to="/searchcocktails"
                                onClick={menuopener}
                            />
                            <NavBarItem
                                icon={random}
                                tittle="Random Cocktails"
                                to="/randomcocktails"
                                onClick={menuopener}
                            />
                            <NavBarItem
                                icon={alcohol}
                                tittle="Cocktails by Alcohol"
                                to="/cocktailbyalcohol"
                                onClick={menuopener}
                            />
                            <NavBarItem
                                icon={fruit}
                                tittle="Cocktails by Ingredient"
                                to="/cocktailbyingredient"
                                onClick={menuopener}
                            />
                            <NavBarItem
                                icon={cocktails}
                                tittle="All Cocktails"
                                to="/allcocktails"
                                onClick={menuopener}
                            />
                            <NavBarItem
                                icon={profile}
                                tittle="Profile"
                                to="/profile"
                                onClick={menuopener}
                            />
                            <NavBarItem
                                icon={help}
                                tittle="Help"
                                to="/help"
                                onClick={menuopener}
                            />
                            <NavBarItem
                                icon={signout}
                                tittle="Logout"
                                to="/login"
                                onClick={logout}
                            />
                        </>
                    )}
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