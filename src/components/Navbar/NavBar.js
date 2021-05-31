import React, {useState, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import './icons/NavbarIcon.css';
import NavBarItem from "./NavbarItem";


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
                        tittle="Search Cocktails"
                        to="/searchcocktails"
                        onClick={menuopener}
                    />

                    <NavBarItem
                        tittle="Random Cocktails"
                        to="/randomcocktails"
                        onClick={menuopener}
                    />

                    <NavBarItem
                        tittle="Cocktails by Alcohol"
                        to="/cocktailbyalcohol"
                        onClick={menuopener}
                    />

                    <NavBarItem
                        tittle="Cocktails by Ingredient"
                        to="/cocktailbyingredient"
                        onClick={menuopener}
                    />

                    <NavBarItem
                        tittle="All Cocktails"
                        to="/allcocktails"
                        onClick={menuopener}
                    />

                    <NavBarItem
                        tittle="Profile"
                        to="/profile"
                        onClick={menuopener}
                    />

                    <NavBarItem
                        tittle="Help"
                        to="/help"
                        onClick={menuopener}
                    />

                    <NavBarItem
                        tittle="Logout"
                        to="/logout"
                        onClick={menuopener}
                    />
                </ul>
            )}

            <div className="menu-icon-container">
                {openMenu &&
                <div onClick={menuopener} className="Menu-icon-click">
                    <div className="nav-menu-icon"></div>
                </div>
                }
                {!openMenu &&
                <div onClick={menuopener} className="Menu-icon-click">
                    < div className="nav-menu-icon-close"></div>
                </div>
                }
            </div>
        </nav>
    )
};

export default Navbar;