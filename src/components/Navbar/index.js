import React from "react";
import './NabarElements.css';
import './NavbarIcon.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className="navlist">
                <li className="navitems">Search Cocktails</li>
                <li className="navitems">Random Cocktails</li>
                <li className="navitems">Cocktail by Alcohol</li>
                <li className="navitems">Cocktail by Ingredient</li>
                <li className="navitems">All Cocktails</li>
                <li className="navitems">Profile</li>
                <li className="navitems">Help</li>
                <li className="navitems">Logout</li>
                <div className="menu-icon-container">
                <div className="nav-menu-icon"></div>
                </div>
            </ul>
        </nav>
    )
};

export default Navbar;