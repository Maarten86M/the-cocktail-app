import React, {useState, useEffect} from "react";
import './NabarElements.css';
import './NavbarIcon.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
            {(openMenu || screenWidth > 500) && (
                <ul className="navlist">
                    <li className="navitems">Search Cocktails</li>
                    <li className="navitems">Random Cocktails</li>
                    <li className="navitems">Cocktail by Alcohol</li>
                    <li className="navitems">Cocktail by Ingredient</li>
                    <li className="navitems">All Cocktails</li>
                    <li className="navitems">Profile</li>
                    <li className="navitems">Help</li>
                    <li className="navitems">Logout</li>
                </ul>
            )}
            <div className="menu-icon-container">
                <div onClick={menuopener} className="nav-menu-icon"></div>
            </div>
        </nav>
    )
};

export default Navbar;