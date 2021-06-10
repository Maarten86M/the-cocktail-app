import React, {useState, useEffect} from "react";
import './Navbar.css';
import './icons/NavbarIcon.css';
import NavBarItem from "./NavbarItem";
import NavBarIcon from "./NavBarIcon";
import search from '../../Assets/Icons/NavIcons/search.png';
import random from '../../Assets/Icons/NavIcons/dice.png';
import alcohol from '../../Assets/Icons/NavIcons/alcohol.png';
import fruit from '../../Assets/Icons/NavIcons/fruit.png';
import cocktail from '../../Assets/Icons/NavIcons/cocktail.png';
import profile from '../../Assets/Icons/NavIcons/profile.png';
import help from '../../Assets/Icons/NavIcons/help.png';
import login from '../../Assets/Icons/NavIcons/login.png';
import register from '../../Assets/Icons/NavIcons/register.png';
import signout from '../../Assets/Icons/NavIcons/signout.png';

function Navbar(props) {
    const [openMenu, setOpenMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    function menuopener() {
        setOpenMenu(!openMenu);
    }

    function logout() {
        props.setAuthenticated(false);
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

                    {!props.authenticated && (
                        <>
                            <NavBarItem
                                img={register}
                                tittle="Register"
                                to="/register"
                                onClick={menuopener}
                            />

                            <NavBarItem
                                img={login}
                                tittle="Login"
                                to="/login"
                                onClick={menuopener}
                            />
                        </>
                    )}
                    {props.authenticated && (
                        <>
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
                                img={signout}
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