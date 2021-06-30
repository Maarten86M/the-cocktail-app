import './Navbar.css';
import {NavLink} from "react-router-dom";
import React from "react";

function NavBarItem({to, onClick, icon, tittle}) {
    return (
        <li className="navitems">
            <NavLink to={to} onClick={onClick} className="inactive"
                     activeClassName="active-link">
                <img src={icon}/>{tittle}
            </NavLink>
        </li>
    )
}

export default NavBarItem;